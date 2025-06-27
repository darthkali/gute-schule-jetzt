import React from 'react'
import ImageTextFloatingSection from "@/app/components/ImageTextFloatingComponent";
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <section>
                <div className="innerBox grid grid-cols-1 lg:grid-cols-4  mt-4 py-0">
                    <div className={"col-span-3"}>
                        <h1>WAS BRAUCHEN KINDER?</h1>
                        <p>Wir wissen: Nur in einer gesunden Umgebung kann aufbauendes Lernen stattfinden und das volle
                            Potenzial eines Menschen entfaltet werden.
                            Die Voraussetzung für aufbauendes Lernen ist die Beachtung der beiden Grundbedürfnisse nach
                            Verbundenheit und Autonomie. .</p>
                    </div>
                    <Image
                        src={"/images/Kinderbilder/kids-3171905_1920mb.png"}
                        alt={"imageAlt"}
                        width={500}
                        height={600}
                        className="w-full h-auto hidden lg:block"
                    />
                </div>
            </section>
            <section className={"bg-[color:var(--color-secondary)] text-[color:var(--color-neutral)]"}>

                <div className={"innerBox"}>
                    <h1>Erkenntnisse aus der Hirnforschung</h1>
                    <ImageTextFloatingSection
                        imageSrc="/images/artificial-intelligence-3382521_1920.jpg"
                        imageAlt="Raupe, Puppe und Schmetterling"
                        imagePosition="right"
                        caption={"Kinder brauchen Verbundenheit und verlässliche Beziehung Kinder haben ein grundlegendes\n" +
                            "                            Bedürfnis nach Autonomie"}
                    >
                        <p>Folgendes Wissen stammt von Dr. rer. nat. Dr. med. habil. Gerald Hüther,
                            Neurowissenschaftler und Vorstand der Akademie für Potentialentfaltung, der sich als
                            Brückenbauer zwischen der Wissenschaft und dem Leben da draußen versteht: Wir kommen
                            nach neun Monaten inniger mütterlicher Verbundenheit und gleichzeitiger unglaublicher
                            Entfaltungerfahrung auf die Welt. Daher bestimmen zwei seelische Grundbedürfnisse unser
                            menschliches Leben von klein auf: das nach Verbundenheit und das nach Autonomie. Das
                            Bedürfnis über sich hinaus zu wachsen und
                            gleichzeitig verbunden zu bleiben, ist in unserem Gehirn früh verankert. Leitbilder,
                            Selbstbilder, Verantwortungsgefühl, Handlungsplanung, Impulskontrolle, alles was uns
                            motiviert, müssen allerdings alle erworben werden, nichts davon ist angeboren. Die
                            wichtigste Aufgabe des Gehirns besteht nicht darin, möglichst viel zu leisten, sondern
                            dafür zu sorgen, dass wir gesund bleiben und überleben. Kinder lieben es, sich zu
                            bewegen. Frühe Körpererfahrungen formen und stabilisieren die Bewegungskoordination und
                            entwickeln vor allem die Hirnfunktionen, die für die Entfaltung von Metakompetenzen
                            nötig sind, wie etwa Selbstwirksamkeit, Impulskontrolle und Frustrationstoleranz.
                        </p>
                        <p>
                            Jedes Kind kommt außerdem mit unglaublichen individuellenStärken zur Welt. Welche
                            Verschaltungsmuster im Gehirnaber stabilisiert oder verworfen werden, entscheidet sich
                            überdie Beziehungen zu anderen Menschen. Wir Menschen habeneine Sonderstellung in der
                            Natur, nur wir können uns eineVorstellung machen, wie wir leben wollen. Ein kleines
                            Kindbraucht Erwachsene, die ihm helfen, wie das Leben geht. Wirsind alle Suchende.Die
                            wichtigste Erkenntnis der Hirnforschung lautet: Dasmenschliche Gehirn ist lebenslang
                            weitaus formbarer in seinerinneren Struktur und Organisation, als bisher gedacht.
                            Imkindlichen Gehirn wird viel mehr an Vernetzungspotenzialzwischen den Nervenzellen
                            bereitgestellt, als jemals genutztwerden kann. Netzwerke, die aber nicht gebraucht
                            werden,werden wieder abgebaut. Unser Gehirn ist dabei wie einwachsender Baum, der sich
                            im Wachsen strukturiert. Es ist alsoeine Baustelle und entwickelt sich in
                            einemnutzungsabhängigem Prozess. In der Auseinandersetzungmit der Welt finden im Gehirn
                            neuronale Bahnungsprozessestatt. Ist ein Problem gut gelöst, wird das Belohnungssystem
                            inunserem Gehirn aktiviert und es werden Botenstoffe freigesetzt.Diese
                            Nerven-Wachstumshormone wirken wie Dünger: dieNetzwerke, die ein Kind grade zum Lernen
                            benutzt hat um dasSchwierige hinzubringen, werden dadurch immer stärkerz.B.beim Fahrrad
                            fahren. Diese Bahnungsprozesse gelingenbesonders unter emotionaler Beteiligung. Wo man
                            mit etwasin Beziehung geht. Das Glücksgefühl - der Flow als Folge desLernprozesses gibt
                            die Energie für weiteres Lernen - kurz: Wasman gemeistert hat, beflügelt! Die Freude am
                            Lernen ist derAusdruck der Lebendigkeit eines Kindes.
                        </p>
                        <p>
                            Das Leben nach der Geburt sollte darauf zielen, dieseEinzigartigkeit zu entfalten. Diese
                            individuellen Stärken zufördern, schafft nicht nur glückliche Menschen,
                            sondernschlussendlich auch eine starke Gesellschaft.“Es wäre also ein erstrebenswertes
                            Ziel unseres Bildungsystems,dass im kindlichen Hirn möglichst viel von
                            diesemVernetzungsangebot stabilisiert werden kann. Das geht abernicht mit Druck. Diese
                            Komplexität entsteht nur, wenn Kindersich Wissen selbst erschließen können.Es gibt zwei
                            Annahmen, die in der Gesellschaft zwar weitverbreitet, aber aus neurobiologischer Sicht
                            nicht haltbar sind.Die erste Annahme heißt: Kinder können alles lernen. Dagegensagt die
                            Neurobiologie: Nein, Kinder können nicht alles lernen,sondern sie lernen nur das, was
                            für sie bedeutsam ist. Wenn ichunter Druck gesetzt werde und Mathe lernen soll, dann ist
                            dasMathelernen nur ein Nebeneffekt, denn vor allem lerne ich, wieich den Druck wieder
                            loswerde.Das Hirn ist in erster Linie ein Filter, kein Speicherorgan. Alleswas
                            umbedeutsam ist, wird weggefiltert. Gute Lernerfahrungengelingen deswegen, wenn Kinder
                            sich in Beziehung zu demGegenstand ihres Lernens setzen können – wenn es ihnenalso
                            selbst wichtig ist, das zu lernen. Und wichtig ist einemetwas immer dann, wenn es einem
                            unter die Haut geht, wenn esbegeistert. Dann lernen Kinder alles, und dann lernen sie
                            sogarmit Hingabe.Die zweite Annahme: Kinder können immer lernen. Auch dasstimmt aus der
                            Sicht der Neurobiologie so nicht. Wenn es einemnicht gut geht, dann lernt man nur, um
                            aus diesem schlechtenZustand herauszukommen. Kinder sind nur dann offen füralles, was es
                            zu lernen gibt, wenn es ihnen gut geht.Unter Leistungsdruck geht es ihnen nicht gut,
                            unterKonkurrenzdruck auch nicht, und vor allem geht es ihnennicht gut, wenn sie als
                            Objekt behandelt werden. Wenn sieGegenstand von Maßnahmen sind, also von Belehrung,
                            vonBewertung und Beurteilung. Das verletzt ihr Grundbedürfnis,als autonome Wesen
                            wahrgenommen zu
                            werden.https://www.welt.de/debatte/kommentare/article113327766/Jedes-Kind-lernt-gerneaber-nur-ohne-Druck.htmlhttps://www.gerald-huether.de
                        </p>
                    </ImageTextFloatingSection>
                </div>
            </section>
            <section>

                <div className={"innerBox"}>
                    <ImageTextFloatingSection
                        imageSrc="/images/classroom-1660223_1920.jpg"
                        imageAlt="Raupe, Puppe und Schmetterling"
                        imagePosition="left"
                        caption={"Überholtes Schulkonzept wird Kindern und ihrem Lernen nicht gerecht"}
                    >
                        <p>Unsere Schulen beruhen auf 200 Jahre altenVorstellungen, sind entstanden aus Kadetten-
                            undPriesterschulen und sind vom Prinzip her Dressur- undAbrichtungsschulen. Dort wird
                            Konditionierungumgesetzt,.. gute von schlechten Schülern getrennt,häufiges Wiederholen,
                            Belohnungen,… Das System istschwerfällig wie ein Ozeandampfer. Die Kapitäne wissenauch
                            nicht, wie sie den Kurs ändern sollen.Grundlegendes Übel ist die falsche Vorstellung
                            davon,was Lernen eigentlich ist. Das alte Lernkonzept, das inunserem Schulsystem
                            vorherrscht, macht das Kind aberzum Objekt fremder Erwartungen, Bewertungen
                            undMaßnahmen. Angeborene Lernfreude wird den Kindern inder Schule abtrainiert und damit
                            auch ihre Freude an derLebendigkeit! Kinder dürfen nicht zu Objekten gemachtwerden. Wenn
                            es erlebt, dass es so sein soll, wie es sichandere vorstellen, dann kann es ja nicht
                            mehr so sein, wiees ist. Das Gefühl an Verbundenheit zerbricht dabei. Sowie Schule
                            augenblicklich organisiert ist, müssen Kinderauch ihre lebendige Bedürfnisse: sich zu
                            bewegen, ihreEntdecker- und Gestaltungsfreude unterdrücken. Aber ein1.Klassekind muss
                            noch sinnlich erleben, wie es sichbewegt, usw., sonst entstehen hemmende Netzwerke
                            imGehirn.Wenn beim Kind traumatische Erlebnisse, wenigAchtung und Freude ankommen, dann
                            sind in seinemFrontalhirn Bereiche aktiviert, die kein vernünftigesDenken mehr erlauben.
                            Es entwickelt Antennen,Vermeidungsverhalten und negative Erwartungshaltung,…Kinder
                            suchen sich ihre Auswege. Und in diesen Zustandgerät man nicht von allein, der geschieht
                            immer insozialen Beziehungen. Diese Kinder sind dann nicht freiund müssen sich ständig
                            anstrengen, werden nichtlebenskompetent!
                        </p>
                        <p>
                            Die Folgen für unsere Gesellschaft: Wenn manschon nicht gerne lernt, dann arbeitet man
                            jaauch nicht gerne…. Das führt zu einer tiefeninneren Unzufriedenheit und die Leute
                            arbeitendann nur noch für Geld. Wir merken das auch in derWirtschaft. Es braucht aber
                            Leute, die mitdenken,die das Ganze sehen und so arbeiten, dass da wasLangfristiges und
                            Stabiles entstehen kann.Deshalb versuchen Prof. Gerald Hüther undMargret Rasfeld, diese
                            neurobiologischenErkenntnisse in die Schulen hineinzutragen undalle Beteiligten zu
                            ermutigen, eine günstigereLern- und Beziehungskultur zu entwickeln. DieZeit ist überreif
                            für einen Wandel. Und in manchenSchulen ist er ja auch schon im
                            Gang.http://www.schule-im-aufbruch.dehttp://www.schulen-der-zukunft.orgwww.laenger-gemeinsam-lernen-bw.de
                        </p>
                    </ImageTextFloatingSection>
                </div>
            </section>

            <section className={"bg-[color:var(--color-secondary)] text-[color:var(--color-neutral)]"}>
                <div className={"innerBox"}>
                    <h1>VISION für alle Schularten</h1>

                    <ImageTextFloatingSection
                        imageSrc="/images/evolution-4107273_1920.jpg"
                        imageAlt="Raupe, Puppe und Schmetterling"
                        imagePosition="right"
                        caption={"Schulen als stark machende Lebens und Lernorte, die Potentialentwicklung, Gesundheit und Selbstwirksamkeitserfahrung für alle Kinder ermöglichen"}
                    >

                    <p>Schule, als stark machender Lebens-und Lernort, gibt Kindernund Jugendlichen das, was sie aus
                        entwicklungspsychologischerSicht brauchen, ermöglicht Lernen, wie es aus neurobiologischerSicht
                        nachhaltig ist und bereitet Schülerinnen und Schüler auf einLeben in der Gesellschaft vor, wie
                        diese sich heute zeigt und inZukunft abzeichnet.Die neurobiologischen Forschungen lassen die
                        Notwendigkeiterkennen, eine liebevolle Beziehungskultur zu entwickeln, in dervon Anfang an das
                        Gefühl entsteht, angenommen zu sein, und inder die Menschen eingeladen sind, sich für die Welt
                        zu öffnen.Wenn wir uns fragen, wie Lernen geschieht, müssen wir dasDogma aufgeben, das Lernen
                        nur von der Lehrkraft zum Kindfunktioniert! Kinder lernen eigenmotiviert, Kinder
                        lernenvoneinander und in Gemeinschaft.Ein Schulkind hat zwei wesentliche Grundbedürfnisse:•
                        dazugehören zu wollen (Verbundenheit)• sich als gestaltendes Subjekt einbringen zu
                        können(Autonomie)Grundlegende Gelingensbedingungen für eine kindgerechteEntwicklung und
                        Voraussetzung für effektives Lernen in unserenSchulen sind daher:1. dass sich Kinder und
                        Jugendliche im eigenen Lebensund Lernumfeld gesehen, zugehörig und verbundenfühlen2. dass Kinder
                        in Berührung kommen mit dem, was sielebendig macht: Sinnlichkeit, Entdecker-
                        undGestaltungsfreude, Talente entfalten…3. dass Kinder und Jugendliche vielfältige
                        Möglichkeitenbekommen, ihr Gehirn auf komplexe Weise zu nutzen!Kinder brauchen echte Aufgaben,
                        Anstrengung schadetihnen dabei nicht, aber sie brauchen den Erfolg und dieErfahrung der
                        Selbstwirksamkeit.Dann werden Kinder Konstrukteur ihres eigenen Bildungsprozessesund erleben ein
                        wahnsinnig schönes Gefühl, ein subjekthaftes Gefühl:Ich bin einfach da, werde bedingungslos
                        geliebt und kriege genugGelegenheiten Entdecker zu sein.„Es geht also nicht darum Fässer zu
                        füllen, sondern Fackeln zuentzünden“ (den Geist zu entzünden, der die Kulturgüter
                        hervorbringt).</p>
                    </ImageTextFloatingSection>

                        <ImageTextFloatingSection
                            imageSrc="/images/return-1825515_1920.jpg"
                            imageAlt="Raupe, Puppe und Schmetterling"
                            imagePosition="left"
                            caption={"Neue Lernkultur, die gekennzeichnet ist von Ermutigung, Sinnhaftigkeit und Feedback-Kultur Neue Lernformate: Lernen vielfältig begleiten, statt Unterricht durchführen, selbstreguliertes und sinnorientiertes Lernen in Projekten, Lernen in Gemeinschaft"}
                        >
                    <p>Primarschulen:- Die Kinder und ihre Bildungsbiographien stehen anerster Stelle!- Integration,
                        Inklusion und Vielfalt werden gelebt.Wirksame Rahmenbedingungen, wie längeresgemeinsames Lernen
                        oder eine veränderteLehrerbildung, werden dafür Stück für Stückeingerichtet.- Die neue Schule
                        ist eine Teamschule mit einer neuenLernkultur, die gekennzeichnet ist von
                        Ermutigung,Sinnhaftigkeit, Gemeinschaft und Feedback-Kultur.- Dieser Ansatz kennt keine passiven
                        Partner mehr inder Bildung. Das Kind bleibt aktiver Konstrukteurseiner eigenen Biographie. Um
                        Bildungsprozesseerfolgreich gestalten zu können, müssen dieseangemessen moderiert werden. Dazu
                        muss vor allemeine Gruppenatmosphäre mit positiver FehlerKultur geschaffen werden, die diese
                        Prozesserückhaltlos unterstützt.- Deswegen bekommt jede Grundschulklasse einverlässliches
                        Verantwortungsteam. Kein Kind wirdalleingelassen, alle Teamkräfte gestalten undverantworten die
                        Bildungsentwicklung gemeinsam.Praxisbeispiel: Primusschule Münster Berg Fidel</p>

                    <p>rimarschulen:- Die Kinder und ihre Bildungsbiographien stehen anerster Stelle!- Integration,
                        Inklusion und Vielfalt werden gelebt.Wirksame Rahmenbedingungen, wie längeresgemeinsames Lernen
                        oder eine veränderteLehrerbildung, werden dafür Stück für Stückeingerichtet.- Die neue Schule
                        ist eine Teamschule mit einer neuenLernkultur, die gekennzeichnet ist von
                        Ermutigung,Sinnhaftigkeit, Gemeinschaft und Feedback-Kultur.- Dieser Ansatz kennt keine passiven
                        Partner mehr inder Bildung. Das Kind bleibt aktiver Konstrukteurseiner eigenen Biographie. Um
                        Bildungsprozesseerfolgreich gestalten zu können, müssen dieseangemessen moderiert werden. Dazu
                        muss vor allemeine Gruppenatmosphäre mit positiver FehlerKultur geschaffen werden, die diese
                        Prozesserückhaltlos unterstützt.- Deswegen bekommt jede Grundschulklasse einverlässliches
                        Verantwortungsteam. Kein Kind wirdalleingelassen, alle Teamkräfte gestalten undverantworten die
                        Bildungsentwicklung gemeinsam.Praxisbeispiel: Primusschule Münster Berg Fidel</p>

                        </ImageTextFloatingSection>
                            <ImageTextFloatingSection
                                imageSrc="/images/hands-1846428_1920.jpg"
                                imageAlt="Raupe, Puppe und Schmetterling"
                                imagePosition="right"
                                caption={"Gesellschaft zusammenbringen, statt spalten Weg von Selektionsanstalten zu integrativen,kindgerechten Schulen als Chancenorte"}
                            >
                    <p>
                        Zu denken geben sollte, dass die in Deutschlandpraktizierte frühe Sortierung auf
                        hierarchischabgestufte Schularten der Sekundarstufe Iinternational unüblich ist.
                        https://deutschesschulportal.de/expertenstimmen/pisa-2018-bildungsgerechtigkeit-tritt-auf-der-stelle/Leben
                        bedeutet Vielfalt. IndividuellePersönlichkeitsentwicklung, Integration, Inklusion undDemokratie
                        sind notwendige Grundlagen für einelebenstüchtige Gesellschaft. Das erfordert eineTransformation
                        der Schulen vom Ort des Lehrens zumOrt des inklusiven und kooperativen Lernens.Dazu ist an
                        vorderster Stelle eine Haltung zu priorisieren:Grundlegende Bildung für alle Kinder zu Werten
                        wie gelebterVielfalt, Mitgefühl und Toleranz!Dafür sind die Rahmenbedingungen zu schaffen: So
                        dassunsere Grundschulen die kleinen Kinder aufnehmen, siewillkommen heißen, kleine
                        Gemeinschaften mit ihnen aufbauenkönnen, in denen sie ihr Potential in Ruhe und gut
                        unterstütztentfalten können. In denen sie lernen, für sich einzustehen,neugierig mit der
                        Vielfalt in der Welt umzugehen, Lernlust undAusdauer zu entwickeln, von einander zu lernen,
                        Konfliktegemeinsam aus der Welt zu schaffen und etwas für dieGemeinschaft beizutragen.
                        Menschliches Glück wird von unserenBeziehungen mit anderen angetrieben. Teamarbeit und Raumfür
                        Kreativität sind dafür Schlüsselwerkzeuge.
                    </p><p>
                    Schulen brauchen dazu Gestaltungshoheit und siemüssen Zeit haben - für Beziehung und
                    Kooperation!Schulen können so zu Kraftorten werden, die für alleKinder einstehen und in einem
                    lebendigen Bündnis mitEltern und Ortschaft wirken.Prof. Gerald Hüther erklärt: “Zukunftsfähige
                    menschlicheGemeinschaften funktionieren ähnlich wie unser Gehirn&#34;,sagt Prof. Gerald
                    Hüther, &#34;Das wächst nicht, indem esimmer größer wird, bis uns irgendwann der
                    Schädelplatzt.&#34;Es wächst stattdessen durch eine fortwährendeIntensivierung der Beziehungen
                    zwischen denNervenzellen, also durch Verstärkung seiner Vernetzung.Dieses Wachstumsmodell übertragen
                    auf menschlicheGemeinschaften oder Kommunen heißt: mehrBegegnung, mehr Austausch, mehr Vernetzung,
                    mehrGemeinsinn, mehr Kreativität und mehrInnovationsgeist.Das Zeitalter der Einzelkämpfer, in dem
                    wir allzu oftKonkurrenten sind und den anderen als Objekt behandeln,geht zu Ende. Um zu einem
                    zufriedenstellendenMiteinander zu gelangen, müssen wir einZusammenleben erlernen, in dem wir uns
                    gegenseitig alseinzigartige Subjekte wahrnehmen und uns so begegnen,dass in gemeinschaftlichem
                    Miteinander die Fülle unsererFähigkeiten sich nicht nur addieren, sondern potenzierenkann.
                </p><p>
                    Prof. John Hattie, einer der renommiertestenBildungsforscher weltweit, erhebt im Dezember
                    2024schwere Vorwürfe gegen das deutsche Schulsystem:„Dasungerechteste Schulsystem, das ich
                    kenne!“und hältBildungsreformen in Deutschland für dringend geboten.Er kritisiert die frühe
                    Aufteilung der Kinder inverschiedene Schulformen als ineffizient undgesellschaftlich schädlich.
                    Stattdessen plädiert er fürlängeres gemeinsames Lernen, mehrChancengerechtigkeit und eine neue
                    Sichtweise aufdie Rolle der Lehrkräfte. Seine Botschaft: Ohne mutigeReformen bleibt das deutsche
                    Bildungssystem in derSackgasse.http://www.laenger-gemeinsam-lernen-bw.de/Die
                    UN-Behindertenrechtskonvention fordert einestrukturelle Transformation des deutschenBildungssystems
                    (Ref. [1], Ziff. 40) Eine aktuelle Studieund der aktuelle Menschenrechtsbericht sieht
                    BadenWürttemberg bei der Umsetzung von Artikel 24 imVergleich der Bundesländer noch als
                    Schlusslicht(Stellungnahme der AG „Bildung und Kultur“ des LAPBeteiligungsprozess 08.09.2023 zur
                    Umsetzung der UNBRK).Forscher bestätigen das: Länger zusammen lernensorgt für mehr Fairness.

                    „In angesehenen Schulen hat man beobachtet, dassKinder gerne und erfolgreich lernen, wenn sie sich
                    auf dieErwachsenen verlassen können. Lernen brauchtverlässliche Beziehungen, die Halt geben. Diese
                    wachsenüber Jahre und sind nicht von Beginn an vorhanden. Injahrelang erfahrenen und routinierten
                    Klassen findet maneine inklusive, mehrperspektivische Lernkultur, die zuguten Lernergebnissen führt.
                    Sie ist geprägt vonACHTUNG, VERTRAUEN, ZUGEHÖRIGKEIT UNDBEGLEITUNG. Hattie verwendet als
                    Gütekriterien ähnlicheBegriffe: BEZIEHUNG, VERTRAUEN, ZUGEWANDTHEIT,SICHERHEIT UND ANSPRUCHSVOLLE
                    LERNZIELE.“(S.97 Teambuch Inklusion - Praxisbuch fürmultiprofessionelle
                    Teams)http://www.schule-im-aufbruch.dehttp://www.schulen-der-zukunft.orgwww.laenger-gemeinsam-lernen-bw.deTeambuch
                    Inklusion - Praxisbuch für multiprofessionelleTeams, Reinhard Stähling Barbara Wenders
                </p>
                            </ImageTextFloatingSection>

                </div>
            </section>
        </div>
    )
}
export default Page
