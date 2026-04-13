---
id: containers
title: Docker and Kubernetes
sidebar_position: 2
sidebar: devopsSidebar
sidebar_label: Docker and Kubernetes
tags: []
---

# Docker and Kubernetes

Use this guide to standardize container build, runtime, and orchestration practices across environments.

## Core principles

- Build once, deploy the same artifact everywhere.
- Keep images minimal, deterministic, and scan-tested.
- Externalize configuration and secrets.
- Treat Kubernetes manifests as versioned code.

## Docker baseline

### Build conventions

- Use multi-stage builds to reduce image size.
- Pin base images to known versions.
- Fail builds on vulnerability threshold breaches.
- Include health checks for service readiness.

### Runtime conventions

- Run as non-root where possible.
- Set resource limits and restart policies.
- Log to stdout/stderr for centralized aggregation.

## Kubernetes baseline

### Deployment standards

- Define liveness and readiness probes.
- Set CPU/memory requests and limits.
- Use rolling updates with controlled surge/unavailable values.
- Isolate workloads by namespace and policy boundaries.

### Operational standards

- Track deployment events and pod restarts.
- Use GitOps or declarative rollout pipelines.
- Keep cluster add-ons versioned and monitored.

## Security checklist

- Scan images before deploy.
- Enforce signed images in production clusters.
- Restrict network paths with policies.
- Store secrets in a managed secret backend.

## Troubleshooting flow

1. Validate deployment and pod status.
2. Check probe failures and restart loops.
3. Inspect container logs and events.
4. Roll back to last known healthy version if needed.

## Next steps

- [CI/CD Pipeline Documentation](/docs/devops/cicd)
- [Infrastructure as Code Documentation](/docs/devops/iac)
- [Cloud Platforms](/docs/cloud-devops)
