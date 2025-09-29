import React from 'react';
import ImageTextFloatingSection from '@/app/components/ImageTextFloatingComponent';
import TextLinks from '@/app/components/TextLinks';
import WebsiteLinks from '@/app/components/WebsiteLinks';

const Page = () => {
  return (
    <div>
      <section>
        <div className={'innerBox'}>
          <h1>Vision für alle Schularten</h1>

          <ImageTextFloatingSection
            imageSrc='/images/evolution-4107273_1920.jpg'
            imageAlt='Raupe, Puppe und Schmetterling'
            imagePosition='right'
            caption={'Schulen als stark machende Lebens- und Lernorte,'}
          >
            <p>
              die allen Kindern Potentialentwicklung, Gesundheit und
              Selbstwirksamkeitserfahrung ermöglichen: Sie geben Kindern und
              Jugendlichen das, was sie aus entwicklungspsychologischer Sicht
              brauchen. Sie ermöglichen Lernen, wie es aus neurobiologischer
              Sicht nachhaltig ist und bereiten Schüler:innen auf ein Leben in
              der Gesellschaft vor, wie diese sich heute zeigt und in Zukunft
              abzeichnet.
            </p>

            <h3>Neurobiologische Erkenntnisse berücksichtigen</h3>
            <p>Die drei menschlichen Grundbedürfnisse:</p>
            <ul>
              <li>dazugehören (Verbundenheit)</li>
              <li>sich als gestaltendes Subjekt einbringen (Autonomie)</li>
              <li>
                sich durch Erfahrungen weiter entwickeln (Selbstwirksamkeit,
                Kompetenz)
              </li>
            </ul>
            <p>
              Das bedeutet, dass Schulen eine liebevolle Beziehungskultur
              brauchen, in der von Anfang an das Gefühl entsteht, angenommen zu
              sein. In der die Kinder eingeladen sind, sich für die Welt zu
              öffnen. Wenn wir uns fragen, wie Lernen geschieht, müssen wir das
              Dogma aufgeben, das Lernen nur von der Lehrkraft zum Kind
              funktioniert! Kinder lernen eigenmotiviert, Kinder lernen
              voneinander und in Gemeinschaft.{' '}
              <TextLinks href={'https://gutezitate.com/zitat/115019'}>
                „Wer Leistung will, muss Sinn bieten“
              </TextLinks>
              .{' '}
              <TextLinks
                href={'https://www.peterfratton.ch/'}
                className={'italic text-sm'}
              >
                nach Peter Fratton
              </TextLinks>
            </p>

            <h3>
              Bedingungen für eine kindgerechte Entwicklung und effektives
              Lernen
            </h3>
            <ol>
              <li>
                Kinder und Jugendliche fühlen sich gesehen, zugehörig und
                verbunden
              </li>
              <li>
                Kinder kommen in Berührung mit dem, was sie lebendig macht:
                Sinnlichkeit, Entdeckungs- und Gestaltungsfreude, Talente
                entfalten…
              </li>
              <li>
                Kinder und Jugendliche bekommen vielfältige Möglichkeiten, ihr
                Gehirn auf komplexe Weise zu nutzen! Kinder brauchen echte
                Aufgaben. Anstrengung schadet ihnen dabei nicht, aber sie
                brauchen den Erfolg und die Erfahrung der Selbstwirksamkeit.
              </li>
            </ol>

            <p>
              So werden Kinder zu Konstrukteur:innen ihres eigenen
              Bildungsprozesses und erleben ein wahnsinnig schönes Gefühl, ein
              subjekthaftes Gefühl: Ich bin einfach da, werde bedingungslos
              geliebt und kriege genug Gelegenheiten Entdecker:in zu sein.
            </p>

            <p>
              Es geht also nicht darum Fässer zu füllen, sondern Fackeln zu
              entzünden - den Geist zu entzünden, der die Kulturgüter
              hervorbringt. (nach Gerald Hüther)
            </p>
          </ImageTextFloatingSection>
        </div>
      </section>
      <section
        className={
          'bg-[color:var(--color-secondary)] text-[color:var(--color-neutral)]'
        }
      >
        <div className={'innerBox'}>
          <ImageTextFloatingSection
            imageSrc='/images/hands-1846428_1920.jpg'
            imageAlt='Raupe, Puppe und Schmetterling'
            imagePosition='left'
            caption={'Gesellschaft zusammenbringen, statt spalten'}
          >
            <p>
              Zu denken geben sollte, dass die in Deutschland praktizierte frühe
              Sortierung auf hierarchisch abgestufte Schularten der
              Sekundarstufe I international unüblich ist. Bereits im
              Grundschulalter werden die Kinder auseinander dividiert.{' '}
              <TextLinks
                href={
                  'https://deutsches-schulportal.de/expertenstimmen/pisa-2018-bildungsgerechtigkeit-tritt-auf-der-stelle/'
                }
                className={'text-accent'}
              >
                Mehr erfahren
              </TextLinks>
            </p>

            <p>
              Prof. John Hattie, einer der renommiertesten Bildungsforscher
              weltweit, erhebt im Dezember 2024 schwere Vorwürfe gegen das
              deutsche Schulsystem: „Das ungerechteste Schulsystem, das ich
              kenne!“. Er hält Bildungsreformen in Deutschland für dringend
              geboten. Er kritisiert die frühe Aufteilung der Kinder in
              verschiedene Schulformen als ineffizient und gesellschaftlich
              schädlich. Stattdessen plädiert er für längeres gemeinsames
              Lernen, mehr Chancengerechtigkeit und eine neue Sichtweise auf die
              Rolle der Lehrkräfte. Seine Botschaft: Ohne mutige Reformen bleibt
              das deutsche Bildungssystem in der Sackgasse.
            </p>

            <p>
              Leben bedeutet Vielfalt. Notwendige Grundlagen für eine
              lebenstüchtige Gesellschaft sind individuelle
              Persönlichkeitsentwicklung, Integration, Inklusion und Demokratie.
              Das erfordert eine Transformation der Schulen vom Ort des Lehrens
              zum Ort des inklusiven und kooperativen Lernens.
            </p>

            <h3>Die UN-Behindertenrechtskonvention und mehr Fairness</h3>
            <p>
              fordert eine strukturelle Transformation des deutschen
              Bildungssystems. Eine aktuelle Studie und der aktuelle
              Menschenrechtsbericht sieht Baden-Württemberg bei der Umsetzung
              von Artikel 24 im Vergleich der Bundesländer noch als
              Schlusslicht.
            </p>
            <p className={'text-sm'}>
              (Stellungnahme der AG „Bildung und Kultur“ des
              LAP-Beteiligungsprozess 08.09.2023 zur Umsetzung der UN-BRK)
            </p>
            <p className={'font-bold'}>Mehr erfahren:</p>
            <div className={'flex flex-col gap-2 items-start'}>
              <WebsiteLinks
                text='Reinhard Stähling'
                href='https://www.reinhard-staehling.de'
                className={'mr-2'}
              />
              <WebsiteLinks
                text='Länger Gemeinsam LernenLänger Gemeinsam Lernen'
                href='http://www.laenger-gemeinsam-lernen-bw.de/'
              />
            </div>
          </ImageTextFloatingSection>
        </div>
      </section>
      <section>
        <div className={'innerBox'}>
          <ImageTextFloatingSection
            imageSrc='/images/return-1825515_1920.jpg'
            imageAlt='Raupe, Puppe und Schmetterling'
            imagePosition='right'
            caption={
              'Hin zu integrativen, kindgerechten Schulen als Chancenorten'
            }
          >
            <p>
              An vorderster Stelle ist eine Haltung zu priorisieren - Bildung
              mit Werten wie gelebter Vielfalt, Mitgefühl und Toleranz!
            </p>
            <p>
              Dafür sind die Rahmenbedingungen zu schaffen: So dass unsere
              Grundschulen, die alle Kinder aufnehmen und willkommen heißen, mit
              ihnen kleine Gemeinschaften aufbauen, in denen sie ihr Potential
              in Ruhe und gut unterstützt entfalten können. In denen sie lernen,
              für sich einzustehen, neugierig mit der Vielfalt in der Welt
              umzugehen, Lernlust und Ausdauer zu entwickeln und von einander zu
              lernen, Konflikte gemeinsam aus der Welt zu schaffen und etwas für
              die Gemeinschaft beizutragen. Menschliches Glück wird von unseren
              Beziehungen mit anderen angetrieben. Teamarbeit und Raum für
              Kreativität sind dafür Schlüsselwerkzeuge.
            </p>
            <p>
              Schulen brauchen dazu Gestaltungshoheit und sie müssen Zeit haben
              - für Beziehung und Kooperation! Schulen werden so zu Kraftorten,
              die für alle Kinder einstehen und in einem lebendigen Bündnis mit
              Eltern und Ortschaft wirken.
            </p>

            <h3>
              Mehr Austausch, mehr Gemeinsinn, mehr Kreativität und
              Innovationsgeist
            </h3>
            <p>
              „Zukunftsfähige menschliche Gemeinschaften funktionieren ähnlich
              wie unser Gehirn“, sagt Prof. Gerald Hüther, „Das wächst nicht,
              indem es immer größer wird, bis uns irgendwann der Schädel platzt.
              Es wächst stattdessen durch eine fortwährende Intensivierung der
              Beziehungen zwischen den Nervenzellen, also durch Verstärkung
              seiner Vernetzung. Dieses Wachstumsmodell übertragen auf
              menschliche Gemeinschaften oder Kommunen heißt: Mehr Begegnung,
              mehr Austausch, mehr Vernetzung, mehr Gemeinsinn, mehr Kreativität
              und mehr Innovationsgeist!“
            </p>

            <WebsiteLinks
              text='Mehr erfahren'
              href='https://schulen-der-zukunft.org'
            />

            <h3>Im Miteinander die Fülle unserer Fähigkeiten potenzieren</h3>
            <p>
              „Das Zeitalter der Einzelkämpfer:innen, in dem wir allzu oft
              Konkurrent:innen sind und den anderen als Objekt behandeln, geht
              zu Ende. Um zu einem zufriedenstellenden Miteinander zu gelangen,
              müssen wir ein Zusammenleben erlernen, in dem wir uns gegenseitig
              als einzigartige Subjekte wahrnehmen und uns so begegnen, dass in
              gemeinschaftlichem Miteinander die Fülle unserer Fähigkeiten sich
              nicht nur addieren, sondern potenzieren kann.“
            </p>

            <WebsiteLinks
              text='Mehr erfahren'
              href='https://schule-im-aufbruch.de/'
            />
          </ImageTextFloatingSection>
        </div>
      </section>

      <section
        className={
          'bg-[color:var(--color-secondary)] text-[color:var(--color-neutral)]'
        }
      >
        <div className={'innerBox'}>
          <h2>Neue Lernkultur mit Ermutigung, Sinnhaftigkeit und Feedback</h2>
          <p>
            Statt Unterricht im Stundenplantakt durchzuführen, braucht es heute
            vielfältige Lernbegleitung und neue Lernformate, wie
            selbstreguliertes und sinnorientiertes Lernen in gemeinschaftlichen
            Projekten. Längeres gemeinsames Lernen, z.B. von Klasse 1 bis 10
            oder 1 bis 13 mit Angeboten für verschiedene Lernniveaus helfen
            unserer demokratischen Gesellschaft.
          </p>

          <h3>Vision für humane Primarschulen und Sekundarschulen</h3>

          <ul>
            <li>
              Die Kinder und ihre Bildungsbiographien stehen an erster Stelle!
            </li>
            <li>
              Integration, Inklusion und Vielfalt werden gelebt. Wirksame
              Rahmenbedingungen, wie längeres gemeinsames Lernen und eine
              veränderte Lehrerbildung, werden dafür Stück für Stück
              eingerichtet.
            </li>
            <li>
              Die neue Schule ist eine Teamschule mit einer neuen Lernkultur,
              die gekennzeichnet ist von Ermutigung, Sinnhaftigkeit,
              Gemeinschaft und Feedback-Kultur.
            </li>
            <li>
              Dieser Ansatz kennt keine passiven Partner:innen mehr in der
              Bildung. Das Kind bleibt aktive:r Konstrukteur:in der eigenen
              Biographie. Um Bildungsprozesse erfolgreich gestalten zu können,
              müssen diese angemessen moderiert werden. Dazu muss vor allem eine
              Gruppenatmosphäre mit positiver Fehler-Kultur geschaffen werden,
              die diese Prozesse rückhaltlos unterstützt.
            </li>
            <li>
              Deswegen bekommt jede Grundschulklasse ein verlässliches
              Verantwortungsteam. Kein Kind wird alleingelassen, alle Teamkräfte
              gestalten und verantworten die Bildungsentwicklung gemeinsam.
              Praxisbeispiel:{' '}
              <TextLinks
                href={'/primus-schule-muenster'}
                className={'text-accent'}
              >
                Primusschule Münster Berg Fidel
              </TextLinks>
            </li>
            <li>
              Kinder können mit ihren Lernbegleiter:innen Wissen
              ko-konstruieren, indem die Erforschung von Bedeutung stärker
              betont wird, als der Erwerb von Fakten. Das heißt, Kinder und
              Erwachsene diskutieren und verhandeln miteinander innerhalb einer
              Gemeinschaft ihr Verständnis und ihre Interpretation von Dingen.
              Sie lernen Bedeutungen zu entdecken, sich auszudrücken und mit
              anderen zu teilen, ebenso wie die Ideen anderer anzuerkennen.
              (nach{' '}
              <TextLinks
                href={'http://www.fthenakis.de/cms/BetrifftKinder_03-09.pdf'}
                className={'text-accent'}
              >
                Prof. Dr. Dr. Dr. Wassilios Fthenakis
              </TextLinks>
              )
            </li>
            <li>
              Es geht um die Kunst, Kinder und Jugendliche einzuladen und zu
              inspirieren. Es geht darum, den Lernenden zu ermöglichen, die
              Lerninhalte zu &#34;ihrem Ding&#34; zu machen. SoL
              (selbstorganisiertes Lernen) kombiniert mit LdE (gemeinsames
              Projekt-Lernen) ist dafür ein modellhaftes Praxisbeispiel an der{' '}
              <TextLinks href={'/alemannenschule'} className={'text-accent'}>
                ASW Wutöschingen
              </TextLinks>
              .
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page;
