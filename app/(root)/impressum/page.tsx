import React from 'react';

const Impressum = () => {
  return (
    <div>
      <section>
        <div className='innerBox'>
          <h1>IMPRESSUM</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            {process.env.IMPRESSUM_ORGANIZATION}
            <br />
            {process.env.IMPRESSUM_NAME}
            <br />
            {process.env.IMPRESSUM_STREET}
            <br />
            {process.env.IMPRESSUM_CITY}
            <br />
            {process.env.IMPRESSUM_COUNTRY}
          </p>

          <h2>Kontakt</h2>
          <ul className='list-disc pl-6 mb-4'>
            <li>Telefon: {process.env.IMPRESSUM_PHONE}</li>
            <li>E-Mail: {process.env.IMPRESSUM_EMAIL}</li>
          </ul>

          <h2>Gemeinnützigkeit</h2>
          <p>
            {' '}
            Edunite ist eine gemeinnützige Initiative ohne
            Gewinnerzielungsabsicht.
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
