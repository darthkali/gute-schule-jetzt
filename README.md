![GitHub Release](https://img.shields.io/github/v/release/darthkali/gute-schule-jetzt?color=yellow)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/darthkali/gute-schule-jetzt/ci.yml)

# Neue Lernkultur - Jetzt! 🎓

Eine Initiative für bessere Bildung und nachhaltigen Wandel in deutschen Schulen.

## Über das Projekt

**Neue Lernkultur - Jetzt!** ist eine deutschlandweite Bildungsinitiative, die sich für eine grundlegende Transformation des staatlichen Schulsystems einsetzt. Unser Ziel ist es, Schulen zu schaffen, in denen alle Kinder aufbauend und selbstwirksam lernen können.

### Unsere Mission

In einer sich rasant verändernden Welt besteht grundlegender Handlungsbedarf in der Bildung. Wir zeigen auf:

- **Was Kinder wirklich brauchen** für ein erfolgreiches Lernen
- **Herausforderungen des aktuellen Schulsystems** und deren dysfunktionale Aspekte
- **Erprobte Lösungen und Visionen** von Vorreiterschulen wie der Primus Schule Münster und der Alemannenschule Wutöschingen
- **Handlungsmöglichkeiten** für alle Ebenen: Schüler:innen, Eltern, Schulen, Politik, Wirtschaft und Kommunen

### Unsere Ziele

- Bewusstsein schaffen für notwendige Bildungsreformen
- Konkrete Handlungsschritte für verschiedene Stakeholder aufzeigen
- Eine Petition an den Landtag Baden-Württemberg vorantreiben
- Vernetzung von Bildungsinnovator:innen und beispielgebenden Schulen
- Transformation von "schulgerechten Kindern" hin zu "kindgerechten Schulen"

## Technischer Ansatz

### Technologie-Stack

Diese Webseite wurde mit modernen Web-Technologien entwickelt, um eine optimale Benutzererfahrung und Barrierefreiheit zu gewährleisten:

- **Framework**: [Next.js 15.4.2](https://nextjs.org) mit App Router für optimale Performance und SEO
- **Frontend**: React 19 mit TypeScript für typsichere Entwicklung
- **Styling**: [Tailwind CSS](https://tailwindcss.com) für konsistentes und responsives Design
- **Karten**: [Leaflet](https://leafletjs.com) und React-Leaflet für interaktive Landkarten der Bildungsinitiativen
- **Icons**: FontAwesome und React Icons für konsistente Symbolsprache
- **E-Mail**: Nodemailer für Kontaktformular-Funktionalität
- **Deployment**: [Vercel](https://vercel.com) für automatische Deployments und globale CDN-Verteilung

### Architektur-Entscheidungen

**Warum Next.js?**

- Server-Side Rendering (SSR) für bessere SEO und Performance
- Static Site Generation (SSG) für schnelle Ladezeiten
- Eingebaute Optimierungen für Bilder und Fonts
- API Routes für Backend-Funktionalität (Kontaktformular)

**Warum Tailwind CSS?**

- Konsistente Design-Tokens und Spacing
- Responsive Design out-of-the-box
- Kleine Bundle-Größe durch Purging ungenutzter Styles
- Einfache Wartung und Anpassung

**Warum TypeScript?**

- Typsicherheit reduziert Bugs in der Entwicklung
- Bessere Developer Experience mit IntelliSense
- Selbstdokumentierender Code

## Entwicklung

### Voraussetzungen

- Node.js 18+
- npm 11+

### Installation und Setup

```bash
# Repository klonen
git clone https://github.com/darthkali/gute-schule-jetzt.git
cd gute-schule-jetzt

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Verfügbare Scripts

```bash
# Entwicklungsserver starten (mit allen Netzwerk-Interfaces zugänglich)
npm run dev

# Produktions-Build erstellen
npm run build

# Produktions-Build lokal starten
npm run start

# Code-Qualität prüfen
npm run lint

# Tests ausführen (wenn vorhanden)
npm run test
```

### Projekt-Struktur

```
app/
├── (root)/                 # Hauptseiten der Anwendung
│   ├── page.tsx           # Startseite
│   ├── petition/          # Petitions-Seite
│   ├── ueber-uns/         # Über uns Seite
│   └── ...                # Weitere Inhaltseiten
├── api/                   # API-Endpunkte
│   └── contact/           # Kontaktformular-API
├── components/            # Wiederverwendbare UI-Komponenten
│   ├── Map/               # Interaktive Karte
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── ...                # Weitere Komponenten
├── fonts/                 # Lokale Font-Dateien
├── globals.css            # Globale Styles
└── layout.tsx             # Root-Layout
```

## Beitragen

Wir freuen uns über Beiträge zur Verbesserung der Webseite und der Bildungsinitiative!

### Code-Beiträge

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push den Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

### Inhaltliche Beiträge

- Korrekturen und Verbesserungen der Texte
- Neue Beispielschulen für die Landkarte
- Übersetzungen
- Feedback und Verbesserungsvorschläge

## Deployment

Aktuell wird die Anwendung als Docker Image gebaut und veröffentlicht:

- **Docker Registry**: [docker.io/darthkali/gute-schule-jetzt](docker.io/darthkali/gute-schule-jetzt)
- **CI/CD**: Automatischer Build und Push von Docker Images bei neuen Releases
- **Semantic Versioning**: Automatische Versionierung basierend auf Commit-Nachrichten

### Geplant für Entwicklungsumgebung

- **Vercel Deployment**: Automatisches Deployment auf [Vercel](https://vercel.com) für die Entwicklungsumgebung (in Planung)
- **Preview Deployments**: Automatische Preview-Deployments für Pull Requests (geplant)

### Umgebungsvariablen

Für das Kontaktformular werden folgende Umgebungsvariablen benötigt:

```bash
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

---

> _"Ich bin selbstwirksam - ich kann die Welt verändern! Statt schulgerechte Kinder eine kindgerechte Schule!"_  
> — Leitsatz der Alemannenschule Wutöschingen
