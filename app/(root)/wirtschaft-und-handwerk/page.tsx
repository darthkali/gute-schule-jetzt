import React from 'react'
import Image from "next/image";
import ImageTextFloatingSection from "@/app/components/ImageTextFloatingComponent";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1>Handwerk und Wirtschaft</h1>
                <ImageTextFloatingSection
                    imageSrc="/images/hoch/crafts-3676583_1920.jpg"
                    imageAlt="Raupe, Puppe und Schmetterling"
                    imagePosition="left"
                >

                    <h2>Unsere Arbeitswelt braucht Fachkräfte und Menschen, die innovativ zusammenarbeiten können.</h2>
                    <p>Deutschlands Unternehmen fehlt aber der Nachwuchs. Immer mehr Betriebe können freie Stellen nicht
                        besetzen – für viele Stellen gibt es nicht einmal Bewerbungen. Das hat gravierende Folgen für
                        die Wirtschaft und die Gesellschaft. Der demografische Wandel tut sein Übriges: In den kommenden
                        Jahren treten viele „Babyboomer“ in den Ruhestand ein – die Lücke droht also noch größer zu
                        werden.
                        Die Veränderungen, die mit dem Mangel einhergehen, bemerken viele Bürger jetzt schon. Im Alltag
                        werden die Menschen den Mangel zuerst an kürzeren Öffnungszeiten und längeren Wartezeiten
                        spüren. Problematischer wird sein, dass Unternehmen Aufträge nicht mehr annehmen können, weil
                        sie nicht abzuarbeiten sind oder dass Produkte langsamer von einem Ort zum anderen kommen. Die
                        Folgen des Mangels werden unser gesamtwirtschaftliches Wachstum bremsen und damit zu
                        Wohlstandverlusten führen.</p>

                    <h2>Mehr als die Hälfte der Betriebe, die Ausbildungsplätze anbieten, hatten 2023 mit unbesetzten
                        Lehrstellen zu kämpfen.</h2>

                    <p>https://iab-forum.de/doch-lieber-woanders-hin-wenn-geeignete-bewerberinnen-und-bewerber-abspringen-verschaerft-dies-probleme-bei-der-besetzung-von-ausbildungsplaetzen/

                        Mangel an geeigneten Bewerbern Aus Sicht der Betriebe ist vor allem ein Mangel an geeigneten
                        Bewerbungen ursächlich für die Nichtbesetzung von Ausbildungsplätzen. Darüber hinaus hat im
                        Zeitverlauf auch das generelle Fehlen von Bewerbungen merklich an Bedeutung gewonnen.


                    </p>


                    <Image
                        src={"/images/unbesetzteArbeitsplätze.png"}
                        alt={"unbesetzteArbeitsplätze"}
                        width={500}
                        height={500}
                        className="w-[50%] h-auto rounded shadow "
                    />

                    <Image
                        src={"/images/gruendeNichtbesetzung.png"}
                        alt={"gruendeNichtbesetzung"}
                        width={500}
                        height={500}
                        className="w-[50%] h-auto rounded shadow "
                    />


                    <h2>Weniger und qualitativ schlechtere Bewerbungen</h2>
                    <p>https://www.mdr.de/nachrichten/deutschland/panorama/ausbildung-lehrstelle-azubi-mangel-100.html#Weniger)
                        Aus Sicht der Betriebe ist das Problem vor allem, dass immer weniger junge Leute sich bewerben –
                        und dass die Qualität der Bewerbungen sinkt, sagt Thomas Fahlbusch, der bei der IHK Erfurt den
                        Bereich Aus- und Weiterbildung leitet: &#34;Das betrifft zum einen natürlich die schulischen
                        Voraussetzungen, wenn es um mathematische Fähigkeiten geht, oder wenn ich in die sprachliche
                        Qualifikation reinschaue. Hinzu kommen natürlich auch die sogenannten Soft Skills, wenn es darum
                        geht, wie zuverlässig oder wie pünktlich jemand ist.&#34;</p>

                    <h2>Fortschreitende Akademisierung und Abwertung der beruflichen Bildung</h2>
                    <p>https://www.bpb.de/themen/bildung/dossier-bildung/146199/wissensgesellschaft-eine-idee-im-realitaetscheck/
                        Wenn immer mehr junge Menschen studieren, gilt das als marktnah und zeitgemäß und wird von der
                        Politik als Erfolg gefeiert. Die „Akademisierung“ mit ihrem Versprechen erheblicher Status- und
                        Einkommensvorteile hat aber Folgen: Das europäische System der Bachelor- und Master-Studiengänge
                        hat den Anteil der Studierenden durch Verkürzung der Verweildauer in die Höhe schnellen lassen,
                        mit der Gefahr, Hochschulbildung in eine Berufsbildung ohne klare Perspektive zu verwandeln.
                        In den Vergleichen der OECD werden Länder wie Deutschland, die wegen ihrer gut entwickelten
                        nicht-akademischen dualen Berufsausbildung weniger Akademiker ausbilden, meist schlechter
                        bewertet als Länder, die stärker auf den Ausbau der Hochschulausbildung setzen. Damit ist
                        unweigerlich die Abwertung der beruflichen Bildung verbunden, die mehr und mehr als Sackgasse
                        angesehen wird. </p>

                    <h2>Wert der dualen Ausbildung</h2>
                    <p>Die duale Berufsausbildung in Deutschland ermöglicht sehr viel mehr Jugendlichen einen
                        reibungslosen Übergang in den Arbeitsmarkt als in anderen Ländern – die Jugendarbeitslosigkeit
                        ist in Ländern mit dualer Berufsausbildung besonders gering. Entscheidend dabei ist, dass das
                        Fähigkeitsprofil der dualen beruflichen Bildung – anders als das in vielen Ländern verbreitete
                        &#34;Training-on-the-Job&#34;-Modell – auf vielseitig einsetzbare Arbeitskräfte setzt: Sie werden nicht
                        für eine eng umgrenzte Tätigkeit in einem bestimmten Betrieb qualifiziert. Vielmehr erlernen die
                        Auszubildenden einen ganzheitlichen Beruf, der sie unabhängig vom konkreten Arbeitgeber zur
                        Bewältigung unterschiedlicher Aufgaben befähigt, die im gesamten Arbeitsprozess anfallen. Die
                        duale berufliche Bildung führt zu einem Pool qualifizierter Arbeitskräfte mit
                        aufgaben‐orientierten und transportablen Fähigkeiten, der der ganzen Industrie und den
                        industrienahen Unternehmen zur Verfügung steht und offene und flexible Arbeitsmärkte ermöglicht.
                    </p>

                    <h2>Berufliche Bildung unter Druck</h2>
                    <p>Allerdings steht die berufliche Bildung als Modell der gesellschaftlichen Integration möglichst
                        aller Jugendlichen, die keinen Hochschulabschluss anstreben, seit den 1970er Jahren unter
                        Druck:</p>

                    <ul>
                        <li>
                            In dem Maße wie auch in beruflichen Ausbildungsgängen theoretisches Wissen an Bedeutung
                            gewann, steigerten die Betriebe im Einvernehmen mit den Gewerkschaften die Anforderungen an
                            die Auszubildenden. Der Anteil an theoretischem Wissen in der Ausbildung nahm zu. Zum ersten
                            Mal entstand das Problem der &#34;Ausbildungsfähigkeit&#34;; vor allem den Hauptschulen gelang es
                            nicht mehr, alle Jugendlichen auf eine berufliche Ausbildung vorzubereiten. Daher stieg der
                            Anteil der Jugendlichen, die nach der Schule keinen Ausbildungsplatz bekommen und
                            stattdessen in eine der zahlreichen berufsvorbereitenden Maßnahmen des sogenannten
                            Übergangssystems wechseln.
                        </li>
                        <li>
                            Die Öffnung der Hochschulen entzog der Berufsbildung viele leistungsfähige junge Menschen,
                            weil die Hochschulbildung ihnen bessere ökonomische Aussichten und höheres Sozialprestige in
                            Aussicht stellte.
                        </li>
                        <li>
                            Die allmähliche Auflösung der Unternehmensverbände und der Austritt etlicher Unternehmen aus
                            dem System der Berufsbildung, aber auch der schwindende Einfluss der Gewerkschaften
                            schwächen das System der Berufsausbildung, das auf der gemeinschaftlichen Aushandlung
                            zwischen Arbeitgebern und Arbeitnehmern beruht (&#34;Sozialpartnerschaft&#34;).
                        </li>
                    </ul>

                    <p>Der Vorteil der beruflichen Ausbildung – nämlich, dass im Unterschied zu den Ländern mit
                        nicht-dualer Berufsausbildung nahezu alle, die eine berufliche Ausbildung durchlaufen haben,
                        auch Zugang zum Arbeitsmarkt bekommen – erweist sich heute für diejenigen, die aufgrund ihrer
                        mangelnden &#34;Ausbildungsfähigkeit&#34; oder wegen zu geringer Ausbildungsangebote keinen
                        Ausbildungsplatz erhalten, als Schließung: keine Ausbildung – kein Job. Arbeitslose Jugendliche
                        in Deutschland gehören fast ausschließlich zu dieser Gruppe der Menschen ohne
                        Berufsausbildung. </p>

                    <h2>Unsere Gesellschaft wird als &#34;Wissensgesellschaft&#34; bezeichnet. Was folgt daraus für die
                        Bildungspolitik?</h2>

                    <p>Bei zunehmenden Informationsmengen, die in Wirtschaft, Technik, Kultur und im täglichen Leben
                        verarbeitet werden müssen und die für das Funktionieren dieser Lebensbereiche zum großen Teil
                        unentbehrlich werden, wird Bildung immer wichtiger.
                        Die höheren Anforderungen der Arbeitswelt an soziale und personale Kompetenzen erfordern besser
                        (aus-)gebildete Arbeitskräfte. Dabei geht es einerseits um höhere Qualifikationen, um mit den
                        immer anspruchsvolleren technologischen Entwicklungen Schritt halten zu können. Andererseits
                        geht es um die genannten sozialen und personalen Fähigkeiten: Kommunikationsfähigkeit,
                        Kooperationsfähigkeit, die Fähigkeit längerfristige Prozesse zu überblicken und auch bei
                        Rückschlägen durchzustehen.</p>


                    <h2>Die Landespolitik sollte alles dafür tun, dass Schulen ihre Funktionen erfüllen können</h2>
                    <p>Schulen müssen zu Orten werden, in die alle Kinder gehen können und dort alles dafür getan wird,
                        dass sie lernen können. Dazu gehören Sprachförderung bereits in den Kitas und verlässliche
                        Verantwortungsteams für jede Grundschulklasse. Es geht nicht darum, Kinder frühstmöglich zu
                        sortieren, sondern ihnen die Möglichkeit zu geben, das Denken zu lernen, die Welt kennen zu
                        lernen und Selbstwirksamkeit zu erfahren. Beim Lernen in sinnorientierten Projekten erfahren die
                        Heranwachsenden, was es heißt, Verantwortung zu übernehmen und zusammenzuarbeiten. Gute Bildung
                        braucht Zeit und Beziehung. Schule muss daher neu gedacht werden!</p>

                    <h2>Praktika und vielfältige Berufsorientierung </h2>
                    <p>Unsere Informations- und Wissensgesellschaft verspricht einerseits Demokratisierung,
                        Enthierarchisierung, politische Vernetzung und den chancengerechten Zugang zu Bildung. Doch
                        andererseits birgt sie die Gefahr sozialer Verarmung, Reizüberflutung und dem Verlust
                        gesicherter Wissensbestände.
                        Unsere Jugendlichen sollten an einen kritischen Umgang mit den neuen Informationstechnologien
                        herangeführt werden. Grundlage dafür ist, dass sie in ihrer Schulzeit auch möglichst viele
                        reale, sinnliche Erfahrungen mit den Phänomenen unserer Welt machen können. Lebensnahe Projekte,
                        außerschulische Lernorte, Praktika und vielfältige Berufsorientierung gehören unbedingt dazu.
                        (Link zu Schule in Thüringen, 4 + 1) </p>


                    <h2>Inklusive, wohnortnahe Schulen von Klasse 1- 10, lebendig in ihre Umgebung vernetzt, Inklusive,
                        wohnortnahe Schulen von Klasse 1- 10, lebendig in ihre Umgebung vernetzt, </h2>

                    <p>fördern gegenseitige Anerkennung und Vielfalt. Dieses Miteinander braucht unsere demokratische
                        Gesellschaft. Kinder haben so die Zeit und die Ruhe, die sie brauchen um ihr Potential zu
                        entwickeln und aufbauen zu können. Schulen sollten nicht weiter 9 jährige Kinder nach Leistung
                        sortieren müssen. Sondern so strukturiert und ausgestattet werden, dass sie jedem Kind gerecht
                        werden und professionell arbeiten können. Nur so werden Betriebe, weiterführende Schulen und
                        Hochschulen gut aufgestellte junge Menschen aufnehmen können. Zu lange hat die Bildungspolitik
                        weggeschaut und von Wahlperiode zu Wahlperiode geflickschustert. Der zunehmende Personalmangel
                        durch das Ausscheiden der Babyboomer-Generationen aus ihrem Berufsleben war vorhersehbar. Es war
                        lange klar, dass unser Land deswegen besonders darauf angewiesen sein wird, dass alle
                        Jugendlichen mit bestmöglichen Kompetenzen die Schulen verlassen. Die Pisastudien belegen aber
                        seit Jahren, dass mehr als 25% der Viertklässler den Mindeststandard in Mathematik und Deutsch
                        nicht erreichen.
                        Und trotzdem wurde es versäumt, die Schulen so aufzustellen, dass wir nicht weiter Jugendliche
                        verlieren.</p>

                    <h2>Bildungspanik</h2>
                    <p>Warum wurden die Schulen nicht, entsprechend aktueller Expertisen, funktionstüchtig
                        transformiert?
                        Ein Grund dafür liegt darin, dass um den Zugang zu den Hochschulen über Gesamt‐,
                        Gemeinschaftsschulen oder Gymnasien mit harten Bandagen gekämpft wird. Das akademisch gebildete
                        Bürgertum verteidigt seine Statusvorteile und droht mit der Auswanderung aus dem öffentlichen
                        Schulsystem, wenn ihm mit dem Gymnasium die Leitinstitution der schulischen Bildung abhanden zu
                        kommen droht. „Bildungspanik“ bricht aus, wenn die schulische Bildung nur noch sozialisieren und
                        nicht mehr differenzieren und selektieren soll.
                        Ängste und Druck bestimmen den Bildungsbereich. Aussagen von Eltern: „ Die Grundschule stehen
                        wir durch und dann geht mein Kind aufs Gymnasium“, zeigen das. Die Eltern brauchen aber das
                        Vertrauen, dass Ihr Kind in der Schule gut aufgehoben ist und sein Potential entfalten kann. So
                        lange das nicht vorhanden ist, werden wir keine Besserung der Situation haben.
                    </p>

                    <h2>FAZIT</h2>
                    <p>Funktionsfähige Schulen, die alle Kinder real zu ihrem individuellen Leistungsvermögen führen,
                        haben auch für Handwerk und Wirtschaft in unserem Land wesentliche Bedeutung.
                        Helfen Sie bitte mit, dass Baden-Württemberg solche Schulen schafft.
                        Unterstützen Sie bitte die Forderungen dieser Petition GUTE Schule JETZT, damit im kommenden
                        Koalitionsvertrag wesentliche Schritte für alle Kinder in unseren Schulen vereinbart werden.</p>


                </ImageTextFloatingSection>
            </div>
        </section>
    )
}
export default Page
