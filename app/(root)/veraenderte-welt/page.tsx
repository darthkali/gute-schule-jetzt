import React from 'react';
import ImageTextFloatingSection from '@/app/components/text/ImageTextFloatingComponent';

const Page = () => {
  return (
    <div>
      <section>
        <div className={'innerBox'}>
          <h1>Veränderte Welt</h1>
          <ImageTextFloatingSection
            imageSrc='/images/teenager-8656620_1920.jpg'
            imageAlt='Teenager'
            imagePosition='left'
            caption={
              'Krisen und eine unerhört dynamische Veränderung der Lebens- und Arbeitswelt'
            }
          >
            <p>
              Wir leben in einer technisierten Gesellschaft und global
              vernetzten Welt, die den Menschen immer höhere Qualifikationen
              abfordert. Die Informationsmengen, die wir für das Funktionieren
              in Wirtschaft, Technik, Kultur und im täglichen Leben verarbeiten
              müssen, nehmen exponentiell zu. Digitalisierung und der Einsatz
              von Ki wird unsere Lebensbereiche stark beeinflussen und
              verändern.
            </p>
            <p>
              Konsum- und Kommunikationsgewohnheiten und die Arbeitswelt
              verändern sich damit rasant. Gleichzeitig stehen wir inmitten von
              Multikrisen: Klimawandel, Pandemie, Finanzkrise, Plastikflut,
              soziale Ungerechtigkeit, rücksichtsloser Lobbyismus, marode
              Infrastruktur … und ein Angriffskrieg mitten in Europa. In der
              Folge sind die Menschen verunsichert, verlieren mehr und mehr das
              Vertrauen in die Demokratie. Es hat sich eine zunehmenden Spaltung
              in der Gesellschaft und zunehmender Rechtsextremismus entwickelt.
              Hinzu kommt in Deutschland die Herausforderung durch den
              demographischen Wandel. Wir haben eine alternde Gesellschaft und
              brauchen an allen Ecken und Enden gut aufgestellte Fachkräfte.
            </p>
            <p>
              {' '}
              Die Grenzen des Wachstums sind seit den 70ger Jahren klar (Club of
              Rome). Ein demokratisches Europa hat sich 2024 - rund 50 Jahre
              später - darauf geeinigt, unsere natürlichen Lebensgrundlagen zu
              erhalten oder wiederherzustellen. Einzelkämpfertum und
              Wissensvermittlung alter Schule haben ausgedient. Wenn wir unsere
              Gesellschaft und Wirtschaft auf einen neuen Weg bringen wollen,
              müssen wir bereits bei der Bildung der Kinder ansetzen.
            </p>
          </ImageTextFloatingSection>
        </div>
      </section>

      <section
        className={
          'bg-[color:var(--color-secondary)] text-[color:var(--color-neutral)] '
        }
      >
        <div className={'innerBox'}>
          <ImageTextFloatingSection
            imageSrc='/images/gods-creation-7658099_1920.jpg'
            imageAlt='Raupe, Puppe und Schmetterling'
            imagePosition='right'
            caption={
              'Wir sind alle Lernende und brauchen Transformationskompetenz'
            }
          >
            <p>
              Welche Art der Bildung wollen wir unseren Kindern mitgeben? Es
              geht um alles: Wir haben in Deutschland Werte, die es immer wieder
              zu leben und realisieren gilt:
            </p>
            <p>
              {' '}
              Die Idee der demokratischen, toleranten und gerechten
              Gesellschaft. Das kann nur mit der Einbindung und der Beteiligung
              der breiten Gesellschaft und, angesichts unsers zunehmend
              dysfunktionalen Schulsystems, nur mit dem Aufbau einer neuen
              Bildungskultur gelingen. Inmitten akuter Krisen in einer immer
              komplexer werdenden Welt, gilt es also für viele ungelöste
              Aufgaben gemeinsam Handlungstrategien zu finden. Es geht um
              Lebenslanges Lernen, Teamgeist und den Willen zum Umdenken.
              Schaffen wir endlich Lernhäuser, in denen der Respekt vor dem
              Lebendigen gelebt wird. In denen nicht mehr der Unterricht oder
              der Lehrer im Mittelpunkt steht, sondern das Lernen, das Denken
              und die Kinder. Dafür sind wir alle verantwortlich und es gibt
              viel zu gewinnen: Zuversicht, Potentialentfaltung und (planetares)
              Wohlergehen.{' '}
            </p>

            <p>
              {' '}
              Die Schere zwischen Anspruch und Realität ist an vielen Orten noch
              groß, kann aber überwunden werden. Informieren Sie sich hier, wie
              das geht, wo das schon geschafft ist und was aufbruchswillige
              Menschen in Schulen, in Landes- oder Kommunalpolitik, in Betrieben
              oder als Wählerinnen und Wähler beitragen können.
            </p>
          </ImageTextFloatingSection>
        </div>
      </section>
    </div>
  );
};
export default Page;
