import React from 'react'
import ImageTextFloatingSection from "@/app/components/ImageTextFloatingComponent";
import Image from "next/image";

const Page = () => {
    return (
        <div>
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
        </div>
    )
}
export default Page
