![GitHub Release](https://img.shields.io/github/v/release/Edunite/edunite)

# Edunite

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Projektübersicht

Dieses Repository enthält ein kleines **Next.js-Projekt** (TypeScript). Nach dem Klonen kannst du den Entwicklungsserver mit `npm run dev` (oder `yarn dev`, `pnpm dev`, `bun dev`) starten.

### Verzeichnisstruktur

- **`src/app`** – alle Seiten (z. B. Home, Login, Admin-Routen).
- **`src/components`** – wiederverwendbare Komponenten wie `AdminMenu.tsx`, `InitiativeMap.tsx` und `RequireAuth.tsx`.
- **`src/lib/supabase`** – Initialisierung des Supabase-Clients.
- **`__tests__`** – enthält vorbereitete Jest-Tests.
- **`Dockerfile`** – Build für die Produktion mit Weitergabe der Supabase-Variablen.
- **`.github/workflows/ci.yml`** – Workflow für Build, Tests und Release inklusive Docker-Image.

### Wichtig zu erlernen

1. **Next.js Grundlagen** – Seiten unter `src/app`, serverseitige vs. clientseitige Komponenten und Routing.
2. **Supabase** – Authentifizierung und Datenbankzugriff (`RequireAuth`-Komponente).
3. **React Hooks** – z. B. `useState`, `useEffect`, `useRouter`, `useParams`.
4. **Leaflet und react-leaflet** – für die Kartenanzeige.
5. **CI/CD und Docker** – Dockerfile und Release-Workflow verstehen.
6. **Testing mit Jest** – aktuell minimal, aber für Erweiterungen vorbereitet.
