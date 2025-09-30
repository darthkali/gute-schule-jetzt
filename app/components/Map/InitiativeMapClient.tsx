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
    link: 'https://asw-wutoeschingen.de',
    category: 'gemeinschaftsschule',
  },
  {
    id: '2',
    name: 'Primusschule Münster Berg Fidel Geist',
    description: 'Verantwortungsteams & Länger gemeinsam lernen',
    latitude: 51.924614,
    longitude: 7.616089,
    link: 'https://www.primus-muenster.de/',
    category: 'gemeinschaftsschule',
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
    description:
      'gründete 1980 das erste Haus des Lernens mit seinem Konzept des autonomen Lernens in gestalteter Umgebung. 2020 arbeiteten bereits über 140 Schulen im In- und Ausland danach und stellen die Lernenden in den Mittelpunkt. Buch „Lass mir die Welt – verschule sie nicht"',
    latitude: 47.563747,
    longitude: 9.362589,
    link: 'https://www.peterfratton.com',
    category: 'initiativen',
  },
  {
    id: '5',
    name: 'Neue Stadtschule St. Gallen',
    description:
      'innovative Privatschule, die Lernen neu denkt und begeistert, inspirierendes Basislager, von dem aus die Welt entdeckt, verstanden und aktiv mitgestaltet wird. 2014 von Peter Fratton zusammen mit der Unternehmerin Bettina Würth gegründet',
    latitude: 47.427379,
    longitude: 9.370333,
    link: 'https://neue-stadtschulen.ch/mittelstufe-st-gallen.html',
    category: 'gemeinschaftsschule',
  },
  {
    id: '6',
    name: 'Schulen im Aufbruch',
    description:
      'Begleitprogramm und Netzwerk für alle Schulen, die sich zu Lern- und Lebensorten entwickeln wollen, in denen die Potentialentfaltung, die Gesundheit und der Erwerb von Zukunftskompetenzen von Schüler*innen und Pädagog*innen im Mittelpunkt stehen. 2012 gegründet von Margret Rasfeld, Prof. Gerald Hüther und Prof. Stefan Breidenbach.',
    latitude: 52.5086946,
    longitude: 13.5036513,
    link: 'http://www.schule-im-aufbruch.de',
    category: 'initiativen',
  },
  {
    id: '7',
    name: 'FREI DAY Schule werden',
    description:
      'Regelmäßige Projektarbeit mindestens 4 Stunden am Stück. Am FREI DAY beschäftigen sich Kinder und Jugendliche mit aktuellen gesellschaftlichen und ökologischen Herausforderungen, die sich an den Global Goals (SDGs) der Vereinten Nationen orientieren. Im Zentrum steht dabei die dreifache Verantwortung: Verantwortung für sich selbst, Verantwortung für Mitmenschen und Verantwortung für unseren Planeten.',
    latitude: 52.5086946,
    longitude: 13.5036513,
    link: 'https://frei-day.org/',
    category: 'initiativen',
  },
  {
    id: '8',
    name: 'Lernkompass 2030',
    description:
      'Der OECD Lernkompass 2030 ist ein Rahmenkonzept für das Lernen/ Zukunftskompetenzen. Er beschreibt, welches Wissen, welche Fähigkeiten und Fertigkeiten, welche Haltungen und Werte Schülerinnen und Schüler brauchen, um ihr eigenes Leben und die Gesellschaft verantwortlich und zukunftsfähig zu gestalten. Das Ziel ist die Entwicklung einer umfassenden Gestaltungs- und Handlungskompetenz.',
    latitude: 48.7812597,
    longitude: 9.1791215,
    link: 'https://km.baden-wuerttemberg.de/de/service/pressemitteilung/pid/3-fragen-3-antworten-diesmal-mit-kerstin-wilmans-ueber-den-oecd-lernkompass-2030',
    category: 'initiativen',
  },
  {
    id: '9',
    name: 'Deutscher Lehrkräftepreis',
    description:
      'z.B. Schulentwicklung - innovativer Unterricht: Fächerübergreifendes Projekt zum Thema Migration über 10 Wochen',
    latitude: 52.5149455,
    longitude: 13.3889068,
    link: 'https://www.lehrkraeftepreis.de/preistraegerinnen/',
    category: 'initiativen',
  },
  {
    id: '10',
    name: 'Nelson-Mandela-Gesamtschule',
    description:
      '„Ich sehe dich und nehme dich wahr – so wie du bist, wo du herkommst und wo deine Wege hingehen. Ich suche und ich finde eine Stärke und baue dies aus." Diese Aussage des Kollegiums beschreibt treffend die Haltung der Lehrer:innen der Nelson-Mandela-Gesamtschule. Ihre grundlegende Idee, als inklusive Schule ein „Haus des Lernens" für alle zu sein, steht im Sinne einer Potenzialentfaltungskultur und Stärkenorientierung im Zentrum der schulischen Entwicklung.',
    latitude: 50.979654,
    longitude: 7.1265999,
    link: 'https://nelson-mandela-gesamtschule.de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '11',
    name: 'Churer Modell',
    description:
      'Türöffner für Veränderung - Begleitung von Schulen «Das Bestechende am «Churermodell» ist, dass es die Basis für viele wesentliche Entwicklungen der heutigen Schule legt – sei es individualisierte Lernförderung, inklusive Schulungsform und integrative Begabungs- und Begabtenförderung.» (Lienhard 2012, S. 14)',
    latitude: 46.863819,
    longitude: 9.542337,
    link: 'https://churermodell.ch/',
    category: 'initiativen',
  },
  {
    id: '12',
    name: 'Paula-Fürst Schule, Freiburg',
    description:
      'Doppelbesetzungen mit Lehrkräften in den Kernfächern Deutsch, Mathe und Englisch, Bezugspädagog:innen, selbstreguliertes Lernen, im staatlich anerkannten Schulverbund mit Ganztagesangeboten, bestehend aus einer Grundschule (Klassen 1-4) und einer Gemeinschaftsschule mit gymnasialer Oberstufe (Klassen 5-13).',
    latitude: 47.9877745,
    longitude: 7.8376446,
    link: 'https://paula-fuerst-schule.de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '13',
    name: 'Montessorischule Hofheim',
    description:
      'Kinderhaus mit Nest, staatliche anerkannte 6 jährige Grundschule, integrierte Gesamtschule 7-10 und Gymnasiale Oberstufe, 1996 von einer Elterninitiative gegründet und bis heute in freier Trägerschaft. Ganztagsschule - Vision: "Die Erziehung muss die Entwicklung der Individualität und die der Gesellschaft unterstützen. Ohne die Entwicklung des Einzelwesens kann es keine Entwicklung der Gesellschaft geben." (Maria Montessori)',
    latitude: 50.0762589,
    longitude: 8.4287801,
    link: 'https://www.montessori-hofheim.de/zentrum/das-zentrum/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '14',
    name: 'Anne Frank Schule, Freiburg',
    description:
      'Grundschule mit Doppelbesetzung seit 2001 Die Entwicklung des einzelnen Kindes steht bei uns im Mittelpunkt. „Menschliche Größe besteht nicht in Reichtum oder Macht, sondern in Charakter und Güte."',
    latitude: 48.0034641,
    longitude: 7.8167483,
    link: 'https://www.annefrankgrundschule.de/',
    category: 'grundschule',
  },
  {
    id: '15',
    name: 'Rosa-Luxemburg-Gemeinschaftsschule in Wittenberg, Sachsen-Anhalt',
    description:
      '4 Tage Schule, 1 Tag im Betrieb. Vor drei Jahren startete das Modellprojekt mit zwölf Schulen. Sachsen-Anhalt testet damit als erstes Bundesland eine Art Vier-Tage-Woche für Schüler:innen. An vier Tagen haben die Schüler:innen regulären Unterricht, am fünften Tag finden analoge oder digitale Selbstlernzeiten, Projekttage oder – wie an der Rosa-Luxemburg GMS (offene Ganztagsschule) – Praxislerntage für die Klassen 8 und 9 in einem Betrieb statt.',
    latitude: 51.8695846,
    longitude: 12.6475379,
    link: 'https://www.sks-luxemburg.bildung-lsa.de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '16',
    name: 'Grundschule Hermann-Brommer-Schule in Merdingen',
    description:
      'Inklusiv arbeitende Grundschule mit jahrgangsübergreifenden Klassen (134 Schüler in 7 Familienklassen). 2023 als Nominierte Schule zu den besten 15 Schulen beim Deutschen Schulpreis gekürt. Sich zu einer inklusiv arbeitenden Schule zu entwickeln, war und ist für alle Beteiligten eine große Herausforderung. Heute ist es an unserer Schule selbstverständlich, verschieden zu sein. Unsere Schule möchte ein Lebens- und Lernort für alle sein.',
    latitude: 48.020016,
    longitude: 7.6893314,
    link: 'https://www.hermann-brommer-schule.de/',
    category: 'grundschule',
  },
  {
    id: '17',
    name: 'Erfolgreiches Lernen - Berner Vorschläge für die Schule der Zukunft',
    description:
      'Ideen, um Schülerinnen und Schülern das Lernen zu erleichtern und Lehrkräfte zu entlasten, gibt es viele. Doch welche taugen wirklich etwas? 2023',
    latitude: 46.948338,
    longitude: 7.452276,
    link: 'https://www.derbund.ch/bildung-kanton-bern-ideen-fuer-die-schule-der-zukunft-110984881858',
    category: 'initiativen',
  },
  {
    id: '18',
    name: 'Kreidestaub e.V. Studentische Initiative zur Verbesserung der Lehrkräftebildung',
    description: 'bundesweite Standorte, z.B. Freiburg',
    latitude: 52.4791254,
    longitude: 13.4371564,
    link: 'https://www.kreidestaub.net/',
    category: 'initiativen',
  },
  {
    id: '19',
    name: 'Deeper learning Konzept - Begriffsklärung',
    description:
      'Vortrag 26 min, Prof. Dr. Anne Sliwka, Uni Heidelberg: 21st Century skills (Kommunikation, Kollaboration, kritisches Denken und Kreativität), Fachliche und Basiskompetenzen, dialogische Leistungsentwicklung: 1) Instruktion und Aneignung 2) Ko-Konstruktion - z.B. Forscher-Plakate für Präsentation und Reflexion 3) Authentische Leistung als Ziel, die in der Lebenswelt sichtbar wird oder sogar eingreift. Lehrkräfte kommen weg aus der Vortänzerrolle und geben ihren Schüler:innen formatives Feedback.',
    latitude: 49.401917,
    longitude: 8.6803,
    link: 'https://test.de', //todo Seite updaten
    category: 'initiativen',
  },
  {
    id: '20',
    name: 'Projektschulen - Robert Bosch Stiftung in Stuttgart',
    description:
      'Das Pilotprojekt Deeper Learning soll einen Wandel in der Lern- und Lehrpraxis von Schulen anstoßen. Kernstück ist die Verschränkung (inter-)disziplinärer Wissensaneignung mit ko-konstruktiven, ko-kreativen Problemlöseprozessen. Lernen geschieht dabei in hybriden Lernumgebungen aus schulischen, außerschulischen und digitalen Lebenswelten. Wichtig ist die Authentizität der Lernergebnisse, verknüpft mit formativem Leistungsfeedback.',
    latitude: 48.7777288,
    longitude: 9.1988089,
    link: 'https://www.bosch-stiftung.de/de/projekt/deeper-learning-projektschulen-baden-wuerttemberg',
    category: 'initiativen',
  },
  {
    id: '21',
    name: 'Hamburg: Max-Brauer-Schule',
    description:
      'Vielfalt ist Reichtum, Stadtteilschule, 1-13 die um eine Schülerschaft wirbt, die in sozialer, kultureller und ethnischer Hinsicht sehr verschieden und in ihren Begabungen und Fähigkeiten breit gestreut ist.',
    latitude: 53.5610904,
    longitude: 9.9220154,
    link: 'https://www.maxbrauerschule.de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '22',
    name: 'Hamburg: Stadtteilschule Winterhude Reformschule',
    description:
      'inklusive Langformschule 1-13, Bildung des ganzen Menschen für die Gestaltung einer solidarischen, nachhaltigen und friedvollen Welt. Mut, Schule grundlegend zu verändern.',
    latitude: 53.5869848,
    longitude: 10.0269747,
    link: 'https://sts-winterhude.de',
    category: 'gemeinschaftsschule',
  },
  {
    id: '23',
    name: 'Köln: Inklusive Universitätsschule der Stadt Köln - Grundschule',
    description:
      'Lernen heißt Staunen … den Dingen auf den Grund gehen … immer neugieriger werden. Jahrgangsübergreifend in vier Lernlandschaften mit einem multiprofessionellen Team, ganztägig.',
    latitude: 50.9176974,
    longitude: 6.9120996,
    link: 'https://heliosschule.de/primarstufe/',
    category: 'grundschule',
  },
  {
    id: '24',
    name: 'Köln: Inklusive Universitätsschule der Stadt Köln - Gesamtschule, 5-13',
    description:
      'Teamschule, junge Menschen kompetent machen für die Auseinandersetzung mit den drängenden Fragen der Gegenwart!',
    latitude: 50.9019001,
    longitude: 6.9663668,
    link: 'https://heliosschule.de/sekundarstufe/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '25',
    name: 'Fritz Karsen Schule in Berlin',
    description:
      'Deutschlands älteste (seit 1948) staatliche Gemeinschaftsschule 1-13, Schule des gemeinsamen Lernens, Teamarbeit und demokratisch',
    latitude: 52.4484684,
    longitude: 13.4440121,
    link: 'https://www.fritz-karsen.de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '26',
    name: 'Bildungsschule Harzberg',
    description:
      'Bildung statt Selektion – wir machen eine Bildungsschule! Grundschule in freier Trägerschaft mit nicht verpflichtendem Nachmittags-Angebot, altersgemischter Lebens- und Lernraum, überfachlicher Unterricht, veröffentlichtes Konzept',
    latitude: 51.9280201,
    longitude: 9.2035191,
    link: 'https://www.bildungsschule-harzberg.de',
    category: 'grundschule',
  },
  {
    id: '27',
    name: 'Freie Schule Christophine',
    description:
      'Grundschule in freier Trägerschaft, Kinder sind Akteure des offenen Unterrichts, Selbstorganisation und Zusammenarbeit, Ermutigungsschule, tägliche Schulversammlungen',
    latitude: 48.9390607,
    longitude: 9.2550641,
    link: 'https://freie-schule-christophine.de',
    category: 'grundschule',
  },
  {
    id: '28',
    name: 'Siebengebirgsschule',
    description:
      'Mehr lernen mit weniger Unterricht Förderschule im Verbund, 1-10, Förderschwerpunkte Lernen, Emotionale-soziale Entwicklung und Sprache (LES), hat den klassischen Unterricht und Klassenräume weitgehend abgeschafft. eigenverantwortliches Lernen.',
    latitude: 50.6834228,
    longitude: 7.1467571,
    link: 'https://siebengebirgsschule.de/schule/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '29',
    name: 'Realschule - Rennbuckel',
    description:
      'als „Dorfgemeinschaft, bei dem jeder seine Stärken einbringen darf, ja geradezu soll!", ab Kl. 7 iPads und digital.learning.marketplaces.',
    latitude: 49.0247419,
    longitude: 8.3613113,
    link: 'https://rennbuckel.de/',
    category: 'realschule_gymnasium',
  },
  {
    id: '30',
    name: 'Waldparkschule',
    description:
      'Gemeinschaftsschule 1-13, Wir sind "Mehr als Schule"! Wir bieten Kindern und Jugendlichen einen Lern- , Erfahrungs- und Entwicklungsraum - personalisiertes Lernen',
    latitude: 49.376545,
    longitude: 8.705617,
    link: 'https://www.waldparkschule.de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '31',
    name: 'Paul-Maar-Schule',
    description:
      'inklusive Grundschule, Lernende sollen Autoren des eigenen Lebens sein! LEISTUNG macht SCHULE (LemaS), möchten andere Schulen mit Impulsen anstecken und Bildungslandschaft bereichern, Projekt-mit-Spaß-Lernen in 20 Ateliers, Selbstlernzeit (4h/Woche) - „Wer nicht mit der Zeit geht, geht mit der Zeit."',
    latitude: 50.2216671,
    longitude: 8.6808371,
    link: 'https://paul-maar-schule.de/',
    category: 'grundschule',
  },
  {
    id: '32',
    name: 'Wilhelm-Hausenstein-Gymnasium Durmersheim',
    description:
      '„ Unsere Welt ist vielfältig und in Bewegung. Unsere Schülerinnen und Schüler sollen sich in dieser Welt zurechtfinden, sie sich erschließen und verantwortlich mitgestalten. In guter Atmosphäre wollen wir sie darauf vorbereiten und die Entwicklung ihrer Persönlichkeit unterstützen." Fachlichkeit kombiniert mit gedeihlichem sozialem Miteinander, Fünftklässler mit zwei Klassenlehrer/innen und Patensystem, Wandel durch Schulraumgestaltung',
    latitude: 48.9353305,
    longitude: 8.2679849,
    link: 'https://www.whg-durmersheim.de/',
    category: 'realschule_gymnasium',
  },
  {
    id: '33',
    name: 'Begleitung von Schulen und Lehrkräften zur Schule der Zukunft/ Lüneburg',
    description: 'Mission Schulumfrage, Lernbegleitung FreiDay',
    latitude: 53.2481304,
    longitude: 10.4112658,
    link: 'https://bewirken.org/',
    category: 'initiativen',
  },
  {
    id: '34',
    name: 'Grundschule Borchshöhe',
    description:
      '„Man kann lernen von jedem, der begeistert ist.", Schule für alle, Lernen miteinander und miteinander, kein Unterricht im herkömmlichen Sinne, sondern Projektunterricht als wesentlicher Bestandteil unseres Schultages',
    latitude: 53.1882179,
    longitude: 8.6367114,
    link: 'https://schule-borchshöhe.de/grundschule/',
    category: 'grundschule',
  },
  {
    id: '35',
    name: 'Treibhäuser der Zukunft (Film)',
    description:
      'Film von Reinhard Kahl, Trendsetter 2004 - Das andere Lernen: Freiheit verbessert die Leistung',
    latitude: 53.5878084,
    longitude: 9.98567,
    link: 'https://test.de', //todo Seite updaten
    category: 'initiativen',
  },
  {
    id: '36',
    name: '„Leistung macht Schule", Bund-Länder-Initiative',
    description:
      'Förderung potenziell leistungsfähiger Schülerinnen und Schüler, aus Primar- und Sekundarbereich, Schulentwicklungsprojekt, Transfer der Ergebnisse in die Schullandschaft.',
    latitude: 50.851551606526485,
    longitude: 7.112412001688635,
    link: 'https://www.leistung-macht-schule.de/',
    category: 'initiativen',
  },
  {
    id: '37',
    name: 'Evangelische Gesamtschule Gelsenkirchen-Bismarck (EGG)',
    description:
      '5-10, Familienschule, Erziehung zu Zivilcourage und Toleranz, Lebensschule, Stadtteilschule',
    latitude: 51.5301327,
    longitude: 7.0999985,
    link: 'https://www.e-g-g.de/index.php/de/',
    category: 'gemeinschaftsschule',
  },
  {
    id: '38',
    name: 'Chemie am Zapfhahn – 4 Tage-Schule mit einem 5. Projekttag',
    description: 'z.B. an der Rosa-Luxemburg-Gemeinschaftsschule in Wittenberg',
    latitude: 51.869394,
    longitude: 12.648024,
    link: 'https://taz.de/Sachsen-Anhalt-foerdert-4-Tage-Schule/!6092557&s=Chemie%2Bam%2BZapfhahn/',
    category: 'initiativen',
  },
  {
    id: '39',
    name: 'Lasst uns zusammen Lernen lernen',
    description:
      'Buch: „Alles ist schwer, bevor es leicht ist" (Caroline von St. Ange)',
    latitude: 53.016994,
    longitude: 11.559325,
    link: 'https://www.learnlearningwithcaroline.com/',
    category: 'initiativen',
  },
  {
    id: '40',
    name: 'Lessmann Netzwerk',
    description: '',
    latitude: 53.904952,
    longitude: 10.662447,
    link: 'https://www.beate-lessmann.de/netzwerk-praxis.html',
    category: 'initiativen',
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
