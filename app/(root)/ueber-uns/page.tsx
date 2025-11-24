import React from 'react';
import ImageTextSection from '@/app/components/text/ImageTextComponent';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Team & Netzwerk</h1>
        <ImageTextSection
          imageSrc={'/images/people-8139477_1280.jpg'}
          imageAlt={'sdaf'}
          imagePosition={'left'}
        >
          <h2>Gemeinsam zur landesweiten Bewegung</h2>

          <p>
            Wir sind ein stetig wachsendes Team engagierter Menschen und
            Bildungspionier:innen. Das Glück, das Kinder erleben, wenn Schule
            bereits für die Zukunft fit gemacht und erfolgreich transformiert
            ist - diese Erfahrung treibt uns an. Gemeinsam setzen wir alles
            daran, einen Bildungswandel zu erreichen, der die Kinder und ihr
            eigenständiges Lernen in den Mittelpunkt allen Tuns stellt.
          </p>

          <p>
            Weil wir wissen: Unsere Demokratie und Gesellschaft brauchen eine
            ganzheitliche Bildung, die Menschen aufbaut und kompetent macht.
            Deswegen sind wir immer auch auf der Suche nach Unterstützer:innen
            oder Personen und Schulen, die praxiserprobte Gelingensbeispiele
            sowie weitere Antriebskräfte einbringen.
          </p>

          <p>Dafür stehen:</p>

          <div className='mt-4 space-y-3'>
            <p>
              <strong>Dagmar Schäfer</strong>, an erster Stelle Mensch (wie alle
              in diesem Team), GWRS (Grund-und Werkrealschule) Klassenlehrerin
              Klasse 1-6, a. D., Finalistin Freiburger Lehrerpreis 2020
            </p>
            <p>
              <strong>Annegret Keller</strong>, Grundschul- und
              Gymnasiallehrerin, mit Schwerpunkt Klasse 1-6
            </p>
            <p>
              <strong>Heidemarie Bauer</strong>, Lehrerin GWRS, Gemeinde- und
              Kreisrätin a. D.
            </p>
            <p>
              <strong>Gottfried Schreiber</strong>, Lehrer GWRS, Schulleiter a.
              D.
            </p>
            <p>
              <strong>Danny Keller</strong>, Softwareentwickler
            </p>
            <p>
              <strong>Stefan Ruppaner</strong>, Schulleiter der ASW a. D., Autor
              des Buches „Das könnte Schule machen - Wie ein engagierter
              Pädagoge unser Bildungssystem revolutioniert"
            </p>
            <p>
              <strong>Melanie Driehaus</strong>, Kinder- und
              Jugendlichenpsychotherapeutin (VT), Mutter zweier Grundschulkinder
            </p>
            <p>
              <strong>Bertram Stoll</strong>, Vater, Geschäftsführer i. R.
            </p>
            <p>
              <strong>Irene Ratzmann</strong>, Elternbeiratsvorsitzende an
              Grundschule und Gymnasium, Mutter dreier Schulkinder
            </p>
            <p>
              <strong>Dipl.-Päd. Edgar Bohn</strong>, Grundschulverband
              Baden-Württemberg, Vorstandsmitglied
            </p>
            <p>
              <strong>Dr. rer. nat. Dr. med. habil. Gerald Hüther</strong>,
              Neurowissenschaftler und Vorstand der Akademie für
              Potentialentfaltung
            </p>

            <p>
              <strong>Vorstand des LSBR</strong> (Landesschülerbeirat des Landes
              Baden-Württemberg), vertritt die Interessen der 1,5 Mio SuS in
              BaWü gegenüber der Politik, den Medien und der Zivilgesellschaft.
            </p>
          </div>
        </ImageTextSection>
      </div>
    </section>
  );
};
export default Page;
