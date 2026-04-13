---
id: gcp
title: GCP (Google Cloud Platform)
sidebar: cloudSidebar
sidebar_label: GCP (Google Cloud Platform)
tags: []
---

# GCP (Google Cloud Platform)

This guide provides a production-oriented GCP baseline for delivery teams.

## Foundation setup

Define these platform controls first:

- organization and folder hierarchy,
- IAM model and service account boundaries,
- audit logging and security policy,
- billing account, budgets, and cost labels.

## Core service map

### Compute
- **Compute Engine** for VM workloads.
- **GKE** for container orchestration.
- **Cloud Run / Cloud Functions** for serverless services.

### Storage and data
- **Cloud Storage** for object data.
- **Cloud SQL** for relational databases.
- **Firestore/BigQuery** for document and analytics workloads.

### Networking and security
- **VPC** for network isolation.
- **Cloud Load Balancing** for traffic distribution.
- **Cloud KMS** for key lifecycle management.

## Delivery and operations model

1. Manage infrastructure with version-controlled IaC.
2. Release with CI/CD and environment approvals.
3. Instrument workloads with Cloud Monitoring and logging.
4. Verify SLOs and incident response runbooks.

## Security checklist

- Apply least-privilege IAM roles.
- Prefer workload identity over static keys.
- Restrict service exposure using network and identity controls.
- Enable audit logs for security-relevant actions.

## Cost controls

- Use labels for ownership and chargeback.
- Set budgets and anomaly alerts.
- Right-size compute and storage classes by workload behavior.

## Next steps

- [AWS Documentation](/docs/cloud-devops/aws)
- [Azure Documentation](/docs/cloud-devops/azure)
- [DevOps Practices](/docs/devops)
