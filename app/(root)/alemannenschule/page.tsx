import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';
import MediaCard from '@/app/components/MediaCard';

const Page = () => {
  return (
    <div>
      <section>
        <div className='innerBox grid grid-cols-1 lg:grid-cols-4 mt-4'>
          <div className={'col-span-3'}>
            <h1>Alemannenschule Wutöschingen</h1>
            <p>
              Zur Schule gehen ohne Angst und Stress, dafür mit viel
              Eigenmotivation, Lernerfolg und Freude? In der vielfach
              ausgezeichneten Alemannenschule (ASW) in Baden-Württemberg (BW)
              ist das seit Jahren bereits gelebte Realität. Dass Schule auch
              ohne klassischen Unterricht, ja sogar ohne Klassenzimmer,
              funktioniert, hat der Schulleiter Stefan Ruppaner und sein Team
              inzwischen ausreichend bewiesen. 2010 war die ASW noch eine von
              Schließung bedrohte Hauptschule. Heute ist sie anerkannte
              „Zukunftsschule“, die unter anderem mit dem Deutschen Schulpreis
              2019 ausgezeichnet wurde. Die ASW verzichtet auf
              Frontalunterricht, feste Prüfungstermine und Jahrgangsklassen.
              Stattdessen leben Kinder und Lehrkräfte gegenseitige
              Wertschätzung, Kreativität, Freiheit und moderne
              Unterrichtsmethoden, losgelöst vom gängigen Schulmodell. Die
              Alemannenschule gilt heute deutschlandweit auch als Vorzeigeschule
              für digitale Transformation. Etwa 800 Schüler:innen von der 1.
              Klasse bis zum Abitur organisieren hier ihr Lernen selbstbestimmt.
              2022 wurde das erste Abitur an der Schule mit einem Durchschnitt
              von 1,7 abgelegt. Die Hälfte dieser Kinder hatten in der 5. Klasse
              keine Empfehlung für das Gymnasium. Zum Vergleich: In BW lag der
              Abitur-Durchschnitt zeitgleich bei 2,17.
            </p>

            <Button
              text='Zur Webseite der Schule'
              href='https://asw-wutoeschingen.de/'
              bgColor='bg-[color:var(--color-primary)]'
              textColor={'text-[color:var(--color-neutral)]'}
              newTab={true}
            />
          </div>
          <Image
            src={'/images/Kinderbilder/kids-3171905_19205.png'}
            alt={'imageAlt'}
            width={500}
            height={600}
            className='w-full h-auto hidden lg:block'
          />
        </div>
      </section>
      <section className={'bg-[color:var(--color-secondary)]'}>
        <div className={'innerBox'}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-10'>
            <MediaCard
              title='Stefan Ruppaner:'
              text={
                <>
                  Schule ohne Unterrichtsstunden – Die Alemannenschule in
                  Wutöschingen <br />
                  <span className='italic text-sm'>45 min</span>
                </>
              }
              buttonTitle='zum Podcast'
              buttonHref='https://www.swr.de/wissen/stefan-ruppaner-wie-die-alemannenschule-in-wutoeschingen-funktioniert-102.html'
              imageSrc={'/icons/microphone-6662435_1920.png'}
            />

            <MediaCard
              title='Podcast Kein Stundenplan- Kein Gong'
              text={
                <>
                  an dieser Schule läuft alles anders <br />{' '}
                  <span className={'italic text-sm'}>41 min</span>
                </>
              }
              buttonTitle='zum Podcast'
              buttonHref='https://www.badische-zeitung.de/podcast-kein-stundenplan-kein-gong-an-dieser-schule-in-wutoeschingen-laeuft-alles-anders'
              imageSrc={'/icons/microphone-6662435_1920.png'}
            />

            <MediaCard
              title='Lehrerausbildung taugt nicht für zeitgemäße Schule'
              text={
                <>
                  Stefan Ruppaner, Schulleiter der Alemannenschule Wutöschingen
                </>
              }
              buttonTitle='zum Interview'
              buttonHref='https://www.news4teachers.de/2024/03/lehrerausbildung-taugt-nicht-fuer-zeitgemaesse-schule-stefan-ruppaner-schulleiter-der-alemannenschule-wutoeschingen-im-interview/'
              imageSrc={'/icons/interview-1018333_1920.png'}
            />

            <MediaCard
              title='Zischup BZ Interview'
              text={
                <>
                  Lieb haben und alle Möglichkeiten bieten <br />{' '}
                  <span className={'italic text-sm'}>4 min</span>
                </>
              }
              buttonTitle='zum Interview'
              buttonHref='https://www.badische-zeitung.de/lieb-haben-und-alle-moeglichkeiten-bieten'
              imageSrc={'/icons/interview-1018333_1920.png'}
            />

            <MediaCard
              title='Buch/ Spiegelbestseller 2025 -  Das könnte Schule machen'
              text={
                'Wie ein engagierter Pädagoge unser Bildungssystem revolutioniert'
              }
              buttonTitle='zum Buch'
              buttonHref='https://www.rowohlt.de/buch/stefan-ruppaner-anke-willers-das-koennte-schule-machen-9783499016394'
              imageSrc={'/icons/book-150621_1920.png'}
            />
            <MediaCard
              title='Video-Podcast der niedersächsischen Kultusministerin Julia Willie Hamburg mit Stefan Ruppaner'
              text={
                <>
                  Bildung: Herausforderungen und neue Lösungen <br />{' '}
                  <span className={'italic text-sm'}>50 min</span>
                </>
              }
              buttonTitle='zum Podcast'
              buttonHref='https://www.mk.niedersachsen.de/startseite/aktuelles/presseinformationen/video-podcast-der-kultusministerin-folge-2-mit-stefan-ruppaner-241924.html'
              imageSrc={'/icons/microphone-6662435_1920.png'}
            />

            <MediaCard
              title='Das Materialnetzwerk  der ASW'
              text={'Lernmaterialien für Selbstorganisiertes Lernen'}
              buttonTitle='zu den Lernmaterialien'
              buttonHref='https://www.mnweg.org/'
              imageSrc={'/icons/book-150621_1920.png'}
            />

            <MediaCard
              title='Übersichtliche Informationen zur ASW'
              buttonTitle='zu den Informaionen'
              buttonHref='https://bildungsimpuls.com/alternative-schulsysteme/die-alemannenschule-wutoeschingen-ein-revolutionaeres-bildungskonzept-fuer-das-21-jahrhundert/'
              imageSrc={'/icons/book-150621_1920.png'}
            />
          </div>
        </div>
      </section>

      <section>
        <div className={'innerBox'}>
          <h2 className={' mb-8'}>
            Interessantes zur Schulpraxis im Überblick{' '}
          </h2>

          {(() => {
            const highlights = [
              {
                title: 'Abschlüsse',
                text: 'Die Alemannenschule Wutöschingen (ASW) ist eine Gemeinschaftsschule, die Kinder und Jugendliche von Klasse 1 bis 13 auf ihrem Bildungsweg begleitet und ihnen drei Abschlüsse ermöglicht: Hauptschulabschluss, Realschulabschluss und Abitur. Nicht nur im Abitur, sondern auch bei Vergleichsarbeiten der 8. Klasse schneiden die Jugendlichen der Alemannenschule überdurchschnittlich gut ab.',
                highlight: false,
              },
              {
                title: 'Gemeinsam & individuell',
                text: 'Die ASW arbeitet mit dem Ziel, jedem Kind einen individuellen Lernweg zu ermöglichen: auf vielfältigen Wegen mit vielfältigen Menschen an vielfältigen Orten zu vielfältigsten Zeiten mit vielfältigen Materialien in vielfältigen Schritten mit vielfältigen Ideen in vielfältigen Rhythmen zu gemeinsamen Zielen.',
                highlight: true,
              },
              {
                title: 'Haltungsänderung',
                text: 'Wesentliche Grundlage ist hier die Änderung der Haltung: nämlich die Transformation von Schule als einem Ort des Lehrens hin zu einem Ort des Lernens! In dieser Schule wird alles dafür getan, dass die Kinder selbstständig lernen können. Es findet kaum noch regulärer Unterricht statt. Dieser wird durch die Schmetterlingspädagogik ersetzt, deren beide Flügel zum einen das selbstorganisierte Lernen und zum anderen das Lernen durch Erleben sind. Schüler:innen heißen hier Lernpartner:innen und Lehrkräfte Lernbegleiter:innen.',
                highlight: false,
              },
              {
                title: 'Raum',
                text: 'Eine wesentliche Rolle spielt der schön gestaltete Raum als dritter Pädagoge. Dazu gehören eine klare Struktur und Achtsamkeit, z.B. gilt im ganzen Haus eine Hausschuhkultur. Gemäß dem Motto von Innenarchitektin Doris Fratton: &ldquo;Schönes schafft Schönes - Verwahrlosung schafft Verwahrlosung!&rdquo; Jeder Lernraum hat eine spezifische Funktion - Input, Einzelarbeit, Teamarbeit, Coaching usw. - damit sich die Lernpartner:innen emotional in ihr Tun einfinden können. Hier sollen sich alle Personen wohlfühlen und bestmögliche Lern- und Arbeitsbedingungen vorfinden.',
                highlight: true,
              },
              {
                title: 'Neue Organisation des Lernens',
                text: '&ldquo;Wir haben festgestellt, dass Unterricht das Lernen behindert. Deshalb braucht der Lehrer keine klassischen 28 Unterrichtsstunden mehr zu halten. Dafür sind die Kollegen aber 35 Zeitstunden anwesend. Wer eine Lerngruppe leitet, hat nur noch ein Deputat von 12 Stunden und ist den Rest der Zeit für die Kinder da. Je weniger Unterricht wir haben, desto besser sind die Ergebnisse. In Mathe haben wir an der Alemannenschule bis Klasse 10 keine einzige Unterrichtsstunde mehr. Wir bieten stattdessen etwa 20-minütige inhaltliche Inputs an. Durch die neue Organisation des Lernens gibt es außerdem auch keine Unterrichtsausfälle mehr. Die Lernbegleiter begleiten in kurzen, freiwilligen Inputs und führen zwei Clubs pro Woche am Nachmittag durch, für die sich die Kinder gemäß ihren Interessen bewerben können.&rdquo;',
                highlight: false,
              },
              {
                title: 'Doppelt so viele Lehrer:innen?',
                text: 'Die meisten Besucher der ASW wundern sich über die vielen Lehrer:innen, die sie im Schulhaus sehen und fragen dann, ob die ASW doppelt so viele Lehrer:innen habe. Das ist nicht der Fall: In der ASW sind die Lehrer:innen eben hier bei den Lernenden und nicht zu Hause.',
                highlight: true,
              },
              {
                title: 'Zwei Seiten der Schmetterlingspädagogik',
                text: 'Statt regulärem Unterricht setzt die ASW konsequent auf Selbstorganisiertes Lernen (SoL) und Lernen durch Erleben (LdE). Diese besteht aus zwei Seiten: Das eine Flügelpaar steht für das selbstorganisierte Lernen, für das die ASW viele Werkzeuge entwickelt hat, wie Coaching, Graduierung, Lernmaterialien, Arbeiten in Peergroups usw. Das funktioniert frei von Zeit und Raum, also wann, wo und mit wem man will. Das andere Flügelpaar steht für das Lernen durch Erleben. Dazu gehören alle Projekte, die gemeinsam stattfinden: Lernen im Wald oder auf dem Bauernhof, Musicals üben und aufführen, Basketballmannschaften gründen, Exkursionen usw.',
                highlight: false,
              },
              {
                title: 'Veränderungen gestalten',
                text: 'Die Schule hat sich ab 2010 auf den Weg gemacht, Schule und Lernen neu zu gestalten. Die Schüler:innen lernen an dieser Schule selbstständig. Doch nicht mit Schulbüchern, sondern jede:r Jugendliche bekommt ein Tablet, mit dem er/sie auf digitalen Lernplattformen arbeiten kann. Statt der Klassenzimmer gibt es offene Lernlandschaften: sogenannte Inputräume und Lernateliers. Wände wurden dafür herausgerissen und damit ganz sichtbar das alte System zerschlagen.',
                highlight: true,
              },
              {
                title: 'Lernorte',
                text: 'In den Inputräumen haben die Schüler:innen pro Woche eine Unterrichtsstunde in jedem Hauptfach, ansonsten gibt es keinen Frontalunterricht. Im Lernatelier sitzen Jugendliche unterschiedlichen Alters auf Holzbalkonen und arbeiten. Jeder hat dort seinen festen Platz mit einem Schreibtisch und einem Schrank. Trotz der vielen Schüler:innen wird im Lernatelier nur geflüstert, was gut funktioniert. Sie haben auch noch andere Orte mit Sitzmöglichkeiten, an denen sie lernen können, z.B. die English Corner, Schulgarten, Bauernhof, Rathaus…',
                highlight: false,
              },
              {
                title: 'Lernschritte',
                text: 'Stundenpläne schreiben sich die Schüler:innen selbst, die sich hier Lernpartner:innen nennen. Sie können sich aussuchen, wann sie was lernen. Wenn sie Fragen zum Stoff haben, wenden sie sich an die Lernbegleiter:innen. So werden die Lehrkräfte genannt. Wenn man ein Thema sicher verstanden hat, schreibt man statt einer Klassenarbeit zu einem Zeitpunkt, den man selbst wählt, einen Gelingensnachweis. Die Schüler:innen haben außerdem jede Woche ein Coachinggespräch mit den Lernbegleiter:innen, in dem die weiteren Lernschritte besprochen werden. Am Nachmittag wählt man einen Workshop, zum Beispiel Imkern, Filme drehen oder man kümmert sich um die Tiere auf einem Bauernhof.',
                highlight: true,
              },
              {
                title: 'Kompetenzraster und Materialpakete',
                text: 'Grundlage sind die an der ASW entwickelten Kompetenzraster, die stets vom Lernenden aus gedacht sind. Darauf finden die Lernpartner:innen alle Inhalte, die in den jeweiligen Fächern im Laufe eines Schuljahres zu erarbeiten sind. Durch die Kompetenzraster sind sie in der Lage, ihr Lernen selbstständig zu organisieren und sich selbst für Lerninhalte zu entscheiden. Es stehen Materialpakete für sämtliche Haupt- und Nebenfächer zur Verfügung.',
                highlight: false,
              },
              {
                title: 'Materialnetzwerk',
                text: 'Dazu wurde eine gemeinnützige Genossenschaft gegründet. Die stellt hochwertige Materialien fürs selbstorganisierte Lernen für jede Schulform kostenlos zur Verfügung. Darin sind Erklärfilme und vielfältige Arbeitsmaterialien in verschiedenen Schwierigkeitsgraden enthalten sowie Teilziele formuliert. Das Kind arbeitet selbständig damit und wählt dann auch aus, wann es einen Gelingensnachweis über das Erreichen seiner Teilziele erbringen möchte. Die Gebühr für ein iPad kostet die Eltern 9 € pro Monat.',
                highlight: true,
              },
              {
                title: 'Coaching als wichtigstes Strukturelement',
                text: 'Jedes Kind hat pro Woche eine Viertelstunde Gespräch mit seiner Lernbegleiterin oder seinem Lernbegleiter, so werden hier die Lehrkräfte genannt. Dort berichtet der/die Jugendliche, was er in der kommenden Woche vorhat. Und wenn er/sie Probleme hat, bespricht er diese, dann vermittelt ihm der Coach einen fortgeschrittenen Lernenden oder eine Lernbegleitung, die helfen kann.',
                highlight: false,
              },
              {
                title: 'Graduierung als zweitwichtigstes Strukturelement',
                text: 'Jedes Kind hat einen bestimmten Status. Es beginnt als Starter:in. Damit gehen klar definierte Rechte und Pflichten einher. Kommt ein:e Schüler:in damit nicht klar, wird er/sie Neustarter:in, mit weniger Rechten, muss z.B. in der Nähe der Lernbegleitung lernen. Ein:e Starter:in hat mehr Rechte, ein:e Durchstarter:in noch mehr. Und ein Lernprofi übernimmt auch Verantwortung für das Lernen anderer - ist Mathe-Mentor:in oder Assistant-Coach in Englisch.',
                highlight: true,
              },
              {
                title: 'Schüler:innen, die es nicht so gut können',
                text: 'gibt es auch in der inklusiven ASW. Aber obwohl es praktisch keinen Deutschunterricht mehr gibt, sind die Kinder hier wesentlich besser im Lesen und in der Rechtschreibung als im Landesdurchschnitt. Das haben die VERA-Vergleichsarbeiten gezeigt. In der ASW lernen natürlich auch geistig- und lernbehinderte Kinder, wenn es nicht lesen kann, dann ist das völlig ok. Die ASW hat auch hier wesentlich bessere Ergebnisse.',
                highlight: false,
              },
            ];

            return (
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 shadow-lg bg-primary text-neutral`}
                  >
                    <h3 className='text-xl font-semibold mb-4 text-accent'>
                      {item.title}
                    </h3>
                    <p
                      className='leading-relaxed'
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>
    </div>
  );
};
export default Page;
