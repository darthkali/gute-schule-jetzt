import React from 'react';
import Link from 'next/link';
import ImageTextFloatingSection from '@/app/components/text/ImageTextFloatingComponent';
import TextLinks, { Style } from '@/app/components/text/TextLinks';

const Page = () => {
  console.log(
    'Page - Style.Button:',
    Style.Button,
    'Style.InlineText:',
    Style.InlineText
  );

  return (
    <div>
      <section>
        <div className={'innerBox'}>
          <h1>Vorbildliche Schulreform in Neuseeland</h1>
          <ImageTextFloatingSection
            imageSrc='/images/beach-583172_1920.jpg'
            imageAlt='Teenager'
            imagePosition='left'
          >
            <p>
              Das Schulsystem in Neuseeland wurde Anfang der 90er-Jahre
              entscheidend umgebaut. Vom Chef einer Supermarktkette beraten,
              beschloss der damalige Premierminister, dass Schulen sich in
              Zukunft selbst verwalten sollen. Seitdem befindet ein Gremium, das
              aus Eltern und Lehrkräften besteht, über alle Belange einer Schule
              selbst. Dementsprechend schnell ist auch Unterstützung da, egal ob
              es um schwierige Schüler oder renovierungsbedürftige Räume geht.
              Heute zählt das Schulsystem in Neuseeland nach internationalen
              Standards zu den besten der Welt. Wie wurde das geschafft? In
              Neuseeland vergingen vom Vorhaben bis zur Umsetzung der großen
              Schulreform lediglich 14 Monate. In dieser Zeit wurde die
              Abteilung für Bildung durch ein viel kleineres Ministerium
              ersetzt, man schaltete landesweit Anzeigen, die Mütter und Väter
              dazu aufriefen, sich für die Mitbestimmungsgremien zur Wahl zu
              stellen. Schulleitungen und Eltern besuchten Trainings, um zu
              lernen, wie das eigentlich geht: Gemeinsam eine Schule zu
              verwalten.
            </p>
          </ImageTextFloatingSection>

          <h2>Wenn alle an einem Strang ziehen</h2>
          <p>
            In Neuseeland wird sichtbar, welche Kraft sich entfaltet, wenn das
            Bildungssystem von einer Vision getragen wird, hinter der
            Politiker:innen, Wissenschaftler:inner, Lehrer:innen und Eltern
            gemeinsam stehen. Dazu trägt die neuseeländische Mentalität bei:
            Alles zu mögen, was nach Aufbruch und Pioniergeist klingt. „Das wir
            uns ständig verbessern wollen, liegt in der DNA unserer
            Gesellschaft.“ sagt Derek Wenmooth, einer der führenden
            Bildungsforscher Neuseelands. In Deutschland wird an einzelnen
            Symptomen herumgeschraubt. Ein Land, in dem Bildung nicht Chefsache
            ist? Wie kann das gehen? Noch fehlt die gemeinsame Vision und der
            Masterplan, aber das können wir ändern!
          </p>
          <h2>Haltungsänderung </h2>
          <p>
            Die Entscheidung dem neuseeländischen Ministerium Verantwortung
            abzunehmen und sie den Schulen und Eltern zukommen zu lassen, war
            der Erkenntnis geschuldet, dass Standardlösungen in der Bildung
            nicht funktionieren. Bildungsqualität entsteht vor Ort zwischen den
            direkt Beteiligten. Entscheider:innen dürfen nie zu weit von den
            Folgen ihrer Entscheidungen entfernt sein. Ein Hilferuf gegenüber
            Menschen, die man jeden Tag sieht, verhallt eben nicht so leicht
            ungehört. E-Mails an Sachbearbeiter:innen im Schulamt leider schon.
          </p>

          <h2>Zeigt Whanaungatanga</h2>
          <p>
            Bei den Maori, den Ureinwohnern Neuseelands, ist Whanaungatanga ein
            zentraler Begriff und hat keine deutsche Entsprechung. Er bezeichnet
            das Gefühl von tiefer Verbundenheit und Beziehung. Konkret bedeutet
            Whanaungatanga, für die anderen zu sorgen, weil ihr Geschick
            untrennbar mit dem eigenen verbunden ist.
          </p>

          <h2>Starke Persönlichkeit im Mittelpunkt</h2>
          <p>
            In Neuseeland sieht man die Lehrperson als absolut zentral für
            erfolgreiches Lernen an. Sie ist kein Moderator oder Vermittler,
            sondern ganz im Gegenteil eine starke Figur, die das Lernen klar
            strukturiert und steuert. Entsprechend ernst nimmt man auch die
            Frage, wie sie sich stetig verbessern kann. In Deutschland wird kaum
            überprüft, ob eine Lehrkraft ihrer Fortbildungspflicht nachkommt.
            Neuseeländische Lehrkräfte müssen ihre Lehrerlaubnis dagegen alle
            drei Jahre erneuern – und das dürfen sie nur, wenn sie an
            Fortbildungen teilgenommen haben. Dafür sind diese aber auch extrem
            wirkungsvoll. Während Fortbildungen in Deutschland meist externe
            Vorträge sind, die die Lehrkraft nach Unterrichtsschluss besucht,
            obwohl so etwas nachgewiesenermaßen wenig bringt. Die
            Fortbildner:innen in Neuseeland dagegen kommen direkt an die
            einzelne Schule, geben Modellstunden und gehen auf die individuellen
            Probleme und Fragen der Lehrkraft ein.
          </p>

          <h2>Offenheit für Zusammenarbeit </h2>
          <p>
            Hier bemüht man sich auf nationaler Ebene, die Zusammenarbeit
            zwischen den Lehrkräften zu fördern. Dass eine Lehrkraft an einer
            Schule etwas Tolles tut und andere es nicht bemerken, ist in
            Neuseeland praktisch unmöglich. Schon vor mehreren Jahrzehnten
            reisten so genannte Inspektor:innen von Schule zu Schule und
            organisierten Unterrichtsbesuche, wenn sie fanden, dass zwei
            Lehrer:innen etwas voneinander lernen könnten.
          </p>

          <h2>Vertrauensvolle Beteiligung</h2>
          <p>
            Den ersten Entwurf des aktuellen neuseeländischen Bildungsplanes
            verfassten im Jahr 2004 mehr als 15 000 Schüler:innen, Lehrer:innen,
            Schulleitungen, Eltern, Wissenschaftler:innen und
            Maori-Vertreter:innen zusammen. Anschließend wurden alle
            Neuseeländer:innen eingeladen, Anmerkungen zu machen. Dass eine
            solche Einbindung der gesamten Bevölkerung Zeit und Mühe kostet,
            nahm man gern in Kauf. Man wusste, dass ein breiter Konsens auf
            lange Sicht Probleme erspart. Im Unterricht sind Eltern stets
            willkommen - sofern sie bereit sind, die Lehrkräfte zu unterstützen.
            Die Eltern sind glücklich, wenn die Schule keine Blackbox ist, die
            ihre Kinder einfach verschluckt, und die Pädagog:innen freuen sich
            über helfende Hände. Selbst bei der Einstellung von Personal ist ein
            Elternvertreter:innen dabei. In Neuseeland können Eltern wichtige
            Anliegen auf die Agenda setzen, anstatt sich vor dem Schultor in
            Rage zu reden.
          </p>

          <h2>Bildungsqualität in kontrollierter Freiheit </h2>
          <p>
            Heute eint der Bildungsplan die Schulen Neuseelands und setzt dabei
            auf Sinnhaftigkeit (Kohärenz) statt Gleichmacherei. Statt
            umfassender Kontrolle schaltet sich der neuseeländische Staat nur am
            Anfang und Ende ein, den Weg dazwischen macht er frei. Der
            Bildungsplan definiert die Lernziele, die für alle Schulen im Land
            bindend sind, und die Hauptaufgabe der Inspektor:innen besteht
            darin, sicher zu stellen, dass eine Schule diese erreicht. Wie sie
            das tut, ist zweitrangig. Mikromanagement{' '}
            <Link
              href={'https://karrierebibel.de/mikromanagement/'}
              className={'text-secondary underline'}
            >
              (übertriebene Detailsteuerung, die Mitarbeitende in ihrer
              Autonomie einschränkt)
            </Link>{' '}
            gibt es nicht, und damit hat das Land Erfolg.
          </p>

          <h2>Neuseeländisches Curriculum (Bildungsplan)</h2>
          <p>
            Es legt fünf Schlüsselkompetenzen fest, die die Kinder im Laufe
            ihrer Schulzeit entwickeln sollen: zu anderen in Beziehung treten,
            selbständiges Denken, Sprache/ Symbole/ Texte benutzen, sich selbst
            managen und Beiträge leisten. Ebenso wichtig wie das akademische
            Lernen ist der Erwerb von Kompetenzen, wobei eigenverantwortliches
            Handeln gezielt gefördert wird. „Learning by Doing“ in Form von
            projekt- und gruppenbezogenem Lernen ist ein wichtiges Grundprinzip
            der Pädagogik. Die Schüler:innen arbeiten weitgehend selbstständig.
            Das vertrauensvolle Verhältnis zwischen Schüler:innen und
            Lehrkräften ist ein wichtiger Bestandteil der neuseeländischen
            Schulphilosophie.
          </p>
          <Link
            href={'https://newzealandcurriculum.tahurangi.education.govt.nz'}
            className={'text-secondary underline'}
          >
            Neuseeländisches Curriculum (Bildungsplan)
          </Link>

          <h2>Fortbildung mit Blick über den Gartenzaun</h2>
          <p>
            Neuseeländische Wissenschaftler:innen durchforsten stetig die
            internationale Forschungslandschaft zu allen wichtigen pädagogischen
            Themen und stellen u.a. solche Fragen:
          </p>
          <ul>
            <li>Wie unterrichtet man am besten Mathematik?</li>
            <li>Wie lernen Kinder aus bildungsfernen Schichten am besten?</li>
            <li>Wie gestaltet man Gruppenarbeit sinnvoll?</li>
          </ul>
          <p>
            Fremde Studien werden von ihnen geprüft und eigene durchgeführt. Auf
            Grundlage dieser umfangreichen Daten aus der ganzen Welt geben sie
            am Ende Empfehlungen (BES Ergebnisse = Interaktive Best Evidence
            Synthesis), eine Art Meta-Superstudien für den Unterricht heraus. In
            ihrem Umfang, ihrem Detailreichtum sind die BES, die in jeder Schule
            Neuseelands ausliegen, einzigartig und stellen für Lehrkräfte die
            sinnvollste Arbeitsgrundlage dar, die es geben kann.
          </p>

          <h2>Expertenwissen wird in die Schulpraxis gebracht </h2>
          <p>
            Die Neuseeländer:innen wollen es den Lehrkräften, über die BES
            hinaus, noch einfacher machen, gute Lehrer:innen zu sein. Deshalb
            beschäftigt das Bildungsministerium Hunderte von Vermittler:innen,
            die regelmäßig in alle Schulen des Landes ausschwärmen, um den
            Lehrpersonen die BES-Ergebnisse nahezubringen. Diese
            Vermittler:innen sind keine Feuerwehr, die erst gerufen wird, wenn
            es ernst wird. Sie gehen zu allen Lehrkräften, auch zu denen, bei
            denen es gut läuft. Die Schulen können ihre Vermittler:innen selbst
            aussuchen, nur wenn sie für deren Dienste finanzielle Unterstützung
            vom Staat wollen, müssen sie eine Person nehmen, die vom Ministerium
            geprüft wurde. Trotz der Freiräume, die jede einzelne Schule
            genießt, wird damit Einheitlichkeit über alle Schulen hinweg
            erzeugt, und selbst die Lehrkräfte einer völlig entlegenen Schule
            erfahren, dass es hilft, sich 8 Sekunden lang leicht aufs Knie zu
            tippen, wenn man Kindern genug Zeit geben will, selbst zu denken.
          </p>

          <h2>Die Schulwerte sind nicht verhandelbar</h2>
          <p>
            „Wir verbringen Monate damit, den Kindern beizubringen, wie sie sich
            selbst in den Griff kriegen. Bis sie das können, stellen wir alles
            andere zurück“, berichtet eine neuseeländische Schuldirektorin. Auch
            an ihrer Schule herrscht die neuseeländische Mischung aus Strenge
            und Freiheit. Einerseits gelten klare Regeln. Überall machen
            Piktogramme den Kindern vor, wie sie sich zu verhalten haben. Auf
            der anderen Seite bringt die Direktorin den Respekt, den sie selbst
            einfordert, auch den Menschen, mit denen sie es zu tun hat,
            entgegen. Die Lehrkräfte vermitteln den Kindern täglich eine
            Selbstwirksamkeitserwartung. Das Kind, das die proud cloud, eine
            kleine weiße Pappwolke, in der Hand hält, berichtet, was es am Tag
            zuvor stolz gemacht hat. Diese Pappwolken werden im Klassenzimmer
            aufgehängt. Auf die eine Seite schreibt jedes Kind, was es schon
            Tolles gelernt hat und auf die andere Seite, was ihm noch
            Schwierigkeiten bereitet. Dabei lernen sie, dass kein Mensch
            entweder nur ein Versager oder nur ein Alleskönner ist.
          </p>

          <h2>Aufbauen, statt beschämen</h2>
          <p>
            „Zeig mir, wie Du warten kannst!“ - statt: „Hör auf zu drängeln!“
          </p>
          <p>
            „In sieben Minuten komme ich wieder, was möchtest Du bis dort
            geschafft haben?“ - statt: „Du hast nichts geschafft, mach mal
            vorwärts!“
          </p>

          <h2>Selbsterkenntnis fördern</h2>
          <p>
            In die Magische Truhe, legt jedes Kind alles hinein, was für ihn:sie
            bedeutungsvoll ist. Aufbewahrungsort für Materielles und
            Immaterielles, Gegenstände, Empfindungen, Erinnerungen. Die Kinder
            sollen wissen, was sie ausmacht und wie sie sich treu bleiben. Dafür
            braucht es Selbsterkenntnis und emotionale Intelligenz. Die Magische
            Truhe dient der Ausbildung dieser Fähigkeiten.
          </p>

          <h2>KI und geistige Beweglichkeit </h2>
          <p>
            Seitdem das Internet Menschen miteinander verbindet, treten
            unterschiedliche Sichtweisen und Interessen besonders deutlich
            zutage. Wir leben heute im Zeitalter der „wicked problems“: Diese
            sind dadurch gekennzeichnet, dass viele Personen betroffen sind und
            es scheinbar unvereinbare Bedürfnisse und Wechselwirkungen gibt.
            Deswegen ist es wichtig, in Schulen das ursprünglich Menschliche zu
            fördern: Respekt, Empathie und Selbstbewusstsein. Ein reifes
            Urteilsvermögen, das die eigenen blinden Flecken mitdenkt und sich
            auf Werte sowie Fantasie stützt. Langfristig spalten „wicked
            problems“ die Gesellschaft. Die eine richtige Lösung wird dabei zur
            Illusion. Möglich sind nur „clumsy solutions“, bei denen man die
            Sichtweisen aller Beteiligten miteinbezieht, selbst nicht zu stur
            ist und die Antwort auf das Problem ständig weiterentwickelt. Die
            geistige Beweglichkeit, die dafür nötig ist, trainieren
            neuseeländische Lehrer:innen ganz gezielt mit ihren Schülern:innen.
          </p>

          <h2>Komplexes Denken lernen und begeistern</h2>
          <p>
            Neuseeland setzt auf die Integration aller verschiedenen Fächer,
            Kreativität, Teamarbeit und ganzheitliches Wohlbefinden. Die Schule
            begeistert alle Kinder fürs Lernen, indem sie mit ihnen auch dahin
            geht, wo ihr Leben stattfindet – z.B. nach draußen. Das größte Lob
            an neuseeländischen Schulen lautet: „Guter Gedanke!“. In Mathematik
            gibt es das „Problem solving“, z.B. Jenny besitzt Enten und
            Schweine. Ihre Enten und Schweine haben zusammen 28 Füße. Wie viele
            Schweine und Enten besitzt sie jeweils? Die Kinder haben in
            5er-Gruppen 20 Minuten Zeit. Danach geht es nicht um die eine
            richtige Lösung, sondern darum ihre Methoden zu erklären und sich
            auszutauschen. Ein Beispiel aus dem Schreibunterricht:
            Zweitklässler:innen entdecken eines Morgens eine kleine lilafarbene
            Tür an der Wand ihres Klassenzimmers, im Miniaturbriefkasten daneben
            steckt ein Zettelchen für sie. Unterschrieben von Lyla Mintleaf, die
            nun hinter diese Tür eingezogen ist und von nun an ihre Klassenfee
            ist. Seitdem herrscht rege Korrespondenz zwischen Fee und Kindern.
          </p>

          <h2>Respektvolles Integrieren</h2>
          <p>
            Vermittlerin Lucie Cheeseman geht zu einem Kind, das etwas abseits
            seiner Gruppe sitzt und zum Fenster hinausschaut: „Du bist nachher
            die Stimme der Gruppe, Du wirst Euer Denken den anderen vorführen.
            Bist Du einverstanden?“ Überrascht schaut der Junge hoch, dann nickt
            er. Zu den anderen Kindern der Gruppe sagt sie: „Ihr müsst drauf
            achten, dass Ihr Eure Stimme mit allem versorgt, was sie braucht.“
          </p>

          <h2>Blackboxes oder wissen, was in den jungen Menschen vorgeht</h2>
          <p>
            Eine Lehrkraft wird dann zur „guten Lehrer:in“, wenn sie weiß, wie
            es ihren Schüler:innen geht. An neuseeländischen Schulen werden
            deswegen ständig FeedbackSchleifen eingebaut. John Hattie hat sie
            als wirkungsvollste Maßnahme erkannt, wenn es darum geht, Unterricht
            zu verbessern. Zum Beispiel werden Schüler:innen aufgefordert, über
            folgendes Thema zu schreiben: Was jede Lehrkraft über mich wissen
            sollte.
          </p>

          <h2>Den jungen Menschen Erlebnisse geben</h2>
          <p>
            „Es gibt nichts Wichtigeres, als sich selbst aushalten zu lernen“,
            sagt ein Lehrer, der mit seinen 15- bis 16-jährigen
            Zwölftklässler:innen folgende Übung unternimmt: 48 Stunden allein im
            Wald sein. Die Ausrüstung dafür: Verpflegung, Wechselwäsche, eine
            orangerote Plane 10 x 10 Meter und eine Trillerpfeife für den
            Notfall. Wichtig ist auch, was nicht mitgenommen werden darf: Kein
            Telefon, keine Uhr, kein Buch, keine Musik. Nur ein Heft ihres
            Lehrers mit Geschichten von Menschen, die über sich selbst
            hinausgewachsen sind. Sowie viele leere Seiten, über denen Fragen
            stehen: „Wem möchtest Du danken?“ „Was hat Dich geprägt?“ „Wo
            möchtest Du in sechs Monaten sein?“
          </p>

          <h2>Die Liebe zu Büchern beibringen</h2>
          <p>
            Kreativität entsteht durch die maximale Öffnung der Gedankenwelt und
            ist das Gegenteil von Perfektion und die Verengung auf die eine
            richtige Lösung. Der Umgang mit Literatur erfüllt hier keinen
            Selbstzweck, sondern dient einem höheren Ziel - der
            Persönlichkeitsentwicklung: Je mehr Bücher ich gelesen habe, desto
            mehr Arten zu leben kenne ich. Desto besser verstehe ich die
            Menschen im echten Leben. So lerne ich mich in eine Person
            hineinzuversetzen und stelle dabei fest, wie stark meine eigenen
            Bewertungen von der eigenen Lebenserfahrung geprägt sind. Dadurch
            lernen wir alle Empathie. Nicht zuletzt helfen Diskussionen über
            Texte dabei, zu lernen, wie man Ambivalenz und unterschiedliche
            Sichtweisen aushält. Eine Fähigkeit, die im 21. Jahrhundert, in dem
            Spannungen in der Gesellschaft allerorts zunehmen, notwendiger ist
            denn je.
          </p>

          <h2>Inklusion ist kein Sonderfall, sondern gelebter Alltag</h2>
          <p>
            Neuseeländische Schulen sind immer Gesamtschulen, in denen alle
            Schüler gemeinsam und unabhängig vom Leistungsniveau unterrichtet
            werden. Inklusion wird als ein wichtiger Aspekt der Bildung
            angesehen. Das Land hat sich verpflichtet, Schüler:innen mit
            unterschiedlichen Bedürfnissen und Fähigkeiten eine qualitativ
            hochwertige Bildung zu bieten. Inklusion bedeutet, dass
            Schüler:innen mit Behinderungen oder besonderen Bedürfnissen in
            regulären Schulen unterrichtet werden, wenn dies möglich ist. Es
            gibt spezialisierte Ressourcenzentren und Lehrer:innen, die darauf
            spezialisiert sind, Schüler:innen mit besonderen Bedürfnissen zu
            unterstützen und individuelle Bildungspläne zu entwickeln. Das Ziel
            ist es, sicherzustellen, dass alle Schüler:innen die gleichen
            Bildungschancen haben.
          </p>

          <h2>
            Benachteiligte Kinder – sprachlich, sozial, wirtschaftlich,
            traumatisiert{' '}
          </h2>
          <p>
            Das neuseeländische Schulsystem sieht die Kinder nicht als
            defizitäre Wesen, sondern hat sich für einen anderen Weg
            entschieden: Empowerment – also Respekt, Vertrauen und Interesse am
            anderen, sowie hilfreiche Unterstützung. Beispiele: zusammen
            gärtnern, kochen, feiern... Zudem gibt es eine Krankenschwester an
            jeder Schule und das „Buddy-Prinzip“: Um jeden Neuzugang kümmern
            sich zwei Kinder, auch in den Pausen. Es gibt eine Morgenbegrüßung
            in allen Sprachen, die Teil der Klasse sind. Migranteneltern werden
            aktiv integriert und persönlich interviewt. Dabei werden
            Anknüpfungspunkte gefunden und alle Eltern niederschwellig am
            Schulleben beteiligt. Unter Einbezug der Familien werden z.B.
            türkische oder samoanische Wochen veranstaltet.
          </p>

          <h2>Schulorganisation</h2>
          <p>
            Ein Kind wird mit seinem 5. Geburtstag eingeschult – Einschulung das
            ganze Jahr über. In Neuseeland gibt es keine Aufteilung in
            Realschule, Gymnasium etc., sondern alle Schüler besuchen zusammen
            die „Primary School“ (Grundschule) und anschließend die
            „Intermediate School“ (Mittelschule) bzw. die „High School“
            (Gesamtschule 9-13). Die Schule beginnt in Neuseeland um 9:00 Uhr
            und endet jeden Tag um 15:00 Uhr – die „High School“ endet um ca.
            15:15 Uhr. Eine Klasse kann 50 Schüler:innen umfassen, die von 4
            Lehrkräften unterrichtet werden. Hausaufgaben bekommen die Kinder in
            der Regel nicht auf, nach der Schule haben sie Freizeit und können
            ihren Hobbys nachgehen, spielen oder lernen.
          </p>

          <h2>Bewertung</h2>
          <p>
            Das Schulsystem in Neuseeland macht keinen Unterschied bei der
            Bewertung von akademischen und nicht akademischen Fächern. Der
            Vorteil ist, dass eher praktisch begabte Schüler:innen nicht hinter
            den „Denker:innen“ zurückstehen. Wissensdurst, Neugier und das
            Erkennen der eigenen Talente stehen im Vordergrund – nicht
            Leistungsdruck, Wettbewerb und Prüfungsangst. Das stärkt das
            Selbstvertrauen und die Eigenständigkeit der Schüler:innen. Die
            Lehrkräfte beobachten, unterstützen und besprechen die Fortschritte
            mit Eltern und Schüler:innen. Selbst die Leistungsbewertung ab 15
            bis 16, also ab dem letzten Pflichtschuljahr, erfolgt ohne Noten.
            Dafür gibt es ein Punktesystem, das sogenannten NCEA (National
            Certificate of Educational Achievement). Es gibt nicht an, wie gut
            Schüler:innen im Vergleich zu anderen sind. Vielmehr zeigt es, ob
            Schüler:innen bestimmte Lernziele erreicht haben. Für jede
            bestandene Aufgabe oder Prüfung erhalten sie Punkte. Für den
            erfolgreichen Schulabschluss brauchen sie eine ausreichende
            Punkteanzahl.
          </p>

          <h2>Finanzierung</h2>
          <p>
            Neuseeland investiert vergleichsweise viel Geld in sein
            Bildungswesen. Mit 6,5 % des Bruttosozialprodukts liegt es hier
            weltweit auf dem dritten Platz!
          </p>

          <h2>Zur Vergleichbarkeit</h2>
          <p>
            Integration und Chancengleichheit sind in Neuseeland wichtige
            Themen. Es ist ein Einwanderungsland mit etwa 60.000 Immigranten im
            Jahr 2024. Neuseeland{' '}
            <Link
              href={'https://de.wikipedia.org/wiki/Neuseeland'}
              className={'text-secondary underline'}
            >
              (269.652 km²)
            </Link>{' '}
            ist flächenmäßig ca. sieben mal größer als Baden-Württemberg{' '}
            <Link
              href={'https://de.wikipedia.org/wiki/Baden-W%C3%BCrttemberg'}
              className={'text-secondary underline'}
            >
              (35.751,46 km²)
            </Link>
            , hat aber nur 4,8 Millionen Einwohner:innen und 2531
            allgemeinbildende Schulen.
            <Link
              href={
                'https://www.statistik-bw.de/BildungKultur/SchulenAllgem/abschulen.jsp'
              }
              className={'text-secondary underline'}
            >
              Baden-Württemberg hat rund 11 Mio Einwohner:innen mit 3527
              allgemeinbildenden Schulen.
            </Link>{' '}
            Somit hat Baden-Württemberg 2,3 mal so viele Einwohner wie
            Neuseeland, aber nur 1,4 mal so viele Schulen.
          </p>

          <h2>Weitere Informationen</h2>

          <div className={'flex flex-col items-start space-y-4'}>
            <TextLinks
              href='https://www.zeit.de/gesellschaft/schule/2019-12/bildung-neuseeland-schulen-lehrer-kinder-lernen'
              style={Style.Button}
            >
              Gebt den Kindern einen Grund zum Lernen - Text zum Buch von Verena
              Friederike Hasel
            </TextLinks>

            <TextLinks
              href='https://www.deutschlandfunkkultur.de/weltkindertag-was-und-wie-sollten-die-kinder-im-21-jahrhundert-lernen-dlf-kultur-2b357d2f-100.html'
              style={Style.Button}
            >
              Schulen von heute entscheiden über die Zukunft von morgen - 12 min
              Podcast
            </TextLinks>

            <TextLinks
              href='https://campus-a.at/2025/03/27/neuseeland-das-schragste-bildungssystem-der-welt/'
              style={Style.Button}
            >
              Neuseeland: Das schrägste Bildungssystem der Welt
            </TextLinks>

            <TextLinks
              href='https://zeitfuerx.de/bildung/wie-wird-schule-menschlicher-vorbild-neuseeland/'
              style={Style.Button}
            >
              Vorbild Neuseeland - Wie wird Schule menschlicher? In Neuseeland
              ist das Wohlbefinden der Schüler:innen und Lehrer:innen erklärtes
              Ziel im Lehrplan. Wie kann Deutschland davon lernen? Expertin Anne
              Sliwka gibt Impulse. 5:48 min
            </TextLinks>

            <TextLinks
              href='https://www.youtube.com/watch?v=8tFCKMFG9MM'
              style={Style.Button}
            >
              SCHULE IN NEUSEELAND - Das Neuseeländische Schulsystem erklärt von
              einer Deutschen Auswanderin , Video 8 min
            </TextLinks>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page;
