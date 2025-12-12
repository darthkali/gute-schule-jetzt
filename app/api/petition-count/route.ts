import { NextResponse } from 'next/server';

export const revalidate = 7200; // Cache für 2 Stunden (7200 Sekunden)

let cachedData: { count: number; updatedAt: string } | null = null;
let lastFetchTime = 0;

function isNightTime(): boolean {
  const now = new Date();
  const hour = now.getHours();
  // Zwischen 22:00 und 5:00 Uhr
  return hour >= 22 || hour < 5;
}

export async function GET() {
  try {
    const now = Date.now();
    const twoHoursInMs = 2 * 60 * 60 * 1000; // 2 Stunden in Millisekunden

    // Wenn gecachte Daten vorhanden sind und noch gültig sind, verwende sie
    if (cachedData && (now - lastFetchTime < twoHoursInMs || isNightTime())) {
      return NextResponse.json(cachedData);
    }

    // Ansonsten hole neue Daten
    const petitionUrl =
      'https://petitionen.landtag-bw.de/Petitionen/Details/46215aff-a7ad-4de3-8b6f-0cc2bce51e0c';

    const response = await fetch(petitionUrl, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Suche nach dem div mit class "content flex-row text-start" und extrahiere die Zahl
    const match = html.match(
      /<div class="content flex-row text-start">(\d+)\s*Mitzeichnungen<\/div>/
    );

    if (match && match[1]) {
      const count = parseInt(match[1], 10);
      const updatedAt = new Date().toISOString();

      cachedData = { count, updatedAt };
      lastFetchTime = now;

      return NextResponse.json(cachedData);
    }

    throw new Error('Unterschriftenzahl nicht gefunden');
  } catch (error) {
    console.error('Fehler beim Abrufen der Unterschriftenzahl:', error);

    // Bei Fehler: Wenn gecachte Daten existieren, gib diese zurück
    if (cachedData) {
      return NextResponse.json(cachedData);
    }

    return NextResponse.json(
      {
        error: 'Fehler beim Abrufen der Unterschriftenzahl',
        count: 809,
        updatedAt: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
