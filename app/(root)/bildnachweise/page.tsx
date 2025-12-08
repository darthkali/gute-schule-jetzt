import React from 'react';
import Image from 'next/image';

interface ImageCredit {
  localPath: string;
  title: string;
  author: string;
  pixabayUrl: string;
}

const imageCredits: ImageCredit[] = [
  {
    localPath: '/images/people-8139477_1280.jpg',
    title: 'Menschen Social Spiel Team',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/illustrations/menschen-sozial-spiel-team-8139477/',
  },
  {
    localPath: '/images/concept-1868728_1920.jpg',
    title: 'Konzept Mann Papiere Person Planen',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/konzept-mann-papiere-person-planen-1868728/',
  },
  {
    localPath: '/images/kids-3171905_1920.png',
    title: 'Kinder Zeichnung Kritzeln Linien',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/vectors/kinder-zeichnung-kritzeln-linien-3171905/',
  },
  {
    localPath: '/images/gods-creation-7658099_1920.jpg',
    title: 'Gottes Schöpfung Raupe Puppe',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/gottes-sch%C3%B6pfung-raupe-puppe-7658099/',
  },
  {
    localPath: '/images/beach-583172_1920.jpg',
    title: 'Strand Küste Meer Hügel Berg',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/strand-k%C3%BCste-meer-h%C3%BCgel-berg-583172/',
  },
  {
    localPath: '/images/hoch/petition-6788862_1920.jpg',
    title: 'Petition Unterschriftensammler',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/petition-unterschriftensammler-6788862/',
  },
  {
    localPath: '/images/justice-4100373_1920.jpg',
    title: 'Gerechtigkeit Waage Mensch',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/gerechtigkeit-waage-mensch-4100373/',
  },
  {
    localPath: '/images/stadium-2921657_1920.jpg',
    title: 'Stadion Sitzreihen Tribüne Sitzen',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/stadion-sitzreihen-trib%C3%BCne-sitzen-2921657/',
  },
  {
    localPath: '/icons/camera-icon.png',
    title: 'Kamera Kino Film Schwarz Kamera',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/vectors/kamera-kino-film-schwarz-kamera-159582/',
  },
  {
    localPath: '/images/bamboo-4315863_1920.jpg',
    title: 'Bambus Kunst Entwicklung Generation',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/bambus-kunst-entwicklung-generation-4315863/',
  },
  {
    localPath: '/images/teenager-8656620_1920.jpg',
    title: 'Teenager Treppe Sitzung Traurig',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/illustrations/teenager-treppe-sitzung-traurig-8656620/',
  },
  {
    localPath: '/images/college-student-2052868_1920.jpg',
    title: 'College Student Professor',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/illustrations/college-student-professor-2052868/',
  },
  {
    localPath: '/images/worker-5736096_1920.jpg',
    title: 'Arbeiter Schleifer Fabrik',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/arbeiter-schleifer-fabrik-5736096/',
  },
  {
    localPath: '/icons/book-150621_1920.png',
    title: 'Buchen Lesen Bibliothek Bildung',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/vectors/buchen-lesen-bibliothek-bildung-150621/',
  },
  {
    localPath: '/images/window-7209118_1920.jpg',
    title: 'Fenster Mauer Mauerwerk Alte Mauer',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/fenster-mauer-mauerwerk-alte-mauer-7209118/',
  },
  {
    localPath: '/images/desperate-5011953_1920.jpg',
    title: 'Verzweifelt Nachdenken Gestresst',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/verzweifelt-nachdenken-gestresst-5011953/',
  },
  {
    localPath: '/icons/interview-1018333_1920.png',
    title: 'Interview Arbeit Symbol',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/illustrations/interview-arbeit-symbol-1018333/',
  },
  {
    localPath: '/images/hands-1846428_1920.jpg',
    title: 'Hände Herz Rote Farbe Herzform',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/h%C3%A4nde-herz-rote-farbe-herzform-1846428/',
  },
  {
    localPath: '/icons/microphone-6662435_1920.png',
    title: 'Mikrofon Audio Stimme Aufzeichnung',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/vectors/mikrofon-audio-stimme-aufzeichnung-6662435/',
  },
  {
    localPath: '/images/evolution-4107273_1920.jpg',
    title: 'Evolution Entwicklung Zukunft Affe',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/evolution-entwicklung-zukunft-affe-4107273/',
  },
  {
    localPath: '/images/piano-6315809_1920.jpg',
    title: 'Klavier Instrument Tastatur',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/klavier-instrument-tastatur-6315809/',
  },
  {
    localPath: '/images/return-1825515_1920.jpg',
    title: 'Rücksendung Feedback Nachricht',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/r%C3%BCcksendung-feedback-nachricht-1825515/',
  },
  {
    localPath: '/images/artificial-intelligence-3382521_1920.jpg',
    title: 'Künstliche Intelligenz Gehirn Hirn',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/k%C3%BCnstliche-intelligenz-gehirn-hirn-3382521/',
  },
  {
    localPath: '/images/abstract-1264071_1920.png',
    title: 'Abstrakt Hintergrund Kinder Märchen',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/vectors/abstrakt-hintergrund-kinder-m%C3%A4rchen-1264071/',
  },
  {
    localPath: '/images/classroom-1660223_1920.jpg',
    title: 'Klassenzimmer Schule',
    author: 'Pixabay',
    pixabayUrl: 'https://pixabay.com/de/photos/klassenzimmer-schule-1660223/',
  },
  {
    localPath: '/images/hoch/family-5127719_1920.jpg',
    title: 'Familie Liebe Baby Kind Menschen',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/familie-liebe-baby-kind-menschen-5127719/',
  },
  {
    localPath: '/images/hoch/crafts-3676583_1920.jpg',
    title: 'Handwerk Schmiede Eisen Schmied',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/handwerk-schmiede-eisen-schmied-3676583/',
  },
  {
    localPath: '/images/hoch/street-coffee-444922_1920.jpg',
    title: 'Straßenkaffee Göteborg Schweden',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/stra%C3%9Fenkaffee-g%C3%B6teborg-schweden-444922/',
  },
  {
    localPath: '/images/hoch/boy-6133835_1920.jpg',
    title: 'Junge Schlau Streber Teenager',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/junge-schlau-streber-teenager-6133835/',
  },
  {
    localPath: '/images/hoch/woodburn-hall-1057364_1920.jpg',
    title: 'Holzfeuerhalle West Virginia',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/holzfeuerhalle-west-virginia-1057364/',
  },
  {
    localPath: '/images/hoch/bundestag-204772_1920.jpg',
    title: 'Bundestag Reichstag Hauptstadt',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/bundestag-reichstag-hauptstadt-204772/',
  },
  {
    localPath: '/images/hoch/graduation-2308406_1920.jpg',
    title: 'Abschluss Graduation Cap Bildung',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/abschluss-graduation-cap-bildung-2308406/',
  },
  {
    localPath: '/images/hoch/certificate-8696601_1920.jpg',
    title: 'Zertifikat Zeremonie Schüler Schule',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/zertifikat-zeremonie-sch%C3%BCler-schule-8696601/',
  },
  {
    localPath: '/images/hoch/solidarity-649713_1920.jpg',
    title: 'Solidarität Himmel Handschlag',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/solidarit%C3%A4t-himmel-handschlag-649713/',
  },
  {
    localPath: '/images/hoch/books-8934573_1920.jpg',
    title: 'Bücher Bibliothek Geschichte',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/b%C3%BCcher-bibliothek-geschichte-8934573/',
  },
  {
    localPath: '/images/children-5411350_1920.jpg',
    title: 'Kinder Junge Mädchen Bus Glücklich',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/kinder-junge-m%C3%A4dchen-bus-gl%C3%BCcklich-5411350/',
  },
  {
    localPath: '/images/family-6886803_1920.jpg',
    title: 'Familie Park Porträt PoC Familie',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/familie-park-portr%C3%A4t-poc-familie-6886803/',
  },
  {
    localPath: '/images/deutscher-bundestag-4965585_1920.jpg',
    title: 'Deutscher Bundestag Reichstagsgebäude',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/deutscher-bundestag-reichstagsgeb%C3%A4ude-4965585/',
  },
  {
    localPath: '/images/school-543041_1920.jpg',
    title: 'Schule Alt Holz Schiefertafel',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/schule-alt-holz-schiefertafel-543041/',
  },
  {
    localPath: '/images/money-2696219_1920.jpg',
    title: 'Geld Profitieren Finanzen Geschäft',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/geld-profitieren-finanzen-gesch%C3%A4ft-2696219/',
  },
  {
    localPath: '/images/solar-4867218_1920.jpg',
    title: 'Solar Solarenergie Solarstrom',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/solar-solarenergie-solarstrom-4867218/',
  },
  {
    localPath: '/images/hoch/boy-8474750_1920.jpg',
    title: 'Junge Kind Geländer Ansicht Stadt',
    author: 'Pixabay',
    pixabayUrl:
      'https://pixabay.com/de/photos/junge-kind-gel%C3%A4nder-ansicht-stadt-8474750/',
  },
];

const Bildnachweise = () => {
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <section className='bg-white'>
        <div className='innerBox'>
          <h1 className='text-3xl font-bold mb-8'>Bildnachweise</h1>

          <p className='mb-8 text-gray-700'>
            Wir bedanken uns bei den Fotografen und Künstlern von Pixabay für
            die Bereitstellung der Bilder unter der{' '}
            <a
              href='https://pixabay.com/de/service/license-summary/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              Pixabay-Lizenz
            </a>
            .
          </p>

          <div className='grid gap-6'>
            {imageCredits.map((credit, index) => (
              <div
                key={index}
                className='flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
              >
                <div className='flex-shrink-0'>
                  <div className='relative w-full md:w-48 h-32 bg-gray-200 rounded overflow-hidden'>
                    <Image
                      src={credit.localPath}
                      alt={credit.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 192px'
                    />
                  </div>
                </div>

                <div className='flex-grow flex flex-col justify-center'>
                  <h3 className='font-semibold text-lg mb-2'>{credit.title}</h3>
                  <p className='text-sm text-gray-600 mb-2'>
                    <strong>Autor:</strong> {credit.author}
                  </p>
                  <a
                    href={credit.pixabayUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline text-sm inline-flex items-center gap-1'
                  >
                    <span>Zur Bildquelle auf Pixabay</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className='pt-8 mt-8 border-t border-gray-200'>
            <p className='text-sm text-gray-500'>
              <strong>Hinweis:</strong> Alle Bilder stammen von{' '}
              <a
                href='https://pixabay.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                Pixabay
              </a>{' '}
              und werden gemäß der Pixabay-Lizenz verwendet. Die Bilder können
              ohne Nachfrage des Urhebers zu privaten und kommerziellen Zwecken
              kostenlos verwendet werden.
            </p>
            <p className='text-sm text-gray-500 text-center mt-4'>
              Letzte Aktualisierung: 08.12.2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bildnachweise;
