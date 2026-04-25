import React from 'react';
import Link from 'next/link';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/button/Button';

const Page = () => {
  return (
    <div>
      <section className='bg-secondary'>
        <div className='innerBox py-16 md:py-24 text-center'>
          <h1 className='text-neutral mb-2'>Schule mit Zukunft - Jetzt!</h1>
          <h2 className='text-accent'>Neue Lernkultur in allen Schularten.</h2>
        </div>
      </section>

      <section>
        <div className='innerBox max-w-4xl'>
          <p className='mt-8'>
            Wir fordern von unserer neuen Landesregierung in Baden-Württemberg,
            dass die Missstände nicht weiter unter den Tisch gekehrt werden.
            Dieses Schulsystem presst alle Beteiligten in eng getaktete
            Stundenplanabläufe, steckt in überholten Vorstellungen und leidet an
            Personal- und Raummangel. Es produziert zu viele Leidtragende und
            leistet bei Weitem nicht, was möglich wäre.
          </p>

          <div className='border-l-4 border-accent pl-6 my-10'>
            <p className='text-xl font-bold text-primary mb-0'>
              Wir brauchen Schulen mit Zukunft!
            </p>
            <p className='text-lg'>
              Wir erwarten, dass unsere Kinder und Jugendlichen in ihren Schulen
              erfolgreich für ihr Leben lernen können.
            </p>
          </div>

          <h3 className='text-secondary'>
            Mitmachen - nicht weiter zuschauen!
          </h3>
          <p>
            Wir möchten Menschen auf allen beteiligten Ebenen – Familien -
            Kommunen - Schulen &amp; Schulaufsicht - Jugendliche - Handwerk
            &amp; Wirtschaft – Politik - ermutigen, konkrete Schritte für den
            Umbau hin zu Schulen mit zeitgemäßer Lernkultur zu gehen.
          </p>
          <p>
            Mit landesweiter, gemeinsamer Power kann dieser Bildungswandel
            erreicht werden. Unterschreibe bitte die Petition{' '}
            <Link
              href='https://innn.it/schule-mit-zukunft-lernkultur'
              target='_blank'
              className='text-secondary underline hover:brightness-110'
            >
              https://innn.it/schule-mit-zukunft-lernkultur
            </Link>{' '}
            und erzähle Deinen Freund:innen und anderen Betroffenen davon.
          </p>

          <p className='font-semibold text-lg mt-10'>
            Zwei Dinge wollen wir gemeinsam erreichen:
          </p>
          <ol className='list-decimal pl-6 space-y-3 mt-4'>
            <li className='font-semibold'>
              Gesellschaftlicher Fokus auf Kinder, Jugendliche und zeitgemäße
              Bildung
            </li>
            <li className='font-semibold'>
              Überparteiliche Einigung auf einen zukunftsfähigen Bildungsbegriff
              und wirksame Maßnahmen, die in allen Schularten, bei jedem jungen
              Menschen ankommen.
            </li>
          </ol>

          <div className='border-t border-text/15 mt-12 pt-8'>
            <h3 className='text-secondary'>
              Das Rad muss nicht neu erfunden werden!
            </h3>
            <p>
              Es geht dabei nicht um Visionen, sondern um die Anerkennung der
              Praxisarbeit vieler innovativen Schulen. Auch die Bildungspolitik
              anderer Länder dient als Vorbild, wie z.B. Neuseeland, das bereits
              vor Jahren eine erfolgreiche Neuausrichtung ihrer
              Bildungslandschaft geschafft hat.
            </p>

            <h3 className='text-secondary'>
              Informiere Dich auf dieser Webseite
            </h3>
            <p>
              Was brauchen Kinder wirklich, damit sie in unseren staatlichen
              Schulen aufbauend zusammen lernen können?
              <br />
              Welche Schulen beweisen, dass das möglich und bereits lang gelebte
              Praxis ist?
              <br />
              Alles zur Lösung liegt bereit, es braucht nun viele Menschen vor
              Ort, die sich für Kinder und ihr Gedeihen einsetzen. Bist Du
              dabei?
            </p>
          </div>
        </div>
      </section>

      <section className='bg-nlj-green'>
        <div className='innerBox max-w-4xl text-center'>
          <h2 className='text-neutral'>Unterschreibe jetzt die Petition!</h2>
          <p className='text-neutral/90 text-lg max-w-3xl mx-auto'>
            Sie ist die Chance unserer neuen Landesregierung zu zeigen, dass die
            Bevölkerung in BW nicht weiter zusieht, wie Lernfreude und
            Zukunftschancen ihrer Kinder und Jugendlichen verloren gehen.
            Erzähle Deinen Freund:innen und anderen Betroffenen davon. Damit
            alle Kinder und Jugendliche endlich eine Lobby bekommen, die Wirkung
            erzeugt!
          </p>

          <div className='mt-8'>
            <Button
              text='Innn.it-Petition jetzt unterschreiben'
              href='https://innn.it/schule-mit-zukunft-lernkultur'
              bgColor='bg-accent'
              textColor='text-primary'
              icon={faFileSignature}
              newTab
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
