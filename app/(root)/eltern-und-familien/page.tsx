import React from 'react'
import Image from "next/image";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1 className={"text-center text-[color:var(--color-text)]"}>Eltern und Familien</h1>
                <div className="flex flex-col xl:flex-row gap-4 mt-4 items-stretch">
                    <div className="md:basis-2/3 text-[color:var(--color-text)]">
                        <p className={"font-semibold"}>
                            Nicht Eure Kinder sind falsch, sondern das System braucht Veränderung!
                        </p>
                        <p>
                            ehr geehrte Eltern und Erziehungsberechtigte,
                            alle wissen, dass unser Bildungssystem nicht so läuft, wie essollte. (link zu Dysfunktilonales Schulsystem) Aber es ändert sichnur wenig. Die Leidtragenden sind unsere Kinder und ihreFamilien.
                            Es gibt aber Schulen, die aufgebrochen sind und sich zuTeamschulen, sowie Chancenorten (link zu ASW undBergFidel) verändert haben. Sie erhalten Dankesbriefe, wie:“Mein Kind ist ganz verändert, es kommt zufrieden von der Schuleheim, komplizierte Lebensverhältnisse haben sich für uns sehrvereinfacht…“ Es gibt Schulen, da geht es auffallend freundlichund ruhig zu. In der Folge sind auch die Leistungen derSchülerInnen an diesen Schulen im Schnitt besser.
                        </p>
                        <p>
                            Wir brauchen aber flächendeckend im ganzen Land ausvielen Gründen (link zu Dysfunktilonales Schulsystem), Teil 2)wesentliche Verbesserungen in Schulen, so dass sie zuaufbauenden Kraftorten für alle Kinder werden.Eigentlich braucht ein Schulkind (link zu Was brauchen Kinder)drei Dinge: Es braucht Aufgaben, an denen es wachsen kann, esbraucht Vorbilder an denen es sich orientieren kann und esbraucht Gemeinschaften, in denen es sich aufgehoben fühlt.Wenn Sie ebenfalls zu der Überzeugung kommen, dass sich inunserem Schulsystem endlich in diesem Sinne bewegen muss,dann unterschreiben Sie bitte die Petition (Name), teilen sie undsprechen mit anderen Eltern darüber. Klassenfeste undElternabende jetzt im Herbst eignen sich, um eine Welle in BW zuerzeugen. Eine Welle aus der Elternschaft, die so stark ist, dasssie sich im Koalitionsvertrag nach den Landtagswahlen imMärz 2026 wiederfindet. Und dazu führt, dass endlich ein neuerGeist durch unsere Schulen weht, der das Gedeihen jedesKindes an vorderste Stelle setzt (link zu Was brauchen Kinder3.Teil)weitere Infos für Eltern
                        </p>
                    </div>
                    <div className="hidden xl:block xl:basis-1/3 relative h-[600px] rounded overflow-hidden">
                        <Image
                            src="/images/hoch/family-5127719_1920.jpg"
                            alt="Hero Background"
                            fill
                            className="object-cover object-bottom pointer-events-none"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Page
