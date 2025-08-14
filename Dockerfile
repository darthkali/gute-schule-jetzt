# ---- Phase 1: Build-Stage ----
FROM node:22 AS builder

WORKDIR /app

# Nur package.json + lock kopieren, um den npm ci step zu cachen
COPY package*.json ./

# Dependencies installieren
RUN npm ci

# Restliche Dateien kopieren
COPY . .

# Projekt builden (Next.js Production-Build)
RUN npm run build

# ---- Phase 2: Production Stage ----
FROM node:22

WORKDIR /app

# Nur das erforderliche aus der Build-Phase kopieren
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# wenn du irgendwelche *.json configs o.ä. brauchst, kopiere sie ebenfalls
# COPY --from=builder /app/whatever ./

# Expose-Port (typisch 3000 bei Next.js)
EXPOSE 3000

# Command für Next.js-Start
CMD ["npm", "run", "start"]
