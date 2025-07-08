import React from 'react'
import Button from "@/app/components/Button";
import MediaCard from "@/app/components/MediaCard";
import InfoCard from "@/app/components/InfoCard";
import Image from "next/image";

const Page = () => {

    const infoCardContents = [
        "Der schön gestaltete Raum als dritter Pädagoge spielt eine wesentliche Rolle. Dazu gehören eine klare Struktur und Achtsamkeit. Jeder Lernraum hat eine spezifische Funktion (Input, Einzelarbeit, Teamarbeit, usw.), damit sich die LernpartnerInnen emotional in ihr Tun einfinden können.",
        "Die Alemannenschule Wutöschingen ist eine Gemeinschaftsschule, die Kinder und Jugendliche von Klasse 1 bis 13 auf ihrem Bildungsweg begleitet und ihnen alle drei Abschlüsse ermöglicht: Hauptschulabschluss, Realschulabschluss und das Abitur.",
        "Die ASW setzt sich zum Ziel, jedem Kind einen individuellen Lernweg zu ermöglichen: auf vielfältigen Wegen mit vielfältigen Menschen an vielfältigen Orten zu vielfältigsten Zeiten mit vielfältigen Materialien in vielfältigen Schritten mit vielfältigen Ideen in vielfältigen Rhythmen zu gemeinsamen Zielen.",
        "Viele Besucher der ASW wundern sich über die vielen Lehrer, die sie im Schulhaus sehen und fragen dann, ob die ASW doppelt so viele Lehrer habe. Das ist nicht der Fall, aber in der ASW sind die Lehrer eben hier beim den Lernenden und nicht zu Hause.",
        "Das wichtigstes Strukturelement ist das Coaching. Jedes Kind hat pro Woche eine Viertelstunde Gespräch mit seiner Lernbegleiterin oder - begleiter, so werden unsere Lehrkräfte genannt. Dort berichtet der Jugendliche, was er in der kommenden Woche vorhat. Und wenn er Probleme hat, bespricht er die auch, dann vermittelt ihm der Coach einen fortgeschrittenen Lernenden oder eine Lehrkraft, die helfen kann.",
        "Wesentliche Grundlage ist hier die Änderung der Haltung: nämlich die Transformation von Schule als einem Ort des Lehrens hin zu einem Ort des Lernens! In dieser Schule wird alles dafür gemacht, dass die Kinder selbstständig lernen können. Es findet kaum noch regulärer Unterricht statt. Dieser wird durch die Schmetterljgspädagogik ersetzt, deren beide Flügel zum einen das selbstorganisiertes Lernen und zum anderen das Lernen durch Erleben sind. SchülerInnen heißen hier LernpartnerInnen und Lehrkräfte LernbegleiterInnen.",
        "Auch in der ASW gibt es Schüler und Schülerinnen, die es nicht so gut können. Aber obwohl es praktisch keinen Deutschunterricht mehr gibt, sind unsere Kinder wesentlich besser im Lesen und in der Rechtschreibung als der Landesdurchschnitt. Das haben die VERA-Vergleichsarbeiten gezeigt. Bei uns lernen natürlich auch geistig- und lernbehinderte Kinder. Wenn so ein Kind nicht lesen kann, dann ist das völlig ok. Aber wir haben hier wesentlich – nicht nur ein bisschen – bessere Ergebnisse.",
        "In den Inputräumen haben die Schülerinnen und Schüler pro Woche eine Unterrichtsstunde in jedem Hauptfach, ansonsten gibt es keinen Frontalunterricht. Im Lernatelier sitzen die Jugendlichen unterschiedlichen Alters auf Holzbalkonen und arbeiten. Jeder hat dort seinen festen Platz mit einem Schreibtisch und einem Schrank. Trotz der vielen Schüler wird im Lernatelier nur geflüstert, was ziemlich gut funktioniert. Sie haben aber auch noch andere Orte mit Sitzmöglichkeiten, an denen sie lernen können.",

        "Die Schule hat sich auf den Weg gemacht, Schule und Lernen neu zu gestalten. Die Schüler und Schülerinnen lernen an dieser Schule selbstständig. Doch nicht mit Schulbüchern, sondern jedes Kind bekommt ein Tablet, mit dem es auf digitalen Lernplattformen arbeiten kann.Handys oder private Apps wie whats app … sind nicht erlaubt. Statt der Klassenzimmer gibt es offene Lernlandschaften: sogenannte Inputräume und Lernateliers. Wände wurden dafür herausgerissen und damit ganz sichtbar das ganze alte System zerschlagen. Im oberen Stock sind persönliche Arbeitsplätze mit Flüsterregel und im unteren Stock Marktplätze für das gemeinschaftliche Lernen mit gemütlichen Teppichinseln, Kissen, offenen Lerntheken,… Im ganzen Haus gilt eine Hausschuhkultur. Gemäß dem Motto von Innenarchitektin Doris Fratton: Schönes schafft Schönes - Verwahrlosung schafft Verwahrlosung",

        "Wir haben festgestellt, dass Unterricht das Lernen behindert. Deshalb braucht der Lehrer keine klassischen 27 Unterrichtsstunden mehr zu halten. Dafür sind die Kollegen aber 35 Zeitstunden anwesend. Wer eine Lerngruppe leitet, hat nur noch ein Deputat von 12 Stunden und ist den Rest der Zeit für die Kinder da. Je weniger Unterricht wir haben, desto besser sind die Ergebnisse. In Mathe haben wir an der Alemannenschule bis Klasse 10 keine einzige Unterrichtsstunde mehr. Wir bieten stattdessen etwa 20-minütige inhaltliche Inputs an. Durch die neue Organisation des Lernens gibt es außerdem auch keine Unterrichtsausfälle mehr. Die Lernbegleiter begleiten in kurzen, freiwilligen Inputs und führen zwei Clubs pro Woche am Nachmittag durch, für die sich die Kinder gemäss ihren Interessen bewerben können.",
        "Grundlage sind die an der ASW entwickelten Kompetenzraster, die stets vom Lernenden aus gedacht sind. Darauf finden die Lernpartner:innen alle Inhalte, die in den jeweiligen Fächern im Laufe eines Schuljahres zu erarbeiten sind. Durch die Kompetenzraster sind sie in der Lage, ihr Lernen selbstständig zu organisieren und sich selbst für Lerninhalte zu entscheiden. Es stehen Materialpakete für sämtliche Haupt- und Nebenfächer zur Verfügung. Die Materialpakete sind so konzipiert, dass die Inhalte autonom und somit unabhängig von Raum, Zeit und Personen gelernt werden können.",
        "Das zweite ist die Graduierung: Jedes Kind hat einen bestimmten Status. Es fängt beim Starter an. Mit diesem Status gehen klar definierte Rechte und Pflichten einher. Kommt ein Schüler damit nicht klar, wird er Neustarter, mit weniger Rechten, muss z.B. in der Nähe seines Lernbegleiters lernen. Ein Starter hat mehr Rechte, ein Durchstarter noch mehr. Und ein Lernprofi übernimmt auch Verantwortung für das Lernen anderer - ist Mathe-Mentor oder Assistant-Coach in Englisch. Der Lernprofi kann auch zu Hause lernen oder bekommt  in der Oberstufe einen Schlüssel für die Schule, deren Infrastruktur er 24 Stunden am Tag nutzen kann. Schuleigenes Fitnessstudio inklusive.",
        "Die Stundenpläne schreiben sich die Schülerinnen und Schüler selbst, die sich hier Lernpartnerinnen und Lernpartner nennen. Sie können sich auch aussuchen, wann sie was lernen. Wenn sie Fragen zum Stoff haben, können sie sich an die Lernbegleiter wenden. So werden die Lehrkräfte genannt. Wenn man ein Thema sicher verstanden hat, kann man statt einer Klassenarbeit zu einem Zeitpunkt, den man selbst wählt, einen Gelingensnachweis schreiben. Die Schülerinnen und Schüler haben außerdem jede Woche ein Coachinggespräch mit den Lernbegleitern, in dem die weiteren Lernschritte besprochen werden. Am Nachmittag kann man einen Workshop machen, zum Beispiel Imkern, Filmedrehen oder man kümmert sich um die Tiere auf einem Bauernhof. Dadurch werden Spaß und Sinn am Lernen gefördert.",
        "Dazu wurde eine gemeinnützige Genossenschaft gegründet, das sogenannte Materialnetzwerk. Die stellt hochwertige Materialien fürs selbstorganisierte Lernen für jede Schulform kostenlos zur Verfügung. Darin sind Erklärfilme und vielfältige Arbeitsmaterialien  in verschiedenen Schwierigkeitsgraden enthalten sowie Teilziele formuliert. Das Kind arbeitet selbständig damit und wählt dann auch aus, wann es einen Gelingensnachweis über das Erreichen seiner Teilziele erbringen möchte. Einzige Voraussetzung ist eine 1:1 Ausstattung mit Schülerendgeräten (Das iPad für alle kostet die Eltern derzeit 9 € pro Monat. In der Schule sind keine Handys oder private Apps wie Whats app… erlaubt). Diese Materialien ersetzen auch die Schulbücher, es braucht nichts mehr kopiert werden. Statt Klassenbüchern gibt es digitale Lerntagebücher, genannt DiLer",
        "Statt regulärem Unterricht setzt die ASW konsequent auf Selbstorganisiertes Lernen SoL und Lernen durch Erleben LdE (Schmetterlingspädagogik). Die besteht aus zwei Seiten: Das eine Flügelpaar steht für das selbstorganisierte Lernen, für das die ASW viele Werkzeuge entwickelt hat, wie Coaching, Graduierung, die Lernmaterialien, Arbeiten in Peergroups und so weiter. Das funktioniert frei von Zeit und Raum, also wann, wo und mit wem man will. Das andere Flügelpaar steht für das Lernen durch Erleben. Dazu gehört all das, was gemeinsam stattfindet: Lernen im Wald oder auf dem Bauernhof, Musicals üben und aufführen, Basketballmannschaften gründen, Exkursionen und so weiter. Für jedes Fach stellt sich die Frage: Welche Teile kann ich gut selbstorganisiert machen? Bei Mathe und Physik sehr viel, bei Wirtschaft alles und manche Dinge wie Musik und Sport muss ich angeleitet oder in Gemeinschaft machen.",
    ];

    return (
        <div>
            <section>
                <div className="innerBox grid grid-cols-1 lg:grid-cols-4 mt-4">
                    <div className={"col-span-3"}>
                        <h1>Alemannenschule Wutöschingen</h1>
                        <p>Zur Schule gehen ohne Angst und Stress, dafür mit vielEigenmotivation, Lernerfolg und Freude?
                            In
                            der
                            vielfachausgezeichneten Alemannenschule in Baden-Württemberg ist das seitJahren bereits
                            gelebte
                            Realität. Dass Schule auch ohne klassischenUnterricht, ja sogar ohne Klassenzimmer,
                            funktioniert,
                            hat derSchulleiter Stefan Ruppaner und sein Team inzwischen ausreichendbewiesen. 2010 war
                            die
                            ASW
                            noch eine von Schließung bedrohteHauptschule. Heute ist sie anerkannte „Zukunftsschule“, die
                            unteranderem mit dem Deutschen Schulpreis 2019 ausgezeichnet wurde.Die ASW verzichtet auf
                            Frontalunterricht, feste Prüfungstermine undJahrgangsklassen. Stattdessen leben Kinder und
                            Lehrkräftegegenseitige Wertschätzung, Kreativität, Freiheit und moderneUnterrichtsmethoden,
                            losgelöst vom gängigen Schulmodell. DieAlemannenschule gilt heute deutschlandweit auch als
                            Vorzeigeschule fürdigitale Transformation. Etwa 800 Schüler:innen von der 1. Klasse biszum
                            Abitur
                            organisieren hier ihr Lernen selbstbestimmt. 2022 wurdeerste Abitur an der Schule mit einem
                            Durchschnitt von 1,7 abgelegt. DieHälfte dieser Kinder hatten in der 5. Klasse keine
                            Empfehlung
                            für
                            dasGymnasium. Zum Vergleich: in BW lag der Abitur-Durchschnittzeitgleich bei 2,17. Auch bei
                            Vergleichsarbeiten der 8.Klasse schneidetdie Alemannenschule überdurchschnittlich gut
                            ab.</p>


                        <Button
                            text="Zur Webseite der Schule"
                            href="https://asw-wutoeschingen.de/"
                            bgColor="bg-[color:var(--color-primary)]"
                            textColor={"text-[color:var(--color-neutral)]"}
                            newTab={true}
                        />
                    </div>
                    <Image
                        src={"/images/Kinderbilder/kids-3171905_19205.png"}
                        alt={"imageAlt"}
                        width={500}
                        height={600}
                        className="w-full h-auto hidden lg:block"
                    />
                </div>
            </section>
            <section className={"bg-[color:var(--color-secondary)]"}>


                <div className={"innerBox"}>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-10">

                        <MediaCard
                            title="Stefan Ruppaner:"
                            text={<>
                                Schule ohne Unterrichtsstunden – Die Alemannenschule in Wutöschingen <br/>
                                <span className="italic text-sm">45 min</span>
                            </>}
                            buttonTitle="zum Podcast"
                            buttonHref="https://asw-wutoeschingen.de/"
                            imageSrc={"/icons/microphone-6662435_1920.png"}
                        />

                        <MediaCard
                            title="Podcast Kein Stundenplan- Kein Gong"
                            text={<>
                                an dieser Schule läuft alles anders <br/> <span
                                className={"italic text-sm"}>41 min</span>
                            </>}
                            buttonTitle="zum Podcast"
                            buttonHref="https://asw-wutoeschingen.de/"
                            imageSrc={"/icons/microphone-6662435_1920.png"}
                        />

                        <MediaCard
                            title="„Lehrerausbildung taugt nicht für zeitgemäße Schule“"
                            text={<>
                                Stefan Ruppaner, Schulleiter der Alemannenschule Wutöschingen, im
                                News4teachers-Interview
                            </>}
                            buttonTitle="zum Interview"
                            buttonHref="https://asw-wutoeschingen.de/"
                            imageSrc={"/icons/interview-1018333_1920.png"}
                        />

                        <MediaCard
                            title="Zischup Interview"
                            buttonTitle="zum Interview"
                            buttonHref="https://asw-wutoeschingen.de/"
                            imageSrc={"/icons/interview-1018333_1920.png"}
                        />

                        <MediaCard
                            title="Spiegelbestseller 2025 - Das könnte Schule machen"
                            buttonTitle="zum Buch"
                            buttonHref="https://asw-wutoeschingen.de/"
                            imageSrc={"/icons/book-150621_1920.png"}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className={"innerBox"}>
                    <h2 className={" mb-8"}>Interessantes zur Schulpraxis im
                        Überblick </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto bg-white rounded-xl overflow-hidden">
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


                </div>
            </section>

        </div>
    )
}
export default Page
