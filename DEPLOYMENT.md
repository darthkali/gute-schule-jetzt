# Docker Compose Deployment

This repository includes Docker Compose configuration for deploying the Gute Schule Jetzt application.

## Files

- `docker-compose.yml` - Production deployment configuration
- `docker-compose.dev.yml` - Development environment configuration  
- `nginx.conf` - Nginx reverse proxy configuration
- `deploy.sh` - Deployment script for various deployment methods

## Production Deployment

The production setup includes:
- Next.js application container
- Optional Nginx reverse proxy (use with `--profile production`)

### Quick Start

```bash
# Pull the latest image and start the application
docker-compose pull
docker-compose up -d

# With nginx reverse proxy
docker-compose --profile production up -d
```

### Custom Image Version

```bash
# Edit docker-compose.yml to specify version
# Or use environment variable
IMAGE_TAG=v1.2.3 docker-compose up -d
```

## Development Environment

```bash
# Start development environment with hot reload
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f
```

## CI/CD Integration

The GitHub Actions workflow automatically:
1. Builds and pushes Docker images with semantic versioning
2. Tags the latest version 
3. Triggers deployment using the `deploy.sh` script

### Deployment Methods

The deployment can be configured using environment variables:

#### Webhook Deployment (Default)
```yaml
env:
  DEPLOYMENT_METHOD: webhook
  DEPLOYMENT_WEBHOOK_URL: https://your-deployment-webhook.com/deploy
```

#### SSH Deployment
```yaml
env:
  DEPLOYMENT_METHOD: ssh
  DEPLOYMENT_HOST: your-server.com
  DEPLOYMENT_USER: deployer
```

### Required Secrets

For webhook deployment:
- `DEPLOYMENT_WEBHOOK_URL` - URL to trigger deployment

For SSH deployment:
- `DEPLOYMENT_HOST` - Target server hostname/IP
- `DEPLOYMENT_USER` - SSH user for deployment
- SSH key should be configured in the runner

## Health Check

The application includes a health check that verifies the service is running on port 3000. Nginx also provides a `/health` endpoint.

## Environment Variables

- `NODE_ENV` - Set to `production` for production deployment
- `DEPLOYMENT_METHOD` - Deployment method: `webhook`, `ssh`, or `local`
- `DEPLOYMENT_WEBHOOK_URL` - Webhook URL for deployment trigger
- `DEPLOYMENT_HOST` - Target server for SSH deployment
- `DEPLOYMENT_USER` - SSH user for deployment