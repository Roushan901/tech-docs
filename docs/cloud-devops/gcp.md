---
sidebar: cloudSidebar
---

# GCP (Google Cloud Platform)

Complete guide to Google Cloud Platform services, documentation, and best practices.

## Overview

Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products like Google Search, Gmail, and YouTube. GCP offers services in computing, storage, networking, big data, machine learning, and more.

## Getting Started with GCP

### Prerequisites
- Google Account
- Credit card for billing (free tier available)
- Basic cloud computing knowledge
- gcloud CLI (optional but recommended)

### GCP Account Setup

#### 1. Create GCP Account
1. Visit [cloud.google.com](https://cloud.google.com)
2. Click "Get started for free"
3. Sign in with Google account
4. Add payment information
5. Get $300 free credit (90 days)

#### 2. Install gcloud CLI
```bash
# Linux/macOS
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Windows (PowerShell)
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe
```

#### 3. Initialize gcloud
```bash
# Initialize and authenticate
gcloud init

# Login
gcloud auth login

# Set project
gcloud config set project PROJECT_ID

# List projects
gcloud projects list
```

#### 4. Create Project
```bash
# Create new project
gcloud projects create my-project-id \
  --name="My Project"

# Set as default
gcloud config set project my-project-id
```

## Core GCP Services

### Compute Services

#### Compute Engine
Virtual machines running in Google's data centers.

**Create VM Instance**
```bash
# Create instance
gcloud compute instances create my-instance \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=10GB

# List instances
gcloud compute instances list

# SSH into instance
gcloud compute ssh my-instance --zone=us-central1-a
```

**Machine Types:**
| Series | Use Case | Example |
|--------|----------|---------|
| E2 | Cost-optimized | e2-micro, e2-medium |
| N2 | Balanced | n2-standard-2, n2-standard-4 |
| C2 | Compute-optimized | c2-standard-4, c2-standard-8 |
| M2 | Memory-optimized | m2-ultramem-208, m2-ultramem-416 |

#### App Engine
Fully managed serverless platform.

**Deploy Application**
```yaml
# app.yaml
runtime: nodejs18
instance_class: F1

automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 1
  max_instances: 10
```

```bash
# Deploy
gcloud app deploy

# Browse application
gcloud app browse

# View logs
gcloud app logs tail -s default
```

**Node.js Example**
```javascript
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

#### Cloud Functions
Event-driven serverless compute.

**Create Function**
```javascript
// index.js
exports.helloWorld = (req, res) => {
  res.send('Hello from Cloud Functions!');
};
```

**Deploy Function**
```bash
gcloud functions deploy helloWorld \
  --runtime nodejs18 \
  --trigger-http \
  --allow-unauthenticated \
  --region us-central1
```

**Trigger Types:**
- HTTP triggers
- Cloud Storage triggers
- Pub/Sub triggers
- Firestore triggers
- Firebase triggers

#### Google Kubernetes Engine (GKE)
Managed Kubernetes service.

**Create GKE Cluster**
```bash
# Create cluster
gcloud container clusters create my-cluster \
  --zone us-central1-a \
  --num-nodes 3 \
  --machine-type n1-standard-2 \
  --enable-autoscaling \
  --min-nodes 1 \
  --max-nodes 10

# Get credentials
gcloud container clusters get-credentials my-cluster \
  --zone us-central1-a

# Verify
kubectl get nodes
```

**Deploy Application**
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

```bash
kubectl apply -f deployment.yaml
```

### Storage Services

#### Cloud Storage
Object storage for any amount of data.

**Create Bucket**
```bash
# Create bucket
gsutil mb gs://my-unique-bucket-name

# Upload file
gsutil cp local-file.txt gs://my-unique-bucket-name/

# Download file
gsutil cp gs://my-unique-bucket-name/file.txt ./

# List bucket contents
gsutil ls gs://my-unique-bucket-name/

# Make public
gsutil iam ch allUsers:objectViewer gs://my-unique-bucket-name
```

**Storage Classes:**
- **Standard** - Frequently accessed data
- **Nearline** - Accessed less than once per month
- **Coldline** - Accessed less than once per quarter
- **Archive** - Long-term archival storage

**Python Example**
```python
from google.cloud import storage

# Create client
client = storage.Client()

# Upload file
bucket = client.bucket('my-bucket')
blob = bucket.blob('my-file.txt')
blob.upload_from_filename('local-file.txt')

# Download file
blob.download_to_filename('downloaded-file.txt')
```

#### Persistent Disk
Block storage for Compute Engine instances.

**Create Disk**
```bash
gcloud compute disks create my-disk \
  --size=100GB \
  --zone=us-central1-a \
  --type=pd-ssd
```

### Database Services

#### Cloud SQL
Fully managed relational databases.

**Supported Databases:**
- MySQL
- PostgreSQL
- SQL Server

**Create Instance**
```bash
# Create MySQL instance
gcloud sql instances create my-instance \
  --database-version=MYSQL_8_0 \
  --tier=db-n1-standard-1 \
  --region=us-central1

# Create database
gcloud sql databases create mydb \
  --instance=my-instance

# Connect
gcloud sql connect my-instance --user=root
```

**Connection String**
```bash
mysql --host=<INSTANCE_IP> --user=root --password
```

#### Cloud Firestore
NoSQL document database.

**Initialize Firestore**
```bash
gcloud firestore databases create --region=us-central
```

**JavaScript Example**
```javascript
const { Firestore } = require('@google-cloud/firestore');

// Initialize Firestore
const firestore = new Firestore();

// Add document
async function addData() {
  const docRef = firestore.collection('users').doc('user1');
  await docRef.set({
    name: 'John Doe',
    email: 'john@example.com',
    created: new Date()
  });
}

// Query documents
async function getData() {
  const snapshot = await firestore.collection('users').get();
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}
```

#### Cloud Spanner
Globally distributed relational database.

**Create Instance**
```bash
gcloud spanner instances create my-instance \
  --config=regional-us-central1 \
  --description="My Spanner Instance" \
  --nodes=1
```

#### BigQuery
Serverless data warehouse for analytics.

**Create Dataset**
```bash
# Create dataset
bq mk --dataset my_project:my_dataset

# Load data
bq load --source_format=CSV \
  my_dataset.my_table \
  gs://my-bucket/data.csv \
  schema.json

# Query data
bq query --use_legacy_sql=false \
  'SELECT * FROM `my_project.my_dataset.my_table` LIMIT 10'
```

**Query Example**
```sql
SELECT
  user_id,
  COUNT(*) as total_orders,
  SUM(amount) as total_spent
FROM
  `project.dataset.orders`
WHERE
  order_date >= '2025-01-01'
GROUP BY
  user_id
ORDER BY
  total_spent DESC
LIMIT 100
```

### Networking Services

#### Virtual Private Cloud (VPC)
Global private network for your resources.

**Create VPC Network**
```bash
# Create VPC
gcloud compute networks create my-vpc \
  --subnet-mode=custom

# Create subnet
gcloud compute networks subnets create my-subnet \
  --network=my-vpc \
  --region=us-central1 \
  --range=10.0.1.0/24
```

**Firewall Rules**
```bash
# Allow HTTP
gcloud compute firewall-rules create allow-http \
  --network=my-vpc \
  --allow=tcp:80 \
  --source-ranges=0.0.0.0/0

# Allow SSH
gcloud compute firewall-rules create allow-ssh \
  --network=my-vpc \
  --allow=tcp:22 \
  --source-ranges=0.0.0.0/0
```

#### Cloud Load Balancing
Distribute traffic across resources.

**Create Load Balancer**
```bash
# Create instance group
gcloud compute instance-groups managed create my-group \
  --base-instance-name=my-instance \
  --size=3 \
  --template=my-template \
  --zone=us-central1-a

# Create health check
gcloud compute health-checks create http http-health-check \
  --port=80

# Create backend service
gcloud compute backend-services create my-backend \
  --protocol=HTTP \
  --health-checks=http-health-check \
  --global
```

#### Cloud CDN
Content delivery network for faster content delivery.

### Security & Identity

#### Identity and Access Management (IAM)
Manage access to GCP resources.

**Grant Role**
```bash
# Grant role to user
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member=user:email@example.com \
  --role=roles/viewer

# Grant role to service account
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member=serviceAccount:my-sa@project.iam.gserviceaccount.com \
  --role=roles/editor
```

**Common Roles:**
- `roles/viewer` - Read-only access
- `roles/editor` - Edit access (no permission changes)
- `roles/owner` - Full access
- `roles/storage.admin` - Storage administrator
- `roles/compute.admin` - Compute administrator

#### Cloud Key Management
Manage encryption keys.

**Create Key Ring**
```bash
# Create key ring
gcloud kms keyrings create my-keyring \
  --location=us-central1

# Create key
gcloud kms keys create my-key \
  --keyring=my-keyring \
  --location=us-central1 \
  --purpose=encryption
```

### DevOps Services

#### Cloud Build
Continuous integration and delivery platform.

**cloudbuild.yaml**
```yaml
steps:
  # Install dependencies
  - name: 'node:18'
    entrypoint: npm
    args: ['install']
  
  # Run tests
  - name: 'node:18'
    entrypoint: npm
    args: ['test']
  
  # Build application
  - name: 'node:18'
    entrypoint: npm
    args: ['run', 'build']
  
  # Build Docker image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-app:$BUILD_ID', '.']
  
  # Push to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/my-app:$BUILD_ID']

images:
  - 'gcr.io/$PROJECT_ID/my-app:$BUILD_ID'
```

**Trigger Build**
```bash
# Manual trigger
gcloud builds submit --config=cloudbuild.yaml

# Create trigger from GitHub
gcloud builds triggers create github \
  --repo-name=my-repo \
  --repo-owner=my-username \
  --branch-pattern=^main$ \
  --build-config=cloudbuild.yaml
```

#### Deployment Manager
Infrastructure as Code for GCP.

**Template Example**
```yaml
# instance.yaml
resources:
- name: my-vm
  type: compute.v1.instance
  properties:
    zone: us-central1-a
    machineType: zones/us-central1-a/machineTypes/e2-medium
    disks:
    - deviceName: boot
      type: PERSISTENT
      boot: true
      autoDelete: true
      initializeParams:
        sourceImage: projects/ubuntu-os-cloud/global/images/family/ubuntu-2204-lts
    networkInterfaces:
    - network: global/networks/default
      accessConfigs:
      - name: External NAT
        type: ONE_TO_ONE_NAT
```

**Deploy**
```bash
gcloud deployment-manager deployments create my-deployment \
  --config instance.yaml
```

#### Artifact Registry
Store and manage container images and packages.

**Create Repository**
```bash
# Create Docker repository
gcloud artifacts repositories create my-repo \
  --repository-format=docker \
  --location=us-central1 \
  --description="Docker repository"

# Configure Docker
gcloud auth configure-docker us-central1-docker.pkg.dev

# Push image
docker tag my-app us-central1-docker.pkg.dev/PROJECT_ID/my-repo/my-app:v1
docker push us-central1-docker.pkg.dev/PROJECT_ID/my-repo/my-app:v1
```

## GCP Best Practices

### Cost Optimization
- Use sustained use discounts
- Implement committed use contracts
- Use preemptible VMs for batch jobs
- Set budget alerts
- Use cost management tools

### Security Best Practices
- Use IAM roles appropriately
- Enable Cloud Audit Logs
- Encrypt data at rest and in transit
- Use VPC Service Controls
- Regular security assessments
- Implement least privilege access

### High Availability
- Deploy across multiple zones/regions
- Use managed instance groups
- Implement health checks
- Use Cloud Load Balancing
- Regular backups and disaster recovery

### Performance Optimization
- Use Cloud CDN for content delivery
- Implement caching strategies
- Choose appropriate machine types
- Use Premium Tier networking
- Monitor with Cloud Monitoring

## gcloud CLI Cheat Sheet

```bash
# Projects
gcloud projects list
gcloud config set project PROJECT_ID

# Compute Engine
gcloud compute instances list
gcloud compute instances start INSTANCE_NAME
gcloud compute instances stop INSTANCE_NAME

# Storage
gsutil ls
gsutil cp file.txt gs://bucket/
gsutil rm gs://bucket/file.txt

# GKE
gcloud container clusters list
gcloud container clusters resize my-cluster --num-nodes=5

# App Engine
gcloud app deploy
gcloud app logs tail

# Functions
gcloud functions list
gcloud functions logs read FUNCTION_NAME
```

## Monitoring & Logging

### Cloud Monitoring
Monitor GCP resources and applications.

**Create Alert Policy**
```bash
gcloud alpha monitoring policies create \
  --notification-channels=CHANNEL_ID \
  --display-name="High CPU Alert" \
  --condition-display-name="CPU usage > 80%" \
  --condition-threshold-value=0.8 \
  --condition-threshold-duration=300s
```

### Cloud Logging
Centralized logging service.

**View Logs**
```bash
# View logs
gcloud logging read "resource.type=gce_instance" \
  --limit 50 \
  --format json

# Tail logs
gcloud logging tail "resource.type=gce_instance"
```

## Cost Management

### Pricing Models
- **On-Demand** - Pay-as-you-go
- **Committed Use** - 1 or 3-year commitment (up to 57% savings)
- **Preemptible VMs** - Short-lived instances (up to 80% savings)
- **Sustained Use Discounts** - Automatic discounts for long-running workloads

### Cost Estimation
Use [Google Cloud Pricing Calculator](https://cloud.google.com/products/calculator) to estimate costs.

## Certifications

### Associate
- Associate Cloud Engineer

### Professional
- Professional Cloud Architect
- Professional Data Engineer
- Professional Cloud Developer
- Professional Cloud DevOps Engineer
- Professional Cloud Security Engineer
- Professional Cloud Network Engineer

## Resources

### Official Documentation
- [GCP Documentation](https://cloud.google.com/docs)
- [Architecture Framework](https://cloud.google.com/architecture/framework)
- [Best Practices](https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations)

### Learning Resources
- [Google Cloud Skills Boost](https://www.cloudskillsboost.google/)
- [Codelabs](https://codelabs.developers.google.com/?cat=Cloud)
- [YouTube: Google Cloud Tech](https://www.youtube.com/googlecloudtech)

## Support

- [GCP Support Plans](https://cloud.google.com/support)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/google-cloud-platform)
- [Community Support](https://cloud.google.com/support/docs/community)

## Next Steps

- [AWS Documentation](/docs/cloud-devops/aws)
- [Azure Documentation](/docs/cloud-devops/azure)
- [DevOps Best Practices](/blog)
