import React from 'react'
import ImageTextSection from "@/app/components/ImageTextComponent";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>

                <h1>Über Uns</h1>
                <ImageTextSection
                    imageSrc={"/images/school-543041_1920.jpg"}
                    imageAlt={"sdaf"}
                    imagePosition={"left"}
                    >

                <h2>Initiatorin</h2>
                <p>Dagmar Schäfer:

                    Guten Tag/ hallo, habe selbst eine unbefriedigende Schulzeit „ erfolgreich“ hinter mich gebracht.
                    Bin vor 40 Jahrenberuflich bewusst in das staatliche Schulsystem, weil ich der Ansicht bin, dass
                    ALLE Kinder etwas Besseres verdient haben. In meinerZulassungsarbeit über die Funktionen von Schule
                    1982 schrieb ich: „Kinder sind die Zukunft der Menschheit. Die Art, wie wir sie in die
                    Welthineinwachsen lassen, hat bestimmenden Einfluss auf diese Zukunft.“ Heute weiß jeder, dass unser
                    Schulsystem seine Funktionen nicht erfüllenKANN. Heute wird viel über Bildung geschrieben und über
                    die überfällige Transformation nachgedacht. ABER: tagtäglich erleiden die Kinderunsers Landes und
                    ihre Familien, sowie das pädagogische Personal vor Ort, weiter Fremdbestimmung und Ressourcenmangel.
                    Im Ergebnisverlieren alle - auch die Wirtschaft, der kompetente Fachkräfte fehlen und die
                    Demokratie, deren Bürgerschaft in zunehmendem Maße dasVertrauen verloren hat. Unsere Initiative will
                    ALLE Beteiligten auf einen Nenner bringen, von dem aus gehandelt werden kann. Damit möglichstbald,
                    ALLE Kinder in unseren vielfältigen Schulen, im Fokus stehen und endlich etwas Besseres bei ihnen
                    REAL ankommt. Dazu kann jederMensch einen Beitrag leisten. Wir laden Sie ein über diese Webseite
                    Ihren Punkt zu finden.</p>

                <h2>Weitere Aktive Beteiligte</h2>
                <p>Annegret und Danny und weitere Aktive Beteiligte, Stefan Ruppaner, Reinhard Stähling, Barbara
                    Wenders?</p>

                <h2>weitere Menschen/ Organisationen</h2>
                <p>Reinhard Kahl, Peter Fratton,, GCV, Schülervertretungen, Eltern,…) mitaufnehmen: Ich stehe hinter
                    denForderungen der Petition, weil… oder Ich arbeite am Bildungswandel im beschriebenen Sinne aktiv
                    mit, weil</p>

                </ImageTextSection>
            </div>
        </section>
    )
}
export default Page
