import React from 'react';

const Impressum = () => {
  return (
    <div>
      <section>
        <div className='innerBox'>
          <h1>IMPRESSUM</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            [Firmenname/Betreiber]
            <br />
            [Vorname Nachname]
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
            <br />
            [Land]
          </p>

          <h2>Kontakt</h2>
          <ul className='list-disc pl-6 mb-4'>
            <li>Telefon: [Telefonnummer]</li>
            <li>E-Mail: [E-Mail-Adresse]</li>
            <li>Website: [Website-URL]</li>
          </ul>

          <h2>Vertreten durch</h2>
          <p>[Name des Geschäftsführers/Verantwortlichen]</p>

          <h2>Gemeinnützigkeit</h2>
          <div className='bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500'>
            <p className='font-medium'>
              Edunite ist eine gemeinnützige Initiative ohne
              Gewinnerzielungsabsicht.
            </p>
          </div>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            [Name]
            <br />
            [Adresse]
          </p>

          <h2>Haftungsausschluss</h2>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der
            Verpflichtung, übermittelte oder gespeicherte fremde Informationen
            zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
