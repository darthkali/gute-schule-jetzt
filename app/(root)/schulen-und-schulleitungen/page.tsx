import React from 'react';
import Link from 'next/link';
import TextLinks from '@/app/components/TextLinks';
import WebsiteLinks from '@/app/components/WebsiteLinks';
import ImageTextFloatingSection from '@/app/components/ImageTextFloatingComponent';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Schulen und Schulleitungen</h1>
        <p>
          Liebe Kolleg:innen und Schulleitungen,
          <br />
          unsere Schulen haben pädagogische Freiheiten, haben aber auch mit
          strukturellen Grenzen zu kämpfen. Wir möchten motivieren und zeigen,
          wie ein strukturierter Wandel in den Schulen gelingen kann. Auf dieser
          Webseite finden Sie:
          <br />
        </p>
        <ul>
          <li>
            Praxiserprobte Lösungen für alle{' '}
            <TextLinks href={'/#loesungen'} className='underline hover:no-underline'>
              Schularten
            </TextLinks>{' '}
          </li>
          <li>
            Hintergrundwissen für alle Betroffenen, zu menschengerechtem Lernen
            und zur{' '}
            <TextLinks
              href={'/#hirnforschung'}
              className='underline hover:no-underline'
            >
              Hirnforschung
            </TextLinks>{' '}
          </li>

          <li>
            Eine{' '}
            <TextLinks href={'/#petition'} className='underline hover:no-underline'>
              Landtags-Petition
            </TextLinks>{' '}
            mit Start im Januar 2026, die mit 10000 digitalen Unterschriften die
            politische Kraft für spürbaren Fortschritt entwickeln soll.
          </li>
        </ul>
        Lesen Sie hier über Ihre Möglichkeiten, wie sie Kinder und Jugendliche
        an Ihrer Schule in eigenständiges und gleichzeitig erfüllendes,
        gemeinsames Lernen bringen können.
        <ImageTextFloatingSection
          imageSrc='/images/hoch/woodburn-hall-1057364_1920.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='right'
        >
          <div>
            <h2>Der Druck steigt.</h2>
            <p>
              Unsere Lebenswelt verändert sich immer schneller – und mit ihr die
              Anforderungen an Bildung.
            </p>
            <p>
              Jahrzehntelang haben Politik und Schulaufsicht sich darauf
              verlassen, dass die staatlichen Schulen die zunehmenden neuen
              Herausforderungen schon wuppen. Inzwischen wissen wir, dass unser
              Bildungssystem das nicht alleine, aus den Schulen heraus, schaffen
              kann.
            </p>
            <p>
              Die notwendige Transformation kann nur starten, wenn wir gemeinsam
              grundlegend umdenken und Anstrengungen unternehmen, die Haltung
              gegenüber Kindern und ihrer Bildung weiterzuentwickeln.
            </p>
            <p>
              Doch wie können Lehrkräfte und Schulleitungen diesen Wandel, trotz
              der zunehmenden Belastungen, aktiv und erfolgreich mitgestalten?
            </p>
          </div>

          <div>
            <h2>Initiative ergreifen - für strukturelle Verbesserungen</h2>
            <p>
              In der heutigen technisierten Welt sind Menschen gefragt, die
              Teamfähigkeit, kritisches Denken, Kreativität, und
              Eigenverantwortung entwickeln. Um allen Kindern dabei gerecht
              werden zu können und um eine Schulentwicklung dafür gemeinsam
              voranbringen zu können, brauchen die Schulen aber geeignete
              strukturelle Rahmenbedingungen. Drei Beispiele wie Initiative
              ergriffen werden kann:
            </p>

            <ul>
              <li>
                In Rheinland-Pfalz haben Landeselternbeirat und
                Landesschüler:innenvertretung 2022 mehr Finanzen für Personal
                und multiprofessionelle Teams gefordert: 2 Mrd. jährlich mehr
                für den Bildungsetat von RLP - sofort!
              </li>
              <li>
                In Hessen haben 41 von 66 Grundschulen im Juni 2025 eine
                Sammel-Überlastungsanzeige bei den Kultusbehörden eingereicht.
                Konkret kritisieren die 41 Schulen unter anderem die folgenden
                Punkte:
                <br />
              </li>

              <ul>
                <li>
                  Einen erheblichen Mangel an (qualifizierten) Lehrkräften,
                  dafür gibt es mehr Vertretungskräfte ohne pädagogische
                  Ausbildung, die nur begrenzt einsetzbar sind
                </li>
                <li>
                  Stetige Zunahme an Verwaltungs-Aufgaben, gleichzeitig aber
                  immer mehr Schülerinnen und Schüler mit psychischen
                  Belastungen oder Förderbedarf
                </li>
                <li>Langwierige Einstellungsprozesse</li>
                <li>Ein zu hohes Arbeitspensum</li>
                <li>Zu große Klassen</li>
                <li>Unzureichende Räume und Gebäude für Ganztagsschulen</li>
                <li>
                  Am Ende bleibe zu wenig Zeit für die pädagogische Arbeit, wie
                  zum Beispiel den Kindern das Lesen beizubringen, sagt Katja
                  Giesler: &quot;Es ist ehrlich gesagt einfach nur
                  frustrierend.&quot;
                </li>
              </ul>

              <li>
                In Niedersachsen hat die Landesregierung 2024 ein{' '}
                <TextLinks
                  href={'https://bass.schule.nrw/20046.htm'}
                  className='underline hover:no-underline'
                >
                  Freiräume-Programm für innovative schulische Vorhaben
                </TextLinks>{' '}
                erlassen. In dieser{' '}
                <TextLinks
                  href={'/#petition'}
                  className='underline hover:no-underline'
                >
                  Landtags-Petition
                </TextLinks>{' '}
                fordern wir auch für BW solche Freiräume für Schulleitungen und
                Kollegien, die ihre Schule zum Wohl aller umgestalten wollen.
              </li>
            </ul>
          </div>

          <div>
            <h2>Verbündete finden</h2>
            <p>
              <TextLinks
                href={'https://schule-im-aufbruch.de'}
                className='underline hover:no-underline'
              >
                Schule-im-Aufbruch
              </TextLinks>{' '}
              bietet Transformationsbegleitung und ist eine Initiative mit dem
              Ziel, Kinder bei der Entfaltung ihrer Potenziale zu unterstützen,
              sowie die angeborene Begeisterung und Kreativität von Kindern und
              Jugendlichen zu erhalten und zu fördern. Um die
              Potenzialentfaltung in der Schule zu ermöglichen, braucht es eine
              neue Lernkultur, vielfältige Lernformate und eine wertschätzende
              Haltung. Was wirklich zählt: Vertrauen, Wertschätzung, Beziehung,
              Verantwortung und Sinn. Schule im Aufbruch steht für eine
              ganzheitliche und transformative Bildung im Einklang mit dem
              UNESCO-Weltaktionsplan zur Bildung für nachhaltige Entwicklung. Es
              geht darum, Verantwortung für sich selbst, für seine Mitmenschen
              und für unseren Planeten zu übernehmen.
            </p>
            <ul>
              <li>
                Ein{' '}
                <TextLinks
                  href={'https://schule-im-aufbruch.de'}
                  className='underline hover:no-underline'
                >
                  Materialnetzwerk
                </TextLinks>{' '}
                baut die Alemannenschule in Wutöschingen mit anderen Schulen
                auf, das Lernmaterialien für selbstorganisiertes Lernen
                bereitstellt und{' '}
                <TextLinks
                  href={'https://www.mnweg.org'}
                  className='underline hover:no-underline'
                >
                  {' '}
                  teilt.
                </TextLinks>{' '}
              </li>

              <li>
                Expertise für gelungene{' '}
                <TextLinks
                  href={
                    'https://www.fr.de/politik/inklusion-klappt-viel-arbeit-10963703.html'
                  }
                  className='underline hover:no-underline'
                >
                  Inklusion
                </TextLinks>
                : „Das wichtigste Element bei der schulischen Inklusion ist die
                Auflösung der Jahrgangsgrenzen“, so Dr. Reinhard Stähling,
                ehemaliger Schulleiter der Primus-Schule Münster Berg
                Fidel-Geist.
              </li>
            </ul>
          </div>

          <div>
            <h2>In eigenes Konzept vertrauen</h2>
            <p>
              {' '}
              <TextLinks
                href={
                  'https://muenstertube.wordpress.com/2025/03/11/nicht-fragen-einfach-machen-dr-reinhard-stahling-liest-beim-ir-munster-aus-seinem-neuen-buch/'
                }
                className='underline hover:no-underline'
              >
                Nicht fragen - einfach machen
              </TextLinks>{' '}
            </p>
          </div>

          <div>
            <p>
              Den Spirit, den wenige Kolleg:innen entwickelt haben, auf ein
              großes Team übertragen! Um eine Veränderung einzuleiten, braucht
              es einen einzigen Menschen, der den Willen dafür aufbringt und
              eine Vision entwickelt. Das kann der/die Schulleiter:in oder ein/e
              Kolleg:in sein. Dann kommt es darauf an, die Pioniere zu
              unterstützen. Für eine Ausweitung kann die Gruppe dem gesamten
              Kollegium berichten und Einblicke geben. Schulleitungsteams haben
              hier eine wesentliche Funktion: Ermutigen, Ressourcen bündeln und
              den Prozess so begleiten, dass Errungenschaften gesicherten Einzug
              halten können. Gemeinsam inspirierende Filme schauen und den Geist
              für Neues öffnen:
            </p>
            <ul>
              <li>
                {' '}
                <TextLinks
                  href={'https://www.youtube.com/watch?v=pCx-ZeGjA1M'}
                  className='underline hover:no-underline'
                >
                  "Was heißt hier Bildung?"
                </TextLinks>{' '}
                - Alemannenschule Wutöschingen, Olaf Burow & Reinhard Kahl,
                Utopie-Studio, 1h 40 min
              </li>
              <li>
                {' '}
                <TextLinks
                  href={'https://www.youtube.com/watch?v=2XOrl8P__P0'}
                  className='underline hover:no-underline'
                >
                  „Unterricht ist aller Übel Anfang“
                </TextLinks>{' '}
                - Transformation der Schule von einem Ort des Lehrens hin zu
                einem Ort des Lernens, 45 min
              </li>
              <li>
                {' '}
                <TextLinks
                  href={'https://www.youtube.com/watch?v=deREj5SouSU'}
                  className='underline hover:no-underline'
                >
                  „Schule der Zukunft“
                </TextLinks>{' '}
                - Kurzbeitrag zum Vortrag von Stefan Ruppaner, ehemaliger
                Schulleiter der ASW, 13 min
              </li>
            </ul>
          </div>

          <div>
            <h2>Gebundene Ganztagsschule </h2>
            <p>
              Sie bringt mehr Ressourcen in die Schule und erlaubt echte
              pädagogische Neuausrichtung. Ist sie gutgemacht und fühlen sich
              die Kinder im Endeffekt wohl, werden die beobachtbaren Widerstände
              mancher Eltern sich wandeln. Für mehr Bildungsgerechtigkeit und
              Schulen, an denen sich Kinder wohlfühlen können, brauchen wir
              ganztägige Bildungseinrichtungen mit stimmigen pädagogischen
              Konzepten, die die Rhythmisierung des Ganztags konsequent
              verfolgen und eine Verantwortungsgemeinschaft von Schule und
              Jugendhilfe vorsehen. Davon sind wir in Baden-Württemberg derzeit
              noch sehr weit entfernt. Der{' '}
              <TextLinks
                href={
                  'https://liga-bw.de/stellungnahme-im-anhoerungsverfahrenvwv-beschleunigungsprogramm-ganztagsbetreuung/'
                }
                className='underline hover:no-underline'
              >
                „Qualitätsrahmen Betreuung BW“
              </TextLinks>{' '}
              enthält laut der Liga der freien Wohlfahrtspflege nicht ein
              einziges objektiv nachprüfbares{' '}
              <TextLinks
                href={
                  'https://liga-bw.de/wp-content/uploads/2025/02/2025_02_10_Klartext_Ganztag_Ganztagsfoerderung_fuer_Grundschulkinder.pdf'
                }
                className='underline hover:no-underline'
              >
                Qualitätskriterium (PDF-Datei).
              </TextLinks>{' '}
              "Das mache ihn wirkungslos. Von einem Dokument mit dem Namen
              Qualitätsrahmen seien zumindest quantifizierende Aussagen zu den
              Themen Personalschlüssel, Fachkraftschlüssel sowie Raumgröße und
              -ausstattung zu erwarten", so die Liga.
            </p>
          </div>

          <div>
            <h2>Integration - Realität, die wichtigsten Zahlen und Lösungen</h2>
            <p>
              Wir sind ein Einwanderungsland und das überalterte Deutschland
              kann es sich nicht leisten, auf Einwanderung zu verzichten. Anant
              Agarwala schreibt dazu in seinem Buch - Das Integrationsexperiment
              – u.a. folgendes:
            </p>
            <p>
              {' '}
              Harald Höfler, Schulleiter einer staatlichen Grundschule mit
              Hauptschule in Bad Krozingen: "Es wird vieles schöngeschrieben und
              schöngeredet mit den Flüchtlingen. Alle Kinder gehen ihren Weg und
              sind hoch motiviert, das stimmt halt nicht. Unsere Arbeit ist
              total herausfordernd, oft frustrierend. Dieser Teil der Realität
              kommt mir viel zu kurz. Für die Klassenlehrer:innen in der
              Grundschule ist das vor allem belastend. Und selten bereichernd."
              Die Kinder seien natürlich willkommen, die könnten am
              allerwenigsten etwas dafür, betont Höfler. Die Unterschiede
              zwischen den Kindern seien schon bei der Einschulung riesig. Und
              dann wüchsen sie mit jedem Tag weiter: Manche unserer Eltern
              arbeiten als Ärzte am Herzzentrum der Stadt, andere haben in ihrem
              Heimatland nie eine Schule von innen gesehen.“
            </p>
            <p>
              Um diese Unterschiede auszugleichen, bräuchte es nicht politisch
              korrekte Aussagen, sondern gutes Personal. Psychologen und
              Sozialarbeiter wären toll, aber schon am Grundlegendsten mangele
              es: "Wir finden immer schwerer Lehrer. Lehrer:innen mit DaZ
              (Deutsch als Zweitsprache) kann man gleich vergessen. Wir haben
              bis zu 28 Kinder in einer Klasse. Und unter ihnen sitzen immer
              mehr, die schon ein Problem-Päckchen auf dem Rücken tragen, bevor
              das Leben überhaupt richtig losgeht. Wie sollen wir all diesen
              Bedürfnissen gerecht werden?" Auch deshalb sei kontinuierliche
              Arbeit kaum möglich. Der Alltag: zu wenige Lehrer, zu wenig
              Deutschförderung und Deutschstunden, die aus Personalnot ständig
              ausfallen. Keine Förderung während des Unterrichts, ohne dass
              andere Kinder zu kurz kämen. Kaum multiprofessionelle Teamarbeit.
              Wenig bis keine Betreuung für Flüchtlinge am Nachmittag. Ob eine
              Situation wie an der Johann-Heinrich-von-Landeck-Schule eher die
              Regel oder eher die Ausnahme ist, darüber gibt es keine
              umfassenden Erhebungen.“
            </p>
            <p>
              „Die vermeintliche Jahrhundert-Herausforderung wirkt ziemlich
              winzig, wenn wir die Tücken des Alltags für einen Moment
              vernachlässigen. Wir zählten im Schuljahr 2015/16 bundesweit etwa
              460 000 Schulklassen mit durchschnittlich 24 Schülern in
              Deutschland. Die Kultusministerkonferenz (KMK) schätzte im Herbst
              2015, dass im Zuge der Flüchtlingskrise ca. 325 000 Kinder und
              Jugendliche zusätzlich unterrichtet werden müssten. Ich gehe heute
              auf Basis der Asylanträge eher von etwa 400 000 aus. Verteilten
              sich diese 400 000 gleichmäßig und gerecht auf die Schulen und
              Jahrgangsstufen der Republik, ergäben sich knapp 0,9 Flüchtlinge
              pro Klasse. Anders ausgedrückt: in neun von zehn Klassen säße
              jeweils ein Flüchtling zwischen 23 Nichtflüchtlingen. Das klingt
              nach Idealbedingungen für Integration. Bevor wir uns wieder der
              Wirklichkeit widmen, sei eine weitere Zahl vom grünen Tisch
              genannt: Insgesamt lernen etwa 11 Millionen Kinder und Jugendliche
              in deutschen Schulen; 400 000 davon entsprechen knapp 4 Prozent.
              Die Realität ist natürlich komplexer.
            </p>
            <p>
              Was ist zu tun? Den Schulen in der Integrationsgesellschaft einen
              Rahmen zu bieten, scheint dennoch unerlässlich. Um ihn ernsthaft
              zu entwickeln, müsste man das Wissen über die schulische
              Integration von Flüchtlingen endlich systematisch sammeln. Etwa
              durch eine Expertenkommission »Integration« der
              Kultusministerkonferenz. Sie müsste empirische Gewissheiten
              darüber schaffen, was in Deutschland funktioniert und was nicht,
              wenn Nichtmuttersprachler in die Schulen kommen und darüber, was
              man alles besser machen könnte. Denn es gibt irre viel zu tun.
              Obwohl sich die Bildungsausgaben in den vergangenen 20 Jahren fast
              verdoppelt haben, kann auch heute jeder fünfte 15-Jährige in
              Deutschland nicht richtig schreiben und rechnen. Gerade
              Schülerinnen und Schüler, die nicht in Deutschland geboren wurden,
              hängen viele Schuljahre hinterher. Lange schon ist erwiesen, wie
              eng soziale Faktoren mit Leistungen zusammenhängen und warum
              gerade Kinder aus Migrantenfamilien deshalb im Schnitt schlechter
              abschneiden. Doch wie man diese Nachteile in der Unterrichtspraxis
              möglichst effektiv ausgleicht, ist bis heute nicht geklärt. Man
              sieht aber, dass nicht viel Raum für diese Arbeit bleibt, wenn im
              Klassenzimmer bloß eine Lehrer:in steht, der/die alles
              gleichzeitig machen muss. Besser wäre ein Team, am besten mit
              unterschiedlichen Kompetenzen. Hohe Standards für alle
              einzufordern, also auch für die wachsende Gruppe benachteiligter
              Kinder, kostet viel Geld. Aber viel Geld richtet nichts aus, wenn
              dessen Einsatz nicht an Standards gebunden ist.
            </p>
            <p>
              Die gute Bildung in der Einwanderungsgesellschaft, die
              anspruchsvoll wäre und gerecht, gibt es schlichtweg nicht,
              überhaupt bleibt sie schwer fassbar. In jedem Fall müsste sie
              darauf beruhen, in der großen Vielfalt an Biographien in den
              Klassenzimmern kein Problem zu sehen, sondern einen möglichen
              Gewinn. Sie müsste Migration als jahrhundertealte Normalität
              erkennen, nicht als lästigen Sonderfall, obwohl sie von allen viel
              abverlangt. Und sie müsste nach den Schwächen auch die Stärken
              vieler Flüchtlinge in den Blick nehmen, die häufig mehr Sprachen
              beherrschen als ein durchschnittlicher Gymnasiast (etwa Dari,
              Paschtu, Englisch und Deutsch) oder praktisch versierter sind als
              ihre Mitschüler:innen, weil sie bereits gearbeitet haben.
              Leitbilder kann man politisch schwer vorgeben, sie müssten sich in
              den Schulen selbst entwickeln. Doch damit das passiert, braucht es
              im Alltag positive Erfahrungen statt andauernden Frusts. Dafür
              wiederum muss vor allem die Politik sorgen. "Es ist Zeit, das
              Labor aufzuräumen und endlich festzulegen, wo man hinwill. Und wie
              man dort ankommt." Quelle: Buch, Anant Agarwala:{' '}
              <TextLinks
                href={
                  'https://www.bpb.de/system/files/dokument_pdf/Agarwala1_978-3-411-75490-8.pdf'
                }
                className='underline hover:no-underline'
              >
                Das Integrationsexperiment
              </TextLinks>{' '}
              - S. 74, S. 25, S.123
            </p>
            <p>
              DDas Start-Chancen-Programm und die Sprachförderung aus dem Jahr
              2024 sind nur ein erster Schritt dahin! Es ist zu erwarten, dass
              die Mittel nicht zur Förderung der Chancengleichheit, sondern für
              andere dringende Sanierungs- und Reparaturmaßnahmen verwendet
              werden. Zudem hilft das Startchancen-Programm nicht, den
              Lehrermangel oder die fehlende Digitalisierung an den Schulen zu
              beheben. Hier braucht es an erster Stelle selbstbewusste
              Forderungen an die Politik aus den Schulen und der Elternschaft,
              die den öffentlichen Druck erhöhen. Siehe auch:
              Startchancen-Programm:
            </p>
            <ul>
              <li>
                {' '}
                <TextLinks
                  href={
                    'https://www.bmbf.de/DE/Bildung/Schule/Startchancen-Programm/startchancen-programm.html'
                  }
                  className='underline hover:no-underline'
                >
                  1: BMBF; Startchancenprogramm
                </TextLinks>
              </li>
              <li>
                {' '}
                <TextLinks
                  href={
                    'https://www.km.baden-wuerttemberg.de/de/schule/schulartuebergreifend/startchancen-programm/startchancen-bw'
                  }
                  className='underline hover:no-underline'
                >
                  2: KM BW; Startchancenprogramm
                </TextLinks>
              </li>
              <li>
                {' '}
                <TextLinks
                  href={
                    'https://www.forum-verlag.com/fachwissen/bildung-und-erziehung/startchancen-programm/#kritik'
                  }
                  className='underline hover:no-underline'
                >
                  3: Forum-Verlag; Startchacenprogramm-Kritik
                </TextLinks>{' '}
              </li>
            </ul>
          </div>

          <div>
            <h2>
              Vielfalt bestimmt unser Leben - Demokratie braucht Inklusion!
            </h2>
            <h3>Länger gemeinsam lernen</h3>
            <p>
              Wir spalten die Kinder-Gesellschaft nicht nur nach der 4. Klasse
              auseinander, sondern oft schon von Anfang an. Es geht darum,
              Inklusion als demokratisches Grundprinzip gesellschaftlich zu
              verankern und sozialen Zusammenhalt und gleichberechtigte Teilhabe
              zu stärken. In der deutschen Schulrealität gibt es damit aber
              Probleme. "Es ist vor allem belastend. Und selten bereichernd."
              Warum? Dr. Brigitte Schumann schreibt 2024: „Für die Art, wie in
              Schulen gelernt wird, sind die selektiven Schulstrukturen
              besonders wirkungsmächtig und stellen den heimlichen Lehrplan. Das
              bestehende Schulsystem ist strukturell an der Bildung von
              Leistungshomogenität in Lerngruppen und Schulformen ausgerichtet.
              Es verlangt zu ihrer Herstellung Maßnahmen der Leistungsselektion,
              die nachweislich auch immer sozial selektiv wirken. In diesem
              Kontext wird schulisches Lernen eher selten als individueller und
              kollaborativer Aneignungsprozess von neuen wichtigen Fähigkeiten,
              Kenntnissen und selbstwirksamen Erfahrungen erlebt. Eingepauktes
              Wissen wird abgeprüft, benotet und schnell wieder vergessen. Auch
              wichtige Inhalte werden allzu oft zu Prüfungsgegenständen
              deklassiert. Lernende werden zu Konkurrent:innen im Wettbewerb um
              Noten."
            </p>
            <p>
              Die Bildungspolitik weigert sich beharrlich, inklusive Bildung
              gemäß der UN-Behindertenrechtskonvention (BRK) umzusetzen. Sie hat
              inklusive Bildung mit der Verabschiedung der UN-BRK lediglich an
              das selektive, segregierte Schulsystem angepasst, statt es zu
              einem inklusiven, auf Chancengleichheit beruhenden und
              hochwertigen System zu transformieren. "Schulen sollen alle
              Kinder, unabhängig von ihren physischen, intellektuellen,
              sozialen, emotionalen, sprachlichen und anderen Fähigkeiten
              aufnehmen", heißt es in der 1994 auf der UNESCO Weltkonferenz
              verabschiedeten Resolution. Um dies zu realisieren, "bedarf es
              einer Pädagogik der besonderen Bedürfnisse, die davon ausgeht,
              dass menschliche Unterschiede normal sind, dass das Lernen daher
              an das Kind angepasst werden muss und sich nicht umgekehrt das
              Kind nach vorbestimmten Annahmen über das Tempo und die Art des
              Lernprozesses richten soll."
            </p>
            <p>
              Schulen sollten über die Inklusion und ihre Haltung dazu
              nachdenken. Wollen sie Orte des gesellschaftlichen Zusammenhaltes
              und gleichberechtigter Teilhabe werden, kommen sie nicht darum
              herum, sich damit auseinander zusetzen. Wenn Vielfalt unser Leben
              bestimmt, sollten wir das nicht weiter ignorieren, sondern das
              Signal aussenden: ALLE Kinder gehören dazu! Länger gemeinsam
              lernen! Ressourcen dafür fordern und bündeln.
              <br />
              Quelle:{' '}
              <TextLinks
                href={
                  'https://bildungspolitik.blog.rosalux.de/2019/09/11/das-verweigerte-recht-auf-inklusive-bildung-von-dr-brigitte-schumann/'
                }
                className='underline hover:no-underline'
              >
                Brigitte Schuhmann
              </TextLinks>{' '}
            </p>
          </div>

          <div>
            <h2>Kindern vertrauen, Haltung zeigen</h2>
            <p>
              Schulleiter Stefan Ruppaner: „Unsere Lehrkräfte haben eine
              Aufgabe: Seid lieb zu den Kindern und bietet ihnen alle
              Möglichkeiten, die es gibt. Wir trauen den Kindern auch viel zu.
              Sie zeigen hier, dass sie Verantwortung übernehmen können.
              Dadurch, dass wir keinen Unterricht machen, haben die Kinder auch
              mehr Zeit, sich zu entspannen, sich Aufgaben aufzuteilen und sich
              zu besprechen. Deshalb sind sie schon glücklicher, das kann man so
              sagen."{' '}
            </p>
          </div>

          <div>
            <h2>Zusammenarbeiten - Für Kinder da sein</h2>
            <p>
              Zum Begriff "multiprofessionelles Team": Die Berg Fidelschule
              hatte diesen Begriff schon seit 1992 benutzt - gemeint als festes
              Klassenteam. Heute wird der Begriff häufig aus dem Zusammenhang
              des Klassenteams gelöst und sogar ein Nebeneinander von
              Klassenlehrer:in und Sonderpädagoge:in als multiprofessoionelle
              Arbeit bezeichnet. Aber erst wenn die multiprofessionellen Teams
              zu einer Verantwortungsgemeinschaft für alle Kinder einer
              einzelnen Klasse werden, ändert sich der gesamte Unterricht und
              die Qualität steigt.
              <br />
              Quelle:{' '}
              <TextLinks
                href={
                  'https://reinhard-staehling.de/multiprofessionelle-teams-in-altersgemischten-klassen/'
                }
                className='underline hover:no-underline'
              >
                Stähling 2004,
              </TextLinks>{' '}
              Multiprofessionelle Teams in altersgemischten Klassen, ein Konzept
              für integrativen Unterricht.
            </p>
          </div>

          <div>
            <h2>Feedback-Kultur aufbauen</h2>
            <p>
              Top oder Flop? Was läuft gut - was stößt an Grenzen? Diese Fragen
              zuzulassen und kontinuierlich damit zu arbeiten, bringen ein
              System vorwärts. Das kann klein beginnen mit einem Buch im
              Rektorat, in das eingetragen werden kann, was momentan stört oder
              zu beheben ist. Oder es kann in regelmäßigen Abständen über
              formalisierte Abfragen ans ganze Kollegium geschehen und in
              thematischen Arbeitskreisen aufgearbeitet werden. Auch auf
              Schüler:innen-Ebene können Feedbackgespräche im Klassenrat zu
              bestimmten Themen kultiviert werden. Die Grundlage jeder
              Zusammenarbeit wird so geschaffen.
            </p>
          </div>

          <div>
            <h2>Ich bin selbstwirksam - ich kann die Welt verändern!</h2>
            <p>
              Es sollte allen Menschen in der Schule, Kindern wie Erwachsenen,
              der Freiraum zur Selbstwirksamkeitserfahrung geben werden.
              Sinnorientierte Projekte können ein Anfang dafür sein, z.B. den{' '}
              <TextLinks
                href={'https://frei-day.org/'}
                className='underline hover:no-underline'
              >
                FREI DAY
              </TextLinks>{' '}
              einführen: Regelmäßige Projektarbeit, mindestens 4 Stunden am
              Stück. Am FREI-DAY beschäftigen sich Kinder und Jugendliche mit
              aktuellen gesellschaftlichen oder ökologischen Herausforderungen,
              die sich an den Global Goals SDGs{' '}
              <TextLinks
                href={'https://17ziele.de/'}
                className='underline hover:no-underline'
              >
                (Sustainable Development Goals)
              </TextLinks>{' '}
              der Vereinten Nationen orientieren. Sie finden Antworten auf
              selbstgewählte Zukunftsfragen. Sie entwickeln Zuversicht für ihre
              Zukunft, da sie sich als selbstwirksam und handlungsfähig erleben.
              Im Zentrum steht dabei die dreifache Verantwortung: Verantwortung
              für sich selbst, Verantwortung für Mitmenschen und Verantwortung
              für unseren Planeten.
              <br />
              Siehe auch: Buch, Margret Rasfeld{' '}
              <TextLinks
                href={'https://frei-day.org/das-buch'}
                className='underline hover:no-underline'
              >
                FREI DAY
              </TextLinks>
            </p>
          </div>

          <div>
            <h2>Achtsamkeit und Schönes</h2>
            <p>
              {' '}
              <TextLinks
                href={
                  'https://montessori-labor.de/gestaltungslabor/raumgestaltung/'
                }
                className='underline hover:no-underline'
              >
                Doris Fratton,
              </TextLinks>{' '}
              Primarlehrerin und erfolgreiche Innenarchitektin, sagte: "Schönes
              schafft Schönes - Verwahrlosung schafft Verwahrlosung", und
              gestaltete für etwa 30 Schulen Schulräume so attraktiv, dass
              natürliche Achtung entstehen kann. Eine Hausschuhpflicht schafft
              neben der Sauberkeit auch den Vorteil, dass die ganzen
              Bodenflächen für Kinder und Jugendliche nutzbar werden und ein
              verändertes Raumerleben mit sich bringen.
            </p>
          </div>

          <div>
            <h2>Alles dafür tun, dass Kinder selbstständig lernen können</h2>
            <p>
              Beispielhaft geht hier die{' '}
              <TextLinks
                href={'/#loesungen'}
                className='underline hover:no-underline'
              >
                ASW
              </TextLinks>{' '}
              vor.
            </p>
          </div>
        </ImageTextFloatingSection>
      </div>
    </section>
  );
};
export default Page;
