import React from 'react'
import Image from "next/image";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1 className={"text-center text-[color:var(--color-text)]"}>Schülerinnen und Schüler</h1>
                <div className="flex flex-col xl:flex-row gap-4 mt-4 items-stretch">
                    <div className="md:basis-2/3 text-[color:var(--color-text)]">
                        <p className={"font-semibold"}>
                            Hi, an alle Jugendlichen in unseren Schulen in BW,
                        </p>
                        <p>
                            sind Eure Schulen Orte, die ihr gerne besucht,die Euch inspirieren, gut tun und die
                            Euchweiterbringen?
                        </p>
                        <p>
                            Wenn nicht, dann schaut Euch mal auf dieserWebseite um. Wir haben alles zusammengestellt,was
                            es braucht, damit die unbefriedigendeSituation (link zu Dysfunktilonales Schulsystem)
                            inunseren Schulen in Baden-Württemberg von Grundauf geändert werden kann. Es geht darum,
                            allenKindern die Chance zu geben, die sie verdienthaben. Es geht um selbstorganisiertes
                            Lernen undZusammenarbeit. Viele Schulen im Ausland sind dabedeutend weiter als Deutschland.
                            Doch auch beiuns tut sich was. Hier als Einstieg ein Kurzfilm überdie ASW, eine Schule in
                            BW, an der dieSchülerInnen ihren Lernort, ihr Lernthema und ihreLernpartner selbst bestimmen
                            können. Wenn Ihr zuder Überzeugung kommt, dass sich in unseremSchulsystem endlich etwas
                            bewegen muss, dannunterschreibt bitte die Petition (Name), teilt sie underzählt anderen
                            Schülerinnen und Schülern davon.
                        </p>
                        <p>
                            Zum Nachdenken die Erde ist 4,6 Milliarden Jahrealt. Rechnen wir das runter auf 46 Jahre,
                            ist dieMenschheit seit 4 Stunden hier. Unsere industrielleRevolution begann vor einer
                            Minute. In dieser Zeithaben wir mehr als 50% der weltweiten Wälderzerstört.Unser bisheriger
                            Weg ist nicht nachhaltig. Schlagenwir gemeinsam einen neuen ein.
                        </p>
                    </div>
                    <div className="hidden xl:block xl:basis-1/3 relative h-[600px] rounded overflow-hidden">
                        <Image
                            src="/images/hoch/graduation-2308406_1920.jpg"
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
