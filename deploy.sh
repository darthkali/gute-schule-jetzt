#!/bin/bash
set -e

# Deploy script for gute-schule-jetzt
# This script can be called by the CI pipeline to trigger a deployment

VERSION=${1:-latest}
DEPLOYMENT_METHOD=${DEPLOYMENT_METHOD:-webhook}
DOCKER_IMAGE="docker.io/darthkali/gute-schule-jetzt:$VERSION"

echo "🚀 Starting deployment of $DOCKER_IMAGE"

# Detect docker compose command (support both docker-compose and docker compose)
if command -v docker-compose >/dev/null 2>&1; then
    DOCKER_COMPOSE_CMD="docker-compose"
elif docker compose version >/dev/null 2>&1; then
    DOCKER_COMPOSE_CMD="docker compose"
else
    echo "❌ Neither docker-compose nor docker compose command found"
    exit 1
fi

case $DEPLOYMENT_METHOD in
  "webhook")
    echo "📡 Triggering deployment via webhook..."
    if [ -n "$DEPLOYMENT_WEBHOOK_URL" ]; then
      curl -X POST "$DEPLOYMENT_WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -d "{\"image\": \"$DOCKER_IMAGE\", \"version\": \"$VERSION\"}" \
        --fail --show-error
      echo "✅ Webhook sent successfully"
    else
      echo "❌ DEPLOYMENT_WEBHOOK_URL not set"
      exit 1
    fi
    ;;
    
  "ssh")
    echo "🔒 Deploying via SSH..."
    if [ -z "$DEPLOYMENT_HOST" ] || [ -z "$DEPLOYMENT_USER" ]; then
      echo "❌ DEPLOYMENT_HOST and DEPLOYMENT_USER must be set for SSH deployment"
      exit 1
    fi
    
    # SSH deployment commands
    ssh -o StrictHostKeyChecking=no "$DEPLOYMENT_USER@$DEPLOYMENT_HOST" << EOF
      echo "Pulling latest image..."
      docker pull $DOCKER_IMAGE
      
      echo "Updating docker-compose.yml..."
      sed -i 's|image: .*gute-schule-jetzt:.*|image: $DOCKER_IMAGE|g' docker-compose.yml
      
      echo "Deploying with docker compose..."
      if command -v docker-compose >/dev/null 2>&1; then
        docker-compose pull
        docker-compose up -d --remove-orphans
      else
        docker compose pull
        docker compose up -d --remove-orphans
      fi
      
      echo "Cleaning up old images..."
      docker image prune -f
      
      echo "✅ Deployment completed successfully"
EOF
    echo "✅ SSH deployment completed"
    ;;
    
  "local")
    echo "🏠 Local deployment (for development/testing)..."
    # Update the image tag in docker-compose.yml
    sed -i "s|image: .*gute-schule-jetzt:.*|image: $DOCKER_IMAGE|g" docker-compose.yml
    
    # Pull the new image and deploy
    docker pull $DOCKER_IMAGE
    $DOCKER_COMPOSE_CMD pull
    $DOCKER_COMPOSE_CMD up -d --remove-orphans
    
    echo "✅ Local deployment completed"
    ;;
    
  *)
    echo "❌ Unknown deployment method: $DEPLOYMENT_METHOD"
    echo "Available methods: webhook, ssh, local"
    exit 1
    ;;
esac

echo "🎉 Deployment of $DOCKER_IMAGE completed successfully!"