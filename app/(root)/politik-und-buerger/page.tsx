import React from 'react';
import ImageTextSection from '@/app/components/ImageTextComponent';

const Page = () => {
  return (
    <section>
      <div className={'innerBox'}>
        <h1>Politik und BürgerInnen</h1>
        <ImageTextSection
          imageSrc='/images/hoch/bundestag-204772_1920.jpg'
          imageAlt='Raupe, Puppe und Schmetterling'
          imagePosition='left'
        >
          <p className={'font-semibold'}>
            Sehr geehrte Entscheidungsträger und WählerInnen unseresLandes,
          </p>
          <p>
            unsere Landesverfassung BW von 1953 (link) verlangt, dass
            dasöffentliche Schulwesen so zu gestalten ist, dass jeder
            jungeMensch ohne Rücksicht auf Herkunft oder wirtschaftliche Lagedas
            Recht auf eine seiner Begabung entsprechende Erziehungund Ausbildung
            hat. In einer immer komplexer werdenden Welt,in der Schulen immer
            wichtigere Lebensorte von Kindern werden,kann unser veraltetes,
            zunehmend dysfunktionalesBildungssystem nicht bleiben wie es ist.
            Die dafür notwendigenRessourcen sind Kindern zuzugestehen, sie
            verbringenschließlich ihre halbe Kindheit in diesen
            Einrichtungen.Bevor es dabei um Personal und Finanzen geht, braucht
            es eineneue Haltung und das Loslassen von alten Konzepten. Wennwir
            das Wohlergehen aller Kinder nicht endlich an die ersteStelle rücken
            und die notwenige Transformation vom Lehrenzum Lernen nicht
            schaffen, werden wir alle verlieren.Es geht nicht darum, diese oder
            jene Schulart mit ihrervorsortierten Schülerschaft zu erhalten,
            sondern alle Kinder in ihrLernen/ ihr Potential zu bringen. Die
            Schlüsselwörter dafürheißen: Vertrauen, Selbstwirksamkeit,
            Zusammenarbeit,Teamgeist und gelebte Vielfalt. Unsere Demokratie
            steht aufdem Spiel und die Bildung unserer Jugend ist wichtiger
            dennje.
          </p>
          <p>
            Stellen Sie sich bitte der Einsicht, dass ein bisschen mehr vomAlten
            nicht weiterhelfen wird.Setzen Sie sich bitte mit den auf dieser
            Webseitezusammengestellten Inhalten auseinander.Sehr geehrte
            EntscheidungsträgerInnen, folgen Sie bitte denLösungsansätzen der
            Petition, die auf den vielfältigenErkenntnissen aus der
            Lernforschung beruhen.Sehr geehrte Bürgerinnen und Bürger,wählen Sie
            bei der kommenden Landtagswahl im März 2026 bitteParteien, die den
            Mut haben, der Bildung unserer Kinder einegrundlegende neue Richtung
            zu geben.Stellen wir unsere Demokratie und Gesellschaft gemeinsam
            neuund sich selbstverstärkend auf!
          </p>
        </ImageTextSection>
      </div>
    </section>
  );
};
export default Page;
