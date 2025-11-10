import React from 'react';
import TextLinks from '@/app/components/links/TextLinks';
import ImageTextSection from '@/app/components/text/ImageTextComponent';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Schülerinnen und Schüler</h1>
        <ImageTextSection
          imageSrc='/images/hoch/graduation-2308406_1920.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='left'
        >
          <p className={'font-semibold'}>
            Hi, an alle Jugendlichen in unseren Schulen in Baden-Württemberg,
          </p>
          <p>
            sind Eure Schulen Orte, die ihr gerne besucht,die Euch inspirieren,
            gut tun und die Euch weiterbringen?
          </p>
          <p>
            Wenn nicht, dann schaut Euch bitte auf dieser Webseite um. Wir haben
            alles zusammengestellt, was es braucht, damit die{' '}
            <TextLinks href={'/dysfunktionales-schulsystem/'} newTab={false}>
              unbefriedigende Situation
            </TextLinks>
            , in unseren Schulen in Baden-Württemberg von Grund auf geändert
            werden kann.
            <br />
            Es geht darum, Dir und allen Kindern und Jugendlichen die Chance zu
            geben, die Ihr verdient habt. Es geht um selbstorganisiertes Lernen
            und Zusammenarbeit.
            <br />
            In{' '}
            <TextLinks href={'/neuseeland/'} newTab={false}>
              Neuseeland
            </TextLinks>
            , wurde bereits in den 90ger Jahren eine vorbildliche Schulreform in
            die Wege geleitet. Heute zählt das Schulsystem in Neuseeland nach
            internationalen Standards zu den besten der Welt. Auch viele andere
            Schulen im Ausland sind bedeutend weiter als Deutschland.
            <br />
            Doch auch bei uns tut sich etwas:
            <br />
            Hier als Einstieg ein{' '}
            <TextLinks href={'https://www.youtube.com/watch?v=deREj5SouSU/'}>
              Kurzfilm
            </TextLinks>
            , über die ASW, eine Schule in BW, an der die Schüler:innen ihren
            Lernort, ihr Lernthema und ihre Lernpartner:innen selbst bestimmen
            können.
            <br />
            Schulen müssen Wohlfühlorte und Teamschulen werden. Erst wenn sich
            viele Menschen in BW sichtbar hinter dieses Ziel stellen, wird die
            Politik in konsequentes Handeln kommen. Gemeinsam sind wir stark.
            <br />
            Wenn Ihr der Überzeugung seid, dass sich in unserem Schulsystem
            endlich etwas Grundlegendes bewegen muss, dann unterschreibt bitte
            die{' '}
            <TextLinks href={'/petition/'} newTab={false}>
              Petition Neue Lernkultur - jetzt!
            </TextLinks>
            , teilt sie so vielfältig wie möglich und erzählt anderen
            Schülerinnen und Schülern davon.
            <br />
            Bist Du dabei?
          </p>
          <h2>Zum Nachdenken</h2>
          <p>
            Die Erde ist 4,6 Milliarden Jahre alt. Rechnen wir das runter auf 46
            Jahre, ist die Menschheit seit 4 Stunden hier. Unsere industrielle
            Revolution begann vor einer Minute. In dieser Zeit haben wir mehr
            als 50% der weltweiten Wälder zerstört. Unser bisheriger Weg ist
            nicht nachhaltig. Schlagen wir gemeinsam einen neuen ein. Dazu
            brauchen wir eine neue Bildung, die die Menschen frei macht -
            selbstaktives und gemeinsames problemlösendes Lernen!
          </p>
        </ImageTextSection>
      </div>
    </section>
  );
};
export default Page;
