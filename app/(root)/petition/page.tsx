import React from 'react'
import ImageTextFloatingSection from "@/app/components/ImageTextFloatingComponent";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1>Petition zur Landtagswahl an den Landtag BW</h1>
                <ImageTextFloatingSection
                    imageSrc="/images/hoch/petition-6788862_1920.jpg"
                    imageAlt="Raupe, Puppe und Schmetterling"
                    imagePosition="right"
                >
                    <p>Sehr geehrte Mitglieder des Landtags BW,</p>

                    <p>sehr geehrte Mitglieder der demokratischen Parteien, sehr geehrte
                        Entscheidungsträger:innen der (zukünftigen) Landesregierung,</p>
                    <p>In dieser Petition geht es um das Recht auf Wohlergehen von Kindern und
                        Jugendlichen und um die zukünftige Entwicklung unserer Gesellschaft.</p>
                    <p>„Schule“ im Sinne von Aristoteles meint einen Ort der Muße, der Gemeinschaft,
                        Freiheit von Zwang und Hektik, sowie der Möglichkeit zur Besinnung und
                        Selbstbestimmung. Es ist ein Ort, an dem Bildungsprozesse nicht durch
                        Effizienzdenken und Beschleunigung beeinträchtigt werden, sondern durch Zeit
                        und Ruhe gefördert werden.</p>
                    <p>Die heutige Schule hat nichts mehr mit dem zu tun, wie sie einmal gedacht war.</p>
                    <p>Spaltung, Demokratieverlust und Verrohung sind die Folgen von strukturellen
                        Ursachen. Den gesellschaftlichen Niedergang, der sich bereits auszuwirken
                        beginnt, können wir gemeinsam durch Bildung stoppen.</p>
                    <p>In unserer sich rasant verändernden Welt brauchen wir Zusammenarbeit und
                        gemeinsame Lösungen, die wirklich helfen. Aktuell produziert unser Schulsystem
                        Leidtragende bei Kindern und Jugendlichen, Pädagog:innen und in Familien. Das
                        kostet die Gesellschaft langfristig bedeutend mehr Geld. Man spart also, wenn
                        man jetzt endlich mit durchdachten Maßnahmen in die Bildung investiert!</p>
                    <p>Wir fordern eine Umkehr und die Veränderung unserer Schulen vom Ort des
                        Lehrens zum Ort des Lernens in vier Bereichen:</p>


                    <h3>1. Haltungsänderung</h3>
                    <p>Das Wohlergehen der Kinder und Jugendlichen muss in den Mittelpunkt aller
                        Bemühungen im schulischen Bereich gestellt werden. Allen Kindern wird vonAnfang an
                        Potentialentfaltung und Chancengerechtigkeit zugestanden. Sie
                        wachsen als zukünftige Gesellschaft lebendig zusammen auf. Die Beteiligten
                        im Bildungsbereich üben eine Kultur des gegenseitigen Zuhörens und der
                        Zusammenarbeit. Damit Veränderungsprozesse in eine gesunde Entwicklung
                        kommen können.</p>

                    <h3>2. Berücksichtigung von Expertenwissen</h3>
                    <p>Die Zeiten, in denen Lehrkräfte, Schulbuch und Frontalunterricht die zentrale
                        Rolle spielten, sind nicht mehr zukunftsfähig. Neben den Pädagog:innen
                        gewinnen Lernhelfer:innen, Peergroups, das Internet, Künstliche Intelligenz,
                        digitalisierte Lernmaterialien, Erklärvideos, Apps und außerschulische
                        Lernorte zunehmend an Bedeutung. Im Zentrum steht heute das Lernen – in
                        Gemeinschaft, individuell, selbstwirksam und strategieorientiert. Schule für
                        alle, von Jahrgang 1-10/13 und wohnortnah.</p>

                    <h3>3. Lernen</h3>
                    <p>Lernen benötigt frei verfügbare Zeit statt starrer Taktung, sowie ein
                        verlässliches, pädagogisches Verantwortungsteam für jede Lerngruppe bzw.
                        Klasse von Anfang an. Stundenpläne und klassischer Unterrichtsablauf
                        behindern häufig individuelle Lernprozesse und Feedbackkultur. Auch die
                        Arbeitszeit der Pädagog:innen lässt sich nicht mehr sinnvoll in klassischen
                        Deputaten messen, sondern muss an neuen Aufgaben und Rollen
                        ausgerichtet werden.</p>

                    <h3>4. Raum</h3>
                    <p>Lernräume sind bewusst gestaltete Umgebungen, die das Lernen
                        unterstützen und fördern. Sie können sowohl physisch als auch digital sein.
                        Um individuelles, selbstbestimmtes und gemeinschaftliches Lernen zu
                        ermöglichen, braucht es eine Vielfalt an Räumen, sowie die Freiheit, diese
                        entsprechend der eigenen Bedürfnisse zu nutzen. Wir fordern auch eine
                        Öffnung aller Schulen, damit Kinder und Jugendliche reale und sinnliche
                        Erfahrungen im Stadtteil (Handwerk, Kultur, Vereine) und in der Natur
                        machen können.</p>


                    <p> Helft mit, dass die Schule für alle Kinder ein Ort der Muße und gesunder
                        Entwicklung wird!</p>
                    <p>Helft mit Eurer Unterschrift, dass diese Punkte bei den Entscheidungsträgern
                        Beachtung und danach Eingang in den Koalitionsvertrag BW 2026 finden.</p>


                    <p className={"bg-red-300 p-4 rounded-lg"}>Diese Petition kann ab 3.1 2026 unter diesem Link in einem Zeitraum von 6 Wochen auf der
                        Internetseite des Landtags unterzeichnet werden. Werden 10 000 Unterschriften erreicht, wird der
                        Landtag eine öffentliche Anhörung zu dieser Petition durchführen. Bitte unterstütze die
                        Initiative für alle Kinder des Landes.</p>

                </ImageTextFloatingSection>
            </div>
        </section>
    )
}
export default Page

