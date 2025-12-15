# AWS (Amazon Web Services)

Complete guide to AWS documentation, services, and best practices for cloud computing.

## Overview

Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully-featured services from data centers globally.

## Getting Started with AWS

### Prerequisites
- AWS Account (sign up at [aws.amazon.com](https://aws.amazon.com))
- Basic understanding of cloud computing
- AWS CLI installed (optional but recommended)

### AWS Account Setup

#### 1. Create AWS Account
1. Visit [aws.amazon.com](https://aws.amazon.com)
2. Click "Create an AWS Account"
3. Provide email and password
4. Add payment information
5. Verify identity

#### 2. Set Up MFA (Multi-Factor Authentication)
```bash
# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure
```

#### 3. Create IAM User
- Navigate to IAM Console
- Create new user
- Attach policies
- Download access keys

## Core AWS Services

### Compute Services

#### EC2 (Elastic Compute Cloud)
Virtual servers in the cloud for running applications.

**Key Features:**
- Scalable computing capacity
- Multiple instance types
- Pay-as-you-go pricing
- Auto Scaling

**Launch EC2 Instance**
```bash
# Using AWS CLI
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t2.micro \
  --key-name MyKeyPair \
  --security-group-ids sg-xxxxxxxx \
  --subnet-id subnet-xxxxxxxx
```

**Instance Types:**
| Type | Use Case | vCPU | Memory |
|------|----------|------|--------|
| t2.micro | Development | 1 | 1 GB |
| t2.small | Small apps | 1 | 2 GB |
| m5.large | General purpose | 2 | 8 GB |
| c5.xlarge | Compute optimized | 4 | 8 GB |

#### Lambda
Serverless compute service for running code without managing servers.

**Create Lambda Function**
```python
# lambda_function.py
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': 'Hello from Lambda!'
    }
```

**Deploy with AWS CLI**
```bash
# Create deployment package
zip function.zip lambda_function.py

# Create Lambda function
aws lambda create-function \
  --function-name my-function \
  --runtime python3.9 \
  --role arn:aws:iam::account-id:role/lambda-role \
  --handler lambda_function.lambda_handler \
  --zip-file fileb://function.zip
```

#### ECS (Elastic Container Service)
Container orchestration service for Docker containers.

**Task Definition**
```json
{
  "family": "my-app",
  "containerDefinitions": [
    {
      "name": "web",
      "image": "nginx:latest",
      "cpu": 256,
      "memory": 512,
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ]
    }
  ]
}
```

### Storage Services

#### S3 (Simple Storage Service)
Object storage service for storing and retrieving any amount of data.

**Create S3 Bucket**
```bash
# Create bucket
aws s3 mb s3://my-bucket-name

# Upload file
aws s3 cp file.txt s3://my-bucket-name/

# Download file
aws s3 cp s3://my-bucket-name/file.txt ./

# List bucket contents
aws s3 ls s3://my-bucket-name/
```

**S3 Bucket Policy**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket-name/*"
    }
  ]
}
```

#### EBS (Elastic Block Store)
Block storage volumes for EC2 instances.

**Create EBS Volume**
```bash
aws ec2 create-volume \
  --availability-zone us-east-1a \
  --size 100 \
  --volume-type gp3
```

### Database Services

#### RDS (Relational Database Service)
Managed relational database service.

**Supported Databases:**
- MySQL
- PostgreSQL
- Oracle
- SQL Server
- MariaDB
- Amazon Aurora

**Create RDS Instance**
```bash
aws rds create-db-instance \
  --db-instance-identifier mydbinstance \
  --db-instance-class db.t3.micro \
  --engine mysql \
  --master-username admin \
  --master-user-password mypassword \
  --allocated-storage 20
```

#### DynamoDB
NoSQL database service for single-digit millisecond performance.

**Create Table**
```bash
aws dynamodb create-table \
  --table-name Users \
  --attribute-definitions \
    AttributeName=UserId,AttributeType=S \
  --key-schema \
    AttributeName=UserId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST
```

**Put Item**
```bash
aws dynamodb put-item \
  --table-name Users \
  --item '{
    "UserId": {"S": "user123"},
    "Name": {"S": "John Doe"},
    "Email": {"S": "john@example.com"}
  }'
```

### Networking Services

#### VPC (Virtual Private Cloud)
Isolated cloud resources in a virtual network.

**Create VPC**
```bash
aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=MyVPC}]'
```

**VPC Architecture:**
```
VPC (10.0.0.0/16)
├── Public Subnet (10.0.1.0/24)
│   ├── Internet Gateway
│   └── NAT Gateway
├── Private Subnet (10.0.2.0/24)
│   └── Application Servers
└── Database Subnet (10.0.3.0/24)
    └── RDS Instances
```

#### CloudFront
Content delivery network (CDN) service.

**Create Distribution**
```bash
aws cloudfront create-distribution \
  --origin-domain-name my-bucket.s3.amazonaws.com \
  --default-root-object index.html
```

### Security Services

#### IAM (Identity and Access Management)
Manage access to AWS services and resources.

**IAM Policy Example**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

**Create IAM User**
```bash
# Create user
aws iam create-user --user-name developer

# Attach policy
aws iam attach-user-policy \
  --user-name developer \
  --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess
```

#### AWS WAF (Web Application Firewall)
Protect web applications from common exploits.

### DevOps Services

#### CodePipeline
Continuous delivery service for fast and reliable updates.

**Pipeline Structure:**
```yaml
Source (GitHub) → Build (CodeBuild) → Test → Deploy (ECS)
```

#### CodeBuild
Fully managed build service.

**buildspec.yml**
```yaml
version: 0.2
phases:
  install:
    commands:
      - npm install
  build:
    commands:
      - npm run build
artifacts:
  files:
    - '**/*'
  base-directory: build
```

#### CloudFormation
Infrastructure as Code (IaC) service.

**Template Example**
```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-unique-bucket-name
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
```

**Deploy Stack**
```bash
aws cloudformation create-stack \
  --stack-name my-stack \
  --template-body file://template.yaml
```

## AWS Best Practices

### Cost Optimization
- Use Reserved Instances for predictable workloads
- Implement Auto Scaling
- Delete unused resources
- Use S3 lifecycle policies
- Monitor with AWS Cost Explorer

### Security Best Practices
- Enable MFA for all users
- Use IAM roles instead of access keys
- Encrypt data at rest and in transit
- Regular security audits
- Implement least privilege access

### Reliability
- Deploy across multiple Availability Zones
- Implement backup and disaster recovery
- Use Auto Scaling and Load Balancing
- Monitor with CloudWatch
- Regular testing of failover procedures

### Performance
- Use CloudFront for content delivery
- Implement caching strategies
- Choose appropriate instance types
- Optimize database queries
- Monitor performance metrics

## AWS CLI Cheat Sheet

```bash
# Configure AWS CLI
aws configure

# EC2 Commands
aws ec2 describe-instances
aws ec2 start-instances --instance-ids i-xxxxxxxx
aws ec2 stop-instances --instance-ids i-xxxxxxxx

# S3 Commands
aws s3 ls
aws s3 sync ./local s3://bucket/
aws s3 rm s3://bucket/file.txt

# Lambda Commands
aws lambda list-functions
aws lambda invoke --function-name my-function output.txt

# CloudFormation Commands
aws cloudformation list-stacks
aws cloudformation describe-stacks --stack-name my-stack
```

## Monitoring & Logging

### CloudWatch
Monitor AWS resources and applications.

**Create Alarm**
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name high-cpu \
  --alarm-description "Alert when CPU exceeds 80%" \
  --metric-name CPUUtilization \
  --namespace AWS/EC2 \
  --statistic Average \
  --period 300 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold
```

### CloudTrail
Log and monitor account activity.

## Cost Management

### AWS Pricing Models
- **On-Demand** - Pay by the hour
- **Reserved** - 1 or 3-year commitment (up to 72% savings)
- **Spot** - Bid for unused capacity (up to 90% savings)
- **Savings Plans** - Flexible pricing model

### Cost Estimation
Use [AWS Pricing Calculator](https://calculator.aws/) to estimate costs.

## Certification Paths

### Associate Level
- AWS Certified Solutions Architect – Associate
- AWS Certified Developer – Associate
- AWS Certified SysOps Administrator – Associate

### Professional Level
- AWS Certified Solutions Architect – Professional
- AWS Certified DevOps Engineer – Professional

## Resources

### Official Documentation
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Whitepapers](https://aws.amazon.com/whitepapers/)

### Learning Resources
- [AWS Training](https://aws.amazon.com/training/)
- [AWS Workshops](https://workshops.aws/)
- [AWS Builder Labs](https://aws.amazon.com/training/digital/)

## Support

- [AWS Support Plans](https://aws.amazon.com/premiumsupport/)
- [AWS Forums](https://forums.aws.amazon.com/)
- [AWS re:Post](https://repost.aws/)

## Next Steps

- [Azure Documentation](/docs/tutorial-basics/deploy-your-site)
- [GCP Documentation](/docs/tutorial-extras/manage-docs-versions)
- [DevOps Guides](/blog)
