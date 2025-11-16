'use client';
import React from 'react';
import TextLinks from '@/app/components/text/TextLinks';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Presse und Fakten</h1>
        {/* <ImageTextSection
          imageSrc={'/images/presse-und-fakten.jpg'}
          imageAlt={'sdaf'}
          imagePosition={'left'}
        >
         </ImageTextSection>*/}
        <p>
          Auf diesen Seite findet ihr Links zu Presseartikeln (teilweise leider
          hinter einer Bezahlschranke) zum Thema Bildung und eine von uns
          zusammengestellte Faktensammlung zur weiteren Unterfütterung der
          Petitions-Forderungen.
        </p>
        <h2>Fakten</h2>
        <h3>Verwaltung</h3>
        Wir wollen hier zur nachdrücklichen Begründung unseres Antrags auf
        externe Evaluation der Organisation und Arbeitsweise des
        Kultusministeriums nur drei der (uns bekannten)
        „Leuchtturm“-Negativbeispiele erwähnen, die diesen Schritt nahelegen:
        <h3>Personalplanung I, Geisterstellen</h3>
        <p>
          <b>1440 unbesetzte Lehrerstellen</b>
          <br />
          Im Juli dieses Jahres fiel im Kultusministerium auf, dass weit mehr
          als 1000 Lehrer-Planstellen über Jahrzehnte nicht besetzt wurden. Was
          soll man dazu sagen? Immerhin ist es Frau Schopper hoch anzurechnen,
          dass sie auf diese Tatsache aufmerksam gemacht hat. Wussten ihre
          Vorgänger:innen vielleicht auch schon davon, haben sich aber nicht
          getraut an die Öffentlichkeit zu gehen?
          <br />
          Wenn sogar selbst der umstürzlerischer Umtriebe unverdächtige
          ehemalige Ministerpräsident <b>Günter Öttinger (CDU)</b>
          der Auffassung war,{' '}
          <b>
            das Problem ließe sich nur durch die Neugründung des Ministeriums
            lösen
          </b>
          , und sich auch der amtierende Ministerpräsident Winfried Kretschmann
          (Grüne) über die Jahre gerade über die Lehrerstellenverwaltung und die
          Trägheit der Schulverwaltung immer wieder kritisch geäußert hat, dann
          liegt wirklich sehr viel im Argen. Jede Lehrkraft im Staatsdienst kann
          aus dem Stand mindestens eine haarsträubende
          Kultusverwaltungsgeschichte erzählen.
          <br />
        </p>
        <p>
          <b>Presse</b>
          <br />
          <i>
            "An der Leistungsfähigkeit der baden-württembergischen
            Kultusverwaltung gibt es schon seit vielen Jahren große Zweifel, der
            frühere Ministerpräsident Günter Oettinger (CDU) war sogar der
            Auffassung, das Problem ließe sich nur durch die Neugründung des
            Ministeriums lösen, auch der amtierende Ministerpräsident Winfried
            Kretschmann (Grüne) hat sich über die Jahre gerade über die
            Lehrerstellenverwaltung und die Trägheit der Schulverwaltung immer
            wieder kritisch geäußert."
          </i>
        </p>
        Quellen:
        <br />
        Staatsanzeiger:{' '}
        <TextLinks
          href={
            'https://www.staatsanzeiger.de/nachrichten/politik-und-verwaltung/die-1440-geisterstellen-sind-ein-strukturproblem-geisterstellen-ein-strukturproblem/'
          }
        >
          Die 1440 Geisterstellen sind ein Strukturproblem{' '}
        </TextLinks>
        <br />
        F.A.Z:{' '}
        <TextLinks
          href={
            'https://www.faz.net/aktuell/politik/inland/baden-wuerttemberg-1440-unbesetzte-lehrerstellen-entdeckt-110594045.html'
          }
        >
          1440 unbesetzte Lehrerstellen
        </TextLinks>
        <br />
        SWR:{' '}
        <TextLinks
          href={
            'https://www.swr.de/swraktuell-radio/software-panne-kultusministerium-bw-unbesetzte-lehrerstellen-bleiben-unentdeckt-100.html/'
          }
        >
          Warum blieben 1.440 unbesetzte Lehrerstellen unentdeckt?{' '}
        </TextLinks>
        <br />
        <h3>Personalplanung II, Abschluss 2025</h3>
        <p>
          Nach Abschluss der gymnasialen Ausbildung 2025 hat sich
          herausgestellt, dass nur wenige Referendar:innen vom Kultusministerium
          eine Stelle als Gymnasialleher:in angeboten bekommen.
        </p>
        <p>
          <i>
            Nun gibt es noch 360 Stellen zu vergeben, aber noch 1.128 junge
            Lehrkräfte, die ans öffentliche Gymnasium wollen, hieß es aus dem
            Ministerium. Mehr als die Hälfte wird im Juli mit dem 18-monatigen
            Referendariat fertig, der Rest hat sich schon mal beworben.
          </i>
        </p>
        <p>
          <i>
            In den ersten Jahren des Übergangs werden weniger Lehrkräfte
            gebraucht, weil Schülerinnen und Schüler in G9-Klassen weniger
            Unterricht pro Woche haben als bei G8. Nach Berechnungen des
            Ministeriums werden bis zum Schuljahr 2030/2031 knapp 1.600 volle
            Stellen weniger benötigt. Erst im Jahr 2031/2032 ändert sich das
            dann langsam und im Schuljahr darauf werden auf einen Schlag 860
            mehr Stellen als heute gebraucht.
          </i>
        </p>
        Quelle:{' '}
        <TextLinks
          href={
            'https://www.swr.de/swraktuell/baden-wuerttemberg/junge-lehrer-kein-job-gymnasium-100.html'
          }
        >
          SWR: Junglehrer ohne Job
        </TextLinks>
        <h3>Digitale Bildungsplattform "ella" nicht betriebsfähig</h3>
        <p>
          Im Jahr 2018 musste das Kultusministerium das Scheitern eines
          digitalen Projektes eingestehen: 24 Millionen Euro Ausgaben plus
          Kosten in unbekannter Höhe, die durch die Projektsteuerung im
          Ministerium und bei dem damaligen Dienstleister KIVBF entstanden
          waren. Die KIVBF war ein öffentlich-rechtlicher Zweckverband, der
          zudem am 1.7.2018 mit weiteren zu selbem Zweck gegründeten Verbänden
          fusionierte (siehe Wikipedia). Man mag sich nicht vorstellen wie viel
          Energie in die Fusionsgespräche floß. Es ist daher nicht
          verwunderlich, dass fachliche Fragen nicht mit höchster Priorität
          behandelt wurden.
        </p>
        <p>
          <b>Presseecho</b>
          <br />
        </p>
        <i>
          Die digitale Bildungsplattform „ella“ kann nicht wie geplant am
          Montag, den 26. Februar 2018, starten. Grund dafür sind massive
          technische Probleme.
          <br />
        </i>
        <TextLinks
          href={
            'https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/digitale-bildungsplattform-ella-nicht-betriebsfaehig?highlight=ella/'
          }
        >
          BaWü-Pressemitteilungen vom 23.02.2018
        </TextLinks>
        <br />
        <br />
        Die digitale Bildungsplattform "ella" hat Kosten in Höhe von 24
        Millionen Euro verursacht, berichtet die Schwäbische.de. Diese Kosten
        wurden für die Entwicklung und Einführung der Plattform aufgewendet, die
        Lehrer und Schüler vernetzen soll, so die Schwaebische.
        <br />
        <TextLinks
          href={
            'https://www.schwaebische.de/regional/baden-wuerttemberg/ella-soll-suedwest-schulen-revolutionieren-351279'
          }
        >
          Schwäbische Zeitung: Digitale Plattform „Ella“ soll Schulen
          revolutionieren
        </TextLinks>
        <br />
        <br />
        <i>
          <b>
            Desaster um “ella”: Rechnungshof listet Fehler bei Schulcloud auf
          </b>
          <br />
          STUTTGART. Nun hat die baden-württembergische Regierung es schwarz auf
          weiß: Das Land selbst hat zum Scheitern der Bildungsplattform «ella»
          beigetragen – sagt der Landesrechnungshof.{' '}
          <b>Kommt nun ein Untersuchungsausschuss?</b>
          <br />
        </i>
        <TextLinks
          href={
            'https://www.news4teachers.de/2019/09/desaster-um-ella-rechnungshof-listet-fehler-bei-schulcloud-auf'
          }
        >
          News4Teacher
        </TextLinks>
        <br />
        <br />
        <p>
          <b>Unsere Anfrage an ChatGPT-KI mit folgendem Prompt:</b>
          <br />
          <i>
            "Gibt es Informationen zu ella, das war der Versuch des Landes
            Baden-Württemberg ein Lehrerauskunftsprogramm einzuführen. Dies ist
            2018 gescheitert. Gab es dazu eine parlamentarische Aufarbeitung?"
          </i>
          <br /> ergab diese
        </p>
        <details>
          <summary>
            {' '}
            <b>ChatGPT-Ausgabe</b>{' '}
          </summary>
          <p className={'bg-cyan-50 p-4 rounded-lg'}>
            <b>Das ella-Projekt - Überblick:</b>
            <br />
            "ella" war eine digitale Bildungsplattform Baden-Württembergs, die
            am 26. Februar 2018 wegen massiver technischer Probleme nicht wie
            geplant starten konnte. Die Plattform sollte allen 1,5 Millionen
            Schülern und Lehrern in Baden-Württemberg zur Verfügung stehen.
            <b>Finanzielle Dimension und Streitigkeiten</b>
            <br />
            Das Land forderte 6,5 Millionen Euro von der Entwicklerfirma Iteos
            zurück, nachdem das Vertragsverhältnis durch den Rücktritt des
            Landes beendet wurde. Gleichzeitig forderten die Entwickler der
            gescheiterten Bildungsplattform "ella" vom Land Baden-Württemberg 20
            Millionen Euro für ihre Arbeit.
            <b>Parlamentarische Aufarbeitung</b>
            <br />
            <b>Rechnungshof-Untersuchung:</b> Das grün-schwarze Kabinett
            beschloss im Oktober 2018, die obersten Rechnungsprüfer des Landes
            mit der Untersuchung zu beauftragen. Ein Gutachten des Rechnungshofs
            Baden-Württemberg lastete die Versäumnisse{' '}
            <b>vor allem dem Kultusministerium</b> an.
            <br />
            <b>Diskussion über Untersuchungsausschuss:</b> Es gab Diskussionen
            darüber, ob trotz des Rechnungshof-Gutachtens noch ein
            parlamentarischer Untersuchungsausschuss gebraucht würde, wobei
            besonders die SPD als Initiatorin des Projekts dies abwägen müsse.
            <br />
            <b>Kultusausschuss-Behandlung:</b> Der Fall wurde im Kultusausschuss
            des Landtags behandelt, jedoch konnte ich keine Hinweise auf einen
            eigenen parlamentarischen Untersuchungsausschuss speziell zu "ella"
            finden.
            <b>Ergebnis der Aufarbeitung</b>
            <br />
            Die parlamentarische Aufarbeitung erfolgte primär über:
          </p>
          <ul>
            <li>Die Rechnungshof-Untersuchung (2018-2019)</li>
            <li>Behandlung im Kultusausschuss</li>
            <li>
              Diskussionen über einen möglichen Untersuchungsausschuss, der aber
              offenbar nicht eingesetzt wurde
            </li>
          </ul>
          <p className={'bg-cyan-50 p-4 rounded-lg'}>
            Das Projekt wurde als "Leuchtturmprojekt" angekündigt und ist
            gescheitert, mit einem finanziellen Schaden in Millionenhöhe. Eine
            vollständige parlamentarische Untersuchung{' '}
            <b>
              durch einen eigenen Untersuchungsausschuss fand jedoch nicht
              statt.
            </b>
          </p>
        </details>
        <p className={'bg-red-200 p-4 rounded-lg'}>
          <b>Einen Untersuchungsausschuss hat es nie gegeben!</b>
          <br />
          Da dürfen wir gespannt sein, wie es mit dem neu 2024 eingeführten{' '}
          <TextLinks
            href={
              'https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/baden-wuerttemberg-geht-neue-wege-bei-verwaltungs-ki/'
            }
          >
            KI-System (BW-Pressemitteilungen
          </TextLinks>{' '}
          und{' '}
          <TextLinks
            href={
              'https://www.badische-zeitung.de/die-verwaltungs-ki-f13-in-baden-wuerttemberg-scheint-eine-gute-idee-es-hapert-an-der-umsetzung/'
            }
          >
            Badische Zeitung)
          </TextLinks>{' '}
          weitergeht. <br />
        </p>
        <br />
        <h2>Politik, Presse, Links zum Thema</h2>
        Einige deser Artikel sind leider nur über einen (kostenpflichtigen)
        Benutzerzugang zu erreichen.
        <ul>
          <li>
            {' '}
            <b>IQB-Bildungstrend 2024:</b> <br />
            Es ist erstaunlich, wie die Ergebnisse der IQB-Bildungstrendstudie
            schön geredet werden;
            <br />
            BaWü ist das Land, welches in den meisten Kompetenztests{' '}
            <b>am wenigsten schlechter geworden ist</b> - das wird jetzt bereits
            als Erfolg bezeichnet!
            <br />
            <TextLinks
              href={
                'https://deutsches-schulportal.de/bildungswesen/iqb-bildungstrend-die-wichtigsten-ergebnisse/'
              }
            >
              Tiefstand der Leistungen in Mathematik und Naturwissenschaften
            </TextLinks>
            <br />
            <TextLinks
              href={
                'https://www.badische-zeitung.de/baden-wuerttembergs-kultusministerin-schopper-wir-halten-kurs/'
              }
            >
              Frau Schopper in der Badischen Zeitung am 16.11.2025
            </TextLinks>
            <br />
            <TextLinks href={'https://www.gruene-bw.de/iqb-bildungstrend/'}>
              Partei Die Grünen zur IQB-Studie
            </TextLinks>
            <br />
            <TextLinks
              href={
                'https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/baden-wuerttemberg-in-der-spitzengruppe-beim-iqb-bildungstrend/'
              }
            >
              Mitteilung auf der Landesseite vom 16.10.2025
            </TextLinks>
            <br />
            <TextLinks
              href={
                'https://www.zeit.de/2025/30/leistungsdruck-paedagogik-schulstress-bildungspolitik-schulangst/'
              }
            >
              Zeit Nr. 30/2025: Leistungsdruck, Bildungspolitik, Schulangst
            </TextLinks>
          </li>
          <br />
          <li>
            {' '}
            <b>Der IQB-Schock – und der Frust in den Schulen:</b>
            <br />
            Deutschlands Schülerinnen und Schüler verlieren – so beobachtet es
            die Dortmunder Mathematikdidaktikerin Prof. Susanne Prediger –
            zunehmend den Spaß an der Mathematik und mit ihm die Grundlagen. Der
            neue IQB-Bildungstrend zeigt dramatische Einbrüche auf allen
            Leistungsebenen. Prediger, Mitglied der Ständigen Wissenschaftlichen
            Kommission der KMK, erklärt, warum die Entwicklung kein Zufall ist –
            und warum „Fördern“ in zu vielen Klassenzimmern offenbar mit
            „Schonen“ verwechselt wird.
            <br />
            News4Teacher 10.2025:{' '}
            <TextLinks
              href={
                'https://www.news4teachers.de/2025/10/der-iqb-schock-und-der-frust-in-den-schulen-ohne-trendwende-werden-auch-viele-lehrkraefte-nicht-mehr-lange-durchhalten/'
              }
            >
              Ohne Trendwende werden auch viele Lehrkräfte nicht mehr lange
              durchhalten
            </TextLinks>
          </li>
          <br />
          <li>
            <b> Der nicht erreichte Schulfrieden 2024 </b>
            <br />
            Es gab 2023/24 einen Anlauf für den sogenannten Schulfrieden - die
            Zusicherung, dass, sollten sich die Mehrheiten nach einer
            Legislaturperiode ändern - die Bildungspolitik nicht wieder
            kleinmütig dem Parteikalkül geopfert werden wird. Auf diese sehr
            sinnvollen Nenner, wollten sich die Parteien dann leider doch nicht
            begeben, aber nur so könnte eine echte Bildungsreform überleben zu
            Stande kommen. Unsere Meinung: Der Schulfrieden musss ein; Schluss
            mit dem kleinmütigen Parteiengezänk.
            <br />
            Pressemitteilung der SPD vom 31.12.2024:{' '}
            <TextLinks
              href={
                'https://www.spd-landtag-bw.de/ohne-echte-loesungen-gibt-es-auch-2025-keinen-schulfrieden/'
              }
            >
              Ohne echte Lösungen gibt es auch 2025 keinen Schulfrieden
            </TextLinks>
            <br />
            Der Schulpädagoge Klaus Zierer in der Badischen Zeitung vom
            2.11.2025:{' '}
            <TextLinks
              href={
                'https://www.badische-zeitung.de/bildung-muss-chefsache-im-kanzleramt-werden/'
              }
            >
              Bildung muss Chefsache im Kanzleramt werden
            </TextLinks>
          </li>
          <br />

          <li>
            {' '}
            <b>
              Wahlkampfaussagen <br />
              SPD
              <br />
            </b>
            Die Badischen Zeitung schreibt am 3.11.2025 zum "Zukunftsplan" des
            SPD-Spitzenkandidaten Stoch unter anderem:
            <i>
              Im Bildungsbereich setzt Stoch auf gebührenfreie, qualitativ
              hochwertige Kita-Plätze und eine Reform des Schulsystems mit zwei
              Säulen: „Realschulen und Gemeinschaftsschulen sollen zu einer
              zweiten starken Säule neben dem Gymnasium werden.“ Ein
              landesweites Schulmodernisierungsprogramm und der Aufbau eines
              zentralen Weiterbildungsraums sollen die Bildungslandschaft für
              die Zukunft fit machen.
            </i>
            <br />
            Was dabei woll rauskommen würde?
          </li>
          <br />
        </ul>
      </div>
    </section>
  );
};
export default Page;
