'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L, { MarkerCluster } from 'leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

interface IconPrototypeFix {
  _getIconUrl?: unknown;
}

delete (L.Icon.Default.prototype as IconPrototypeFix)._getIconUrl;

// Color mapping for different categories
const colorMap = {
  grundschule: '#9628fd',
  gemeinschaftsschule: '#28b3fd',
  realschule_gymnasium: '#1c7aac',
  initiativen: '#FFD700',
};

// Create custom colored icons for different categories
const createCategoryIcon = (
  category:
    | 'grundschule'
    | 'gemeinschaftsschule'
    | 'realschule_gymnasium'
    | 'initiativen'
) => {
  return L.divIcon({
    html: `<div style="
            background-color: ${colorMap[category]};
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        "></div>`,
    className: 'custom-category-marker',
    iconSize: [25, 25],
    iconAnchor: [12.5, 12.5],
  });
};

// Create legend control
const createLegendControl = () => {
  const legend = new L.Control({ position: 'topright' });

  legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'legend');
    div.style.cssText = `
            background: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            font-size: 14px;
            line-height: 18px;
            z-index: 400;
            margin-top: 50px;
        `;

    const legendItems = [
      { category: 'grundschule', label: 'Grundschule' },
      { category: 'gemeinschaftsschule', label: 'Gemeinschaftsschule' },
      {
        category: 'realschule_gymnasium',
        label: '(Werk-)Realschule, Gymnasium',
      },

      { category: 'initiativen', label: 'Initiativen' },
    ];

    let html =
      '<div style="margin-bottom: 5px; font-weight: bold;">Kategorien</div>';

    legendItems.forEach(item => {
      html += `
                <div style="display: flex; align-items: center; margin-bottom: 3px;">
                    <div style="
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        background-color: ${colorMap[item.category as keyof typeof colorMap]};
                        margin-right: 8px;
                        border: 2px solid white;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.3);
                    "></div>
                    <span>${item.label}</span>
                </div>
            `;
    });

    div.innerHTML = html;
    return div;
  };

  return legend;
};

type Initiative = {
  id: string;
  name: string;
  description?: string;
  latitude: number;
  longitude: number;
  link: string;
  category:
    | 'grundschule'
    | 'gemeinschaftsschule'
    | 'realschule_gymnasium'
    | 'initiativen';
};

const initiatives: Initiative[] = [
  {
    id: '1',
    name: 'ASW Wutöschingen',
    description:
      'Selbstorganisiertes Lernen statt Unterricht (Schmetterlingspädagogik)',
    latitude: 47.659764,
    longitude: 8.364378,
    link: 'https://asw-wutoeschingen.de ',
    category: 'gemeinschaftsschule',
  },
  {
    id: '2',
    name: 'Primusschule Münster Berg Fidel Geist',
    description: 'Verantwortungsteams & Länger gemeinsam lernen',
    latitude: 51.924613,
    longitude: 7.616089,
    link: 'https://www.primus-muenster.de/',
    category: 'realschule_gymnasium',
  },
  {
    id: '3',
    name: 'Stiftung Talenticum in CH Romanshorn',
    description:
      'außerschulischer Lernort für Schüler:innen, der dabei hilft, das volle Potenzial der jungen Menschen zu entfalten. Lehrkräfte können ihren Unterricht für eine Projektarbeit dorthin verlegen und Geräte, Materialien und Räumlichkeiten nutzen.',
    latitude: 47.565424,
    longitude: 9.371903,
    link: 'https://www.talenticum.swiss',
    category: 'initiativen',
  },
  {
    id: '4',
    name: 'Peter Fratton, CH',
    description: `gründete 1980 das erste Haus des Lernens mit seinem Konzept des autonomen Lernens in gestalteter Umgebung."  2020 arbeiteten bereits über 140 Schulen im In- und Ausland danach und stellen die Lernenden in den Mittelpunkt. Buch „Lass mir die Welt – verschule sie nicht"`,
    latitude: 47.563747,
    longitude: 9.362589,
    link: 'https://www.peterfratton.com',
    category: 'grundschule',
  },
  {
    id: '5',
    name: 'Neue Stadtschule St. Gallen',
    description: `innovative Privatschule, die Lernen neu denkt und begeistert, inspirierendes Basislager, von dem aus die Welt entdeckt, verstanden und aktiv mitgestaltet wird. 2014 von Peter Fratton zusammen mit der Unternehmerin Bettina Würth gegründet, `,
    latitude: 47.427383,
    longitude: 9.370321,
    link: 'https://neue-stadtschulen.ch/mittelstufe-st-gallen.html',
    category: 'grundschule',
  },
  {
    id: '6',
    name: 'Schulen im Aufbruch',
    description: `Begleitprogramm und Netzwerk für alle Schulen, die sich zu Lern- und Lebensorten entwickeln wollen, in denen die Potentialentfaltung, die Gesundheit und der Erwerb von Zukunftskompetenzen von Schüler*innen und Pädagog*innen im Mittelpunkt stehen. Wir unterstützen Schulen auf ihrem Weg hin zu einer Lernkultur der Potenzialentfaltung. 2012 gegründet von Margret Rasfeld, Prof. Gerald Hüther und Prof. Stefan Breidenbach, mit dem Ziel, Schulen dazu anzustiften, das historisch gewachsene Unterrichtverständnis kritisch zu prüfen, loszulassen und einen transformativen Weg zum neuen Lernen zu ermöglichen.`,
    latitude: 52.508695,
    longitude: 13.503651,
    link: 'https://schule-im-aufbruch.de/',
    category: 'grundschule',
  },

  {
    id: '7',
    name: 'FREI DAY Schule werden',
    description: `Regelmäßige Projektarbeit mindestens 4 Stunden am Stück. Am FREI DAY beschäftigen sich Kinder und Jugendliche mit aktuellen gesellschaftlichen und ökologischen Herausforderungen, die sich an den Global Goals **(SDGs) **der Vereinten Nationen orientieren. Sie finden Antworten auf selbstgewählte Zukunftsfragen. Sie entwickeln Zuversicht für ihre Zukunft, da sie sich als selbstwirksam und handlungsfähig erleben. Im Zentrum steht dabei die dreifache Verantwortung: Verantwortung für sich selbst, Verantwortung für Mitmenschen und Verantwortung für unseren Planeten.`,
    latitude: 52.508694,
    longitude: 13.503651,
    link: 'https://frei-day.org/',
    category: 'grundschule',
  },

  {
    id: '8',
    name: 'Lernkompass 2030',
    description: `Der OECD Lernkompass 2030 ist ein Rahmenkonzept für das Lernen/ Zukunftskompetenzen. Er beschreibt, welches Wissen, welche Fähigkeiten und Fertigkeiten, welche Haltungen und Werte Schülerinnen und Schüler brauchen, um ihr eigenes Leben und die Gesellschaft verantwortlich und zukunftsfähig zu gestalten. Das Ziel ist die Entwicklung einer umfassenden Gestaltungs- und Handlungskompetenz.`,
    latitude: 48.78126,
    longitude: 9.179122,
    link: 'https://km.baden-wuerttemberg.de/de/service/pressemitteilung/pid/3-fragen-3-antworten-diesmal-mit-kerstin-wilmans-ueber-den-oecd-lernkompass-2030 ',
    category: 'grundschule',
  },

  {
    id: '9',
    name: 'Deutscher Lehrkräftepreis',
    description: `z.B. Schulentwicklung - innovativer Unterricht: Fächerübergreifendes Projekt zum Thema Migration über 10 Wochen`,
    latitude: 52.514955,
    longitude: 13.388882,
    link: 'https://www.lehrkraeftepreis.de/preistraegerinnen/',
    category: 'grundschule',
  },

  {
    id: '10',
    name: 'Nelson-Mandela-Gesamtschule, Bergisch- Gladbach, NRW',
    description: `„Ich sehe dich und nehme dich wahr – so wie du bist, wo du herkommst und wo deine Wege hingehen. Ich suche und ich finde eine Stärke und baue dies aus.“ Diese Aussage des Kollegiums beschreibt treffend die Haltung der Lehrer:innen der Nelson-Mandela-Gesamtschule. Ihre grundlegende Idee, als inklusive Schule ein „Haus des Lernens“ für alle zu sein, steht im Sinne einer Potenzialentfaltungskultur und Stärkenorientierung im Zentrum der schulischen Entwicklung. Das Drei-Säulen-Modell der Nelson-Mandela-Gesamtschule fördert selbstregulierte Lernprozesse. Durch die Verzahnung von Fachunterricht, individueller Lernzeit, Projekt- und Werkstattlernen unterstützt die Schule den Wechsel und das Spannungsfeld von Instruktion und Konstruktion. Text: Jurymitglied Prof. Dr. Monika Buhl`,
    latitude: 50.979302,
    longitude: 7.1264328,
    link: 'https://nelson-mandela-gesamtschule.de/',
    category: 'grundschule',
  },
  {
    id: '11',
    name: 'Churer Modell',
    description: `Türöffner für Veränderung - Begleitung von Schulen «Das Bestechende am «Churermodell» ist, dass es die Basis für viele wesentliche Entwicklungen der heutigen Schule legt – sei es individualisierte Lernförderung, inklusive Schulungsform und integrative Begabungs- und Begabtenförderung.» (Lienhard 2012, S. 14)`,
    latitude: 46.8638024,
    longitude: 9.542317,
    link: 'https://churermodell.ch/',
    category: 'grundschule',
  },

  {
    id: '12',
    name: 'Paula-Fürst Schule, Freiburg',
    description: `Doppelbesetzungen mit Lehrkräften in den Kernfächern Deutsch, Mathe und Englisch, Bezugspädagog:innen, selbstreguliertes Lernen, im staatlich anerkannten Schulverbund mit Ganztagesangeboten, bestehend aus einer Grundschule (Klassen 1-4) und einer Gemeinschaftsschule mit gymnasialer Oberstufe (Klassen 5-13).`,
    latitude: 47.9877616,
    longitude: 7.8377031,
    link: 'https://paula-fuerst-schule.de/',
    category: 'initiativen',
  },

  {
    id: '13',
    name: 'Montessorischule Hofheim',
    description: `Kinderhaus mit Nest, staatliche anerkannte 6 jährige Grundschule, integrierte Gesamtschule 7-10 und Gymnasiale Oberstufe, 1996 von einer Elterninitiative gegründet und bis heute in freier Trägerschaft. Ganztagsschule - Vision: “Die Erziehung muss die Entwicklung der Individualität und die der Gesellschaft unterstützen. Ohne die Entwicklung des Einzelwesens kann es keine Entwicklung der Gesellschaft geben." (Maria Montessori)`,
    latitude: 50.076645,
    longitude: 8.4278975,
    link: 'https://www.montessori-hofheim.de/zentrum/das-zentrum/',
    category: 'grundschule',
  },

  {
    id: '14',
    name: 'Anne Frank Schule, Freiburg',
    description: `Doppelbesetzung seit 2001 Die Entwicklung des einzelnen Kindes steht bei uns im Mittelpunkt. „Menschliche Größe besteht nicht in Reichtum oder Macht, sondern in Charakter und Güte.`,
    latitude: 48.0036155,
    longitude: 7.8164793,
    link: 'https://www.annefrankgrundschule.de/',
    category: 'realschule_gymnasium',
  },

  {
    id: '15',
    name: 'Rosa-Luxemburg-Gemeinschaftsschule in Wittenberg, Sachsen-Anhalt',
    description: `4 Tage Schule, 1 Tag im Betrieb. Vor drei Jahren startete das Modellprojekt mit zwölf Schulen. Sachsen-Anhalt testet damit als erstes Bundesland eine Art Vier-Tage-Woche für Schüler:innen. An vier Tagen haben die Schüler:innen  regulären Unterricht, am fünften Tag finden analoge oder digitale Selbstlernzeiten, Projekttage oder – wie an der  Rosa-Luxemburg  GMS (offene Ganztagsschule) – Praxislerntage  für die Klassen 8 und 9 in einem Betrieb statt. „4+1“ heißt das Pilotprojekt deshalb. Schüler:innen und Betriebe lieben es und profitieren in der Praxis gegenseitig, berichtete uns die Schulleitung im direkten Gespräch.`,
    latitude: 51.8697611,
    longitude: 12.6469298,
    link: 'https://www.sks-luxemburg.bildung-lsa.de/',
    category: 'grundschule',
  },

  {
    id: '16',
    name: 'Grundschule  Hermann-Brommer-Schule in Merdingen ',
    description: `Inklusiv arbeitende Grundschule mit jahrgangsübergreifenden Klassen (134 Schüler in 7 Familienklassen). 2023 als Nominierte Schule zu den besten 15 Schulen beim Deutschen Schulpreis gekürt. Sich zu einer inklusiv arbeitenden Schule zu entwickeln, war und ist für alle Beteiligten eine große Herausforderung. Heute ist es an unserer Schule selbstverständlich, verschieden zu sein. Unsere Schule möchte ein Lebens- und Lernort für alle sein.`,
    latitude: 48.0199181,
    longitude: 7.6892058,
    link: 'https://www.hermann-brommer-schule.de/',
    category: 'grundschule',
  },

  {
    id: '18',
    name: 'Studentische Initiative zur Verbesserung der Lehrkräftebildung, Kreidestaub e.V.',
    description: `bundesweite Standorte, z.B. Freiburg`,
    latitude: 52.4791254,
    longitude: 13.4371564,
    link: 'https://www.kreidestaub.net/',
    category: 'grundschule',
  },

  {
    id: '20',
    name: 'Projektschulen, Robert Bosch Stiftung in Stuttgart',
    description: `Das Pilotprojekt Deeper Learning soll einen Wandel in der Lern- und Lehrpraxis von Schulen anstoßen. Kernstück ist die Verschränkung (inter-)disziplinärer Wissensaneignung mit ko-konstruktiven, ko-kreativen Problemlöseprozessen. Lernen geschieht dabei in hybriden Lernumgebungen aus schulischen, außerschulischen und digitalen Lebenswelten. Wichtig ist die Authentizität der Lernergebnisse, verknüpft mit formativem Leistungsfeedback.`,
    latitude: 48.777777,
    longitude: 9.1988152,
    link: 'https://www.bosch-stiftung.de/de/projekt/deeper-learning-projektschulen-baden-wuerttemberg',
    category: 'grundschule',
  },
];

// Legend component that adds the legend control to the map
function Legend({ isVisible }: { isVisible: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (!isVisible) return;

    const legend = createLegendControl();
    map.addControl(legend);

    return () => {
      map.removeControl(legend);
    };
  }, [map, isVisible]);

  return null;
}

// Benutzerdefinierte Cluster-Icon-Erstellung mit Ihren CSS-Variablen
const createClusterCustomIcon = (cluster: MarkerCluster) => {
  const childCount = cluster.getChildCount();

  return L.divIcon({
    html: `<div class="cluster-icon">
            <span class="cluster-text">${childCount}</span>
        </div>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(40, 40, true),
  });
};

function InitiativeMapClient() {
  const [activated, setActivated] = useState(false);
  const [showLegend, setShowLegend] = useState(!isMobile);
  const maxDescriptionLength = 130;

  useEffect(() => {
    // Hide zoom controls on mobile
    if (isMobile) {
      const style = document.createElement('style');
      style.innerHTML = `
                .leaflet-control-zoom {
                    display: none !important;
                }
            `;
      document.head.appendChild(style);

      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  return (
    <div className='relative h-[300px] sm:h-[500px] md:h-[650px] w-full rounded shadow z-0'>
      <MapContainer
        center={[51.1657, 10.4515]} // Mittelpunkt Deutschland
        zoom={6}
        scrollWheelZoom={false}
        touchZoom={true}
        className='h-full'
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={60}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
          zoomToBoundsOnClick={true}
          spiderfyDistanceMultiplier={1}
        >
          {initiatives.map(i => (
            <Marker
              key={i.id}
              position={[i.latitude, i.longitude]}
              icon={createCategoryIcon(i.category)}
            >
              <Popup
                className='initiative-popup'
                closeButton={true}
                autoPan={true}
                keepInView={true}
              >
                <div className='p-3'>
                  <h3 className='font-semibold text-base sm:text-lg mb-2 text-primary'>
                    {i.name}
                  </h3>
                  <p className='text-xs sm:text-sm mb-3 leading-relaxed'>
                    {i.description?.slice(0, maxDescriptionLength)}
                    {i.description &&
                      i.description.length > maxDescriptionLength &&
                      '...'}
                  </p>
                  <Link
                    href={i.link}
                    className='text-blue-600 underline text-sm block mt-1'
                    target={'_blank'}
                  >
                    Zur Webseite →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        <Legend isVisible={showLegend} />
      </MapContainer>

      {/* Legend Toggle Switch */}
      <div className='absolute top-2 right-2 z-[1000] bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 p-2  '>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-small text-gray-700'>Legende</span>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none  ${
              showLegend ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            title={showLegend ? 'Legende ausblenden' : 'Legende anzeigen'}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                showLegend ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobile && !activated && (
        <div
          className='absolute inset-0 bg-transparent backdrop-blur-sm cursor-pointer z-[999]'
          onClick={() => setActivated(true)}
        >
          <div className='absolute inset-0 flex items-center justify-center'>
            <span
              className='px-4 py-2 rounded-md shadow-lg transition-all duration-200 hover:shadow-xl'
              style={{
                backgroundColor: 'var(--color-neutral)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-poppins), sans-serif',
                fontWeight: '500',
              }}
            >
              Karte aktivieren
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default InitiativeMapClient;
