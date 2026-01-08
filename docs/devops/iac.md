<!-- Last updated: January 8, 2026, 10:00 AM -->
---
sidebar_position: 3
---

# Infrastructure as Code (IaC) Documentation

Complete guide to managing and provisioning infrastructure through code using tools like Terraform, AWS CloudFormation, and Ansible.

## What is Infrastructure as Code?

Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.

### Benefits of IaC

- **Version Control:** Track infrastructure changes in Git
- **Consistency:** Identical environments every time
- **Automation:** Eliminate manual configuration
- **Reusability:** Share and reuse infrastructure templates
- **Documentation:** Code serves as documentation
- **Cost Reduction:** Optimize resource usage

## IaC Tools Comparison

| Tool | Type | Best For | Language |
|------|------|----------|----------|
| Terraform | Declarative | Multi-cloud | HCL |
| AWS CloudFormation | Declarative | AWS-specific | JSON/YAML |
| Ansible | Procedural | Configuration Management | YAML |
| Pulumi | Declarative | Modern programming | Python, TypeScript, Go |
| Chef | Procedural | Configuration Management | Ruby DSL |

## Terraform

Terraform is an open-source IaC tool that allows you to build, change, and version infrastructure safely and efficiently.

### Terraform Basics

**Directory Structure:**
```
terraform-project/
├── main.tf           # Main configuration
├── variables.tf      # Input variables
├── outputs.tf        # Output values
├── terraform.tfvars  # Variable values
└── modules/          # Reusable modules
    └── vpc/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Basic Terraform Configuration

**main.tf:**
```hcl
# Configure the AWS Provider
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# Create VPC
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "${var.project_name}-vpc"
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

# Create Subnet
resource "aws_subnet" "public" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index)
  availability_zone = var.availability_zones[count.index]

  map_public_ip_on_launch = true

  tags = {
    Name = "${var.project_name}-public-${count.index + 1}"
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "${var.project_name}-igw"
  }
}

# Create Security Group
resource "aws_security_group" "web" {
  name        = "${var.project_name}-web-sg"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-web-sg"
  }
}

# Launch EC2 Instance
resource "aws_instance" "web" {
  count         = var.instance_count
  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public[0].id

  vpc_security_group_ids = [aws_security_group.web.id]

  user_data = file("${path.module}/scripts/user_data.sh")

  tags = {
    Name = "${var.project_name}-web-${count.index + 1}"
  }
}

# Data source for latest Amazon Linux AMI
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}
```

**variables.tf:**
```hcl
variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name for resource tagging"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "List of availability zones"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "instance_count" {
  description = "Number of instances to launch"
  type        = number
  default     = 2
}
```

**outputs.tf:**
```hcl
output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "public_subnet_ids" {
  description = "IDs of public subnets"
  value       = aws_subnet.public[*].id
}

output "web_instance_ids" {
  description = "IDs of web instances"
  value       = aws_instance.web[*].id
}

output "web_instance_public_ips" {
  description = "Public IPs of web instances"
  value       = aws_instance.web[*].public_ip
}
```

### Terraform Commands

```bash
# Initialize Terraform
terraform init

# Format configuration files
terraform fmt

# Validate configuration
terraform validate

# Plan changes
terraform plan

# Apply changes
terraform apply

# Apply with auto-approve
terraform apply -auto-approve

# Destroy infrastructure
terraform destroy

# Show current state
terraform show

# List resources in state
terraform state list

# Import existing resource
terraform import aws_instance.example i-1234567890abcdef0

# Refresh state
terraform refresh

# Output specific value
terraform output vpc_id
```

### Terraform Modules

Create reusable modules for common patterns:

**modules/web-app/main.tf:**
```hcl
variable "app_name" { type = string }
variable "vpc_id" { type = string }
variable "subnet_ids" { type = list(string) }

resource "aws_lb" "main" {
  name               = "${var.app_name}-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = var.subnet_ids

  tags = {
    Name = "${var.app_name}-alb"
  }
}

output "lb_dns_name" {
  value = aws_lb.main.dns_name
}
```

**Using the module:**
```hcl
module "web_app" {
  source     = "./modules/web-app"
  app_name   = "myapp"
  vpc_id     = aws_vpc.main.id
  subnet_ids = aws_subnet.public[*].id
}

output "app_url" {
  value = module.web_app.lb_dns_name
}
```

## AWS CloudFormation

AWS CloudFormation provides IaC for AWS resources using JSON or YAML templates.

### CloudFormation Template Example

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Web application infrastructure'

Parameters:
  Environment:
    Type: String
    Default: dev
    AllowedValues: [dev, staging, prod]
    Description: Environment name

  InstanceType:
    Type: String
    Default: t3.micro
    AllowedValues: [t3.micro, t3.small, t3.medium]
    Description: EC2 instance type

Mappings:
  RegionAMI:
    us-east-1:
      AMI: ami-0c55b159cbfafe1f0
    us-west-2:
      AMI: ami-0d1cd67c26f5fca19

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      EnableDnsSupport: true
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-vpc

  PublicSubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']
      MapPublicIpOnLaunch: true
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-public-subnet

  InternetGateway:
    Type: AWS::EC2::InternetGateway
    Properties:
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-igw

  AttachGateway:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  SecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Web server security group
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 443
          ToPort: 443
          CidrIp: 0.0.0.0/0
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-web-sg

  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !FindInMap [RegionAMI, !Ref 'AWS::Region', AMI]
      InstanceType: !Ref InstanceType
      SubnetId: !Ref PublicSubnet
      SecurityGroupIds:
        - !Ref SecurityGroup
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-web-server

Outputs:
  VPCId:
    Description: VPC ID
    Value: !Ref VPC
    Export:
      Name: !Sub ${Environment}-VPC

  WebServerPublicIP:
    Description: Public IP of web server
    Value: !GetAtt WebServer.PublicIp
```

### CloudFormation Commands

```bash
# Create stack
aws cloudformation create-stack \
  --stack-name my-stack \
  --template-body file://template.yaml \
  --parameters ParameterKey=Environment,ParameterValue=prod

# Update stack
aws cloudformation update-stack \
  --stack-name my-stack \
  --template-body file://template.yaml

# Delete stack
aws cloudformation delete-stack --stack-name my-stack

# Describe stack
aws cloudformation describe-stacks --stack-name my-stack

# List stacks
aws cloudformation list-stacks

# Validate template
aws cloudformation validate-template \
  --template-body file://template.yaml
```

## Ansible

Ansible is an agentless automation tool for configuration management, application deployment, and task automation.

### Ansible Playbook Example

```yaml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  vars:
    app_name: myapp
    app_port: 3000

  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
        cache_valid_time: 3600

    - name: Install required packages
      apt:
        name:
          - nginx
          - nodejs
          - npm
        state: present

    - name: Create app directory
      file:
        path: "/opt/{{ app_name }}"
        state: directory
        mode: '0755'

    - name: Copy application files
      copy:
        src: "{{ playbook_dir }}/app/"
        dest: "/opt/{{ app_name }}/"
        mode: '0644'

    - name: Install npm dependencies
      npm:
        path: "/opt/{{ app_name }}"
        state: present

    - name: Configure Nginx
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/sites-available/{{ app_name }}
      notify: restart nginx

    - name: Enable Nginx site
      file:
        src: /etc/nginx/sites-available/{{ app_name }}
        dest: /etc/nginx/sites-enabled/{{ app_name }}
        state: link
      notify: restart nginx

    - name: Start application
      systemd:
        name: "{{ app_name }}"
        state: started
        enabled: yes

  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted
```

**Nginx template (nginx.conf.j2):**
```nginx
server {
    listen 80;
    server_name {{ ansible_hostname }};

    location / {
        proxy_pass http://localhost:{{ app_port }};
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Ansible Commands

```bash
# Run playbook
ansible-playbook -i inventory playbook.yml

# Check syntax
ansible-playbook playbook.yml --syntax-check

# Dry run (check mode)
ansible-playbook playbook.yml --check

# Run specific tags
ansible-playbook playbook.yml --tags "configuration"

# Run ad-hoc command
ansible webservers -i inventory -m ping

# Gather facts
ansible webservers -i inventory -m setup
```

## Best Practices

### General IaC Best Practices

1. **Version Control Everything**
```bash
# .gitignore for Terraform
.terraform/
*.tfstate
*.tfstate.backup
*.tfvars
.terraform.lock.hcl
```

2. **Use Modules for Reusability**
3. **Implement State Management**
4. **Use Variables and Secrets Management**
5. **Document Your Infrastructure**
6. **Test Before Applying**
7. **Implement CI/CD for Infrastructure**

### Security Best Practices

```hcl
# Use AWS Secrets Manager
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "prod/db/password"
}

resource "aws_db_instance" "main" {
  password = data.aws_secretsmanager_secret_version.db_password.secret_string
}

# Encrypt sensitive outputs
output "db_password" {
  value     = aws_db_instance.main.password
  sensitive = true
}
```

## CI/CD for Infrastructure

### GitHub Actions for Terraform

```yaml
name: Terraform CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.5.0

      - name: Terraform Init
        run: terraform init

      - name: Terraform Format
        run: terraform fmt -check

      - name: Terraform Validate
        run: terraform validate

      - name: Terraform Plan
        run: terraform plan
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - name: Terraform Apply
        if: github.ref == 'refs/heads/main'
        run: terraform apply -auto-approve
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## Troubleshooting

### Common Issues

**Terraform state locked:**
```bash
# Force unlock (use carefully)
terraform force-unlock LOCK_ID
```

**CloudFormation stack stuck:**
```bash
# Cancel update
aws cloudformation cancel-update-stack --stack-name my-stack
```

**Ansible connection issues:**
```bash
# Test connection
ansible all -i inventory -m ping -vvv
```

## Resources

- **Terraform:** [terraform.io/docs](https://www.terraform.io/docs)
- **AWS CloudFormation:** [docs.aws.amazon.com/cloudformation](https://docs.aws.amazon.com/cloudformation)
- **Ansible:** [docs.ansible.com](https://docs.ansible.com)
- **Pulumi:** [pulumi.com/docs](https://www.pulumi.com/docs)

## Next Steps

- Explore [CI/CD Pipelines](/docs/devops/cicd) for automated infrastructure deployment
- Learn [Docker & Kubernetes](/docs/devops/containers) for containerized infrastructure
- Review [Cloud Services](/docs/cloud-devops/aws) for managed infrastructure

---

**Need IaC implementation help?** Contact us at [contact@techdocs.co.in](mailto:contact@techdocs.co.in)
