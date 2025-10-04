import React from 'react';
import Image from 'next/image';
import TextLinks from '@/app/components/TextLinks';
import ImageTextFloatingSection from '@/app/components/ImageTextFloatingComponent';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Handwerk und Wirtschaft</h1>
        <ImageTextFloatingSection
          imageSrc='/images/hoch/crafts-3676583_1920.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='left'
        >
          <h2>
            Sehr geehrte Führungskräfte und Mitarbeiter:innen in Handwerk und Wirtschaft,
          </h2>
          <p>
           funktionsfähige und in die Kommunen vernetzte Schulen haben auch für Handwerk und Wirtschaft
           in unserem Land eine wesentliche Bedeutung. Im Folgenden finden Sie wichtige Informationen dazu.<br/>
           Helfen Sie bitte mit, dass Baden-Württemberg Schulen schafft, die jedes Kind wirklich zu
           seinem individuellen Leistungsvermögen führt und jedes fit für die Welt von morgen macht.
           Wir stellen auf dieser Webseite Hintergrundwissen und praxiserprobte Lösungen vor, die in
           allen Schularten umsetzbar sind. Viele Schulen würden sich gerne auf den Weg machen, haben
           aber mit Hemmnissen zu kämpfen. Wenn Betriebe, Kommunen, Wähler:innen gemeinsam an einem
           Strang ziehen, können diese Hemmnisse endlich beseitigt werden.<br/>
           Unterstützen Sie bitte die Forderungen der
           {' '}<TextLinks href={'/#petition/'} className='underline hover:no-underline'>Petition Schule bewegen - Jetzt!</TextLinks>,{' '}
           damit im kommenden Koalitionsvertrag 2026 wesentliche Schritte dafür vereinbart werden.
           Sprechen Sie mit anderen Menschen darüber -
           {' '}<TextLinks href={'/#mitwirken/'} className='underline hover:no-underline'> wirken Sie mit Ihren Möglichkeiten mit</TextLinks>,{' '}
           eine Trendwende in BW zu erzeugen.
          </p>
          <h2>
          Unsere Arbeitswelt braucht Fachkräfte und Menschen, die innovativ zusammenarbeiten können
          </h2>
          <p>

            Deutschlands Unternehmen fehlt der Nachwuchs. Immer mehr Betriebe können freie Stellen nicht
            besetzen – für viele Stellen gibt es nicht einmal Bewerbungen. Das hat gravierende Folgen für
            die Wirtschaft und die Gesellschaft. Der demografische Wandel tut sein Übriges: In den kommenden
            Jahren treten viele „Babyboomer“ in den Ruhestand ein – die Lücke droht noch größer zu werden.
            Die Veränderungen bemerken viele Bürger jetzt schon, zum Beispiel an kürzeren Öffnungszeiten
            und spürbar längeren Wartezeiten. Problematischer wird sein, dass Unternehmen Aufträge nicht
            mehr annehmen können, weil sie nicht abzuarbeiten sind. Die Folgen des Mangels werden unser
            gesamtwirtschaftliches Wachstum bremsen und damit zu Wohlstandverlusten führen.
          </p>
          <br/><br/>
           <h2>
           Mehr als die Hälfte der Betriebe, die Ausbildungsplätze anbieten, hatten 2023 mit unbesetzten Lehrstellen zu kämpfen.
           </h2>
          <p>
            Aus Sicht der Betriebe ist vor allem ein Mangel an geeigneten Bewerbungen ursächlich für die
            Nichtbesetzung von Ausbildungsplätzen. Darüber hinaus hat im Zeitverlauf auch das generelle Fehlen
            von Bewerbungen merklich an Bedeutung gewonnen.
          </p>

          <Image
            src={'/images/unbesetzteArbeitsplätze.png'}
            alt={'unbesetzteArbeitsplätze'}
            width={500}
            height={500}
            className='w-[50%] h-auto rounded shadow '
          />
            <TextLinks href={'https://www.iab-forum.de/doch-lieber-woanders-hin-wenn-geeignete-bewerberinnen-und-bewerber-abspringen-verschaerft-dies-probleme-bei-der-besetzung-von-ausbildungsplaetzen/'}
             className='underline hover:no-underline'>  Quelle: IAB-Betriebspanel 2013- 2023</TextLinks>
           <h2>Mangel an geeigneten Bewerbern</h2>
          <p>
              Aus Sicht der Betriebe ist vor allem ein Mangel an geeigneten Bewerbungen ursächlich für die
              Nichtbesetzung von Ausbildungsplätzen. Darüber hinaus hat im Zeitverlauf auch das generelle
              Fehlen von Bewerbungen merklich an Bedeutung gewonnen.
          </p>
            <Image
                        src={'/images/gruendeNichtbesetzung.png'}
                        alt={'gruendeNichtbesetzung'}
                        width={500}
                        height={500}
                        className='w-[50%] h-auto rounded shadow '
            />
            <TextLinks href={'https://www.iab-forum.de/doch-lieber-woanders-hin-wenn-geeignete-bewerberinnen-und-bewerber-abspringen-verschaerft-dies-probleme-bei-der-besetzung-von-ausbildungsplaetzen/'}
                                   className='underline hover:no-underline'>  Quelle: IAB-Betriebspanel 2013- 2023</TextLinks>

          <h2>Weniger und qualitativ schlechtere Bewerbungen</h2>
          <p>

            Aus Sicht der Betriebe ist das größte Problem, dass sich immer weniger junge Leute bewerben -
            und dass die Qualität der Bewerbungen sinkt, sagt Thomas Fahlbusch, der bei der IHK Erfurt den
            Bereich Aus- und Weiterbildung leitet: "Das betrifft zum einen die schulischen Voraussetzungen,
            wenn es um mathematische Fähigkeiten geht, oder wenn ich in die sprachliche Qualifikation reinschaue.
            Hinzu kommen natürlich auch die sogenannten Soft Skills, wenn es darum geht, wie zuverlässig oder
            wie pünktlich jemand ist."<br/>
            <TextLinks href={'https://www.mdr.de/nachrichten/deutschland/panorama/ausbildung-lehrstelle-azubi-mangel-100.html#Weniger/'}
                                     className='underline hover:no-underline'>Quelle: MDR</TextLinks>
          </p>
            <h2>Fortschreitende Akademisierung und Minderbewertung der beruflichen Bildung</h2>
          <p>
            wenn immer mehr junge Menschen studieren, gilt das als marktnah und zeitgemäß und wird von der Politik
            als Erfolg gefeiert. Die „Akademisierung“ mit ihrem Versprechen erheblicher Status- und Einkommensvorteile
            hat aber Folgen: Das europäische System der Bachelor- und Master-Studiengänge hat den Anteil der
            Studierenden durch Verkürzung der Verweildauer in die Höhe schnellen lassen, mit der Gefahr,
            Hochschulbildung in eine Berufsbildung ohne klare Perspektive zu verwandeln.
            In den Vergleichen der OECD werden Länder wie Deutschland, die wegen ihrer gut entwickelten
            nicht-akademischen dualen Berufsausbildung weniger Akademiker ausbilden, meist schlechter
            bewertet als Länder, die stärker auf den Ausbau der Hochschulausbildung setzen. Damit ist
            unweigerlich die Abwertung der beruflichen Bildung verbunden, die mehr und mehr als Sackgasse
            angesehen wird.<br/>
            <TextLinks href={'https://www.bpb.de/themen/bildung/dossier-bildung/146199/wissensgesellschaft-eine-idee-im-realitaetscheck/'}
                                     className='underline hover:no-underline'>Quelle: BPB</TextLinks>
         </p>

          <h2>Wert der dualen Ausbildung</h2>
          <p>
          Im Vergleich zu anderen Ländern ermöglicht die duale Berufsausbildung in Deutschland sehr viel mehr
          Jugendlichen einen reibungslosen Übergang in den Arbeitsmarkt – die Jugendarbeitslosigkeit ist in
          Ländern mit dualer Berufsausbildung besonders gering. Entscheidend ist, dass das Fähigkeitsprofil
          der dualen beruflichen Bildung – anders als das in vielen Ländern verbreitete "Training-on-the-Job"-Modell
           – auf vielseitig einsetzbare Arbeitskräfte setzt: Sie werden nicht für eine eng umgrenzte Tätigkeit in
           einem bestimmten Betrieb qualifiziert. Vielmehr erlernen die Auszubildenden einen ganzheitlichen Beruf.
           Dieser befähigt sie, unabhängig vom konkreten Arbeitgeber, zur Bewältigung unterschiedlicher Aufgaben,
           die im Arbeitsprozess anfallen. Die duale berufliche Bildung führt zu einem Pool qualifizierter
           Arbeitskräfte mit aufgaben‐orientierten und transportablen Fähigkeiten. Dieser Pool steht den
           mittelständischen Betrieben, der Industrie und den industrienahen Unternehmen zur Verfügung und
           ermöglicht damit offene und flexible Arbeitsmärkte.
          </p>

          <h2>Berufliche Bildung unter Druck</h2>
          <p>
            Seit den 1970er Jahren steht die berufliche Bildung unter Druck. Das Modell der
            gesellschaftlichen Integration möglichst aller Jugendlichen, die keinen
            Hochschulabschluss anstreben, leidet mit.
          </p>

          <ul>
            <li>
            In dem Maße, wie auch in beruflichen Ausbildungsgängen theoretisches Wissen an Bedeutung
            gewann, steigerten die Betriebe im Einvernehmen mit den Gewerkschaften die Anforderungen
            an die Auszubildenden. Zum ersten Mal entstand das Problem der "Ausbildungsfähigkeit".
            Vor allem den Hauptschulen gelang es nicht mehr, alle Jugendlichen auf eine berufliche
            Ausbildung vorzubereiten. Daher stieg der Anteil der Jugendlichen, die nach der Schule
            keinen Ausbildungsplatz bekommen und stattdessen in eine der zahlreichen berufsvorbereitenden
            Maßnahmen des sogenannten Übergangssystems wechseln.
            </li>
            <li>
              Die Öffnung der Hochschulen entzog der Berufsbildung viele
              leistungsfähige junge Menschen, weil die Hochschulbildung ihnen
              bessere ökonomische Aussichten und höheres Sozialprestige in
              Aussicht stellte.
            </li>
          </ul>

          <p>
            Ein Vorteil der dualen Berufsausbildung ist im Unterschied zu den Ländern, die
            diese nicht haben, dass nahezu alle Jugendlichen, die eine berufliche
            Ausbildung durchlaufen haben, auch Zugang zum Arbeitsmarkt bekommen. Für
            Jugendliche, die aufgrund ihrer mangelnden "Ausbildungsfähigkeit" oder wegen
            zu geringer Ausbildungsangebote keinen Ausbildungsplatz erhalten, bedeutet dies
            allerdings: Keine Ausbildung – kein Job. Arbeitslose Jugendliche in Deutschland
            gehören fast ausschließlich zu dieser Gruppe der Menschen ohne Berufsausbildung. {' '}
          </p>

          <h2>
            Unsere Gesellschaft wird als &#34;Wissensgesellschaft&#34;
            bezeichnet. Was folgt daraus für die Bildungspolitik?
          </h2>

          <p>
            Bei zunehmenden Informationsmengen, die in Wirtschaft, Technik, Kultur und im täglichen Leben
            verarbeitet werden müssen und die für das Funktionieren dieser Lebensbereiche zum großen Teil
            unentbehrlich werden, wird Bildung immer wichtiger.
            Die höheren Anforderungen der Arbeitswelt an soziale und personale Kompetenzen erfordern
            besser (aus-)gebildete Arbeitskräfte. Dabei geht es einerseits um höhere Qualifikationen,
            um mit den immer anspruchsvolleren technologischen Entwicklungen Schritt halten zu können.
            Andererseits geht es um die genannten sozialen und personalen Fähigkeiten: Kommunikations-
            und Kooperationsfähigkeit, die Fähigkeit längerfristige Prozesse zu überblicken und auch
            bei Rückschlägen durchzustehen.<br/>
            Unser Schulsystem produziert aber zu viele
            {' '}<TextLinks href={'/#verlierer/'} className='underline hover:no-underline'>Verlierer</TextLinks>
            , denen es an og. Kompetenzen und sozialen
            Fähigkeiten mangelt. Ohne baldige Transformation der ursächlichen Strukturen, werden weitere
            Kinder-Generationen nicht die Chancen bekommen, die ihnen auch vom Recht her zustehen.
        </p>
          <h2>
            Die Landespolitik sollte alles dafür tun, dass Schulen ihre
            Funktionen erfüllen können
          </h2>
          <p>
            Schulen müssen zu offenen Orten werden, in denen alle Kinder willkommen geheißen sind und alles
            dafür getan wird, dass sie lebensnah lernen können. Dazu gehören Sprachförderung bereits in den
            Kitas und verlässliche Verantwortungsteams für jede Grundschulklasse. Es geht nicht darum,
            Kinder frühstmöglich zu sortieren, sondern ihnen die Möglichkeit zu geben, ihr Potential zu
            entwickeln, die Welt kennenzulernen, das Denken zu lernen und Selbstwirksamkeit zu erfahren.
            Beim Lernen in sinnorientierten Projekten erleben die Heranwachsenden, was es heißt, Verantwortung
            zu übernehmen und zusammenzuarbeiten. Gute Bildung braucht Zeit und Beziehung. Schule muss daher
            neu gedacht und auf diese Anforderungen ausgerichtet werden!
          </p>

          <h2>Praktika und vielfältige Berufsorientierung </h2>
          <p>
          Unsere Informations- und Wissensgesellschaft verspricht einerseits Demokratisierung, Enthierarchisierung,
          politische Vernetzung und den chancengerechten Zugang zu Bildung. Doch andererseits birgt sie die
          Gefahr sozialer Verarmung, der Reizüberflutung und des Verlustes gesicherter Wissensbestände.<br/>
          Unsere Jugendlichen sollten an einen kritischen Umgang mit den neuen Informationstechnologien herangeführt
          werden. Grundlage dafür ist, dass sie in ihrer Schulzeit auch möglichst viele reale, sinnliche Erfahrungen
          mit den Phänomenen unserer Welt machen können.
          {' '}<TextLinks href={'https://www.taz.de/Sachsen-Anhalt-foerdert-4-Tage-Schule/!6092557&s=Chemie%2Bam%2BZapfhahn/'}
           className='underline hover:no-underline'>Lebensnahe Projekte</TextLinks>,{' '}
          außerschulische Lernorte, Praktika, vielfältige Berufsorientierung und Wertschätzung aller Talente
          gehören unbedingt dazu.
          </p>

          <h2>
            Inklusive, wohnortnahe Schulen von Klasse 1- 10/13, lebendig in ihre Umgebung vernetzt,{' '}
          </h2>

          <p>
            fördern gegenseitige Anerkennung und Vielfalt. Dieses Miteinander braucht unsere demokratische
            Gesellschaft. Kinder haben so die Zeit und die Ruhe, um ihr Potential entwickeln und aufbauen zu
            können. Schulen sollten nicht weiter den Schwerpunkt darauf legen müssen, neunjährige Kinder
            nach Leistung zu sortieren. Sie sollten so strukturiert und ausgestattet werden, dass sie
            jedem Kind zum Aufbau verhelfen und professionell arbeiten können. Nur so werden Betriebe,
            weiterführende Schulen und Hochschulen in Zukunft gut aufgestellte junge Menschen aufnehmen können.
          </p>

          <h2>Zu lange hat die Bildungspolitik weggeschaut</h2>
          <p>
          und von Wahlperiode zu Wahlperiode geflickschustert. Der landauf landab zunehmende Personalmangel,
          durch das Ausscheiden der Babyboomer-Generationen aus ihrem Berufsleben,  war lange vorhersehbar:
          Unser Land ist deswegen darauf angewiesen, dass alle Jugendlichen mit bestmöglichen Kompetenzen die
          Schulen verlassen. Es wurde allerdings versäumt, die Schulen grundsätzlich entsprechend aufzustellen.<br/>
          Die PISA-Studien belegen seit Jahren, dass mehr als 25% der Viertklässler den Mindeststandard in
          Mathematik und Deutsch nicht erreichen.
          </p>
          <h2>Bildungspanik - Warum wurden die Schulen nicht, entsprechend bestehender Expertisen, funktionstüchtig transformiert?</h2>
          <p>
            Einer der Gründe liegt darin, dass um den Zugang zu den Hochschulen über Gesamt‐, Gemeinschaftsschulen
            oder Gymnasien mit harten Bandagen gekämpft wird. Das akademisch gebildete Bürgertum verteidigt seine
            Statusvorteile und droht mit der Auswanderung aus dem öffentlichen Schulsystem, wenn ihm mit dem
            Gymnasium die Leitinstitution der schulischen Bildung abhanden zu kommen droht. „Bildungspanik“
            bricht aus, wenn die schulische Bildung nicht mehr differenzieren und selektieren soll.<br/>
            Ängste und Druck bestimmen dadurch den Bildungsbereich. Aussagen von Eltern: „Die Grundschule stehen
            wir durch - und dann geht mein Kind aufs Gymnasium“, belegen das. Diese Haltung wird erst verschwinden,
            wenn alle Eltern das Vertrauen haben können, dass ihr Kind an seiner Schule gut aufgehoben ist, und
            jedes Kind sein Potential im gemeinsamen Lernen wirklich entfalten kann. Dafür braucht es eine
            gemeinschaftlich getragene Neuausrichtung der Bildungspolitik, die aus dem überzeugten Reden von
            Chancengleichheit in konsequentes Handeln findet.
           </p>


          <h2>Fazit</h2>
          <p>
            Bildung ist die Grundlage für innovative und produktive Betriebe in unserem Land.
            Wir verlieren aber in unseren Schulen zu viele Jugendliche. Gerade in Zeiten des demographischen
            Fachkräftemangels ist es entscheidend, hier gemeinsam für Bildungswandel zu sorgen.<br/>
            Wir brauchen funktionsfähige, in die Umgebung geöffnete Schulen, die alle Kinder real zu
            ihrem individuellen Leistungsvermögen führen. Helfen Sie bitte mit, dass Baden-Württemberg
            solche Schulen schafft.<br/>
            Unterstützen Sie bitte die Forderungen der
            {' '}<TextLinks href={'/#petition/'} className='underline hover:no-underline'>Petition Schule bewegen -
            jetzt!</TextLinks>,{' '}
            damit im kommenden Koalitionsvertrag 2026 wesentliche Schritte dafür vereinbart werden.<br/>
            Sprechen Sie mit anderen Menschen darüber -
             {' '}<TextLinks href={'/#mitwirken/'} className='underline hover:no-underline'> wirken Sie mit Ihren Möglichkeiten mit</TextLinks>,{' '}
             eine Trendwende in BW zu erzeugen.
          </p>
        </ImageTextFloatingSection>
      </div>

    </section>
  );
};
export default Page;
