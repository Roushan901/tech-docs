---
id: iac
title: Infrastructure as Code
sidebar_position: 3
sidebar: devopsSidebar
sidebar_label: Infrastructure as Code
tags: []
---

# Infrastructure as Code

Use infrastructure as code to provision, change, and audit infrastructure safely.

## Why IaC matters

IaC improves delivery by making infrastructure:

- reproducible across environments,
- reviewable through pull requests,
- traceable through version history,
- and recoverable through repeatable plans.

## Recommended workflow

1. Define infrastructure modules and environment inputs.
2. Validate and format changes in CI.
3. Run plan outputs for peer review.
4. Apply changes through controlled pipelines.
5. Capture outputs and drift signals for operations.

## Tooling guidance

- **Terraform**: strong multi-cloud and module ecosystem.
- **CloudFormation/Bicep**: native cloud integrations.
- **Ansible**: strong configuration management layer.

Choose one primary provisioning tool and avoid mixing declarative models without clear ownership boundaries.

## Security and governance

- Keep state and secrets in secured backends.
- Enforce policy checks before apply.
- Tag resources consistently for cost and ownership.
- Require approvals for production changes.

## Drift and incident handling

- Run scheduled drift detection.
- Alert on unmanaged changes.
- Reconcile through code, not manual console edits.

## Next steps

- [CI/CD Pipeline Documentation](/docs/devops/cicd)
- [Docker & Kubernetes Documentation](/docs/devops/containers)
- [Cloud Platforms](/docs/cloud-devops)
