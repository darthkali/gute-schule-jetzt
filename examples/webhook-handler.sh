#!/bin/bash

# Example webhook handler script
# This can be placed on your deployment server to handle webhook deployments

set -e

# Read JSON payload from POST request
read -r PAYLOAD

# Extract image and version from JSON payload
IMAGE=$(echo "$PAYLOAD" | grep -o '"image":"[^"]*' | cut -d'"' -f4)
VERSION=$(echo "$PAYLOAD" | grep -o '"version":"[^"]*' | cut -d'"' -f4)

echo "Received deployment webhook:"
echo "  Image: $IMAGE"
echo "  Version: $VERSION"

# Change to your application directory
cd /path/to/your/application

# Update docker-compose.yml with new image
sed -i "s|image: .*gute-schule-jetzt:.*|image: $IMAGE|g" docker-compose.yml

# Deploy with docker compose
if command -v docker-compose >/dev/null 2>&1; then
    docker-compose pull
    docker-compose up -d --remove-orphans
else
    docker compose pull
    docker compose up -d --remove-orphans
fi

# Clean up old images
docker image prune -f

echo "Deployment completed successfully!"

# Send response
echo "Content-Type: application/json"
echo ""
echo '{"status": "success", "message": "Deployment completed"}'