import React from 'react';
import Link from 'next/link';
import ImageTextFloatingSection from '@/app/components/ImageTextFloatingComponent';
import Button from '@/app/components/Button';

const Page = () => {
  return (
    <div>
      <section>
        <div className={'innerBox'}>
          <h1>
            DYSFUNKTIONALES SCHULSYSTEM produziert zu viele Verlierer:innen
          </h1>
          <h2>
            Probleme haben Ursachen - aus ihrer Analyse entstehen die
            Lösungsansätze
          </h2>
          <p>Wir alle nehmen wahr, dass es so nicht weitergehen kann.</p>
          <p>
            Unser Schulsystem produziert zu viele Verlierer. Bildung ist eine
            wesentliche Grundlage für die Erneuerung unserer Gesellschaft. Das
            Wohlergehen von Familien, unserer Wirtschaft und unserer Zukunft
            hängt davon ab, dass wir unsere Kinder bestmöglich bilden. Schule
            ist ein Instrument der Gesellschaft. Wir werden den Zusammenhalt und
            die Zuversicht weiter verlieren, wenn wir nicht gemeinsam in eine{' '}
            <Link href={'/#loesungen'} className='underline hover:no-underline'>
              Transformation
            </Link>{' '}
            kommen.
          </p>
        </div>
      </section>
      <section
        className={
          'bg-[color:var(--color-secondary)] text-[color:var(--color-neutral)]'
        }
      >
        <div className={'innerBox'}>
          <ImageTextFloatingSection
            imageSrc='/images/family-6886803_1920.jpg'
            imageAlt='Teenager'
            imagePosition='right'
            size={'medium'}
            caption={'Verlierer Nr. 1 - Kinder und Familien'}
          >
            <p>
              Mehr als 25% der Grundschüler:innen erreichen die
              Leistungsstandards in Deutsch und Mathematik nicht. Immer mehr
              Kinder und Jugendliche leiden unter Stress, zeigen psychologische
              Auffälligkeiten oder haben sonderpädagogische Bedarfe. Die Chance
              wird vertan, Kinder und Jugendliche in ihrer Individualität zu
              erkennen und anzuerkennen. Damit wird ihnen die Möglichkeit
              verwehrt, etwas über ihr eigenes Lernen und Leben herauszufinden.
              Seelische und körperliche Gesundheit, sowie die Entwicklung ihres
              Potentials erfahren nicht die Fürsorge, die unser Landesgesetz
              verspricht. Das System ist nicht dafür ausgelegt, Kinder
              langfristig aufzubauen, ihnen die Freude am „Lebenslangen Lernen“
              zu ermöglichen, sondern führt in Demotivation. Hinzu kommen die
              Benachteiligung oder Ausgrenzung von Kindern. Chancengerechtigkeit
              sieht anders aus. Familien erleiden unnötige Belastungen. Wie viel
              Bildung, Chancen und Lebensfreude hier zu gewinnen wären!
            </p>
            <Button
              text={
                'Tatsachenbericht 2025: Schulverlierer - abgehängt schon in der Grundschule?'
              }
              href={
                'https://www.ardmediathek.de/video/story/ard-story-schulverlierer-abgehaengt-schon-in-der-grundschule/swr/Y3JpZDovL3N3ci5kZS9hZXgvbzIyNDU4NDk'
              }
              newTab={true}
            ></Button>
          </ImageTextFloatingSection>

          <ImageTextFloatingSection
            imageSrc='/images/college-student-2052868_1920.jpg'
            imageAlt='Teenager'
            imagePosition='left'
            size={'medium'}
            caption={
              'Verlierer Nr. 2 - Pädagogisches Personal und Schulleitungen'
            }
          >
            <p>
              In unserem schwerfälligen, staatlichen Schulsystem geht täglich
              viel an Engagement und an eingesetzten Ressourcen verloren. Zuviel
              Einzelkämpfertum und überholte Strukturen behindern die notwendige
              Transformation. „Echte Bildungsqualität fängt damit an, dass die,
              die sie herstellen sollen und wollen, überhaupt „Luft“ dafür
              haben!“ Haben sie diese nicht, verlieren sie den Erfolg und die
              Freude am so wichtigen Beruf. In Zeiten knapper Fachkräfte ein
              fataler Teufelskreis. Wie viel tolle Arbeitsplätze, Bildungserfolg
              und Arbeitsfreude hier zu gewinnen wären! Und natürlich auch viele
              junge Menschen, die Lust bekämen, diesen sinnvollen Beruf
              auszuüben…
            </p>
          </ImageTextFloatingSection>

          <ImageTextFloatingSection
            imageSrc='/images/worker-5736096_1920.jpg'
            imageAlt='Teenager'
            imagePosition='right'
            size={'medium'}
            caption={'Verlierer Nr. 3 - Arbeitswelt'}
          >
            <p>
              Unser Arbeitsmarkt leidet unter akutem Fachkräftemangel.
              Handwerksbetriebe finden zu wenige geeignete Auszubildende.
              Gleichzeitig fehlen zu vielen Jugendlichen neben Grundkompetenzen
              in Deutsch und Mathematik auch andere wichtige Fähigkeiten, wie
              Teamfähigkeit, kritisches Denken, Kreativität, Eigenverantwortung
              oder soziale Umgangsformen. Die Wirtschaft braucht aber, gerade in
              Zeiten ungünstiger Demographie, dringend kompetente und
              tatkräftige Mitarbeiter:innen. Diese fallen nicht vom Himmel,
              sondern könnten in unseren Schulen gebildet und gewonnen werden.
            </p>
          </ImageTextFloatingSection>

          <ImageTextFloatingSection
            imageSrc='/images/hoch/street-coffee-444922_1920.jpg'
            imageAlt='Teenager'
            imagePosition='left'
            size={'tiny'}
            caption={'Verlierer Nr. 4 - Gesellschaft'}
          >
            <p>
              Unser Bildungssystem lässt Bildungsqualität und
              Chancengerechtigkeit vermissen. Dadurch wird weiterhin soziale
              Ungleichheit erzeugt. Weder Inklusion noch Integration können ohne
              eine wirkliche Transformation gelingen. Schule im Stressbetrieb
              kann auch keine Demokratiebildung leben und entlässt zu viele
              Jugendliche, denen es an grundlegenden Kompetenzen,
              Eigenverantwortung oder seelischer Gesundheit fehlt. Unsere
              Gesellschaft, die inmitten von vielen Herausforderungen steht,
              erfährt so keinen Zuwachs an Zusammenhalt, sondern weitergehende
              Spaltung. Inzwischen ist die Demokratie in Bedrängnis, die
              Menschen verlieren die Zuversicht und Populisten, sowie
              rechtsextreme Gesinnung erfahren ungebremsten Machtzuwachs. Die
              Folgekosten, die ein dysfunktionales Bildungssystem verursacht,
              sind nicht direkt sichtbar, aber immens. Jeder Euro, der in unsere
              Kinder und für die Transformation in ein erfolgreiches
              Bildungssystem investiert wird, ist das Zigfache wert. Die beste
              Rendite für unsere Gesellschaft steckt in der Bildung aller
              unserer Kinder.
            </p>

            <p>
              Kein Grund zum Feiern: Seit zehn Jahren herrscht Stillstand bei
              der Inklusion.
            </p>
          </ImageTextFloatingSection>
        </div>
      </section>

      <section>
        <div className={'innerBox'}>
          <ImageTextFloatingSection
            imageSrc='/images/window-7209118_1920.jpg'
            imageAlt='Teenager'
            imagePosition='left'
            size={'small'}
            caption={'Welche Funktionen von Schule liegen im Ungleichgewicht ?'}
          >
            <p>
              Schule hat in Deutschland drei Funktionen: Aufbewahrung, Auslese
              und Bildung. Seit der Corona-Schulschließung ist klar, die
              allerwichtigste Funktion ist heutzutage die Aufbewahrung. In einer
              Situation der Unterversorgung mit Personal und Verpflichtung zum
              Ganztag steht das Motto - „Hauptsache der Laden läuft“,
              „Hauptsache, die Kinder sind in der Schule versorgt“ - an erster
              Stelle. Bildungsqualität muss zurückstehen. Nicht nur anerkannte
              PISA-Studien belegen, dass unser Schulsystem zu viele
              Verlierer:innen produziert und dem Wohlergehen der anvertrauten
              Kinder und Jugendlichen zuwiderläuft.
            </p>

            <p>
              Die frühe Aufteilung der Schüler nach der 4. Klasse in höhere und
              nicht so hohe Bildungsgänge ist international eher einzigartig. In
              der Fachliteratur gibt es dazu mehrere Kilometer an
              Veröffentlichungen, die alle in dieselbe Richtung weisen: Diese
              Selektion, bereits in den Grundschulen, macht den Schulalltag für
              viele zu einer angstbelasteten Veranstaltung und vergiftet die
              Atmosphäre an deutschen Regel-Schulen. „Die Hauptschwäche des
              deutschen Schulsystems ist, dass es die Schulen aus der
              Verantwortung entlässt, sich um „schwierige“ Schüler:innen zu
              kümmern. Kinder mit Lernschwierigkeiten werden zu schwierigen,
              störenden und schließlich gestörten Kindern gemacht. Das ist in
              dem Ausmaß im Vergleich zu allen anderen von Pisa untersuchten
              Ländern beispiellos.“ (Reinhard Kahl)
            </p>

            <p>
              {' '}
              Akademiker:innen sind fälschlicherweise immer noch die Leitfiguren
              des Konzepts der Wissensgesellschaft. Dies ergibt einen hohen
              Druck für eine Gymnasialempfehlung auf Kinder und Familien. Viele
              Kinder der weiterführenden Schulen erleben: Du bist das „falsche“
              Kind an der „richtigen“ Schule. Durch diese Haltung wird
              gleichzeitig das System der Berufsausbildung geschwächt.
            </p>
          </ImageTextFloatingSection>

          <ImageTextFloatingSection
            imageSrc='/images/stadium-2921657_1920.jpg'
            imageAlt='Teenager'
            imagePosition='right'
            caption={
              'Welche weiteren veralteten Strukturen bewirken Dsyfunktionalität?'
            }
          >
            <p>
              Schule wird in historischer Gewohnheit von oben herab hierarchisch
              strukturiert und mit mangelnden Ressourcen ausgestattet – dies
              geschieht in der Regel durch Menschen, die nicht in ihr arbeiten.
              Das Konzept ist aus dem vorletzten Jahrhundert: Man nehme eine
              Großgruppe Kinder, ein Zimmer und eine Lehrperson, die im 45 min
              Takt das Fach wechselnd, anwesend ist. Tafel und Schwamm dazu.
              Stundenplan, Hefte und Bücher. Neuerdings auch digitale Tafeln,
              Handys oder Tablets. Im Extremfall erleben Kinder schon in der
              Grundschule im Ganztag bis zu 10 Personalwechsel täglich. Die
              Stundenpläne und Sachzwänge erfordern unnachgiebige Fachabfolge im
              vorgegebenen Takt. Alle Menschen im System müssen funktionieren,
              die Strukturen aushalten und irgendwie das Beste daraus machen.
            </p>
          </ImageTextFloatingSection>

          <ImageTextFloatingSection
            imageSrc='/images/desperate-5011953_1920.jpg'
            imageAlt='Teenager'
            imagePosition='left'
            size={'small'}
            caption={
              'Welche Rolle spielen Personalmangel und zunehmende Aufgabenfülle?'
            }
          >
            <p>
              Unser Kultusministerium lässt seit Jahrzehnten eine genügende
              Personalplanung vermissen. Erstklässler:innen fallen nicht vom
              Himmel. Welcher Wirtschaftsbetrieb kennt sechs Jahre zuvor die
              Zahlen? Doch es wird noch nicht einmal eine Lehrkräftereserve
              eingeplant. So gehören Unterrichtsausfälle, bereits zu
              Schuljahresbeginn seit langem zum Alltag. Unsere Schulleitungen
              sind durch Organisationsarbeit zugeschüttet und irgendwann einfach
              nur noch froh, wenn sie über die Runden kommen.... Hilferufe
              werden ignoriert. Viele Lehrkräfte gleichen seit Jahrzehnten aus,
              was an strukturellen Defiziten krankt. Manche enden im Burnout,
              andere retten sich in Dienst nach Vorschrift. Schule und der
              Lehrberuf bedeuten in der Realität: Arbeit ohne Ende, auf allen
              Ebenen präsent sein (Kinder, Themen, Material, Organisation,
              Kooperation, Bewertungsverantwortung und Eltern) und dabei zu
              versuchen, dem einzelnen Kind gerecht zu werden. Es sind immer
              wieder Konflikte zu lösen, oft unter unmöglichen Bedingungen. Eine
              Einzellehrkraft, die stundenplanmäßig schon wieder in eine andere
              Klasse hetzen muss, hat weder die Zeit, noch die Nerven
              kindgerecht auf Bedürfnisse und Probleme einzugehen. Die Folgen?
              Es fehlt an echter Bildungsqualität und wir verlieren stetig neue
              Generationen an Kindern.
            </p>
          </ImageTextFloatingSection>

          <ImageTextFloatingSection
            imageSrc='/images/concept-1868728_1920.jpg'
            imageAlt='Teenager'
            imagePosition='right'
            size={'small'}
            caption={'Wir haben doch gute Bildungspläne und Lehrkräfte?'}
          >
            <p>
              Natürlich haben wir ziemlich gute Werte und hehre Bildungsziele -
              dem gesellschaftlichen Fortschritt nach dem 2. Weltkrieg sei Dank.
              Die Schule soll mündige und demokratische Menschen erziehen,
              fachliche Kompetenz vermitteln, Chancengleichheit, Integration &
              Inklusion leisten ... Es gibt unzählige neue Programme, Medien,
              Fortbildungen über neue Lernformen oder Schwerpunkte, die
              Lehrkräfte umsetzen sollen und natürlich auch wollen – nur: Im
              laufenden Stress-Betrieb bleibt vieles auf der Strecke. Auch die
              Schulentwicklung findet nicht systematisch statt, sondern bleibt
              abhängig von besonders engagierten Schulleitungen und Kollegien.
              Die Unterstützung durch die Schulverwaltung oder die Landespolitik
              bleibt insgesamt ungenügend. Die notwendige Transformation gelingt
              bisher nur im Glücksfall und an einzelnen Schulen. In der Fläche
              herrschen notgedrungen „business as usual”, Stillstand,
              Resignation oder Verschleiß. Zwischen Anspruch und Wirklichkeit
              bestehen riesige Unterschiede. Wir doktern noch ewig an Symptomen,
              wenn die grundlegenden Strukturen nicht zielorientiert
              ausgerichtet werden. Neuseeland macht es vor: Bereits in den 90er
              Jahren wurde ein entscheidender Richtungswechsel eingeleitet. Eine
              wirkungsvolle Schulreform konnte innerhalb 14 Monaten die
              Bedingungen in den Schulen so verbessern, dass das Bildungssystem
              international als eines der besten gilt.
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
          <h2>
            Schule in Deutschland – ein „maximal kränkendes undemokratisches
            System“!
          </h2>
          <p>
            Auszüge eines Leserbriefs von G.-U. Franz, ehemaliger Vorsitzender
            der GGG (Verband für Schulen des gemeinsamen Lernens e.V.):
          </p>
          <p>
            Die ganze Schule, bildet ein System, das Kinder eher verletzt und
            klein macht, statt eigene und gemeinsame Entwicklung zu befördern.
          </p>
          <p>
            Sein Ursprung und auch die überkommene hierarchiefördernde Funktion
            liegen im Kaiserreich, und erfordern eine demokratisch zwingende,
            unabdingbare Veränderung – zu einer das gesellschaftliche
            Miteinander fördernden Schule für alle!
          </p>
          <p>
            Die Politik vermeidet eine klare Positionierung, obwohl gilt: Die
            Würde „zu achten und zu schützen ist Auftrag aller staatlichen
            Gewalt“(GG, Art.1(2)). Dieser Auftrag wird in den Strukturen und
            Abläufen des Systems tagtäglich missachtet. Spaltung wird befördert,
            statt wertschätzendes Miteinander erlernt und erlebt!
          </p>
        </div>
      </section>
    </div>
  );
};
export default Page;
