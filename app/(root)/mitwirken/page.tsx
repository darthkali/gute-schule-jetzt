import React from 'react';
import TextLinks from '@/app/components/text/TextLinks';
import FlyerDownload from '@/app/components/FlyerDownload';
const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Mitwirken</h1>
        <ul className='list-disc pl-6 mb-4'>
          <li>
            Bist Du Elternteil eines Schulkindes und möchtest die Eltern der
            Klasse auf die Unterschriftensammlung der Landtags-Petition „Neue
            Lernkultur – Jetzt!“ aufmerksam machen?
          </li>
          <li>
            Bist Du gerne unter Menschen und hast Lust anderen von unserer
            Initiative, der Transformation und der Petition „Neue Lernkultur –
            Jetzt!“ zu erzählen?
          </li>
          <li>
            Kannst Du wertschätzend argumentieren und andere mit Deiner
            Begeisterung mitreißen/ anstecken?
          </li>
          <li>
            In vielen Orten gibt es „Omas gegen Rechts“, die sich für unsere
            Demokratie ehrenamtlich einsetzen. Kannst Du diese Gruppe vor Ort
            ansprechen und für die Initiative „Neue Lernkultur – Jetzt!“
            gewinnen?
          </li>
          <li>
            Bist Du gerne draußen unterwegs und hast Lust Flyer, Plakate und
            Sticker zu verteilen?
          </li>
          <li>
            Hast Du Connections in die Politik, Wirtschaft, Wissenschaft oder
            verfügst Du über andere Netzwerke, die Du einbringen kannst?
          </li>
          <li>
            Bist Du Kolleg:in und stellst die Landtags-Petition „Neue Lernkultur
            – Jetzt!“ in der nächsten Konferenz Deinen Kolleg:innen vor?
          </li>
          <li>
            In jedem Wahlkreis gibt es Parteibüros und Landtagsabgeordnete mit
            Sprechstunden. Kannst Du sie auf die Wichtigkeit unserer Forderungen
            ansprechen?
          </li>
          <li>
            Kannst Du einen vorbereiteten Pressetext in die örtliche Presse
            bringen?
          </li>
          <li>
            Arbeitest Du lieber im Hintergrund, kennst Dich mit Backend
            (Node.js)- und/ oder Frontend (Next.js) aus und hast Lust uns beim
            Support der Webseite zu unterstützen?
          </li>
          <li>
            Liest und/ oder schreibst Du gerne und hast Lust uns beim Verfassen
            von neuen Texte oder der Überarbeitung schon vorhandener Texte zu
            unterstützen?
          </li>
          <li>
            Kennst Du andere entscheidende Hebel für eine gelingende
            Veränderung?
          </li>
          <li>Hast Du eine Idee, von der wir unbedingt wissen sollten?</li>
          <li>…</li>
        </ul>
        Wenn Du eine oder mehrere dieser Fragen mit Ja beantworten kannst,
        freuen wir uns über eine Nachricht von Dir. Bitte habe Verständnis, dass
        es auch mal ein paar Tage dauern kann, bis wir antworten, da wir uns
        alle ehrenamtlich für diese Bildungswende einsetzen.{' '}
        <TextLinks href={'/kontakt'} newTab={false}>
          {' '}
          Kontaktiere
        </TextLinks>{' '}
        uns.
        <FlyerDownload />
      </div>
    </section>
  );
};
export default Page;
