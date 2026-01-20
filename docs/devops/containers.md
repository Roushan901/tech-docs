<!-- Last updated: January 8, 2026, 10:00 AM -->
---
sidebar_position: 2
sidebar: devopsSidebar
---

# Docker & Kubernetes Documentation

Complete guide to containerization with Docker and orchestration with Kubernetes for modern application deployment.

## Docker Overview

Docker is a platform for developing, shipping, and running applications in containers. Containers package software with everything needed to run it, ensuring consistency across environments.

### Why Docker?

- **Consistency:** Same environment from development to production
- **Isolation:** Applications run independently
- **Portability:** Run anywhere Docker is supported
- **Efficiency:** Lightweight compared to virtual machines

## Docker Fundamentals

### Docker Architecture

```
┌─────────────────────────────────────┐
│         Docker Client               │
│  (docker build, run, push)          │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│         Docker Daemon               │
│  (dockerd - manages containers)     │
└──────────────┬──────────────────────┘
               │
    ┌──────────┴──────────┐
    ▼                     ▼
┌─────────┐         ┌─────────┐
│ Images  │         │Containers│
└─────────┘         └─────────┘
```

### Dockerfile Example

```dockerfile
# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/index.js"]
```

### Common Docker Commands

```bash
# Build an image
docker build -t myapp:1.0 .

# Run a container
docker run -d -p 3000:3000 --name myapp-container myapp:1.0

# List running containers
docker ps

# View container logs
docker logs myapp-container

# Stop a container
docker stop myapp-container

# Remove a container
docker rm myapp-container

# List images
docker images

# Remove an image
docker rmi myapp:1.0

# Execute command in running container
docker exec -it myapp-container sh
```

### Docker Compose

Docker Compose manages multi-container applications with a single configuration file.

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://db:5432/myapp
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## Kubernetes Overview

Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.

### Why Kubernetes?

- **Self-healing:** Automatically restarts failed containers
- **Auto-scaling:** Scales based on demand
- **Load balancing:** Distributes network traffic
- **Rolling updates:** Zero-downtime deployments
- **Secret management:** Securely stores sensitive data

### Kubernetes Architecture

```
┌────────────────────────────────────────────┐
│            Control Plane                   │
│  ┌──────────────┐  ┌──────────────┐       │
│  │ API Server   │  │  Scheduler   │       │
│  └──────────────┘  └──────────────┘       │
│  ┌──────────────┐  ┌──────────────┐       │
│  │ Controller   │  │     etcd     │       │
│  │  Manager     │  │  (data store)│       │
│  └──────────────┘  └──────────────┘       │
└────────────────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
┌───────────────┐   ┌───────────────┐
│   Worker Node │   │  Worker Node  │
│  ┌─────────┐  │   │  ┌─────────┐  │
│  │  Pod 1  │  │   │  │  Pod 3  │  │
│  │  Pod 2  │  │   │  │  Pod 4  │  │
│  └─────────┘  │   │  └─────────┘  │
└───────────────┘   └───────────────┘
```

## Kubernetes Resources

### Deployment

Manages replicated applications and rolling updates.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

### Service

Exposes applications running in pods.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
```

### ConfigMap

Stores non-confidential configuration data.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  api.url: "https://api.example.com"
  log.level: "info"
  feature.flag: "enabled"
```

### Secret

Stores sensitive information like passwords and API keys.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=        # base64 encoded 'admin'
  password: cGFzc3dvcmQ=    # base64 encoded 'password'
  url: cG9zdGdyZXNxbDovL... # base64 encoded connection string
```

### Ingress

Manages external access to services with routing rules.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80
```

## Common Kubernetes Commands

```bash
# Get cluster info
kubectl cluster-info

# Get all resources
kubectl get all

# Get pods
kubectl get pods
kubectl get pods -o wide

# Describe a resource
kubectl describe pod myapp-pod

# View logs
kubectl logs myapp-pod
kubectl logs -f myapp-pod  # Follow logs

# Execute command in pod
kubectl exec -it myapp-pod -- /bin/sh

# Apply configuration
kubectl apply -f deployment.yaml

# Delete resources
kubectl delete -f deployment.yaml
kubectl delete pod myapp-pod

# Scale deployment
kubectl scale deployment myapp-deployment --replicas=5

# Update image
kubectl set image deployment/myapp-deployment myapp=myapp:2.0

# View rollout status
kubectl rollout status deployment/myapp-deployment

# Rollback deployment
kubectl rollout undo deployment/myapp-deployment

# Port forwarding
kubectl port-forward pod/myapp-pod 8080:3000

# Get resource usage
kubectl top nodes
kubectl top pods
```

## Best Practices

### Docker Best Practices

1. **Use Official Base Images**
```dockerfile
FROM node:18-alpine  # Use official, minimal images
```

2. **Minimize Layers**
```dockerfile
# Combine RUN commands
RUN apt-get update && apt-get install -y \
    package1 \
    package2 \
    && rm -rf /var/lib/apt/lists/*
```

3. **Use .dockerignore**
```
node_modules
npm-debug.log
.git
.env
*.md
```

4. **Multi-stage Builds**
```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/index.js"]
```

### Kubernetes Best Practices

1. **Use Namespaces**
```bash
kubectl create namespace production
kubectl apply -f deployment.yaml -n production
```

2. **Set Resource Limits**
```yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"
```

3. **Implement Health Checks**
```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
readinessProbe:
  httpGet:
    path: /ready
    port: 3000
```

4. **Use Labels and Selectors**
```yaml
metadata:
  labels:
    app: myapp
    environment: production
    version: "1.0"
```

## Monitoring and Logging

### Docker Logging

```bash
# View logs
docker logs myapp-container

# Follow logs
docker logs -f myapp-container

# Tail last 100 lines
docker logs --tail 100 myapp-container

# Show timestamps
docker logs -t myapp-container
```

### Kubernetes Monitoring with Prometheus

```yaml
apiVersion: v1
kind: ServiceMonitor
metadata:
  name: myapp-metrics
spec:
  selector:
    matchLabels:
      app: myapp
  endpoints:
  - port: metrics
    interval: 30s
```

## Troubleshooting

### Docker Issues

**Problem:** Container exits immediately
```bash
# Check logs
docker logs myapp-container

# Run interactively
docker run -it myapp:1.0 sh
```

**Problem:** Port already in use
```bash
# Find process using port
lsof -i :3000
# Or use different port
docker run -p 3001:3000 myapp:1.0
```

### Kubernetes Issues

**Problem:** Pod in CrashLoopBackOff
```bash
# Check logs
kubectl logs myapp-pod

# Describe pod for events
kubectl describe pod myapp-pod

# Check previous logs
kubectl logs myapp-pod --previous
```

**Problem:** Service not accessible
```bash
# Check service
kubectl get svc myapp-service

# Check endpoints
kubectl get endpoints myapp-service

# Port forward to test
kubectl port-forward svc/myapp-service 8080:80
```

## Resources

- **Docker Documentation:** [docker.com/docs](https://docs.docker.com)
- **Kubernetes Documentation:** [kubernetes.io/docs](https://kubernetes.io/docs)
- **Docker Hub:** [hub.docker.com](https://hub.docker.com)
- **Kubernetes Patterns:** [k8spatterns.io](https://k8spatterns.io)

## Next Steps

- Explore [CI/CD Pipelines](/docs/devops/cicd) for automated deployments
- Learn [Infrastructure as Code](/docs/devops/iac) for automated provisioning
- Review [Cloud Platforms](/docs/cloud-devops/aws) for managed Kubernetes services

---

**Need container orchestration help?** Contact our team at [contact@techdocs.co.in](mailto:contact@techdocs.co.in)
