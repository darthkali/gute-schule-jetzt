import React from 'react';

interface PetitionProgressTrackerProps {
  currentSignatures: number;
  updatedAt: string;
}

export default function PetitionProgressTracker({
  currentSignatures,
  updatedAt,
}: PetitionProgressTrackerProps) {
  // Petition Zeitraum: 8.12.2024 - 19.01.2025
  const startDate = new Date('2025-12-08');
  const today = new Date();

  // Setze alle auf Mitternacht für genaue Tagesberechnung
  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Berechne Gesamttage (inklusive Start- und Endtag)
  const totalDays = 43;
  const totalSigns = 10000;

  // Berechne aktuellen Tag (mindestens 1, höchstens totalDays)
  const currentDay = Math.max(
    1,
    Math.min(
      Math.ceil(
        (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1,
      totalDays
    )
  );

  const expectedPerDay = totalSigns / totalDays;

  const expectedToday = Math.ceil(currentDay * expectedPerDay); // Was wir heute haben sollten
  const difference = currentSignatures - expectedToday;
  const isAhead = difference >= 0;

  const percentageActual = (currentSignatures / totalSigns) * 100;
  const percentageExpected = (expectedToday / totalSigns) * 100;

  // Formatiere den Zeitstempel
  const updateDate = new Date(updatedAt);
  const dateStr = updateDate.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeStr = updateDate.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className='my-6 border-2 rounded-xl p-4 shadow-md'
      style={{
        backgroundColor: isAhead ? '#f0f9f0' : '#fef9e7',
        borderColor: isAhead ? 'var(--color-nlj-green)' : 'var(--color-accent)',
      }}
    >
      <div className='flex items-center gap-3 mb-3'>
        <div>
          <p
            className='text-lg font-semibold'
            style={{ color: 'var(--color-primary)' }}
          >
            Tag {currentDay} von {totalDays}
          </p>
          <p className='text-lg ' style={{ color: 'var(--color-primary)' }}>
            Bisher{' '}
            <span className='font-bold'>
              {currentSignatures.toLocaleString('de-DE')}
            </span>{' '}
            Unterschriften
            <span
              className='text-sm font-semibold'
              style={{
                color:
                  difference === 0
                    ? 'var(--color-secondary)'
                    : isAhead
                      ? 'var(--color-nlj-green)'
                      : '#d68910',
              }}
            >
              {difference === 0
                ? ` 🎯 Genau auf Plan!`
                : isAhead
                  ? `  ✅ ${Math.abs(difference).toLocaleString('de-DE')} Unterschrift(en) über Plan`
                  : `  📉 ${Math.abs(difference).toLocaleString('de-DE')} Unterschrift(en) hinter Plan`}
            </span>
          </p>
        </div>
      </div>

      <div className='relative pt-10 pb-2'>
        <div
          className='absolute top-0 z-20 flex flex-col items-center'
          style={{
            left: `${percentageExpected}%`,
            transform: 'translateX(-50%)',
          }}
        >
          <div
            className='text-xs font-bold px-3 py-1.5 rounded-lg border-2 whitespace-nowrap shadow-md'
            style={{
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-neutral)',
              borderColor: 'var(--color-secondary)',
            }}
          >
            SOLL: {expectedToday.toLocaleString('de-DE')} (
            {percentageExpected.toFixed(1)}%)
          </div>

          <svg
            width='20'
            height='12'
            viewBox='0 0 20 12'
            style={{ marginTop: '2px', fill: 'var(--color-secondary)' }}
          >
            <path d='M10 12 L0 0 L20 0 Z' />
          </svg>
        </div>

        <div
          className='w-full rounded-full h-8 overflow-hidden shadow-inner relative'
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div
            className='absolute h-full z-10 shadow-lg'
            style={{
              left: `${percentageExpected}%`,
              width: '3px',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--color-secondary)',
            }}
          ></div>

          <div
            className='h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2 relative'
            style={{
              width: `${Math.min(percentageActual, 100)}%`,
              background: isAhead
                ? 'linear-gradient(to right, #50af4c, #3d8a3a)'
                : 'linear-gradient(to right, #ffd700, #f4c430)',
            }}
          >
            <span
              className='text-xs font-bold text-white'
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            >
              IST: {percentageActual.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className='mt-3 text-right'>
        <p
          className='text-xs'
          style={{ color: 'var(--color-text)', opacity: 0.6 }}
        >
          Zuletzt aktualisiert am {dateStr} um {timeStr} Uhr
        </p>
      </div>
    </div>
  );
}
