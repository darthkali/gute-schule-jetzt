import React from 'react'
import Image from "next/image";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1 className={"text-center text-[color:var(--color-text)]"}>Schulen und Schulleitungen</h1>
                <div className="flex flex-col xl:flex-row gap-4 mt-4 items-stretch">
                    <div className="md:basis-2/3 text-[color:var(--color-text)]">
                        <p>
                            Unsere Welt verändert sich rasant – und mit ihr dieAnforderungen an Bildung. Schülerinnen
                            und Schüler sollennicht nur Wissen erwerben, sondern auch kritisches Denken,Kreativität,
                            Teamfähigkeit oder Eigenverantwortungentwickeln. Doch wie können Lehrkräfte diesen Wandel
                            aktivmitgestalten? Wie können sie kreativitätsfördernd und innovativunterrichten? Wie
                            gelingt es, die eigene Haltungweiterzuentwickeln und mit den Herausforderungen dermodernen
                            Bildungswelt Schritt zu halten?
                        </p>
                        <p>
                            Die gebundene Ganztagsschule ist notwendig/dann mehrStunden/ 1/2 Stelle Erzieherin pro
                            Klasse über den Schulträger,statt Sozialarbeiter…/ Honorarstellen über Studierende +
                            20Stunden pro Klasse zum Mindestlohn/ + Praktikazeiten derStudierenden eingefordert ( berg
                            Fidel)
                        </p>
                        <p>
                            Nicht fragen- einfach
                            machenhttps://muenstertube.wordpress.com/2025/03/11/nicht-frageneinfach-machen-dr-reinhard-stahling-liest-beim-ir-munster-ausseinem-neuen-buch/Das
                            wichtigste Element bei der schulischen Inklusion sei dieAuflösung der Jahrgangsgrenzen, so
                            Stähling.h t t p s : / / w w w. f r. d e / p o l i t i k / i n k l u s i o n - k l a p p t -
                            v i e l -arbeit-10963703.html
                        </p>
                        <p>
                            S. Ruppaner: Ja, das würde ich schon sagen. Meine Lehrkräftehaben eine Aufgabe: Seid lieb zu
                            den Kindern und bietet ihnenalle Möglichkeiten, die es gibt. Wir trauen den Kindern auch
                            vielzu. Sie zeigen hier, dass sie Verantwortung übernehmen können.Dadurch, dass wir keinen
                            Unterricht machen, haben die Kinderauch mehr Zeit, sich zu entspannen, sich Aufgaben
                            aufzuteilenund sich zu besprechen. Deshalb sind sie schon glücklicher, daskann man so sagen.
                            S. 102 Etwas woran viele GMS gescheitertsind: den Übergang zu schaffen von dem Spirit, den
                            wenigeLeute entwickelt haben, auf ein großes Team! S. 230 Störungenhaben Vorrang Ruth Cohn,
                            Gründerin ThemenzentrierteInteraktion= Beziehungen haben Vorrang.Gemeinschaft ist hiernicht
                            nur auf die Schule bezogen, sondern auf das ganze Dorf.Lehren und Lernen ist ein
                            gegenseitiger Prozess in Schule undDorf.
                        </p>
                    </div>
                    <div className="hidden xl:block xl:basis-1/3 relative h-[600px] rounded overflow-hidden">
                        <Image
                            src="/images/hoch/woodburn-hall-1057364_1920.jpg"
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
