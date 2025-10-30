#!/bin/bash

# Prüfe ob eine Version als Argument übergeben wurde
if [ $# -eq 0 ]; then
    echo "Fehler: Keine Version angegeben!"
    echo "Verwendung: $0 <neue-version>"
    echo "Beispiel: $0 0.40.0"
    exit 1
fi

NEW_VERSION=$1
COMPOSE_FILE="docker-compose.yml"
IMAGE_NAME="darthkali/gute-schule-jetzt:${NEW_VERSION}"

# Prüfe ob die docker-compose.yml existiert
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "Fehler: $COMPOSE_FILE nicht gefunden!"
    exit 1
fi

# Zeige aktuelle Version
echo "Aktuelle Version:"
grep "darthkali/gute-schule-jetzt:" "$COMPOSE_FILE"

# Aktualisiere die Version
sed -i "s/\(darthkali\/gute-schule-jetzt:\)[0-9.]\+/\1${NEW_VERSION}/" "$COMPOSE_FILE"

# Zeige neue Version
echo -e "\nNeue Version:"
grep "darthkali/gute-schule-jetzt:" "$COMPOSE_FILE"

echo -e "\n✓ Version erfolgreich auf ${NEW_VERSION} aktualisiert!"

# Pulle das neue Image
echo -e "\n📥 Pulling neues Image ${IMAGE_NAME}..."
docker pull "darthkali/gute-schule-jetzt:${NEW_VERSION}"

if [ $? -ne 0 ]; then
    echo "Fehler: Docker pull fehlgeschlagen!"
    exit 1
fi

# Stoppe die laufenden Container
echo -e "\n🛑 Stoppe Container..."
docker compose down

if [ $? -ne 0 ]; then
    echo "Fehler: docker compose down fehlgeschlagen!"
    exit 1
fi

# Starte Container mit neuem Image
echo -e "\n🚀 Starte Container mit neuem Image..."
docker compose up -d --build

if [ $? -ne 0 ]; then
    echo "Fehler: docker compose up fehlgeschlagen!"
    exit 1
fi

echo -e "\n✅ Deployment erfolgreich abgeschlossen!"
echo "Container läuft jetzt mit Version ${NEW_VERSION}"