---
id: azure
title: Azure (Microsoft Azure)
sidebar: cloudSidebar
sidebar_label: Azure (Microsoft Azure)
tags: []
---

# Azure (Microsoft Azure)

This guide outlines an Azure-first operating model for teams running secure, scalable cloud workloads.

## Foundation setup

Establish these controls before project rollout:

- management groups and subscription strategy,
- Microsoft Entra ID role model,
- policy and compliance guardrails,
- centralized logging and cost governance.

## Core service map

### Compute
- **Virtual Machines** for infrastructure-level control.
- **App Service** for managed web app hosting.
- **AKS** for Kubernetes orchestration.
- **Functions** for event-driven serverless flows.

### Storage and data
- **Blob Storage** for object data.
- **Azure SQL** for relational workloads.
- **Cosmos DB** for distributed NoSQL use cases.

### Networking and security
- **Virtual Network** for segmentation and routing.
- **Application Gateway/Load Balancer** for traffic control.
- **Key Vault** for secrets and key management.

## Delivery and operations model

1. Provision resources through IaC templates.
2. Use environment-scoped pipelines for release control.
3. Monitor service health with Azure Monitor and alerts.
4. Maintain recovery procedures and tested failover paths.

## Security checklist

- Use managed identities where possible.
- Store secrets only in Key Vault.
- Apply network security groups and private endpoints.
- Enforce policy compliance via Azure Policy.

## Cost controls

- Use resource tagging for ownership and billing.
- Review reservations and autoscale settings.
- Track cost anomalies and idle resources.

## Next steps

- [AWS Documentation](/docs/cloud-devops/aws)
- [GCP Documentation](/docs/cloud-devops/gcp)
- [DevOps Practices](/docs/devops)
