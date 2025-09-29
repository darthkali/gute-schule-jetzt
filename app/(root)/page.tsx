import Image from 'next/image';
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaXTwitter,
  FaPen,
  FaPeopleGroup,
} from 'react-icons/fa6';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from '@/app/components/Card';
import InitiativeMapClient from '@/app/components/Map';
import Button from '@/app/components/Button';
import MastodonShareButton from '@/app/components/MastodonShareButton';
import Highlight from '@/app/components/Highlight';
import TextImageCard from '@/app/components/TextImageCard';

export default function HomePage() {
  const shareUrl = encodeURIComponent('https://edunite-web.vercel.app/');
  const text = encodeURIComponent('Schau dir diese Seite an:');

  const iconBoxStyle =
    'bg-[color:var(--color-neutral)] w-14 h-14 flex items-center justify-center rounded-xl shadow hover:scale-110 transition-transform';

  function ListElement(text: string) {
    return (
      <div className='flex items-center space-x-2'>
        <div className='w-2 h-2 bg-[color:var(--color-primary)] rounded-full'></div>
        <span className='text-sm'>{text}</span>
      </div>
    );
  }

  return (
    <div>
      {/*Hero*/}
      <section className={'bg-[color:var(--color-secondary)]/85'}>
        <div
          className={
            'innerBox relative overflow-hidden min-h-[700px] bg-[color:var(--color-background)]'
          }
        >
          {/* Hintergrundbild */}
          <div className='absolute inset-0 bottom-0 z-0'>
            <Image
              src='/images/abstract-1264071_1920.png'
              alt='Hero Background'
              fill
              className='object-cover object-bottom pointer-events-none'
              priority
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=='
            />
          </div>
          {/* Blaue Overlay-Ebene */}
          {/*<div className="absolute overflow-hidden inset-0 left-0 h-full w-full  z-10 "/>*/}
          <div className='absolute overflow-hidden inset-0 left-0 h-full w-full bg-[color:var(--color-secondary)]/85 z-10 ' />

          {/* Inhalt */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10  px-6  sm:py-8 md:py-10 text-white'>
            <div className={'sm:col-span-3'}>
              <h1 className={'mt-0'}>Gute Schule - Jetzt!</h1>

              <p>
                Wir brauchen eine Schule mit Zukunft! Wir schicken unser bestes
                Potential - unsere Kinder und Jugendlichen - täglich in Schulen
                und erwarten, dass sie dort für ihr Leben lernen. Aber dieses
                Schulsystem presst alle Beteiligten in eng getaktete
                Stundenplanabläufe, die überholten Vorstellungen, sowie der Not
                an Personal und Raum geschuldet sind. Unser Schulsystem
                produziert zu viele Leidtragende und leistet bei Weitem nicht,
                was möglich wäre.
              </p>
              <p>
                Wir brauchen eine Schule mit Zukunft, in der Kinder aufblühen!
                Mit landesweiter Power können wir das erreichen.
              </p>

              <div className='flex flex-col space-y-6'>
                {/* Block 1 */}
                <div className='flex items-center space-x-4'>
                  <FaPen className='min-w-[32px] h-8 w-8 text-neutral' />
                  <p className='text-left'>
                    Darum bereiten wir zur Landtagswahl 2026 eine{' '}
                    <Highlight>
                      Petition für eine Neuausrichtung des Schulsystems
                    </Highlight>{' '}
                    in Ba-Wü vor. Der Entwurf des Petitionstextes steht hier.
                    Die Petition kann ab dem 12. Januar 2026 in einem Zeitraum
                    von 6 Wochen unterschrieben werden. Bis dahin gilt es weiter{' '}
                    <Highlight>Netzwerke in ganz BW aufzubauen</Highlight>,
                    damit weit mehr als die erforderlichen 10.000 Unterschriften
                    erreicht werden. Wirst Du Teil dieses Netzwerkes und
                    erweiterst seine Reichweite? Wir freuen uns über Anregungen,
                    sachliche Beiträge und Zusammenarbeit.
                  </p>
                </div>

                {/* Block 2 */}
                <div className='flex items-center space-x-4'>
                  <FaPeopleGroup className='min-w-[32px] h-8 w-8 text-neutral' />
                  <p className='text-left'>
                    Wir möchten Menschen auf allen Ebenen – Eltern – Kommunen –
                    Schulen & Schulaufsicht – Jugendliche – Politik ermutigen,
                    konkrete Schritte in den Umbau hin zu Schulen mit Zukunft zu
                    gehen.
                  </p>
                </div>
              </div>

              <p>
                Dazu haben wir für die verschiedenen Betroffenen und
                Interessierten wesentliches Wissen zusammengestellt. Es wird
                gezeigt, was nötig ist, damit alle Kinder in unseren staatlichen
                Schulen aufbauend zusammen lernen können. Und wir stellen
                Schulen vor, die beweisen, dass das möglich und dort lang
                gelebte Praxis ist. Alles zur Lösung liegt bereit, es braucht
                nun Menschen vor Ort, die sich für Kinder und ihr Gedeihen
                einsetzen. Bist Du dabei?
              </p>

              <div className='flex gap-5 sm:gap-10 flex-wrap mt-10'>
                <Button
                  text='Petition an den Landtag unterzeichnen'
                  href='/petition'
                  bgColor='bg-[color:var(--color-accent)]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*HERAUSFORDERUNGEN*/}
      <section>
        <div className={'innerBox'}>
          <h1
            id='herausforderungen'
            className={
              'text-center text-[color:var(--color-text)] scroll-mt-20 lg:scroll-mt-32'
            }
          >
            Welche Herausforderungen sehen wir?
          </h1>
          <div className='flex flex-col lg:flex-row gap-5 md:gap-10'>
            <TextImageCard
              overlayText={'VERÄNDERTE WELT'}
              imageSrc='/images/solar-4867218_1920.jpg'
              heading={
                'Eine sich rasant veränderte Welt braucht auch eine veränderte Schule'
              }
              description={
                'Es ist wichtig zu verstehen, warum wir anderes Lernen als früher brauchen. Unser Fokus liegt auf dem Mehrwert für alle Kinder, ihre Familien und unsere Gesellschaft. Wir setzen auf partizipative Konzepte, bei denen alle Beteiligten – von Schüler*innen bis hin zu Lehrkräften und Schulträgern – aktiv in die Gestaltung der Lernumgebung einbezogen werden. Durch diese gemeinsame Entwicklung schaffen die Beteiligten Umgebungen, die den Bedürfnissen aller gerecht werden und Lernprozesse positiv beeinflussen. Wir sind alle Lernende, die Transformationskompetenz und zukunftsfähige Bildung brauchen.'
              }
              href={'/veraenderte-welt'}
            />

            <TextImageCard
              overlayText={'DYSFUNKTIONALES SCHULSYSTEM'}
              imageSrc='/images/piano-6315809_1920.jpg'
              heading={
                'Dysfunktionales Schulsystem mit zu vielen Verlierern. Probleme haben immer Ursachen - aus ihrer Analyse entstehen die Lösungsansätze'
              }
              description={
                'Wir alle spüren, dass es so nicht weitergehen kann. Unser Schulsystem produziert zu viele Verlierer. Bildung ist aber eine wesentliche Grundlage für unsere Gesellschaft und ihre Erneuerung. Das Wohlergehen von Familien, unserer Demokratie, unserer Wirtschaft und unserer Zukunft hängt davon ab, dass wir unsere Kinder bestmöglich bilden. Schule ist hier ein Instrument der Gesellschaft. Wir werden den Zusammenhalt unserer Gesellschaft und die Zuversicht weiter verlieren, wenn wir nicht gemeinsam in eine Transformation kommen.'
              }
              href={'/dysfunktionales-schulsystem'}
            />
          </div>
          <h2
            id='kinder'
            className={
              'text-center text-[color:var(--color-text)] mt-10 scroll-mt-20 lg:scroll-mt-37'
            }
          >
            Was brauchen Kinder?
          </h2>
          <p>
            Wir wissen: Nur in einer gesunden Umgebung kann aufbauendes Lernen
            stattfinden und das volle Potenzial eines Menschen entfaltet werden.
            Die Voraussetzung für aufbauendes Lernen ist die Beachtung der
            beiden Grundbedürfnisse nach Verbundenheit und Autonomie. .
          </p>
          <div className='flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5gap-x-5 gap-y-5 mt-5'>
            <Card
              imageSrc='/images/artificial-intelligence-3382521_1920.jpg'
              title='Erkenntnisse aus der Hirnforschung'
              href={'/was-brauchen-kinder/hirnforschung'}
            />

            <Card
              imageSrc='/images/classroom-1660223_1920.jpg'
              title='Überholtes Schulkonzept'
              href={'/was-brauchen-kinder/ueberholtes-schulkonzept'}
            />

            <Card
              imageSrc='/images/evolution-4107273_1920.jpg'
              title='Vision für alle Schularten'
              href={'/was-brauchen-kinder/vision-fuer-alle-schularten'}
            />
          </div>
          <blockquote>
            Die Transformation, die Verwandlung also, sie besteht darin, dass
            sich die Menschen in diesem Land endlich an den Kopf greifen, um zu
            verstehen, was ihr wichtigstes Kapital ist:
            <br />
            Denken, Problemlösungen oder, wie wir es auch nennen: Wissensarbeit.
            Doch Deutschland verpennt es seit Jahren und wurstelt weiter in der
            Tretmühle. Die Idee, dass mehr Routinearbeit zu mehr
            wirtschaftlichem Erfolg führt, ist auch ökonomisch aus der Zeit
            gefallen. Alle Kraft wäre der Frage zu widmen, wie aus unserem Land
            wieder Ideen und Initiativen kommen könnten.
            <br /> <br />
            Eine Welt, in der man sich nicht am Freitag aufs Wochenende freut,
            weil die blöde Last vorbei ist, und am Sonntagnachmittag depressiv
            wird, weil der nächste Werktag droht. Eine Welt, in der wir uns
            selber gehören, und gerade deshalb unser Bestes geben, um ein paar
            der verdammt vielen Probleme zu lösen, die wir haben.
            <cite>
              gekürzt, Wolf Lotter, https://www.wolflotter.com <br /> siehe:{' '}
              <Link
                href={
                  'https://www.zeit.de/2025/29/regression-demokratie-staatliche-steuerung-westen-liberale-demokratie'
                }
                target={'_blank'}
                className={'hover:underline'}
              >
                &#34;Die Demokratie macht schlapp&#34; (Die Zeit Nr 29/ 2025 )
              </Link>
            </cite>
          </blockquote>
        </div>
      </section>

      {/*LOESUNGEN*/}
      <section className={'bg-[color:var(--color-secondary)]'}>
        <div className={'innerBox'}>
          <h1
            id='loesungen'
            className={
              'text-center text-[color:var(--color-neutral)] scroll-mt-20 lg:scroll-mt-32'
            }
          >
            Wie sehen bereits umgesetzte Visionen und Lösungen aus?
          </h1>
          <p className={'text-[color:var(--color-neutral)] text-center'}>
            Diese beiden deutschen Schulen zeigen lang erprobte Lösungen, wie
            Kindern der Weg zum Lernen wirklich frei gemacht wird. Jede Schule
            hat ihren ganz eigenen Charakter, aber das Lernen und die Kinder
            stehen im Mittelpunkt! Neuseeland ist bereits vor Jahrzehnten eine
            umwälzende Schulreform gelungen.
          </p>

          <div className='flex flex-col lg:flex-row gap-5 md:gap-10 mt-5 mb-15'>
            <Link
              href={'/primus-schule-muenster'}
              className='bg-[color:var(--color-neutral)] group w-full max-w-full flex-1 mx-auto rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={'/images/deutscher-bundestag-4965585_1920.jpg'}
                  alt={'Alemannenschule Klassenzimmer'}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-[color:var(--color-primary)]/80'></div>

                {/* Overlay Text */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h2
                    className={`text-[color:var(--color-neutral)] text-center text-lg sm:text-xl md:text-2xl font-semibold px-4 leading-tight`}
                  >
                    {'Primus Schule Münster Berg Fidel'}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex justify-center mb-3'>
                  <span className='bg-primary text-accent text-sm font-medium px-3 py-1 rounded-full'>
                    Klassen 1-10
                  </span>
                </div>

                <div className='space-y-2 mb-4'>
                  <div className='space-y-2 mb-4'>
                    <div className='space-y-2 mb-4'>
                      {ListElement('Vorbild für Grundschulen')}
                      {ListElement('Vorbild für längeres gemeinsames Lernen')}
                      {ListElement('Vorbild für Inklusion')}
                    </div>
                  </div>
                </div>

                <div className='text-[color:var(--color-primary)] text-center italic border-l-4 border-[color:var(--color-accent)] '>
                  Jede Klasse hat ein Verantwortungsteam- Vorbild für
                  Grundschulen
                </div>

                <div className='mt-auto pt-4'>
                  <div className='text-right text-sm text-[color:var(--color-secondary)] flex items-center justify-end gap-2 font-medium'>
                    <span>Mehr erfahren</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href={'/alemannenschule'}
              className='bg-[color:var(--color-neutral)] group w-full max-w-full flex-1 mx-auto rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={'/images/deutscher-bundestag-4965585_1920.jpg'}
                  alt={'Alemannenschule Klassenzimmer'}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-[color:var(--color-primary)]/80'></div>

                {/* Overlay Text */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h2
                    className={`text-[color:var(--color-neutral)] text-center text-lg sm:text-xl md:text-2xl font-semibold px-4 leading-tight`}
                  >
                    {'Alemannenschule Wutöschingen'}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex justify-center mb-3'>
                  <span className='bg-primary text-accent text-sm font-medium px-3 py-1 rounded-full'>
                    Klassen 1-13
                  </span>
                </div>

                <div className='space-y-2 mb-4'>
                  <div className='space-y-2 mb-4'>
                    {ListElement('Vorbild für weiterführende Schulen')}
                    {ListElement('Vorbild für Selbstorganisiertes Lernen')}
                  </div>
                </div>

                <div className='text-[color:var(--color-primary)] text-center italic border-l-4 border-[color:var(--color-accent)] '>
                  Ich bin selbstwirksam - ich kann die Welt verändern! Statt
                  schulgerechte Kinder eine kindgerechte Schule!
                </div>

                <div className='mt-auto pt-4'>
                  <div className='text-right text-sm text-[color:var(--color-secondary)] flex items-center justify-end gap-2 font-medium'>
                    <span>Mehr erfahren</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href={'/neuseeland'}
              className='bg-[color:var(--color-neutral)] group w-full max-w-full flex-1 mx-auto rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={'/images/beach-583172_1920.jpg'}
                  alt={'Vorbildliche Schulreform in Neuseeland'}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-[color:var(--color-primary)]/80'></div>

                {/* Overlay Text */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h2
                    className={`text-[color:var(--color-neutral)] text-center text-lg sm:text-xl md:text-2xl font-semibold px-4 leading-tight`}
                  >
                    {'Vorbildliche Schulreform in Neuseeland'}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex justify-center mb-3'></div>

                <div className='space-y-2 mb-4'>
                  {ListElement('Großer Wurf in 14 Monaten gelungen')}
                  {ListElement('Selbstverwaltete Schulen')}
                  {ListElement(
                    'Glückliche Kinder, glückliche Eltern, geschätzte Lehrkräfte'
                  )}
                  {ListElement('Herausragender Bildungserfolg')}
                </div>

                <div className='mt-auto pt-4'>
                  <div className='text-right text-sm text-[color:var(--color-secondary)] flex items-center justify-end gap-2 font-medium'>
                    <span>Mehr erfahren</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <h2 className={'text-center text-[color:var(--color-accent)]'}>
            Landkarte weiterer beispielgebender Schulen und
            Bildungsinnovator:innen
          </h2>
          <p className={'text-[color:var(--color-neutral)] text-center'}>
            Viele Schulen haben sich bereits auf den Weg gemacht, hier stellen
            wir ihre wesentlichen Punkte vor und geben Zugriff auf vertiefende
            Informationen.
          </p>
          <InitiativeMapClient />
        </div>
      </section>

      {/*HERAUSFORDERUNGEN*/}
      <section>
        <div className={'innerBox'}>
          <h1
            id='aktiv-werden'
            className={
              'text-center text-[color:var(--color-text)] scroll-mt-20 lg:scroll-mt-32'
            }
          >
            Wo kann Veränderung direkt ansetzen?
          </h1>
          <h2 className={'text-center text-[color:var(--color-text)]'}>
            Wie kann ich dazu beitragen oder aktiv werden?
          </h2>
          <p className={'text-[color:var(--color-text)] text-center'}>
            Für einen Bildungswandel sind alle Ebenen gefordert aufzubrechen. Es
            braucht Bewusstsein, neues Denken und eine veränderte Haltung.
          </p>

          <div className='flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5'>
            <Card
              imageSrc='/images/hoch/boy-8474750_1920.jpg'
              title='Kinder und Jugendliche'
              href={'/schuelerinnen-und-schueler'}
              overlayColor={'bg-[color:var(--color-secondary)]/80'}
            />
            <Card
              imageSrc='/images/family-6886803_1920.jpg'
              title='Eltern und Familien'
              href={'/eltern-und-familien'}
              overlayColor={'bg-[color:var(--color-secondary)]/80'}
            />
            <Card
              imageSrc='/images/hoch/woodburn-hall-1057364_1920.jpg'
              title='Schulen und Schulleitungen'
              href={'/schulen-und-schulleitungen'}
              overlayColor={'bg-[color:var(--color-secondary)]/80'}
            />
          </div>

          <div className='flex flex-wrap justify-center gap-x-5 md:gap-x-15 gap-y-5 mt-10'>
            <Card
              imageSrc='/images/deutscher-bundestag-4965585_1920.jpg'
              title='Politik und Bürger:innen'
              href={'/politik-und-buerger'}
              overlayColor={'bg-[color:var(--color-text)]/80'}
            />
            <Card
              imageSrc='/images/money-2696219_1920.jpg'
              title='Handwerk und Wirtschaft'
              href={'/wirtschaft-und-handwerk'}
              overlayColor={'bg-[color:var(--color-text)]/80'}
            />
            <Card
              imageSrc='/images/hoch/street-coffee-444922_1920.jpg'
              title='Kommunen - Schulträger und Vereine'
              href={'/kommunen'}
              overlayColor={'bg-[color:var(--color-text)]/80'}
            />
          </div>
        </div>
      </section>

      <section className={'bg-[color:var(--color-secondary)]'}>
        <div className={'innerBox '}>
          <div className='flex flex-wrap sm:flex-nowrap gap-4 max-w-250 mx-auto justify-center items-start '>
            <div className='flex-1'>
              <Button
                text='Mitwirken?'
                href='/kontakt'
                bgColor='bg-[color:var(--color-neutral)]'
                textColor='text-[color:var(--color-text)]'
              />
              <p className={'text-[color:var(--color-neutral)]'}>
                Hallo,
                <br />
                hast du Lust selbst aktiv zu werden?
                <br />
                Wir freuen uns über Ideen, Menschen im Hintergrund und
                Vordergrund und …. Schau mal rein!
              </p>
            </div>

            <div className='flex-1'>
              <Button
                text='Petition an den Landtag unterzeichnen'
                href='/petition'
                bgColor='bg-[color:var(--color-accent)]'
              />
              <p className={'text-[color:var(--color-neutral)]'}>
                Danke, dass du bis hier runter gescrollt hast.
                <br />
                Hier kommst du zur Petition, die die Bildungswende in BW (und
                irgendwann auch bildungspolitisch für ganz Deutschland) in Fahrt
                bringen soll. Wir danken dir für deine Unterstützung! Bei
                Fragen, Ideen und Anregungen schreibe uns gerne an. (LINK zum
                Kontaktformular).
              </p>
            </div>
          </div>

          <p className={'text-center text-[color:var(--color-accent)]'}>
            Teile unsere Seite und mache andere darauf aufmerksam
          </p>

          <div className='flex flex-wrap gap-4 justify-center items-center'>
            <a
              key='email'
              href={`mailto:?subject=Empfehlung&body=${text}%0A${shareUrl}`}
              target='_blank'
              rel='noopener noreferrer'
              className={iconBoxStyle}
              aria-label='Teilen per E-Mail'
            >
              <FaEnvelope size={24} />
            </a>

            <MastodonShareButton
              key='mastodon'
              text={text}
              shareUrl={shareUrl}
              className={iconBoxStyle}
            />

            <a
              key='linkedin'
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target='_blank'
              rel='noopener noreferrer'
              className={iconBoxStyle}
              aria-label='Teilen auf LinkedIn'
            >
              <FaLinkedin size={24} className='text-[#0077B5]' />
            </a>

            <a
              key='whatsapp'
              href={`https://wa.me/?text=${text}%20${shareUrl}`}
              target='_blank'
              rel='noopener noreferrer'
              className={iconBoxStyle}
              aria-label='Teilen auf WhatsApp'
            >
              <FaWhatsapp size={24} className='text-[#25D366]' />
            </a>

            <a
              key='facebook'
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target='_blank'
              rel='noopener noreferrer'
              className={iconBoxStyle}
              aria-label='Teilen auf Facebook'
            >
              <FaFacebook size={24} className='text-[#1877F2]' />
            </a>

            <a
              key='twitter'
              href={`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`}
              target='_blank'
              rel='noopener noreferrer'
              className={iconBoxStyle}
              aria-label='Teilen auf X (Twitter)'
            >
              <FaXTwitter size={24} className='text-black' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
