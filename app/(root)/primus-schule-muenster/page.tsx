import React from 'react'
import Button from "@/app/components/Button";
import MediaCard from "@/app/components/MediaCard";
import InfoCard from "@/app/components/InfoCard";
import Image from "next/image";

const Page = () => {

    const infoCardContents = [

        "Lernen mit Kompetenzrastern und Begleitung : DieLeistungsanforderungen werden so formuliert und strukturiert, dass jederSchüler die für sein Leistungsniveau passenden Aufgaben (mitUnterstützung) finden und erfolgreich bearbeiten kann… Drei wichtigeFragen beschäftigen die Schüler dabei: Was habe ich schongeschafft?, Wo stehe ich? und Was sind meine nächsten Schritte? Fürden Lernfortschritt ist es immer wichtig, das die Anforderungenkontinuierlich wachsen und passend an den Lernvoraussetzungenanknüpfen. Dafür braucht es eine pädagogische Beziehung, die vonErmutigung und solidarischer Begleitung geprägt ist (Prengel und Fuest)Auch John Hattie fordert die Koordinierung der pädagogischen Arbeitim Klassenzimmer. Denn: Wechselt die Bezugsperson häufig, so fehlendie beständige Auseinandersetzung an den Herausforderungen, denchallenging learning intentions (S.172-3 Teambuch Inklusion).",
        "Verlässlich, auf Jahre hinaus angelegtes multiprofessionellesVerantwortungsteam für jede Klasse (Lehrkräfte/ Sonderpädagogen,Erzieherin, Integationshelfer, Studierende über Honorarstellen…):systematisches und einheitliches Fördern im klasseneigenen Team. DieKlassenlehrer:innen leiten ihre Teams und sind verantwortlicheHauptansprechpartner:innen. Jeden Montag Teamsitzung. Alle 6-8Wochen Supervision und 2 x pro Jahr ein Teamtag. Vertretungsregelungnur durchs klasseneigene Team, dadurch Entlastung für dieSchulleitung.",
        "Vorteil der Mehrperspektivität: „Die Teammitglieder stehen täglich inder Beziehung zu den Lernenden und beobachten die individuellen,entwicklungslogischen Zugänge jedes Einzelnen und könnenunmittelbar reagieren. Dabei entstehen vielfältige spezifischeSichtweisen auf jedes Kind. Kritische Situationen und stoffliche Hürdenkönnen aus verschiedenen Perspektiven beleuchtet und Hilfenindividuell abgestimmt werden. Fehlentscheidungen sind wenigerwahrscheinlich als bei Lehrkräften, die als Einzelkämpferarbeiten.“ (S.174 Teambuch Inklusion)",
        "Grundlage ist die inklusive interkulturelle, behindertengerechte,jungen- und mädchengerechte Erziehung. Es gibt über Jahrzehnteentwickelte, friedenstiftende Traditionen interkultureller undinterreligiöser Feiern. Damit wird die angebahnte vertrauensvolleZusammenarbeit mit den Familien aus 50 Nationen kontinuierlichfortgesetzt. Sie wirken erfolgreich diskriminierenden Strukturenentgegen und wertschätzen die Vielfalt. Die neue Schuleermöglicht jedem Erfolge. Sitzenbleiben ist ausgeschlossen. Bis zum 8.Schuljahr einschließlich gibt es keine Noten-, sondern Berichtszeugnisse.",
        "Klassenrat und Schülerparlament: Im realen Lebenszusammenhangwird Verantwortung gelernt. „Wir glauben an unsere Schüler, dass sieihre Dinge mit Unterstützung selbst regeln werden. Dazu ist es sinnvoll,ihnen Aufgaben zu übergeben und sie erfahren zu lassen, dass sie sichbewähren können. Hartmut von Hentig spricht von der nützlichenErfahrung, nützlich zu sein.“ (S.162 Teambuch Inklusion)",
        "Feed-back- und Fehlerkultur: Rückmeldearmer Unterricht führt dazu,dass das Lernergebnis des Mitschülers unwichtig für die anderen ist undignoriert wird. Kooperatives und kommunikatives Lernen führt dagegenzu besseren Schülerleistungen (S.110 Teambuch Inklusion). Tragendeund entspannte, freudige Beziehungen innerhalb der Klasse bei derfreien Arbeit sind das Fundament für eine eigene Entwicklung. (S.107Teambuch Inklusion).",
        "Die PRIMUS-Schule Berg Fidel - Geist erfüllt die Ansprüche derStundentafeln der Grundschule und der integrativen Sekundarschule inNRW. In den besonderen Lernformen und Erfahrungsfeldern wie z.B.Projekt, Werkstatt und Freie Arbeit oder Freien Forscher Clubs werdensie umgesetzt. Lernen in Gemeinschaft an selbstgewähltenSachthemen fördert eigenen Antrieb, Methodenlernen, Selbständigkeitund die Erfahrung von Selbstwirksamkeit.",
        "Jahrgangsgemischtes, inklusives Lernen um mehr effektive Lernzeit fürdie Kinder zu gewinnen. Die Vielfalt ermöglicht das Peer-learning, PeerTutoring und mehrperspektivisches Lernen. Die Potentiale der SchülerInnenentwickeln sich, weil dafür gesorgt wird, dass sich die Lernendengegenseitig anregen und unterstützen; kurz, weil sie miteinander und voneinander lernen können.",
        "Grundhaltung: Feste Pädagogenteams, die entschlossen sind, keinenSchüler aufzugeben und allen das Denken zu lehren, sorgen fürLernzuwachs bei allen SchülerInnen. „Wir sind alle dazu da, das Lernenjedes einzelnen Kindes herauszufordern und die Kinder bei diesemProzess zu unterstützen, ihren zu helfen und sie verlässlich zu begleiten.Wir müssen in Beziehung treten.“ (S.40 Teambuch Inklusion).",
        "Der Erfolg der Schulform habe auch etwas mit Vertrauen zu tun, sagtGeorg Balster, Leiter der Primusschule Viersen. &#34;Wir haben die Schülerzehn Jahre bei uns, in ihrer prägendsten Phase als junge Menschen&#34;,betont Balster. &#34;In dieser Zeit wachsen Vertrauensverhältnisse, damerken die Schüler, dass wir ein weiteres Zuhause für sie sind.“",
        "Inklusive Angebotsschule im sozialen Brennpunkt mit gebundenemGanztag. Dieser ist notwendig, um mehr Personal-Stunden zu erhalten(1/2 Stelle Erzieherin pro Klasse über den Schulträger) und umkindgerechte Stundenpläne gestalten zu können.",
        "Allen Kindern des nahen Umfeldes ist die Aufnahme (im Rahmen derGebäudemöglichkeiten) garantiert. 25%, also 100 von 500, derSchülerInnen haben Förderbedarf. Der kleinste Teil der Kinder istkörperbehindert und im unteren Gebäudeteil untergebracht, weil bisheute kein Aufzug vorhanden ist.",
        "Das Konzept: Die Schülerinnen und Schüler bleiben von Klasse 1 bis 10an der selben Schule, es gibt also keinen Wechsel mehr von Grund- zuweiterführender Schule. Die Ergebnisse zeigen, &#34;dass die Erfolge unsererSchülerinnen und Schüler größer sind als an jeder anderen Schulform“.",
        "Jahrgangsgemischte Klassen 1-10, Oberstufe ist in Planung. AlleSchülerinnen und Schüler lernen vom 1. Schuljahr bis zu ihrembestmöglichen Schulabschluss in einer Schule.",
        "Jede Klasse hat zwei Räume - dafür sind Fachräume weggefallen undes wird in den Klassenräumen gegessen.",

    ];

    return (
        <div>
            <section>
                <div className="innerBox grid grid-cols-1 lg:grid-cols-4 mt-4">
                    <div className={"col-span-3"}>
                        <h1>Primus Schule Münster Berg Fidel</h1>
                        <p>
                            Zusammen lernen von der ersten bis zur zehnten Klasse Diese Schulearbeitet schon seit 20 Jahren
                            als inklusive Teamschule von 1-10. DasBesondere: Jede Klasse hat, auf Jahre angelegt, ein
                            eigenesmultiprofessionelles Team aus Lehrkräften, Sonderpädagogen undsozialpäd. Fachkräften und
                            Praktikanten oder Studierenden. Die festenErwachsenenteams bilden eine
                            Verantwortungsgemeinschaft, die jedemKind vermittelt: „Du gehört zu uns.“ Dadurch werden stabile
                            undsolidarische Gemeinschaftsstrukturen geschaffen, in denen alle KinderVerlässlichkeit erfahren
                            können. Die Erwachsenen sind gemeinsam fürsämtliche pädagogischen Aufgaben und für alle Kinder
                            verantwortlich.Um die Woche zu planen, über Schüler:innen zu sprechen und die Arbeitzu
                            koordinieren oder Schülerzeugnisse/ sonderpäd. Gutachtengemeinsam zu besprechen, haben alle
                            Teams inzwischen Montagnachmittags von 13.15 bis 14.45 Teamsitzungen in ihrem Klassenraum.Dies
                            geschieht in der selben Zeit, damit die Teams untereinander inkurzen Wegen Absprachen treffen
                            können. Das klasseneigene Teamorganisiert auch seinen eigenen Stundenplan. So kann gemeinsam
                            mitmehrperspektivischem Blick die Entwicklung jedes einzelnen Kindesgefördert werden. Anstelle
                            von Unterrichtsausfall, Leerlauf-Vertretungenund Einzelkämpfertum treten sinnorientiertes

                            <br/><br/>
                            Projekt-Lernen, Verlässlichkeitund tragende Beziehung. „ Zu den Erfolgsbedingungen gehören:
                        </p>
                        <ul>
                            <li>Solidarische Grundhaltung: Jedes Kind kann lernen- Du gehörst zu uns!</li>
                            <li>Ständige Koordination der Arbeit im Team: Kinder brauchen klare , imteam abgesprochene
                                und sich nicht widersprechendeVorgehensweisen, die ihnen Sicherheit geben können.
                            </li>
                            <li>Kontinuität fester Teams über Jahre.</li>
                            <li>Ständige interne Aus- und Fortbildungen, berufsbegleitend, währendder konkreten
                                Arbeit.“ (S.98 Teambuch Inklusion).
                            </li>
                        </ul>


                        <Button
                            text="Zur Webseite der Schule"
                            href="https://www.primus-muenster.de/"
                            bgColor="bg-[color:var(--color-primary)]"
                            textColor={"text-[color:var(--color-neutral)]"}
                            newTab={true}
                        />
                    </div>
                    <Image
                        src={"/images/Kinderbilder/kids-3171905_19202.png"}
                        alt={"imageAlt"}
                        width={500}
                        height={600}
                        className="w-full h-auto hidden lg:block"
                    />
                </div>


                </section>
            <section className={"bg-[color:var(--color-secondary)]"}>
                <div className={"innerBox"}>
                    <h2 className={"text-[color:var(--color-neutral)] mb-8"}>Spannende Medien und Links</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto ">
                        <MediaCard
                            title="Interview mit Reinhard Stähling und Barbara Wenders 19 min"
                            buttonHref="https://www.youtube.com/watch?v=pZtgrZWfjG4"
                        />

                        <MediaCard
                            title="Ein Dokumentarfilm der zeigt, wie inklusives Lernen funktionieren kann"
                            text={<>
                                Wenn Kinder nicht von klein auf lernen, dass die Menschen verschieden
                                sind, wann dann? Ein wichtiger Beitrag zum Thema Inklusion und ein Film, den
                                alle Lehrer, Erzieher und Eltern sehen sollten
                            </>}
                            buttonTitle="zum Film"
                            buttonHref="https://www.wfilm.de/berg-fidel-eine-schule-fuer-alle/"
                            imageSrc={"/icons/camera-159582_1920.png"}
                        />

                        <MediaCard
                            title="Nicht fragen- einfach machen"
                            buttonHref="https://www.youtube.com/watch?v=2bUX2Fx_yFs"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className={"innerBox"}>
                    <h2 className={"mb-8"}>Interessantes zur Schulpraxis im Überblick </h2>

                    <div className="lg:grid grid-cols-1 lg:grid-cols-2 auto-rows-auto bg-white rounded-xl overflow-hidden hidden">
                        {infoCardContents.map((content, index) => {
                            const rowEven = Math.floor(index / 2) % 2 === 0;
                            const colEven = index % 2 === 0;

                            const shouldHighlight = rowEven !== colEven;
                            const bgColor = shouldHighlight
                                ? "lg:bg-[color:var(--color-primary)] lg:text-[color:var(--color-neutral)]"
                                : "";

                            return (
                                <InfoCard key={index} bgColor={`bg-[color:var(--color-neutral)] ${bgColor}`}>
                                    {content}
                                </InfoCard>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2  auto-rows-auto lg:bg-white rounded-xl overflow-hidden lg:hidden">
                        {infoCardContents.map((content, index) => {
                            const rowEven = index % 2 === 0;

                            const bgColor = rowEven
                                ? "bg-[color:var(--color-primary)] text-[color:var(--color-neutral)]"
                                : "";

                            return (
                                <InfoCard key={index} bgColor={`bg-[color:var(--color-neutral)] ${bgColor}`}>
                                    {content}
                                </InfoCard>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Page
