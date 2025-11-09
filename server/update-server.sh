#!/bin/bash

COMPOSE_FILE="docker-compose.yml"
DOCKER_REPO="darthkali/gute-schule-jetzt"

# Prüfe ob die docker-compose.yml existiert
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "Fehler: $COMPOSE_FILE nicht gefunden!"
    exit 1
fi

# Funktion zum Abrufen der neuesten Version von Docker Hub
get_latest_version() {
    echo "🔍 Rufe neueste Version von Docker Hub ab..." >&2
    LATEST_VERSION=$(curl -s "https://hub.docker.com/v2/repositories/${DOCKER_REPO}/tags/?page_size=100" | \
        grep -o '"name":"[^"]*"' | \
        grep -v latest | \
        grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+' | \
        sort -V | \
        tail -n 1)

    if [ -z "$LATEST_VERSION" ]; then
        echo "Fehler: Konnte neueste Version nicht abrufen!" >&2
        exit 1
    fi

    echo "Neueste verfügbare Version: ${LATEST_VERSION}" >&2
    echo "$LATEST_VERSION"
}

# Funktion zum Auslesen der aktuellen Version aus docker-compose.yml
get_current_version() {
    CURRENT_VERSION=$(grep "${DOCKER_REPO}:" "$COMPOSE_FILE" | \
        grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+' | \
        head -n 1)

    if [ -z "$CURRENT_VERSION" ]; then
        echo "Warnung: Konnte aktuelle Version nicht ermitteln" >&2
        echo "unknown"
    else
        echo "$CURRENT_VERSION"
    fi
}

# Prüfe ob eine Version als Argument übergeben wurde
if [ $# -eq 0 ]; then
    # Keine Version angegeben - automatischer Modus
    echo "📋 Automatischer Update-Modus"
    CURRENT_VERSION=$(get_current_version)
    echo "Aktuelle Version: ${CURRENT_VERSION}"

    NEW_VERSION=$(get_latest_version)

    # Vergleiche Versionen
    if [ "$CURRENT_VERSION" = "$NEW_VERSION" ]; then
        echo "✅ Bereits auf der neuesten Version ${CURRENT_VERSION}"
        echo "Kein Update erforderlich."
        exit 0
    fi

    echo "🆕 Neue Version verfügbar: ${CURRENT_VERSION} → ${NEW_VERSION}"
else
    # Manuelle Version angegeben
    NEW_VERSION=$1
    echo "📋 Manueller Update-Modus auf Version ${NEW_VERSION}"
fi

IMAGE_NAME="${DOCKER_REPO}:${NEW_VERSION}"

# Zeige aktuelle Version
echo ""
echo "Aktuelle Version:"
grep "${DOCKER_REPO}:" "$COMPOSE_FILE"

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
docker-compose down

if [ $? -ne 0 ]; then
    echo "Fehler: docker-compose down fehlgeschlagen!"
    exit 1
fi

# Starte Container mit neuem Image
echo -e "\n🚀 Starte Container mit neuem Image..."
docker-compose up -d --build

if [ $? -ne 0 ]; then
    echo "Fehler: docker-compose up fehlgeschlagen!"
    exit 1
fi

echo -e "\n✅ Deployment erfolgreich abgeschlossen!"
echo "Container läuft jetzt mit Version ${NEW_VERSION}"