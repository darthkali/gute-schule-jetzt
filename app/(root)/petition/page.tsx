import React from 'react';
import Image from 'next/image';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/button/Button';

const Page = () => {
  return (
    <div>
      <section className='bg-secondary relative overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/pexels-fauxels-3184432.jpg'
            alt='Zusammenarbeit für Bildung'
            fill
            className='object-cover opacity-15'
            priority
          />
        </div>
        <div className='relative z-10 innerBox py-16 md:py-24 text-center'>
          <h1 className='text-neutral mb-2'>Neue Lernkultur – Jetzt!</h1>
          <h2 className='text-accent'>
            Landtagspetition – Schule mit Zukunft für alle Kinder
          </h2>
          <p className='text-neutral/80 mt-4 max-w-2xl mx-auto'>
            Unser Anschreiben an die Mitglieder des Landtags, die Parteien und
            Entscheidungsträger:innen in Baden-Württemberg.
          </p>
          <div className='mt-8'>
            <Button
              text='Landtagspetition ansehen'
              href='https://petitionen.landtag-bw.de/Petitionen/Details/46215aff-a7ad-4de3-8b6f-0cc2bce51e0c'
              bgColor='bg-accent'
              textColor='text-primary'
              icon={faFileSignature}
              newTab
            />
          </div>
        </div>
      </section>

      <section>
        <div className='innerBox max-w-4xl'>
          <p className='text-secondary font-semibold text-lg italic mt-8'>
            Sehr geehrte Mitglieder des Landtags BW, sehr geehrte Mitglieder der
            demokratischen Parteien, sehr geehrte Entscheidungsträger:innen der
            (zukünftigen) Landesregierung,
          </p>

          <p>
            die Petition „Neue Lernkultur – Jetzt!" will das Recht auf
            Wohlergehen von Kindern und Jugendlichen und die zukünftige
            Entwicklung unserer Gesellschaft fördern und stärken.
          </p>
          <p>
            „Schule" im Sinne von Aristoteles meint einen Ort der Muße, der
            Gemeinschaft, Freiheit von Zwang und Hektik, sowie der Möglichkeit
            zur Besinnung und Selbstbestimmung. Schule soll ein Ort sein, an dem
            Bildungsprozesse für alle Kinder durch Zeit und Ruhe gefördert
            werden.
          </p>
          <p>
            Bitte machen Sie sich tatkräftig und kompromissbereit auf den Weg,
            um eine Bildungsreform anzugehen, die den Namen verdient und das
            Klein-Klein der letzten Jahre hinter sich lässt. Bitte leiten Sie
            zeitnah eine gemeinsame und überparteiliche Bildungsreform ein.
            Grundlage dafür ist die Vereinbarung eines gemeinsamen
            Bildungsbegriffes, der mit wissenschaftlicher Expertise zum Wohle
            aller Kinder führt. Eine große Bildungsreform erfordert einen
            richtungsweisenden Konsens über Legislaturperioden hinaus.
          </p>
          <p>
            Denken Sie an die umgreifenden technologischen, gesellschaftlichen
            und kulturellen Änderungen der letzten Jahre - rasante und komplexe
            Herausforderungen für die unsere Schulen nicht gerüstet sind.
            Derzeit weist unser Bildungssystem zunehmende Dysfunktionalität auf
            und muss, um unseren Kindern und unserer Demokratie gerecht zu
            werden, dringend zielführend aufgestellt werden.
          </p>
          <p>
            Spaltung, Demokratieverlust und Verrohung sind die Folgen von
            strukturellen Ursachen. Einen resultierenden gesellschaftlichen
            Niedergang können wir gemeinsam durch eine ganzheitliche Bildung und
            förderliche Lernkultur stoppen.
          </p>
          <p>
            Dass es anders gehen kann und muss, zeigen wir auf
            neue-lernkultur-jetzt.de. Dort finden Sie gebündelte Prämissen aus
            der aktuellen Lernforschung, sowie erprobte schulpraktische Lösungen
            und das Beispiel einer überaus erfolgreichen Bildungsreform.
            Grundlage für eine prosperierende, dem Gemeinsinn verpflichtete,
            resiliente Gesellschaft sind unsere gut ausgebildeten Kinder.
          </p>

          <div className='border-l-4 border-accent pl-6 my-10'>
            <p className='text-xl font-bold text-primary mb-0'>
              Zukunft! gestalten! – Jetzt!
            </p>
          </div>

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

          <p className='font-semibold text-lg mt-8'>
            Wir fordern die Veränderung unserer Schulen vom Ort des Lehrens zum
            Ort des Lernens in vier Bereichen:
          </p>

          <div className='space-y-10 mt-8'>
            <div>
              <h3 className='text-secondary'>1. Haltungsänderung</h3>
              <p>
                Das Wohlergehen der Kinder und Jugendlichen muss in den
                Mittelpunkt aller schulischen Bemühungen gestellt werden. Allen
                Kindern wird von Anfang an Potentialentfaltung und
                Chancengerechtigkeit zugestanden. Sie wachsen als zukünftige
                Gesellschaft lebendig zusammen auf. Die Beteiligten im gesamten
                Bildungsbereich üben eine Kultur des gegenseitigen Zuhörens und
                der Zusammenarbeit. Damit Veränderungsprozesse in eine gesunde
                Entwicklung kommen können.
              </p>
              <p className='font-semibold'>Konkret:</p>
              <ul className='space-y-2'>
                <li>
                  Überparteiliche Einigung auf einen gemeinsamen Bildungsbegriff
                  und darauffolgende konzeptorientierte Schulpolitik, im Sinne
                  der auf www.neue-lernkultur-jetzt dargestellten Zielsetzungen.
                  Also eine Neuausrichtung der Grundhaltung, sowie der
                  Lehrkräfteausbildung und der Bildungspläne, in der Kinder an
                  vorderster Stelle stehen und jedes sein Potential in
                  Gemeinschaft entwickeln kann.
                </li>
                <li>
                  Ressourcen müssen in die Hand der Schulen verlagert werden,
                  damit benötigte Hilfen direkt und zeitnah alle Kinder
                  erreichen.
                </li>
                <li>
                  In jeder Lerngruppe braucht es Zeit, sich gegenseitig
                  zuzuhören. Dafür ist jede Woche eine Pädagog:innen-Teamsitzung
                  notwendig, sowie eine Stunde Lerngruppenrat (Klassenrat) für
                  existenzielle Themen, Peer-Konflikte, Gemeinschaft und
                  Persönlichkeitsentwicklung.
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-secondary'>
                2. Berücksichtigung von Expert:innenwissen
              </h3>
              <p>
                Die Zeiten, in denen Lehrkräfte, Schulbuch und Frontalunterricht
                die zentrale Rolle spielten, sind nicht mehr zukunftsfähig.
                Neben den Pädagog:innen gewinnen Lernhelfer:innen, Peergroups,
                das Internet, Künstliche Intelligenz, digitalisierte
                Lernmaterialien, Erklärvideos, Apps und außerschulische Lernorte
                zunehmend an Bedeutung. Im Zentrum steht heute das Lernen – in
                Gemeinschaft, individuell (zieldifferenziert), selbstwirksam und
                strategieorientiert.
              </p>
              <p className='font-semibold'>Konkret:</p>
              <ul className='space-y-2'>
                <li>
                  Eine Begutachtung der Organisationsstruktur und Arbeitsweise
                  des Kultusministeriums im schulischen Bildungsbereich, durch
                  ein externes Beratungsunternehmen mit dem Ziel, wirksamere
                  Arbeitsergebnisse zu ermöglichen.
                </li>
                <li>
                  Stetige Schulentwicklung für eine neue Lernkultur durch ein
                  strukturiert verankertes Einbringen von Expert:innenwissen und
                  der Erfahrungen innovativer Schulen (siehe Vorbild
                  Neuseeland).
                </li>
                <li>
                  Eine Enquete-Kommission (Beteiligungsgremium unter Einbezug
                  von Betroffenen und Praktiker:innen) zur Vereinbarung des
                  gemeinsamen Bildungsbegriffs und zur Begleitung der zeitnahen
                  Umsetzung (siehe Neuseeland).
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-secondary'>3. Lernen</h3>
              <p>
                Lernen benötigt frei verfügbare Zeit statt starrer Taktung,
                sowie ein verlässliches, pädagogisches Verantwortungsteam für
                jede Lerngruppe bzw. Klasse von Anfang an. Stundenpläne und
                klassischer Unterrichtsablauf behindern häufig individuelle
                Lernprozesse und Feedbackkultur. Verlässliche Beziehungen und
                Raum für Entwicklung bilden dafür die Grundlage. Auch die
                Arbeitszeit der Pädagog:innen lässt sich nicht mehr sinnvoll in
                klassischen Deputaten messen, sondern muss an neuen Aufgaben und
                Rollen ausgerichtet werden. Für diese Rahmenbedingungen fordern
                wir Freiräume für alle Schularten. Damit sie sich auf den Weg
                machen können, Kinder beim Wachsen zu begleiten und
                kindgerechtes Lernen in den Mittelpunkt zu stellen.
              </p>
              <p className='font-semibold'>Konkret:</p>
              <ul className='space-y-2'>
                <li>
                  Freiräumeprogramm für alle Schularten (siehe Niedersachsen)
                </li>
                <li>
                  Generell mehr Personal und die Einrichtung von
                  Verantwortungsteams für alle Lerngruppen (Schulklassen)
                  beginnend in den Primarschulen.
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-secondary'>4. Raum</h3>
              <p>
                Lernräume sind bewusst gestaltete Umgebungen, die das Lernen
                unterstützen und fördern. Sie können sowohl physisch als auch
                digital sein. Um individuelles, selbstbestimmtes und
                gemeinschaftliches Lernen zu ermöglichen, braucht es eine
                Vielfalt an Räumen, sowie die Freiheit, diese entsprechend der
                eigenen Bedürfnisse zu nutzen. Wir fordern eine umfassende
                Öffnung aller Schulen, damit Kinder und Jugendliche reale und
                sinnliche Erfahrungen im Stadtteil (Handwerk, Kultur, Vereine)
                und in der Natur machen können.
              </p>
              <p className='font-semibold'>
                Für diese lebendigen Lernorte fordern wir…
              </p>
              <ul className='space-y-2'>
                <li>… ein gelebtes, gemeinsames Bildungsverständnis aller.</li>
                <li>… langfristige, parteiübergreifende Zusammenarbeit.</li>
                <li>… vielfältige Vernetzung von Schulen und Kommunen.</li>
                <li>… eine Vielfalt und Öffnung von Lernräumen.</li>
                <li>
                  … eine signifikante Erhöhung des Bildungsbudgets (Vergleich:
                  Deutschland aktuell 4,4% des BIP, Norwegen und Großbritannien
                  6%, Quelle BZ 10.9.25)
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-text/15 mt-12 pt-8'>
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
              „www.neue-lernkultur-jetzt.de" zeigen, wie dies konkret vor Ort im
              schulischen Alltag umgesetzt werden kann. Jede Schule soll dabei
              gefördert werden, Schritte in diese Richtung gehen zu können.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-nlj-green'>
        <div className='innerBox max-w-4xl text-center'>
          <h2 className='text-neutral'>
            Helft mit, dass die Schule wieder zukunftsfähig wird!
          </h2>
          <p className='text-neutral/90 text-lg'>
            Helft mit Eurer Unterschrift, dass diese Punkte bei den
            Entscheidungsträger:innen Gewicht und danach Eingang in den
            Koalitionsvertrag und das Regierungsprogramm BW 2026 finden.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
            <Button
              text='Landtagspetition ansehen'
              href='https://petitionen.landtag-bw.de/Petitionen/Details/46215aff-a7ad-4de3-8b6f-0cc2bce51e0c'
              bgColor='bg-accent'
              textColor='text-primary'
              icon={faFileSignature}
              newTab
            />
            <Button
              text='Folgepetition auf Innn.it unterschreiben'
              href='https://innn.it/schule-mit-zukunft-lernkultur'
              bgColor='bg-neutral'
              textColor='text-primary'
              icon={faFileSignature}
              newTab
            />
          </div>

          <p className='text-neutral mt-10 mb-1'>Mit herzlichen Grüßen</p>
          <p className='text-neutral/80 italic'>
            Alle Initiator:innen und Unterzeichner:innen der BW-Initiative
            <br />
            Neue Lernkultur – Jetzt!
            <br />
            BW-Petition – Schule mit Zukunft für alle Kinder!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
