import React from 'react';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageTextFloatingSection from '@/app/components/text/ImageTextFloatingComponent';
import Button from '@/app/components/button/Button';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Neue Lernkultur – Jetzt!</h1>
        <h2>BW-Petition - Schule mit Zukunft für alle Kinder </h2>

        {/* Hero Call-to-Action Section */}
        <div className='my-8 bg-[color:var(--color-nlj-green)] rounded-2xl shadow-2xl p-8 md:p-12 text-center'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-6'>
              <FontAwesomeIcon
                icon={faFileSignature}
                className='text-white text-6xl mb-4'
              />
            </div>
            <h3 className='text-white text-3xl md:text-4xl font-bold mb-4'>
              10.000 Unterschriften für eine bessere Bildung!
            </h3>
            <p className='text-white text-lg md:text-xl mb-6 opacity-90'>
              Gemeinsam für die Bildungswende in BaWü, die allen jungen Menschen
              und Schulen zu Gute kommt!
            </p>
            <Button
              text='Jetzt Petition mitzeichnen'
              href='https://TODO.de/'
              bgColor='bg-white'
              textColor='text-[color:var(--color-nlj-green)]'
              newTab={true}
              className='text-xl md:text-2xl px-12 py-6 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 font-extrabold'
            />
            <p className='text-white text-sm mt-4 opacity-80'>
              Auf der Webseite des Landtags Baden-Württemberg
            </p>
          </div>
        </div>

        {/*<p className={'bg-red-300 p-4 rounded-lg'}>*/}
        {/*  <b>*/}
        {/*    Hier steht das Anschreiben an die MdLs, die Parteien und*/}
        {/*    Entscheidungsträger:innen, welches als*/}
        {/*    <TextLinks href={'/documents/Petition.pdf'} newTab={false}>*/}
        {/*      {' '}*/}
        {/*      Petitionstext in Kurzfassung{' '}*/}
        {/*    </TextLinks>{' '}*/}
        {/*    (PDF-Datei) nach Freigabe durch den Petitionsauschuss (wir erhoffen*/}
        {/*    den 8.12.2025) in einem Zeitraum von 6 Wochen auf der Internetseite*/}
        {/*    des Landtags unterzeichnet werden kann. Dazu soll ein*/}
        {/*    weitverzweigtes Netzwerk in BW aufgebaut und aktiviert werden. Sind*/}
        {/*    10 000 Unterschriften erreicht, wird der Landtag eine öffentliche*/}
        {/*    Anhörung zu dieser Petition durchführen.{' '}*/}
        {/*    <TextLinks href={'/mitwirken'}>*/}
        {/*      {' '}*/}
        {/*      Bitte unterstütze die Initiative für alle Kinder des Landes.*/}
        {/*    </TextLinks>*/}
        {/*  </b>*/}
        {/*</p>*/}
        <ImageTextFloatingSection
          imageSrc='/images/pexels-fauxels-3184432.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='right'
          className={'shadow-none'}
        >
          <p>
            <br />
            Sehr geehrte Mitglieder des Landtags BW, sehr geehrte Mitglieder der
            demokratischen Parteien, sehr geehrte Entscheidungsträger:innen der
            (zukünftigen) Landesregierung,
          </p>
          <p>
            <br />
            die Petition „Neue Lernkultur – Jetzt!“ will das Recht auf
            Wohlergehen von Kindern und Jugendlichen und die zukünftige
            Entwicklung unserer Gesellschaft fördern und stärken.
            <br />
            „Schule“ im Sinne von Aristoteles meint einen Ort der Muße, der
            Gemeinschaft, Freiheit von Zwang und Hektik, sowie der Möglichkeit
            zur Besinnung und Selbstbestimmung. Schule soll ein Ort sein, an dem
            Bildungsprozesse für alle Kinder durch Zeit und Ruhe gefördert
            werden.
            <br />
            Bitte machen Sie sich tatkräftig und kompromissbereit auf den Weg,
            um eine Bildungsreform anzugehen, die den Namen verdient und das
            Klein-Klein der letzten Jahre hinter sich lässt. Bitte leiten Sie
            zeitnah eine gemeinsame und überparteiliche Bildungsreform ein.
            Grundlage dafür ist die Vereinbarung eines gemeinsamen
            Bildungsbegriffes, der mit wissenschaftlicher Expertise zum Wohle
            aller Kinder führt. Eine große Bildungsreform erfordert einen
            richtungsweisenden Konsens über Legislaturperioden hinaus.
            <br />
            Denken Sie an die umgreifenden technologischen, gesellschaftlichen
            und kulturellen Änderungen der letzten Jahre - rasante und komplexe
            Herausforderungen für die unsere Schulen nicht gerüstet sind.
            Derzeit weist unser Bildungssystem zunehmende Dysfunktionalität auf
            und muss, um unseren Kindern und unserer Demokratie gerecht zu
            werden, dringend zielführend aufgestellt werden.
            <br />
            Spaltung, Demokratieverlust und Verrohung sind die Folgen von
            strukturellen Ursachen. Einen resultierenden gesellschaftlichen
            Niedergang können wir gemeinsam durch eine ganzheitliche Bildung und
            förderliche Lernkultur stoppen.
            <br />
            Dass es anders gehen kann und muss, zeigen wir auf
            neue-lernkultur-jetzt.de. Dort finden Sie gebündelte Prämissen aus
            der aktuellen Lernforschung, sowie erprobte schulpraktische Lösungen
            und das Beispiel einer überaus erfolgreichen Bildungsreform.
            Grundlage für eine prosperierende, dem Gemeinsinn verpflichtete,
            resiliente Gesellschaft sind unsere gut ausgebildeten Kinder.
            <br />
            Zukunft! gestalten! – Jetzt!
          </p>

          <p>
            In unserer sich rasant verändernden Welt brauchen wir
            Zusammenarbeit, eine Kultur des Zuhörens und gemeinsame Lösungen,
            die wirklich helfen. Aktuell produziert unser Schulsystem zu viele
            Leidtragende bei Kindern, Jugendlichen, Pädagog:innen und in
            Familien, somit bei allen unmittelbar Beteiligten und folglich auch
            in Wirtschaft und Gesellschaft. Das kostet die Gemeinschaft sehr
            viel Energie und Geld, verhindert Zukunftschancen und ist damit
            nicht zielführend. Es braucht eine neue Lernkultur, wie sie einige
            innovative Schulen bereits seit Jahren zeigen. Wir alle können nur
            gewinnen, wenn jetzt endlich mit neu ausgerichteten Maßnahmen in die
            Bildung investiert wird!
          </p>
          <p>
            Wir fordern die Veränderung unserer Schulen vom Ort des Lehrens zum
            Ort des Lernens in vier Bereichen:
          </p>
          <h3>1. Haltungsänderung</h3>
          <p>
            Das Wohlergehen der Kinder und Jugendlichen muss in den Mittelpunkt
            aller schulischen Bemühungen gestellt werden. Allen Kindern wird von
            Anfang an Potentialentfaltung und Chancengerechtigkeit zugestanden.
            Sie wachsen als zukünftige Gesellschaft lebendig zusammen auf. Die
            Beteiligten im gesamten Bildungsbereich üben eine Kultur des
            gegenseitigen Zuhörens und der Zusammenarbeit. Damit
            Veränderungsprozesse in eine gesunde Entwicklung kommen können.{' '}
            <br />
            Konkret:
          </p>
          <ul className='list-disc pl-6 mb-4'>
            <b>
              <li>
                Überparteiliche Einigung auf einen gemeinsamen Bildungsbegriff
                und darauffolgende konzeptorientierte Schulpolitik, im Sinne der
                auf  www.neue-lernkultur-jetzt dargestellten Zielsetzungen. Also
                eine Neuausrichtung der Grundhaltung, sowie der
                Lehrkräfteausbildung und der Bildungspläne, in der Kinder an
                vorderster Stelle stehen und jedes sein Potential in
                Gemeinschaft entwickeln kann.
              </li>
              <li>
                Ressourcen müssen in die Hand der Schulen verlagert werden,
                damit benötigte Hilfen direkt und zeitnah alle Kinder erreichen.
              </li>
              <li>
                In jeder Lerngruppe braucht es Zeit, sich gegenseitig zuzuhören.
                Dafür ist jede Woche eine Pädagog:innen-Teamsitzung notwendig,
                sowie eine Stunde Lerngruppenrat (Klassenrat) für existenzielle
                Themen, Peer-Konflikte, Gemeinschaft und
                Persönlichkeitsentwicklung.
              </li>
            </b>
          </ul>
          <h3>2. Berücksichtigung von Expert:innenwissen</h3>
          <p>
            Die Zeiten, in denen Lehrkräfte, Schulbuch und Frontalunterricht die
            zentrale Rolle spielten, sind nicht mehr zukunftsfähig. Neben den
            Pädagog:innen gewinnen Lernhelfer:innen, Peergroups, das Internet,
            Künstliche Intelligenz, digitalisierte Lernmaterialien,
            Erklärvideos, Apps und außerschulische Lernorte zunehmend an
            Bedeutung. Im Zentrum steht heute das Lernen – in Gemeinschaft,
            individuell (zieldifferenziert), selbstwirksam und
            strategieorientiert.
            <br />
            Konkret:
          </p>
          <ul className='list-disc pl-6 mb-4'>
            <b>
              <li>
                Eine Begutachtung der Organisationsstruktur und Arbeitsweise des
                Kultusministeriums im schulischen Bildungsbereich, durch ein
                externes Beratungsunternehmen mit dem Ziel, wirksamere
                Arbeitsergebnisse zu ermöglichen.
              </li>
              <li>
                Stetige Schulentwicklung für eine neue Lernkultur durch ein
                strukturiert verankertes Einbringen von Expert:innenwissen und
                der Erfahrungen innovativer Schulen (siehe Vorbild Neuseeland).
              </li>
              <li>
                Eine Enquete-Kommission (Beteiligungsgremium unter Einbezug von
                Betroffenen und Praktiker:innen) zur Vereinbarung des
                gemeinsamen Bildungsbegriffs und zur Begleitung der zeitnahen
                Umsetzung (siehe Neuseeland).
              </li>
            </b>
          </ul>

          <h3>3. Lernen</h3>
          <p>
            Lernen benötigt frei verfügbare Zeit statt starrer Taktung, sowie
            ein verlässliches, pädagogisches Verantwortungsteam für jede
            Lerngruppe bzw. Klasse von Anfang an. Stundenpläne und klassischer
            Unterrichtsablauf behindern häufig individuelle Lernprozesse und
            Feedbackkultur. Verlässliche Beziehungen und Raum für Entwicklung
            bilden dafür die Grundlage. Auch die Arbeitszeit der Pädagog:innen
            lässt sich nicht mehr sinnvoll in klassischen Deputaten messen,
            sondern muss an neuen Aufgaben und Rollen ausgerichtet werden. Für
            diese Rahmenbedingungen fordern wir Freiräume für alle Schularten.
            Damit sie sich auf den Weg machen können, Kinder beim Wachsen zu
            begleiten und kindgerechtes Lernen in den Mittelpunkt zu stellen.
            <br />
            Konkret:
          </p>
          <ul className='list-disc pl-6 mb-4'>
            <b>
              <li>
                Freiräumeprogramm für alle Schularten (siehe Niedersachsen)
              </li>
              <li>
                Generell mehr Personal und die Einrichtung von
                Verantwortungsteams für alle Lerngruppen (Schulklassen)
                beginnend in den Primarschulen.
              </li>
            </b>
          </ul>
          <h3>4. Raum</h3>
          <p>
            Lernräume sind bewusst gestaltete Umgebungen, die das Lernen
            unterstützen und fördern. Sie können sowohl physisch als auch
            digital sein. Um individuelles, selbstbestimmtes und
            gemeinschaftliches Lernen zu ermöglichen, braucht es eine Vielfalt
            an Räumen, sowie die Freiheit, diese entsprechend der eigenen
            Bedürfnisse zu nutzen. Wir fordern eine umfassende Öffnung aller
            Schulen, damit Kinder und Jugendliche reale und sinnliche
            Erfahrungen im Stadtteil (Handwerk, Kultur, Vereine) und in der
            Natur machen können.
            <br />
            Konkret:
            <br />
            Für diese lebendigen Lernorte, fordern wir…
          </p>
          <ul className='list-disc pl-6 mb-4'>
            <b>
              <li>... ein gelebtes, gemeinsames Bildungsverständnis aller.</li>
              <li>... langfristige, parteiübergreifende Zusammenarbeit.</li>
              <li>... vielfältige Vernetzung von Schulen und Kommunen.</li>
              <li>... eine Vielfalt und Öffnung von Lernräumen.</li>
              <li>
                ... Eine signifikante Erhöhung des Bildungsbudgets  (Vergleich:
                Deutschland aktuell 4,4% des BIP, Norwegen und Großbritannien
                6%, Quelle BZ 10.9.25)
              </li>
            </b>
          </ul>
          <p>
            Die neuseeländische Bildungsreform der 90er-Jahre zeigt, welche
            Kraft sich entfaltet, wenn das Bildungssystem von einer Vision
            getragen wird, hinter der Politiker:innen, Wissenschaftler:innen,
            Lehrer:innen und Eltern gemeinsam stehen. Auch Baden-Württemberg
            braucht Leitplanken für eine konzeptorientierte Schulpolitik, die
            nicht nur kleinteilige Reparaturen will, sondern ganzheitliche
            Transformationen.
          </p>
          <p>
            Die ausgewählten Schulbeispiele auf der Webseite
            „www.neue-lernkultur-jetzt.de“ zeigen, wie dies konkret vor Ort im
            schulischen Alltag umgesetzt werden kann. Jede Schule soll dabei
            gefördert werden, Schritte in diese Richtung gehen zu können.
          </p>
          <p>
            Helft mit, dass die Schule wieder zukunftsfähig und für alle Kinder
            ein Ort der Muße und gesunder Entwicklung wird!
          </p>
          <p>
            Helft mit Eurer Unterschrift, dass diese Punkte bei den
            Entscheidungsträger:innen Gewicht und danach Eingang in den
            Koalitionsvertrag und das Regierungsprogramm BW 2026 finden.
          </p>
          <p>Mit herzlichen Grüßen</p>
          <p>
            <i>
              {' '}
              Alle Initiator:innen und Unterzeichner:innen der BW-Initiative
              <br />
              Neue Lernkultur – Jetzt!
              <br />
              BW- Petition - Schule mit Zukunft für alle Kinder!
            </i>
          </p>
        </ImageTextFloatingSection>
      </div>
    </section>
  );
};
export default Page;
