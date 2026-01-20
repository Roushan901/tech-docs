---
sidebar: cloudSidebar
---

# Azure (Microsoft Azure)

Comprehensive guide to Microsoft Azure cloud services, documentation, and best practices.

## Overview

Microsoft Azure is a cloud computing platform with an ever-expanding set of services to help you build solutions to meet your business goals. Azure supports a broad range of operating systems, programming languages, frameworks, databases, and devices.

## Getting Started with Azure

### Prerequisites
- Microsoft Account or Azure Account
- Azure CLI or PowerShell installed
- Basic understanding of cloud concepts
- Credit card for account verification

### Azure Account Setup

#### 1. Create Azure Account
1. Visit [azure.microsoft.com](https://azure.microsoft.com)
2. Click "Start free"
3. Sign in with Microsoft account
4. Complete profile information
5. Add payment method
6. Get $200 free credit

#### 2. Install Azure CLI
```bash
# Windows (using winget)
winget install Microsoft.AzureCLI

# macOS (using Homebrew)
brew install azure-cli

# Linux (Ubuntu/Debian)
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

#### 3. Login to Azure
```bash
# Login interactively
az login

# Login with service principal
az login --service-principal \
  --username <app-id> \
  --password <password> \
  --tenant <tenant-id>
```

#### 4. Set Subscription
```bash
# List subscriptions
az account list --output table

# Set default subscription
az account set --subscription "subscription-name-or-id"
```

## Core Azure Services

### Compute Services

#### Virtual Machines
Infrastructure as a Service (IaaS) for running applications.

**Create VM**
```bash
# Create resource group
az group create --name myResourceGroup --location eastus

# Create VM
az vm create \
  --resource-group myResourceGroup \
  --name myVM \
  --image Ubuntu2204 \
  --size Standard_B2s \
  --admin-username azureuser \
  --generate-ssh-keys
```

**VM Sizes:**
| Series | Use Case | Example |
|--------|----------|---------|
| B-Series | Burstable workloads | B1s, B2s |
| D-Series | General purpose | D2s_v3, D4s_v3 |
| F-Series | Compute optimized | F2s_v2, F4s_v2 |
| E-Series | Memory optimized | E2s_v3, E4s_v3 |

#### Azure App Service
Platform as a Service (PaaS) for web applications.

**Create Web App**
```bash
# Create App Service plan
az appservice plan create \
  --name myAppServicePlan \
  --resource-group myResourceGroup \
  --sku B1

# Create web app
az webapp create \
  --name myWebApp \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --runtime "NODE|18-lts"
```

**Deploy Code**
```bash
# Deploy from local Git
az webapp deployment source config-local-git \
  --name myWebApp \
  --resource-group myResourceGroup

# Deploy from GitHub
az webapp deployment source config \
  --name myWebApp \
  --resource-group myResourceGroup \
  --repo-url https://github.com/user/repo \
  --branch main
```

#### Azure Functions
Serverless compute platform for event-driven applications.

**Create Function App**
```bash
# Create storage account
az storage account create \
  --name mystorageaccount \
  --resource-group myResourceGroup \
  --location eastus

# Create function app
az functionapp create \
  --resource-group myResourceGroup \
  --name myFunctionApp \
  --storage-account mystorageaccount \
  --runtime node \
  --runtime-version 18 \
  --functions-version 4
```

**Function Code Example**
```javascript
// index.js
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = name
        ? "Hello, " + name
        : "Hello, World!";

    context.res = {
        status: 200,
        body: responseMessage
    };
};
```

#### Azure Kubernetes Service (AKS)
Managed Kubernetes container orchestration.

**Create AKS Cluster**
```bash
# Create AKS cluster
az aks create \
  --resource-group myResourceGroup \
  --name myAKSCluster \
  --node-count 3 \
  --node-vm-size Standard_DS2_v2 \
  --enable-managed-identity \
  --generate-ssh-keys

# Get credentials
az aks get-credentials \
  --resource-group myResourceGroup \
  --name myAKSCluster

# Verify connection
kubectl get nodes
```

### Storage Services

#### Azure Blob Storage
Object storage for unstructured data.

**Create Storage Account**
```bash
# Create storage account
az storage account create \
  --name mystorageaccount \
  --resource-group myResourceGroup \
  --location eastus \
  --sku Standard_LRS

# Create container
az storage container create \
  --name mycontainer \
  --account-name mystorageaccount

# Upload blob
az storage blob upload \
  --account-name mystorageaccount \
  --container-name mycontainer \
  --name myblob.txt \
  --file ./local-file.txt
```

**Storage Tiers:**
- **Hot** - Frequently accessed data
- **Cool** - Infrequently accessed (stored 30+ days)
- **Archive** - Rarely accessed (stored 180+ days)

#### Azure Files
Fully managed file shares in the cloud.

**Create File Share**
```bash
# Create file share
az storage share create \
  --name myfileshare \
  --account-name mystorageaccount \
  --quota 5

# Upload file
az storage file upload \
  --share-name myfileshare \
  --source ./local-file.txt \
  --account-name mystorageaccount
```

### Database Services

#### Azure SQL Database
Fully managed relational database.

**Create SQL Database**
```bash
# Create SQL server
az sql server create \
  --name myserver \
  --resource-group myResourceGroup \
  --location eastus \
  --admin-user myadmin \
  --admin-password MyPassword123!

# Create database
az sql db create \
  --resource-group myResourceGroup \
  --server myserver \
  --name mydb \
  --service-objective S0
```

**Connection String**
```
Server=tcp:myserver.database.windows.net,1433;
Database=mydb;
User ID=myadmin;
Password=MyPassword123!;
Encrypt=true;
TrustServerCertificate=false;
```

#### Azure Cosmos DB
Globally distributed NoSQL database.

**Create Cosmos DB Account**
```bash
# Create Cosmos DB account
az cosmosdb create \
  --name mycosmosdb \
  --resource-group myResourceGroup \
  --locations regionName=eastus

# Create database
az cosmosdb sql database create \
  --account-name mycosmosdb \
  --resource-group myResourceGroup \
  --name myDatabase

# Create container
az cosmosdb sql container create \
  --account-name mycosmosdb \
  --database-name myDatabase \
  --name myContainer \
  --partition-key-path "/userId" \
  --throughput 400
```

### Networking Services

#### Virtual Network (VNet)
Isolated network in Azure.

**Create VNet**
```bash
# Create virtual network
az network vnet create \
  --resource-group myResourceGroup \
  --name myVNet \
  --address-prefix 10.0.0.0/16 \
  --subnet-name mySubnet \
  --subnet-prefix 10.0.1.0/24
```

**Network Security Group**
```bash
# Create NSG
az network nsg create \
  --resource-group myResourceGroup \
  --name myNSG

# Add rule
az network nsg rule create \
  --resource-group myResourceGroup \
  --nsg-name myNSG \
  --name allow-http \
  --priority 100 \
  --destination-port-ranges 80 \
  --access Allow \
  --protocol Tcp
```

#### Azure Load Balancer
Distribute network traffic across multiple servers.

**Create Load Balancer**
```bash
az network lb create \
  --resource-group myResourceGroup \
  --name myLoadBalancer \
  --sku Standard \
  --public-ip-address myPublicIP \
  --frontend-ip-name myFrontEnd \
  --backend-pool-name myBackEndPool
```

#### Application Gateway
Web traffic load balancer with WAF.

#### Azure CDN
Content delivery network for global distribution.

### Security & Identity

#### Azure Active Directory (Azure AD)
Identity and access management service.

**Create User**
```bash
# Create user
az ad user create \
  --display-name "John Doe" \
  --user-principal-name john@contoso.com \
  --password MyPassword123!
```

#### Key Vault
Secure secrets management.

**Create Key Vault**
```bash
# Create key vault
az keyvault create \
  --name myKeyVault \
  --resource-group myResourceGroup \
  --location eastus

# Add secret
az keyvault secret set \
  --vault-name myKeyVault \
  --name mySecret \
  --value "SuperSecretPassword"

# Get secret
az keyvault secret show \
  --vault-name myKeyVault \
  --name mySecret
```

#### Azure Security Center
Unified security management system.

### DevOps Services

#### Azure DevOps
Complete DevOps toolchain.

**Services:**
- **Azure Boards** - Work tracking
- **Azure Repos** - Git repositories
- **Azure Pipelines** - CI/CD
- **Azure Test Plans** - Testing tools
- **Azure Artifacts** - Package management

#### Azure Pipelines
CI/CD service for any language, platform, and cloud.

**azure-pipelines.yml**
```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'

- script: |
    npm install
    npm run build
  displayName: 'Build application'

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
```

#### Azure Resource Manager (ARM)
Infrastructure as Code for Azure.

**ARM Template Example**
```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2021-04-01",
      "name": "mystorageaccount",
      "location": "eastus",
      "sku": {
        "name": "Standard_LRS"
      },
      "kind": "StorageV2"
    }
  ]
}
```

**Deploy Template**
```bash
az deployment group create \
  --resource-group myResourceGroup \
  --template-file template.json
```

## Azure Best Practices

### Cost Management
- Use Azure Cost Management + Billing
- Implement resource tagging
- Use reserved instances
- Auto-shutdown dev/test resources
- Monitor with Azure Advisor

### Security Best Practices
- Enable Azure AD authentication
- Use managed identities
- Implement network security groups
- Encrypt data at rest and in transit
- Regular security assessments
- Enable Azure Security Center

### High Availability
- Deploy across availability zones
- Use load balancers
- Implement auto-scaling
- Regular backups
- Disaster recovery planning

### Performance Optimization
- Use Azure CDN
- Implement caching
- Choose appropriate VM sizes
- Use Premium storage for critical workloads
- Monitor with Azure Monitor

## Azure CLI Cheat Sheet

```bash
# Resource Groups
az group create --name myRG --location eastus
az group list
az group delete --name myRG

# Virtual Machines
az vm list
az vm start --name myVM --resource-group myRG
az vm stop --name myVM --resource-group myRG

# Storage
az storage account list
az storage blob list --account-name mystorage --container-name mycontainer

# Web Apps
az webapp list
az webapp restart --name myWebApp --resource-group myRG

# AKS
az aks list
az aks scale --name myAKS --resource-group myRG --node-count 5
```

## Monitoring & Logging

### Azure Monitor
Comprehensive monitoring solution.

**Create Alert Rule**
```bash
az monitor metrics alert create \
  --name high-cpu-alert \
  --resource-group myResourceGroup \
  --scopes /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM \
  --condition "avg Percentage CPU > 80" \
  --description "Alert when CPU exceeds 80%"
```

### Log Analytics
Collect and analyze log data.

**Query Example**
```kusto
AzureActivity
| where TimeGenerated > ago(24h)
| summarize count() by OperationName
| order by count_ desc
```

## Cost Management

### Pricing Models
- **Pay-As-You-Go** - Pay for what you use
- **Reserved Instances** - 1 or 3-year commitment (up to 72% savings)
- **Spot VMs** - Use excess capacity (up to 90% savings)
- **Dev/Test Pricing** - Discounted rates for development

### Cost Estimation
Use [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/) to estimate costs.

## Certifications

### Fundamentals
- Microsoft Certified: Azure Fundamentals (AZ-900)

### Associate
- Azure Administrator Associate (AZ-104)
- Azure Developer Associate (AZ-204)
- Azure Security Engineer Associate (AZ-500)

### Expert
- Azure Solutions Architect Expert (AZ-305)
- Azure DevOps Engineer Expert (AZ-400)

## Resources

### Official Documentation
- [Azure Documentation](https://docs.microsoft.com/azure/)
- [Azure Architecture Center](https://docs.microsoft.com/azure/architecture/)
- [Azure Updates](https://azure.microsoft.com/updates/)

### Learning Resources
- [Microsoft Learn](https://docs.microsoft.com/learn/)
- [Azure Quickstart Templates](https://azure.microsoft.com/resources/templates/)
- [Azure Code Samples](https://docs.microsoft.com/samples/browse/?products=azure)

## Support

- [Azure Support Plans](https://azure.microsoft.com/support/plans/)
- [Azure Community Support](https://docs.microsoft.com/answers/products/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/azure)

## Next Steps

- [AWS Documentation](/docs/cloud-devops/aws)
- [GCP Documentation](/docs/tutorial-extras/manage-docs-versions)
- [DevOps Best Practices](/blog)
