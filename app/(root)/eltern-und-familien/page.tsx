import React from 'react';
import TextLinks from '@/app/components/text/TextLinks';
import ImageTextSection from '@/app/components/text/ImageTextComponent';

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
            Sehr geehrte Eltern und Erziehungsberechtigte,
            <br />
            wir alle wissen, dass unser{' '}
            <TextLinks href={'/dysfunktionales-schulsystem'} newTab={false}>
              Bildungssystem
            </TextLinks>{' '}
            nicht so läuft, wie es sollte. Aber es ändert sich seit langer Zeit
            nur wenig. Die Leidtragenden sind unsere Kinder und ihre Familien.
            <br />
            Es gibt aber Schulen, die aufgebrochen sind und sich zu{' '}
            <TextLinks href={'/#loesungen'} newTab={false}>
              Teamschulen
            </TextLinks>
            , sowie
            {/* Diller hat kein gültiges Zertifikat !?*/}{' '}
            <TextLinks href={'https://diler.tube/w/iSSGa9mZVmSncngQt4h64d'}>
              Chancenorten
            </TextLinks>{' '}
            verändert haben. Sie erhalten Dankesbriefe, wie zum Beispiel:
            <br />
            “Mein Kind ist ganz verändert, es kommt zufrieden von der Schule
            heim, komplizierte Lebensverhältnisse haben sich für uns sehr
            vereinfacht…“
            <br />
            Es gibt Schulen, da geht es auffallend freundlich und ruhig zu. In
            der Folge sind auch die Leistungen der Schüler:innen an diesen
            Schulen im Schnitt besser.
          </p>
          <p>
            Wir brauchen flächendeckend im ganzen Land aus{' '}
            <TextLinks href={'/dysfunktionales-schulsystem/'} newTab={false}>
              {' '}
              vielen Gründen
            </TextLinks>
            , eine neue Lernkultur und wesentliche Verbesserungen in unseren
            Schulen, so dass unsere Schulen zu aufbauenden Kraftorten für alle
            Kinder werden.
            <br />
            Ein Schulkind{' '}
            <TextLinks
              href={'/was-brauchen-kinder/ueberholtes-schulkonzept'}
              newTab={false}
            >
              braucht
            </TextLinks>{' '}
            drei Dinge: Aufgaben, an denen es wachsen kann, Vorbilder, an denen
            es sich orientieren kann und es braucht Gemeinschaften, in denen es
            sich aufgehoben fühlt.
            <br />
            <br />
            Wenn Sie ebenfalls zu der Überzeugung kommen, dass sich in unserem
            Schulsystem endlich etwas Grundlegendes bewegen muss, dann
            unterschreiben Sie bitte die{' '}
            <TextLinks href={'/petition/'} newTab={false}>
              Petition
            </TextLinks>{' '}
            “Neue Lernkultur - Jetzt!”, teilen Sie diese und sprechen mit
            anderen Eltern darüber. Nutzen Sie Klassenfeste und Elternabende,
            die bis zur Landtagswahl 26 stattfinden, um gemeinsam zu einer
            politischen Kraft zu werden, die wahrgenommen wird und zu konkreten
            Reformen führt. Eine Welle aus der Elternschaft, die so stark ist,
            dass sie sich im Koalitionsvertrag nach den Landtagswahlen im März
            2026 wiederfindet. Die dazu führt, dass endlich eine neue Haltung in
            unsere Schulen Einzug findet, die das Gedeihen jedes Kindes an
            vorderste Stelle setzt!
            <br />
            <TextLinks href={'/kontakt/'} newTab={false}>
              Wirken Sie mit?
            </TextLinks>
          </p>
        </ImageTextSection>
      </div>
    </section>
  );
};
export default Page;
