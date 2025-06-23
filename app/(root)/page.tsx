import Card from "@/app/components/Card";
import InitiativeMapClient from "@/app/components/Map";
import Image from "next/image";
import { FaEnvelope, FaMastodon, FaSignal, FaLinkedin, FaWhatsapp, FaFacebook, FaXTwitter } from "react-icons/fa6"
import Button from "@/app/components/Button";


export default function HomePage() {
    const iconBoxStyle = "bg-[color:var(--color-neutral)] w-14 h-14 flex items-center justify-center rounded-xl shadow"

    return (
        <div>
            {/*Hero*/}
            <section className={"bg-[color:var(--color-secondary)]/70"}>
            {/*<section className={"bg-[color:var(--color-secondary)]/70"}>*/}

                <div className={"innerBox relative overflow-hidden min-h-[700px] bg-[color:var(--color-background)]"}>
                    {/* Hintergrundbild */}
                    <div className="absolute inset-0 bottom-0 z-0">
                        <Image
                            src="/images/abstract-1264071_1920.png"
                            alt="Hero Background"
                            fill
                            className="object-cover object-bottom pointer-events-none"
                            priority
                        />

                    </div>
                    {/* Blaue Overlay-Ebene */}
                    {/*<div className="absolute overflow-hidden inset-0 left-0 h-full w-full  z-10 "/>*/}
                    <div className="absolute overflow-hidden inset-0 left-0 h-full w-full bg-[color:var(--color-secondary)]/70 z-10 "/>

                    {/* Inhalt */}
                    <div className="relative z-10  mx-auto px-6  sm:py-8 md:py-10 text-white">
                        <h1>GUTE SCHULE JETZT</h1>
                        <p>Hallo, auf dieser Seite erfährst Du, was Kinder grundlegend brauchen, damit sie in unseren
                            staatlichen Schulen (endlich) aufbauend zusammen lernen können. Durch die Herausforderungen,
                            der sich rasant verändernden Welt besteht dringender Handlungsbedarf! Dazu werden Dir hier
                            gangbare Wege und Einstiege aufgezeigt. Wir sind Menschen aus BW und anderen Bundesländern,
                            die alle Ebenen dazu ermutigen, nicht nur über bessere Bildung zu reden, sondern konkrete
                            Schritte zu gehen.</p>
                        <div className="flex gap-5 sm:gap-10 flex-wrap mt-10">
                            <Button
                                text="Wer steckt dahinter?"
                                href="/kontakt"
                                bgColor="bg-[color:var(--color-neutral)]"
                                textColor="text-[color:var(--color-text)]"
                            />

                            <Button
                                text="Petition unterzeichnen"
                                href="/kontakt"
                                bgColor="bg-[color:var(--color-accent)]"
                                textColor="text-[color:var(--color-neutral)]"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/*HERAUSFORDERUNGEN*/}
            <section>
                <div className={"innerBox"}>
                    <h1 className={"text-center text-[color:var(--color-text)]"}>Welche Herausforderungen sehen wir?</h1>
                    <div className="flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5gap-x-5 gap-y-5">
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="VERÄNDERTE WELT"
                            href={"/veraenderte-welt"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="WAS BRAUCHEN KINDER?"
                            overlayColor={"bg-[color:var(--color-secondary)]/70"}
                            href={"/was-brauchen-kinder"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="DYSFUNKTIONALES SCHULSYSTEM"
                            href={"/dysfunktionales-schulsystem"}
                        />
                    </div>
                    <blockquote>
                        Die Transformation, die Verwandlung also, sie besteht darin, dass sich die Menschen in diesem Land endlich an den Kopf greifen, um zu verstehen, was ihr wichtigstes Kapital ist:
                        <br/>
                        Denken, Problemlösungen oder, wie wir es auch nennen: Wissensarbeit. Doch Deutschland verpennt es seit Jahren und wurstelt weiter in der Tretmühle. Die Idee, dass mehr Routinearbeit zu mehr wirtschaftlichem Erfolg führt, ist auch ökonomisch aus der Zeit gefallen. Alle Kraft wäre der Frage zu widmen, wie aus unserem Land wieder Ideen und Initiativen kommen könnten.
                        <br/>   <br/>
                        Eine Welt, in der man sich nicht am Freitag aufs Wochenende freut, weil die blöde Last vorbei ist, und am Sonntagnachmittag depressiv wird, weil der nächste Werktag droht. Eine Welt, in der wir uns selber gehören, und gerade deshalb unser Bestes geben, um ein paar der verdammt vielen Probleme zu lösen, die wir haben.
                        <cite>gekürzt, Wolf Lotter, https://www.wolflotter.com</cite>
                    </blockquote>

                </div>
            </section>


            {/*VISIONEN*/}
            <section className={"bg-[color:var(--color-secondary)]"}>
                <div className={"innerBox"}>
                    <h1 className={"text-center text-[color:var(--color-neutral)]"}>Wie sehen bereits umgesetzte
                        Visionen und Lösungen aus?</h1>
                    <p className={"text-[color:var(--color-neutral)] text-center"}>Diese beiden Schulen haben wir
                        stellvertretend ausgewählt, weil sie erprobte Lösungen und Ideen zeigen, wie Kindern der Weg zum
                        Lernen wirklich frei gemacht wird. Jede Schule hat ihren ganz eigenen Charakter, aber das Lernen
                        steht unglaublich im Mittelpunkt!
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5">
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Primus Schule Münster Berg Fidel"
                            href={"/primus-schule-muenster"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Alemannenschule Wutöschingen"
                            href={"/alemannenschule"}
                        />
                    </div>

                    <h2 className={"text-center text-[color:var(--color-accent)]"}>Landkarte weiterer
                        beispielgebender Schulen und Bildungsinnovator:innen</h2>
                    <p className={"text-[color:var(--color-neutral)] text-center"}>Viele Schulen haben sich bereits
                        auf den Weg gemacht, hier stellen wir ihre wesentlichen Punkte vor und geben Zugriff auf
                        vertiefende Informationen.
                    </p>
                    <InitiativeMapClient/>
                </div>
            </section>


            {/*HERAUSFORDERUNGEN*/}
            <section>
                <div className={"innerBox"}>
                    <h1 className={"text-center text-[color:var(--color-text)]"}>Wo kann Veränderung direkt
                        ansetzen? Wie kann ich dazu beitragen oder aktiv werden?</h1>
                    <p className={"text-[color:var(--color-text)] text-center"}>Für einen Bildungswandel sind alle
                        Ebenen gefordert aufzubrechen. Es braucht Bewusstsein, neues Denken und eine veränderte Haltung.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5">
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Schülerinnen und Schüler"
                            href={"/schuelerinnen-und-schueler"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Eltern und Familien"
                            href={"/eltern-und-familien"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Politik und Bürger:innen"
                            href={"/politik-und-buerger"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Schulen und Schulleitungen"
                            href={"/schulen-und-schulleitungen"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Wirtschaft und Handwerk"
                            href={"/wirtschaft-und-handwerk"}
                        />
                        <Card
                            imageSrc="/images/hoch/solidarity-649713_1920.jpg"
                            title="Kommunen - Schulträger und Vereine"
                            href={"/kommunen"}
                        />
                    </div>
                </div>
            </section>

            <section className={"bg-[color:var(--color-secondary)]"}>
                {/*Hero*/}
                <div className={"innerBox"}>
                    <div className="flex flex-wrap sm:flex-nowrap gap-4 max-w-250 mx-auto justify-center items-center">
                        <div>
                            <Button
                                text="Mitwirken?"
                                href="/kontakt"
                                bgColor="bg-[color:var(--color-neutral)]"
                                textColor="text-[color:var(--color-text)]"
                            />
                            <p className={"text-[color:var(--color-neutral)]"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, c</p>
                        </div>

                        <div>
                            <Button
                                text="Petition unterzeichnen"
                                href="/kontakt"
                                bgColor="bg-[color:var(--color-accent)]"
                                textColor="text-[color:var(--color-neutral)]"
                            />
                            <p className={"text-[color:var(--color-neutral)]"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, c</p>
                        </div>
                    </div>

                    <p className={"text-center text-[color:var(--color-accent)]"}>Teile unsere Seite und mache andere darauf aufmerksam</p>

                    <div className="flex gap-4 justify-center items-center">
                        <div className={iconBoxStyle}><FaEnvelope size={24} /></div>
                        <div className={iconBoxStyle}><FaMastodon size={24} className="text-[#6364FF]" /></div>
                        <div className={iconBoxStyle}><FaSignal size={24} className="text-[#3A76F0]" /></div>
                        <div className={iconBoxStyle}><FaLinkedin size={24} className="text-[#0077B5]" /></div>
                        <div className={iconBoxStyle}><FaWhatsapp size={24} className="text-[#25D366]" /></div>
                        <div className={iconBoxStyle}><FaFacebook size={24} className="text-[#1877F2]" /></div>
                        <div className={iconBoxStyle}><FaXTwitter size={24} className="text-black" /></div>
                    </div>
                </div>
            </section>

        </div>

    )
}
