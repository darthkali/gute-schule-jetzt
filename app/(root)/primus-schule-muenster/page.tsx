import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';
import MediaCard from '@/app/components/MediaCard';

const Page = () => {
  const infoCardContents = [
    'Jahrgangsgemischte Klassen 1-10.  Alle Schülerinnen und Schüler lernen vom 1. Schuljahr bis zu ihrem bestmöglichen Schulabschluss in einer Schule. Keine Noten bis einschließlich Klasse 8,  Rückmeldungen in Berichtszeugnissen.',
    'Gebundener verpflichtender Ganztag für alle Kinder bis zum 10. Schuljahr. Verpflichtendes Mittagessen.',
    'Jedes! Kind des nahen Umfeldes wird aufgenommen. 20-40% davon, also mehr als 100 von 550 SchülerInnen haben offiziell sonderpädagogischen Unterstützungsbedarf.',
    'Grundlage ist die inklusive interkulturelle, behindertengerechte, jungen- und mädchengerechte Erziehung. Es gibt über Jahrzehnte entwickelte, friedenstiftende Traditionen interkultureller und interreligiöser gemeinsamer Feiern. Damit wird die angebahnte vertrauensvolle Zusammenarbeit mit den Familien aus 50 Nationen kontinuierlich fortgesetzt. Sie wirken erfolgreich diskriminierenden Strukturen entgegen und wertschätzen die Vielfalt.',
    'Das Konzept - Länger gemeinsam: Die Schülerinnen und Schüler bleiben von Klasse 1 bis 10 an der selben Schule, es gibt also keinen Wechsel mehr von der Grundschule zur weiterführenden Schule. Die Ergebnisse zeigen, dass die Lernfortschritte der Kinder alle Erwartungen übertreffen.',
    'Jahrgangsgemischtes, inklusives Lernen, um mehr effektive Lernzeit für die Kinder zu gewinnen. Die Klassen sind altersgemischt: Jg 1-3, 4-6, 7-9. Diese Vielfalt ermöglicht Peer-learning, Peer-Tutoring (von und miteinander lernen) und mehrperspektivisches Lernen. Die Potentiale der SchülerInnen entwickeln sich, weil dafür gesorgt wird, dass sich die Lernenden gegenseitig anregen und unterstützen; kurz, weil sie miteinander und von einander lernen können.',
    'Ein verlässlich, auf Jahre hinaus angelegtes, klasseneigenes multiprofessionelles Verantwortungsteam (Lehrkräfte/ Sonderpädagogen, Erzieher:in, Integationshelfer:in, Studierende über Honorarstellen…) ermöglicht systematische und einheitliche Förderung aller Kinder. Die Klassenlehrer:innen leiten ihre Teams und sind verantwortliche Hauptansprechpartner:innen. Jeden Montag findet die Teamsitzung statt. Alle  6-8 Wochen gibt es Supervision und 2 x pro Jahr einen Teamtag. Die Vertretungsregelung erledigt das klasseneigene Team für sich, dadurch entsteht Entlastung für die Schulleitung.',
    'Grundhaltung: Die festen Pädagogenteams sind entschlossen, keinen Schüler aufzugeben, sowie allen das Denken zu lehren. Sie sorgen für Lernzuwachsmöglichkeiten bei allen Schüler:innen. „Wir sind alle dazu da, das Lernen jedes einzelnen Kindes herauszufordern und die Kinder bei diesem Prozess zu unterstützen, ihnen zu helfen und sie verlässlich zu begleiten. Dafür müssen wir in Beziehung treten.“ (S.40 Teambuch Inklusion).',
    'Vorteil der Mehrperspektivität: „Die Teammitglieder stehen täglich in der Beziehung zu den Lernenden und beobachten die individuellen, entwicklungslogischen Zugänge jedes Einzelnen und können unmittelbar reagieren. Dabei entstehen vielfältige spezifische Sichtweisen auf jedes Kind. Kritische Situationen und stoffliche Hürden können aus verschiedenen Perspektiven beleuchtet und Hilfen individuell abgestimmt werden. Fehlentscheidungen sind weniger wahrscheinlich als bei Lehrkräften, die als Einzelkämpfer arbeiten.“ (S.174 Teambuch Inklusion)',
    'Jede Klasse hat zwei Räume - dafür sind viele Fachräume weggefallen und Mittagessen gibt es in den Klassenräumen der Jahrgänge 1-3, ansonsten in der Mensa.',
    'Die PRIMUS Schule - Berg Fidel - Geist erfüllt die Ansprüche der Stundentafeln der Grundschule und der integrativen Sekundarschule in NRW. In den besonderen Lernformen und Erfahrungsfeldern wie z.B. Projekt, Werkstatt und Freie Arbeit oder Freien Forscher Clubs werden sie umgesetzt. Lernen in Gemeinschaft an selbstgewählten Sachthemen fördert den eigenen Antrieb, das Methodenlernen, die Selbständigkeit und die Erfahrung von Selbstwirksamkeit.',
    'Lernen mit Begleitung: Die Leistungsanforderungen werden so formuliert und strukturiert, dass jeder Schüler die für sein Leistungsniveau passenden Aufgaben (mit Unterstützung) finden und erfolgreich bearbeiten kann… Drei wichtige Fragen beschäftigen die Schüler dabei: Was habe ich schon geschafft?, Wo stehe ich? und Was sind meine nächsten Schritte?',
    'Für den Lernfortschritt ist es immer wichtig, dass die Anforderungen kontinuierlich wachsen und passend an den Lernvoraussetzungen anknüpfen. Dafür braucht es eine pädagogische Beziehung, die von Ermutigung und solidarischer Begleitung geprägt ist (Prengel). Auch John Hattie fordert die Koordinierung der pädagogischen Arbeit im Klassenzimmer. Denn: Wechselt die Bezugsperson häufig, so fehlt die beständige Auseinandersetzung an den Herausforderungen, den challenging learning intentions (S.172-3 Teambuch Inklusion).',
    'Feedback- und Fehlerkultur: Kooperatives und kommunikatives Lernen führt zu besseren Schülerleistungen (S.110 Teambuch Inklusion). Tragende und entspannte, freudige Beziehungen innerhalb der Klasse bei der freien Arbeit sind das Fundament für eine eigene Entwicklung (S.107 Teambuch Inklusion).',
    'Klassenrat und Schüler:innenparlament: In jeder Klasse bis zum Schulabschluss gibt es jede Woche eine Stunde innovativen Klassenrat. Hier bearbeiten die Kinder existenzielle Themen, meistern Peer-Konflikte und entwickeln sich zu selbstbewussten Persönlichkeiten. Im realen Lebenszusammenhang wird Verantwortung gelernt. „Wir glauben an unsere Schüler:innen, dass sie ihre Dinge mit Unterstützung selbst regeln werden.“ Mit diesem Ansatz eröffnet sich ein Schulalltag, der Kinder ganzheitlich stärkt und das Gemeinschaftsgefühl nachhaltig fördert. (siehe Buch "Klassenrat", Reinhard Stähling)',
  ];

  return (
    <div>
      <section>
        <div className='innerBox grid grid-cols-1 lg:grid-cols-4 mt-4'>
          <div className={'col-span-3'}>
            <h1>PRIMUS Schule Münster - Berg Fidel - Geist</h1>

            <p>
              Diese Schule wurde 1970 als Grundschule Berg Fidel gegründet und
              2014 zu einer wohnortnahen Schule von 1-10 im sozialen Brennpunkt
              ausgebaut. Die Schule wurde 2012 deutschlandweit bekannt durch den
              Dokumentarfilm „ Berg Fidel – eine Schule für alle“.
            </p>

            <p>
              Das Besondere: Jede Klasse hat, auf Jahre angelegt, ein eigenes
              multiprofessionelles Team aus Lehrkräften, Sonderpädagog:innen und
              sozialpäd. Fachkräften, Praktikant:innen oder Studierenden. Die
              festen Erwachsenenteams bilden eine Verantwortungsgemeinschaft,
              die jedem Kind vermittelt: „Du gehört zu uns.“{' '}
            </p>
            <p>
              Dadurch werden stabile und solidarische Gemeinschaftsstrukturen
              geschaffen, in denen alle Kinder Verlässlichkeit erfahren. Die
              Erwachsenen sind gemeinsam für sämtliche pädagogischen Aufgaben
              und für alle Kinder verantwortlich. Das klasseneigene Team
              organisiert auch seinen eigenen Stundenplan. Um die Woche zu
              planen, über Schüler:innen zu sprechen und die pädagogische Arbeit
              zu koordinieren oder Schülerzeugnisse/sonderpäd. Gutachten
              gemeinsam zu besprechen, haben alle Teams gleichzeitig
              Montagnachmittags von 13.15 bis 14.45 Uhr Teamsitzungen in ihrem
              Klassenraum. Dies geschieht in der selben Zeit, damit die Teams
              untereinander in kurzen Wegen Absprachen treffen können. So kann
              gemeinsam mit mehrperspektivischem Blick die Entwicklung jedes
              einzelnen Kindes gefördert werden. Anstelle von
              Unterrichtsausfall, Leerlauf-Vertretungen und Einzelkämpfertum
              treten sinnorientiertes Projekt-Lernen, Verlässlichkeit und
              tragende Beziehung.{' '}
            </p>

            <p>Zu den Erfolgsbedingungen gehören:</p>
            <ul>
              <li>
                Solidarische inklusive Grundhaltung: Jedes Kind kann lernen- Du
                gehörst zu uns!
              </li>
              <li>
                Ständige Koordination der Arbeit im klasseneigenen Team: Kinder
                brauchen klare , im Team abgesprochene und sich nicht
                widersprechende Vorgehensweisen, die ihnen Sicherheit geben
                können.
              </li>
              <li>Kontinuität fester Teams über Jahre.</li>
              <li>
                Ständige interne Aus- und Fortbildungen, berufsbegleitend,
                während der konkreten Arbeit.
              </li>
            </ul>

            <Button
              text='Zur Webseite der Schule'
              href='https://www.primus-muenster.de/'
              bgColor='bg-[color:var(--color-primary)]'
              textColor={'text-[color:var(--color-neutral)]'}
              newTab={true}
            />
          </div>
          <Image
            src={'/images/Kinderbilder/kids-3171905_19202.png'}
            alt={'imageAlt'}
            width={500}
            height={600}
            className='w-full h-auto hidden lg:block'
          />
        </div>
      </section>
      <section className={'bg-[color:var(--color-secondary)]'}>
        <div className={'innerBox'}>
          <h2 className={'text-[color:var(--color-neutral)] mb-8'}>
            Spannende Medien und Links
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto '>
            <MediaCard
              title='Qualitätsentwicklung in Schulen, Lernpfade in die inklusive Pädagogik. '
              text={
                <>Interview mit Reinhard Stähling und Barbara Wenders 19 min</>
              }
              buttonHref='https://www.youtube.com/watch?v=pZtgrZWfjG4'
            />

            <MediaCard
              title='Ein Dokumentarfilm der zeigt, wie inklusives Lernen funktionieren kann'
              text={
                <>
                  Wenn Kinder nicht von klein auf lernen, dass die Menschen
                  verschieden sind, wann dann? Ein wichtiger Beitrag zum Thema
                  Inklusion und ein Film, den alle Lehrer, Erzieher und Eltern
                  sehen sollten
                </>
              }
              buttonTitle='zum Film'
              buttonHref='https://www.wfilm.de/berg-fidel-eine-schule-fuer-alle/'
              imageSrc={'/icons/camera-icon.png'}
            />

            <MediaCard
              title='Nicht fragen- einfach machen'
              buttonHref='https://www.youtube.com/watch?v=2bUX2Fx_yFs'
            />
          </div>
        </div>
      </section>

      <section>
        <div className={'innerBox'}>
          <h2 className={'mb-8'}>
            Interessantes zur Schulpraxis im Überblick{' '}
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
            {infoCardContents.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-lg bg-primary text-neutral`}
              >
                <p
                  className='leading-relaxed'
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page;
