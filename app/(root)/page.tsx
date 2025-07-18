import Card from "@/app/components/Card";
import InitiativeMapClient from "@/app/components/Map";
import Image from "next/image";
import {FaEnvelope, FaLinkedin, FaWhatsapp, FaFacebook, FaXTwitter} from "react-icons/fa6"
import Button from "@/app/components/Button";
import Link from "next/link";
import MastodonShareButton from "@/app/components/MastodonShareButton";
import Highlight from '@/app/components/Highlight';


export default function HomePage() {
    const shareUrl = encodeURIComponent('https://edunite-web.vercel.app/');
    const text = encodeURIComponent('Schau dir diese Seite an:');

    const iconBoxStyle = "bg-[color:var(--color-neutral)] w-14 h-14 flex items-center justify-center rounded-xl shadow hover:scale-110 transition-transform"

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
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=="
                        />

                    </div>
                    {/* Blaue Overlay-Ebene */}
                    {/*<div className="absolute overflow-hidden inset-0 left-0 h-full w-full  z-10 "/>*/}
                    <div
                        className="absolute overflow-hidden inset-0 left-0 h-full w-full bg-[color:var(--color-secondary)]/70 z-10 "/>

                    {/* Inhalt */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10  px-6  sm:py-8 md:py-10 text-white">
                        <div className={"sm:col-span-2"}>
                            <h1>Gute Schule - Jetzt!</h1>
                            <p>Hallo, auf dieser Seite erfährst Du, was <Highlight>Kinder</Highlight> grundlegend
                                brauchen, damit sie in unseren staatlichen Schulen (endlich) aufbauend zusammen lernen
                                können. Durch die Herausforderungen, der sich <Highlight>rasant verändernden
                                    Welt</Highlight> besteht <Highlight>grundlegender Handlungsbedarf</Highlight>! Dazu
                                werden Dir hier gangbare Wege und Einstiege aufgezeigt. Wir sind <Highlight>Menschen aus
                                    BW und anderen Bundesländern</Highlight>, die alle Ebenen andere dazu ermutigen,
                                nicht nur über <Highlight>nachhaltigere Bildung</Highlight> zu reden,
                                sondern <Highlight>konkrete Schritte</Highlight> zu gehen.</p>
                            <div className="flex gap-5 sm:gap-10 flex-wrap mt-10">
                                <Button
                                    text="Petition an den Landtag unterzeichnen"
                                    href="/petition"
                                    bgColor="bg-[color:var(--color-accent)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*HERAUSFORDERUNGEN*/}
            <section>
                <div className={"innerBox"}>
                    <h1 className={"text-center text-[color:var(--color-text)]"}>Welche Herausforderungen sehen
                        wir?</h1>
                    <div className="flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5gap-x-5 gap-y-5">
                        <Card
                            imageSrc="/images/solar-4867218_1920.jpg"
                            title="VERÄNDERTE WELT"
                            href={"/veraenderte-welt"}
                        />
                        <Card
                            imageSrc="/images/children-5411350_1920.jpg"
                            title="WAS BRAUCHEN KINDER?"
                            overlayColor={"bg-[color:var(--color-secondary)]/50"}
                            href={"/was-brauchen-kinder"}
                        />
                        <Card
                            imageSrc="/images/piano-6315809_1920.jpg"
                            title="DYSFUNKTIONALES SCHULSYSTEM"
                            href={"/dysfunktionales-schulsystem"}
                        />
                    </div>
                    <blockquote>
                        Die Transformation, die Verwandlung also, sie besteht darin, dass sich die Menschen in diesem
                        Land endlich an den Kopf greifen, um zu verstehen, was ihr wichtigstes Kapital ist:
                        <br/>
                        Denken, Problemlösungen oder, wie wir es auch nennen: Wissensarbeit. Doch Deutschland verpennt
                        es seit Jahren und wurstelt weiter in der Tretmühle. Die Idee, dass mehr Routinearbeit zu mehr
                        wirtschaftlichem Erfolg führt, ist auch ökonomisch aus der Zeit gefallen. Alle Kraft wäre der
                        Frage zu widmen, wie aus unserem Land wieder Ideen und Initiativen kommen könnten.
                        <br/> <br/>
                        Eine Welt, in der man sich nicht am Freitag aufs Wochenende freut, weil die blöde Last vorbei
                        ist, und am Sonntagnachmittag depressiv wird, weil der nächste Werktag droht. Eine Welt, in der
                        wir uns selber gehören, und gerade deshalb unser Bestes geben, um ein paar der verdammt vielen
                        Probleme zu lösen, die wir haben.
                        <cite>gekürzt, Wolf Lotter, https://www.wolflotter.com <br/> siehe: <Link
                            href={"https://www.zeit.de/2025/29/regression-demokratie-staatliche-steuerung-westen-liberale-demokratie"}
                            target={"_blank"}
                            className={"hover:underline"}
                            >
                             "Die Demokratie macht schlapp" (Die Zeit Nr 29/ 2025 )
                        </Link></cite>
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


                    <div className="flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5 my-10">
                        <Link
                            href="/primus-schule-muenster"
                            className="
                            bg-[color:var(--color-primary)] text-[color:var(--color-neutral)]
                            p-6 max-w-md
                            shadow-xl rounded-xl overflow-hidden
                            transition-transform duration-300 hover:scale-105
                            ">

                            <div className="">
                                <h2 className={"text-center text-2xl mb-0"}>
                                    Primus Schule <br/> Münster Berg Fidel
                                </h2>
                                <p className="text-blue-400 text-center mt-0">1-10</p>
                                <ul className={" text-center"}>
                                    <li>Vorbild für Grundschulen</li>
                                    <li>Vorbild für längeres gemeinsames Lernen</li>
                                    <li>Vorbild für Inklusion</li>
                                </ul>
                                <p className="text-blue-400 text-center mt-4">Jede Klasse hat ein Verantwortungsteam-
                                    Vorbild für Grundschulen</p>
                            </div>
                        </Link>

                        <Link
                            href="/alemannenschule"
                            className="
                            bg-[color:var(--color-primary)] text-[color:var(--color-neutral)]
                            p-6 max-w-md
                            shadow-xl rounded-xl overflow-hidden
                            transition-transform duration-300 hover:scale-105
                            ">

                            <div className="">
                                <h2 className={"text-center text-2xl mb-0"}>
                                    Alemannenschule Wutöschingen
                                </h2>
                                <p className="text-blue-400 text-center mt-0">1-13</p>
                                <ul className={" text-center"}>
                                    <li>Vorbild für weiterführende Schulen</li>
                                    <li>Vorbild für Selbstorganisiertes Lernen und gemeinsames Projekt-Lernen</li>
                                </ul>
                                <p className="text-blue-400 text-center mt-4">Ich bin selbstwirksam - ich kann die Welt
                                    verändern!
                                    Statt schulgerechte Kinder eine kindgerechte Schule!“</p>
                            </div>
                        </Link>

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
                            imageSrc="/images/hoch/boy-8474750_1920.jpg"
                            title="Kinder und Jugendliche"
                            href={"/schuelerinnen-und-schueler"}
                            overlayColor={"bg-[color:var(--color-secondary)]/80"}
                        />
                        <Card
                            imageSrc="/images/family-6886803_1920.jpg"
                            title="Eltern und Familien"
                            href={"/eltern-und-familien"}
                            overlayColor={"bg-[color:var(--color-secondary)]/80"}
                        />
                        <Card
                            imageSrc="/images/hoch/woodburn-hall-1057364_1920.jpg"
                            title="Schulen und Schulleitungen"
                            href={"/schulen-und-schulleitungen"}
                            overlayColor={"bg-[color:var(--color-secondary)]/80"}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5 mt-10">
                        <Card
                            imageSrc="/images/deutscher-bundestag-4965585_1920.jpg"
                            title="Politik und Bürger:innen"
                            href={"/politik-und-buerger"}
                            overlayColor={"bg-[color:var(--color-text)]/80"}
                        />
                        <Card
                            imageSrc="/images/money-2696219_1920.jpg"
                            title="Handwerk und Wirtschaft"
                            href={"/wirtschaft-und-handwerk"}
                            overlayColor={"bg-[color:var(--color-text)]/80"}
                        />
                        <Card
                            imageSrc="/images/hoch/street-coffee-444922_1920.jpg"
                            title="Kommunen - Schulträger und Vereine"
                            href={"/kommunen"}
                            overlayColor={"bg-[color:var(--color-text)]/80"}
                        />
                    </div>
                </div>
            </section>

            <section className={"bg-[color:var(--color-secondary)]"}>
                <div className={"innerBox "}>
                    <div className="flex flex-wrap sm:flex-nowrap gap-4 max-w-250 mx-auto justify-center items-start ">
                        <div className="flex-1">
                            <Button
                                text="Mitwirken?"
                                href="/kontakt"
                                bgColor="bg-[color:var(--color-neutral)]"
                                textColor="text-[color:var(--color-text)]"
                            />
                            <p className={"text-[color:var(--color-neutral)]"}>
                                Hallo,<br/>
                                hast du Lust selbst aktiv zu werden?<br/>
                                Wir freuen uns über Ideen, Menschen im Hintergrund und Vordergrund und …. Schau mal
                                rein!
                            </p>
                        </div>

                        <div className="flex-1">
                            <Button
                                text="Petition an den Landtag unterzeichnen"
                                href="/petition"
                                bgColor="bg-[color:var(--color-accent)]"
                            />
                            <p className={"text-[color:var(--color-neutral)]"}>
                                Danke, dass du bis hier runter gescrollt hast.<br/>
                                Hier kommst du zur Petition, die die Bildungswende in BW (und irgendwann auch
                                bildungspolitisch für ganz Deutschland) in Fahrt bringen soll. Wir danken dir für deine
                                Unterstützung! Bei Fragen, Ideen und Anregungen schreibe uns gerne an. (LINK zum
                                Kontaktformular).
                            </p>
                        </div>
                    </div>



                    <p className={"text-center text-[color:var(--color-accent)]"}>Teile unsere Seite und mache andere
                        darauf aufmerksam</p>

                    <div className="flex flex-wrap gap-4 justify-center items-center">

                        <a
                            key="email"
                            href={`mailto:?subject=Empfehlung&body=${text}%0A${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconBoxStyle}
                            aria-label="Teilen per E-Mail"
                        >
                            <FaEnvelope size={24}/>
                        </a>

                        <MastodonShareButton key="mastodon" text={text} shareUrl={shareUrl} className={iconBoxStyle}/>

                        <a
                            key="linkedin"
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconBoxStyle}
                            aria-label="Teilen auf LinkedIn"
                        >
                            <FaLinkedin size={24} className="text-[#0077B5]"/>
                        </a>

                        <a
                            key="whatsapp"
                            href={`https://wa.me/?text=${text}%20${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconBoxStyle}
                            aria-label="Teilen auf WhatsApp"
                        >
                            <FaWhatsapp size={24} className="text-[#25D366]"/>
                        </a>

                        <a
                            key="facebook"
                            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconBoxStyle}
                            aria-label="Teilen auf Facebook"
                        >
                            <FaFacebook size={24} className="text-[#1877F2]"/>
                        </a>

                        <a
                            key="twitter"
                            href={`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconBoxStyle}
                            aria-label="Teilen auf X (Twitter)"
                        >
                            <FaXTwitter size={24} className="text-black"/>
                        </a>


                    </div>
                </div>
            </section>

        </div>

    )
}
