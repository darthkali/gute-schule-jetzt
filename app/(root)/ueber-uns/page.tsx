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

                    <h2>Aktiv Beteiligte</h2>
                    <h3>Dagmar Schäfer, GHS Klassenlehrerin mit Schwerpunkt Kl. 1-6:</h3>
                    <p>
                        Hallo, eine unbefriedigende Schulzeit habe ich „ erfolgreich“ überlebt. Bin vor 40 Jahren
                        beruflich bewusst in das staatliche Schulsystem, weil ich der Ansicht bin, dass ALLE Kinder -
                        von Anfang an - etwas Besseres verdient haben. In meiner Zulassungsarbeit über die Funktionen
                        von Schule 1982 schrieb ich: „Kinder sind die Zukunft der Menschheit. Die Art, wie wir sie in
                        die Welt hineinwachsen lassen, hat bestimmenden Einfluss auf diese Zukunft.“ Heute ist klar,
                        dass unser Schulsystem seine Funktionen SO nicht erfüllen KANN. Es wird viel über Bildung und
                        über die überfällige Transformation geredet. ABER: Tagtäglich erleiden die Kinder unsers Landes
                        und ihre Familien, sowie das pädagogische Personal vor Ort, weiter Fremdbestimmung und
                        Ressourcenmangel. Im Ergebnis verlieren alle - auch die Wirtschaft, der kompetente Fachkräfte
                        fehlen und die Demokratie, deren Bürgerschaft in zunehmendem Maße das Vertrauen verloren hat.
                        Unsere Initiative will ALLE Beteiligten auf einen Punkt bringen, von dem aus gehandelt werden
                        kann. Damit möglichst bald, ALLE Kinder in unseren vielfältigen Schulen im Fokus stehen, gesehen
                        werden und etwas Besseres bei ihnen WIRK-lich ankommt. Dazu kann jeder Mensch einen Beitrag
                        leisten. Wir laden Sie ein, über diese Webseite Ihren Punkt zu finden. Lassen Sie uns zur
                        politischen Kraft für Kinder und Zukunft werden!</p>

                    <h2>Weitere Aktive Beteiligte</h2>
                    <p>Annegret und Danny und weitere Aktive Beteiligte, Stefan Ruppaner, Reinhard Stähling, Barbara
                        Wenders?</p>

                    <h2>weitere Menschen/ Organisationen</h2>
                    <p>Reinhard Kahl, Peter Fratton,, GCV, Schülervertretungen, Eltern,…) mitaufnehmen: Ich stehe hinter
                        denForderungen der Petition, weil… oder Ich arbeite am Bildungswandel im beschriebenen Sinne
                        aktiv
                        mit, weil</p>

                </ImageTextSection>
            </div>
        </section>
    )
}
export default Page
