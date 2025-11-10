import React from 'react';
import ImageTextFloatingSection from '@/app/components/text/ImageTextFloatingComponent';
import WebsiteLinks from '@/app/components/links/WebsiteLinks';

const Page = () => {
  return (
    <div>
      <section>
        <div className={'innerBox'}>
          <ImageTextFloatingSection
            imageSrc='/images/classroom-1660223_1920.jpg'
            imageAlt='Raupe, Puppe und Schmetterling'
            imagePosition='left'
            caption={
              'Überholtes Schulkonzept wird Kindern und ihrem Lernen nicht gerecht'
            }
          >
            <p>
              Unsere Schulen beruhen auf 200 Jahre alten Vorstellungen, sind
              entstanden aus Kadetten- und Priesterschulen und sind vom Prinzip
              her Dressur- und Abrichtungseinrichtungen. Dort wird
              Konditionierung umgesetzt; werden „gute von schlechten Schülern“
              getrennt, häufig Klassen wiederholt, Belohnungen erteilt usw. Das
              System ist schwerfällig wie ein Ozeandampfer. Die Kapitäne wissen
              auch nicht, wie sie den Kurs ändern sollen. Grundlegendes Übel ist
              die falsche Vorstellung davon, was Lernen eigentlich ist. Das alte
              Lernkonzept, das in unserem Schulsystem vorherrscht, macht das
              Kind zum Objekt fremder Erwartungen, Bewertungen und Maßnahmen.
              Angeborene Lernfreude wird den Kindern in der Schule abtrainiert
              und damit auch ihre Freude an der Lebendigkeit! Kinder dürfen
              nicht zu Objekten gemacht werden! Wenn es meint, dass es so sein
              soll, wie es sich andere vorstellen, dann kann es ja nicht mehr so
              sein, wie es ist. Das Gefühl an Verbundenheit zerbricht dabei. So
              wie Schule augenblicklich organisiert ist, müssen Kinder auch ihre
              lebendige Bedürfnisse, wie sich zu bewegen oder ihre Entdeckungs-
              und Gestaltungsfreude unterdrücken. Doch Erstklasskinder müssen
              sich noch sinnlich und bewegt erleben dürfen, sonst entstehen
              hemmende Netzwerke im Gehirn.
            </p>
            <h3>
              Wenn beim Kind traumatische Erlebnisse, wenig Achtung und wenig
              Freude ankommen,
            </h3>
            <p>
              dann sind in seinem Frontalhirn Bereiche aktiviert, die kein
              vernünftiges Denken mehr erlauben. Es entwickelt Antennen,
              Vermeidungsverhalten und negative Erwartungshaltung,… Das Kind
              sucht sich Auswege. In diesen Zustand gerät es nicht von allein,
              er entsteht sich immer in sozialen Beziehungen. Solche Kinder sind
              dann nicht mehr frei, müssen sich ständig anstrengen und werden
              nicht lebenskompetent!
            </p>
            <p>
              Die Folgen für unsere Gesellschaft beschreibt Gerald Hüther: „Wenn
              man schon nicht gerne lernt, dann arbeitet man ja auch nicht
              gerne…. Das führt zu einer tiefen inneren Unzufriedenheit und die
              Leute arbeiten dann nur noch für Geld. Wir merken das auch in der
              Wirtschaft. Es braucht aber Leute, die mitdenken, die das Ganze
              sehen und so arbeiten, dass da was Langfristiges und Stabiles
              entstehen kann.“
            </p>
            <h3>Eine günstigere Lern- und Beziehungskultur entwickeln</h3>
            <p>
              Deshalb versuchen Prof. Gerald Hüther und Margret Rasfeld, diese
              neurobiologischen Erkenntnisse in die Schulen hineinzutragen und
              alle Beteiligten zu ermutigen, eine günstigere Lern- und
              Beziehungskultur zu entwickeln. Die Zeit ist überreif für einen
              Wandel - in einigen Schulen ist er im vollen Gange.
            </p>

            <h3>Mehr erfahren:</h3>
            <WebsiteLinks
              text='Schulen im Aufbruch'
              href='http://www.schule-im-aufbruch.de'
              className={'mr-2'}
            />
            <WebsiteLinks
              text='Schulen der Zukunft'
              href='http://www.schulen-der-zukunft.org'
              className={'mr-2'}
            />
            <WebsiteLinks
              text='Länger gemeinsam lernen'
              href='www.laenger-gemeinsam-lernen-bw.de'
            />
          </ImageTextFloatingSection>
        </div>
      </section>
    </div>
  );
};
export default Page;
