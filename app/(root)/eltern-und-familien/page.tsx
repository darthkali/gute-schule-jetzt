import React from 'react';
import ImageTextSection from '@/app/components/ImageTextComponent';
import Link from 'next/link';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Eltern und Familien</h1>
        <ImageTextSection
          imageSrc='/images/hoch/family-5127719_1920.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='left'
        >
          <p className={'font-semibold'}>
            Nicht Eure Kinder sind falsch, sondern das System braucht
            Veränderung!
          </p>
          <p>
            Sehr geehrte Eltern und Erziehungsberechtigte,<br/>
            wir alle wissen, dass unser
            {' '}<Link href={'/dysfunktionales-schulsystem'} className='underline hover:no-underline'>Bildungssystem</Link>{' '}
            nicht so läuft, wie es sollte. Aber es ändert sich seit langer Zeit nur wenig. Die Leidtragenden sind unsere Kinder
            und ihre Familien.
            <br/>

            Es gibt aber Schulen, die aufgebrochen sind und sich zu
             {' '}<Link href={'/loesungen'} className='underline hover:no-underline'>Teamschulen</Link>,{' '}
            sowie
            {/* Diller hat kein gültiges Zertifikat !?*/}
             {' '}<Link href={'https://www.diler.tube/w/iSSGa9mZVmSncngQt4h64d/'} className='underline hover:no-underline'>Chancenorten</Link>{' '}
            verändert haben. Sie erhalten Dankesbriefe, wie zum Beispiel:<br/>
            “Mein Kind ist ganz verändert, es kommt zufrieden von der Schule heim, komplizierte Lebensverhältnisse haben sich für
            uns sehr vereinfacht…“<br/>
            Es gibt Schulen, da geht es auffallend freundlich und ruhig zu. In der Folge sind auch die Leistungen der Schüler:innen
            an diesen Schulen im Schnitt besser.
            </p>
            <p>
            Wir brauchen flächendeckend im ganzen Land aus
            {' '}<Link href={'/dysfunktionales-schulsystem/'} className='underline hover:no-underline'>vielen Gründen</Link>,{' '}
            wesentliche Verbesserungen in unseren Schulen, so dass sie zu aufbauenden Kraftorten für alle Kinder werden.<br/>
            Ein Schulkind
            {' '}<Link href={'/was-brauchen-kinder/'} className='underline hover:no-underline'>braucht</Link>,{' '}
            drei Dinge: Aufgaben, an denen es wachsen kann, Vorbilder, an denen es sich orientieren kann
            und es braucht Gemeinschaften, in denen es sich aufgehoben fühlt.<br/>
            Wenn Sie ebenfalls zu der Überzeugung kommen, dass sich in unserem Schulsystem endlich etwas Grundlegendes bewegen
            muss, dann unterschreiben Sie bitte die
            {' '}<Link href={'/petition/'} className='underline hover:no-underline'>Petition</Link>,{' '}
            “Schule bewegen - Jetzt!”, teilen Sie diese und sprechen mit anderen
            Eltern darüber. Nutzen Sie Klassenfeste und Elternabende, die bis zur Landtagswahl 26 stattfinden, um gemeinsam zu
            einer politischen Kraft zu werden, die wahrgenommen wird und zu konkreten Reformen führt. Eine Welle aus der Elternschaft,
            die so stark ist, dass sie sich im Koalitionsvertrag nach den Landtagswahlen im März 2026 wiederfindet. Die dazu führt,
            {/* Ich habe den Link auf Lösungen hier ausgelassen  */}
            dass endlich ein neuer Geist durch unsere Schulen weht, der das Gedeihen jedes Kindes an vorderste Stelle setzt!<br/>
            {' '}<Link href={'/kontakt/'} className='underline hover:no-underline'>Wirken Sie mit?</Link>{' '}
          </p>

        </ImageTextSection>
      </div>
    </section>
  );
};
export default Page;
