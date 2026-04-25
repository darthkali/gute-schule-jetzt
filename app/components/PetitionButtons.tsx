import {
  faFileSignature,
  faCircleInfo,
  faLandmarkDome,
} from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/button/Button';

export default function PetitionButtons() {
  return (
    <div className='mt-10 space-y-4'>
      <div>
        <Button
          text='Innn.it-Petition jetzt unterschreiben'
          href='https://innn.it/schule-mit-zukunft-lernkultur'
          bgColor='bg-[color:var(--color-accent)]'
          icon={faFileSignature}
          newTab
        />
      </div>
      <div className='flex gap-4 sm:gap-6 flex-wrap'>
        <Button
          text='Informationen zur Innn.it-Petition (aktuell)'
          href='/laufende-petition'
          bgColor='bg-neutral'
          textColor='text-[color:var(--color-text)]'
          icon={faCircleInfo}
        />
        <Button
          text='Informationen zur Landtagspetition'
          href='/petition'
          bgColor='bg-neutral'
          textColor='text-[color:var(--color-text)]'
          icon={faLandmarkDome}
        />
      </div>
    </div>
  );
}
