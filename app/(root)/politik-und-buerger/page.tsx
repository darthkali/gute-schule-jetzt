import React from 'react';
import TextLinks from '@/app/components/TextLinks';
import ImageTextSection from '@/app/components/ImageTextComponent';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Politik und Bürger:innen</h1>
        <ImageTextSection
          imageSrc='/images/hoch/bundestag-204772_1920.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='left'
        >
          <p className={'font-semibold'}>
            Sehr geehrte Entscheidungsträger:innen und Wähler:innen unseres
            Landes,
          </p>
          <p>
            unsere{' '}
            <TextLinks
              href={
                'https://www.landtag-bw.de/resource/blob/17338/4e675df2c0fd1e0938c9d6922b35b134/Landesverfassung.pdf'
              }
            >
              Landesverfassung BW von 1953
            </TextLinks>{' '}
            verlangt, dass das öffentliche Schulwesen so zu gestalten ist, dass
            jeder junge Mensch, ohne Rücksicht auf Herkunft oder wirtschaftliche
            Lage, das Recht auf eine seiner Begabung entsprechende Erziehung und
            Ausbildung hat.
            <br />
            In einer immer{' '}
            <TextLinks href={'/veraendertewelt/'} newTab={false}>
              komplexer werdenden Welt,
            </TextLinks>{' '}
            in der Schulen immer wichtigere Lebensorte von Kindern werden, kann
            unser veraltetes, zunehmend dysfunktionales{' '}
            <TextLinks href={'/dysfunktionales-schulsystem/'} newTab={false}>
              Bildungssystem
            </TextLinks>{' '}
            nicht bleiben wie es ist.
            <br />
            Die dafür notwendigen Ressourcen sind Kindern zuzugestehen, sie
            verbringen schließlich ihre halbe Kindheit in diesen Einrichtungen.
            Bevor es dabei um Personal und Finanzen geht, braucht es eine neue
            Haltung und das Loslassen von alten Konzepten. <br />
            Wenn wir das Wohlergehen aller Kinder nicht endlich an die erste
            Stelle rücken und die notwendige Transformation vom{' '}
            <TextLinks href={'/#was-brauchen-kinder/'} newTab={false}>
              Lehren zum Lernen
            </TextLinks>{' '}
            nicht schaffen, werden wir alle{' '}
            <TextLinks href={'/verlierer/'} newTab={false}>
              verlieren.
            </TextLinks>
            <br />
            Es geht nicht darum, diese oder jene Schulart mit ihrer
            vorsortierten Schülerschaft gegeneinander auszuspielen, sondern alle
            Kinder in ihr Lernen/ ihr Potential zu bringen! Die Schlüsselwörter
            dafür heißen: Vertrauen, Selbstwirksamkeit, Zusammenarbeit,
            Teamgeist und gelebte Vielfalt. Unsere Demokratie steht auf dem
            Spiel und die Bildung unserer Jugend ist wichtiger denn je. <br />
            Wir brauchen mutige und kreative Zukunftsgestalter:innen, die
            ausgeprägte Lösungskompetenz zeigen und in den Dienst gemeinsamer
            Anliegen stellen. Zeigen auch Sie als gewählte Volksvertreter Mut
            und Größe und gehen Sie die längst überfällige grundlegende Reform
            unseres Bildungssystems parteiübergreifend an! Ein bisschen mehr vom
            Alten wird nicht weiterhelfen. Unsere Schulen brauchen Freiräume und
            geeignete Rahmenbedingungen! Viele andere Länder haben uns
            bildungspolitisch längst{' '}
            <TextLinks href={'/neuseeland/'} newTab={false}>
              abgehängt.
            </TextLinks>
            <br />
            <br />
          </p>
          <p className={'font-semibold'}>
            {' '}
            Sehr geehrte Entscheidungsträger:innen,
          </p>
          <p>
            setzen Sie sich bitte mit den auf dieser Webseite zusammengestellten
            Inhalten und Lösungsansätzen auseinander. Folgen Sie bitte den
            Forderungen der{' '}
            <TextLinks href={'/petition/'} newTab={false}>
              Petition Neue Lernkultur - jetzt!
            </TextLinks>
            , die auf den vielfältigen Erkenntnissen aus der Lernforschung und
            den Erfahrungen ausgezeichneter Schulen beruhen. Denken Sie zum Wohl
            der Kinder und unserer Gesellschaft über eine Legislaturperiode
            hinaus - arbeiten Sie parteiübergreifend an der L ösung der akuten
            Bildungsprobleme. Sichern Sie unsere Demokratie durch
            zukunftsweisende Bildung, die alle Kinder erreicht!
            <br />
            <br />
          </p>

          <p className={'font-semibold'}>
            {' '}
            Sehr geehrte Bürgerinnen und Bürger,
          </p>
          <p>
            wählen Sie bei der kommenden Landtagswahl im März 2026 bitte
            Abgeordnete und Parteien, die den Mut haben, der Bildung unserer
            Kinder eine zukunftsweisende Richtung zu geben. Unterschreiben Sie
            bitte die vorbereitete{' '}
            <TextLinks href={'/petition/'} newTab={false}>
              Petition Schule bewegen - jetzt!
            </TextLinks>
            , um der Politik zu zeigen, dass wir Bürger:innen entschlossen sind
            - allen unseren Kindern und Jugendlichen, die Bildung zu geben, die
            sie für ihr Leben stark, kompetent und engagiert macht.
          </p>
        </ImageTextSection>
      </div>
    </section>
  );
};
export default Page;
