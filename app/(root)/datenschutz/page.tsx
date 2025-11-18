import React from 'react';

const Datenschutz = () => {
  return (
    <div>
      <section>
        <div className='innerBox'>
          <h1>DATENSCHUTZERKLÄRUNG</h1>

          <p className='text-sm text-gray-600 mb-8'>Stand: [Datum]</p>

          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
            gemeinnützige Bildungswebsite Neue-Lernkultur-Jetzt besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>

          <h3>Grundsatz der Datenminimierung</h3>
          <p>
            Neue-Lernkultur-Jetzt folgt dem Prinzip der Datenminimierung. Wir
            speichern keine personenbezogenen Daten und verwenden keine Cookies.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            entnehmen.
          </p>

          <h2>2. Datenverarbeitung</h2>

          <h3>Kontaktformular</h3>
          <p>
            Nachrichten werden direkt an unser E-Mail-Postfach weitergeleitet,
            ohne Speicherung auf unseren Servern.
          </p>

          <h3>YouTube-Videos</h3>
          <p>
            Eingebettete Videos im erweiterten Datenschutzmodus. Google kann
            dabei IP-Adresse und Video-Interaktionen verarbeiten.
          </p>

          <h2>3. Rechtsgrundlage</h2>
          <ul className='list-disc pl-6 mb-4'>
            <li>
              <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte
              Interessen (Website-Bereitstellung)
            </li>
            <li>
              <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung bei
              Kontaktformular-Nutzung
            </li>
          </ul>

          <h2>4. YouTube-Einbindung</h2>
          <p>Wir binden YouTube-Videos im erweiterten Datenschutzmodus ein.</p>
          <ul className='list-disc pl-6 mb-4'>
            <li>
              Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland
            </li>
            <li>
              Datenschutzerklärung:{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 underline'
              >
                https://policies.google.com/privacy
              </a>
            </li>
            <li>Übertragene Daten: IP-Adresse bei Video-Interaktion</li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            Wir verwenden keine Cookies. YouTube kann Cookies setzen, wenn Sie
            ein Video abspielen.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className='list-disc pl-6 mb-4'>
            <li>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Information über
              verarbeitete Daten
            </li>
            <li>
              <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Korrektur
              unrichtiger Daten
            </li>
            <li>
              <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Löschung unter
              bestimmten Voraussetzungen
            </li>
            <li>
              <strong>Einschränkungsrecht (Art. 18 DSGVO):</strong>{' '}
              Einschränkung der Verarbeitung
            </li>
            <li>
              <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Übertragung
              Ihrer Daten
            </li>
            <li>
              <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch
              gegen die Verarbeitung
            </li>
          </ul>

          <h3>Widerruf der Einwilligung</h3>
          <p>
            Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie
            diese jederzeit widerrufen.
          </p>

          <h2>7. Datensicherheit</h2>
          <p>SSL/TLS-Verschlüsselung für sichere Datenübertragung.</p>

          <h3>Beschwerderecht</h3>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über unsere Verarbeitung personenbezogener Daten zu beschweren.
          </p>

          <h2>8. Hinweise zur gemeinnützigen Bildungswebsite</h2>
          <p>
            Neue-Lernkultur-Jetzt ist eine gemeinnützige Initiative ohne
            kommerzielle Interessen. Die YouTube-Videos dienen ausschließlich
            Bildungszwecken.
          </p>

          <div className='border-t pt-6 mt-8'>
            <p className='text-sm text-gray-600'>
              <strong>Letzte Aktualisierung:</strong> 18.11.2025
            </p>
            <p className='text-sm text-gray-600 mt-2'>
              <em>
                Diese Datenschutzerklärung kann bei Änderungen unserer Services
                oder rechtlichen Anforderungen angepasst werden. Wir empfehlen,
                diese Seite regelmäßig zu besuchen.
              </em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
