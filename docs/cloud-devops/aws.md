---
id: aws
title: AWS (Amazon Web Services)
sidebar: cloudSidebar
sidebar_label: AWS (Amazon Web Services)
tags: []
---

# AWS (Amazon Web Services)

This guide provides a practical AWS baseline for teams building and operating production workloads.

## Start with platform foundations

Before provisioning services, establish:

- account and organization structure,
- IAM and permission boundaries,
- logging and audit retention,
- cost tagging and budget alarms.

## Core service map

### Compute
- **EC2** for VM-based workloads.
- **ECS/EKS** for containerized services.
- **Lambda** for event-driven serverless workloads.

### Storage
- **S3** for object storage and static assets.
- **EBS** for block storage attached to EC2.
- **EFS** for shared file workloads.

### Data
- **RDS/Aurora** for relational systems.
- **DynamoDB** for low-latency key-value/document access.
- **ElastiCache** for cache-first patterns.

### Networking and edge
- **VPC** for network isolation.
- **ALB/NLB** for traffic distribution.
- **CloudFront** for global edge delivery.

## Delivery and operations model

Use this baseline in production:

1. Provision infrastructure through IaC.
2. Deploy through CI/CD with environment gates.
3. Enable CloudWatch metrics, logs, and alarms.
4. Define incident runbooks and rollback paths.

## Security checklist

- Enforce MFA for privileged users.
- Prefer IAM roles over long-lived keys.
- Encrypt data at rest and in transit.
- Restrict public exposure with explicit policy.
- Enable GuardDuty/Security Hub where applicable.

## Cost controls

- Apply mandatory cost-allocation tags.
- Use autoscaling and right-sized instances.
- Set budgets and anomaly detection alerts.
- Review idle resources on a fixed cadence.

## Next steps

- [Azure Documentation](/docs/cloud-devops/azure)
- [GCP Documentation](/docs/cloud-devops/gcp)
- [DevOps Practices](/docs/devops)
