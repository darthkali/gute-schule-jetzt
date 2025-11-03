import React from 'react';

// Force dynamic rendering to read env variables at runtime
export const dynamic = 'force-dynamic';

const Impressum = () => {
  // Read env variables at runtime (server-side)
  const impressumData = {
    organization: process.env.IMPRESSUM_ORGANIZATION,
    name: process.env.IMPRESSUM_NAME,
    street: process.env.IMPRESSUM_STREET,
    city: process.env.IMPRESSUM_CITY,
    country: process.env.IMPRESSUM_COUNTRY,
    phone: process.env.IMPRESSUM_PHONE,
    email: process.env.IMPRESSUM_EMAIL,
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <section className='bg-white'>
        <div className='innerBox'>
          <h1 className='text-3xl font-bold mb-8 '>Impressum</h1>

          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-semibold mb-4 '>
                Angaben gemäß § 5 TMG
              </h2>
              <div className='bg-blue-100 p-4 rounded-xl'>
                <p className='leading-relaxed'>
                  <strong>{impressumData.organization}</strong>
                  <br />
                  {impressumData.name}
                  <br />
                  {impressumData.street}
                  <br />
                  {impressumData.city}
                  <br />
                  {impressumData.country}
                </p>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4 '>Kontakt</h2>
              <div className='bg-blue-100 p-4 rounded-xl'>
                <div className='space-y-2'>
                  <p>
                    <strong>Telefon:</strong> {impressumData.phone}
                  </p>
                  <p>
                    <strong>E-Mail:</strong> {impressumData.email}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4 '>
                Verantwortlich für den Inhalt
              </h2>
              <div className='bg-blue-100 p-4 rounded-xl'>
                <p className='leading-relaxed'>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                  <br />
                  {impressumData.name}
                </p>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4 '>
                Art der Initiative
              </h2>
              <div className='bg-blue-100 p-4 rounded-xl border-l-4 border-blue-400'>
                <p className='leading-relaxed'>
                  <strong>Neue Lernkultur Jetzt!</strong> ist eine gemeinnützige
                  Initiative, die sich für bessere Bildung in Deutschland
                  einsetzt. Diese Initiative verfolgt ausschließlich und
                  unmittelbar gemeinnützige Zwecke und ist nicht
                  gewinnorientiert.
                </p>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4 '>
                Haftungsausschluss
              </h2>

              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-medium mb-2 '>
                    Haftung für Inhalte
                  </h3>
                  <p className='leading-relaxed text-sm '>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht unter der Verpflichtung,
                    übermittelte oder gespeicherte fremde Informationen zu
                    überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className='leading-relaxed text-sm '>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon
                    unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
                    dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                    möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend
                    entfernen.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-medium mb-2 '>
                    Haftung für Links
                  </h3>
                  <p className='leading-relaxed text-sm '>
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-medium mb-2 '>Urheberrecht</h3>
                  <p className='leading-relaxed text-sm '>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-8 border-t border-gray-200'>
              <p className='text-sm text-gray-500 text-center'>
                Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
