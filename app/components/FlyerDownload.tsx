import Image from 'next/image';

type FlyerOption = {
  title: string;
  description: string;
  basePath: string;
};

const flyers: FlyerOption[] = [
  {
    title: 'Plakat A4',
    description: 'Ein Plakat im A4-Format',
    basePath: '/Flyer/Flyer',
  },
  {
    title: 'Flyer A6 (4-fach)',
    description: 'Vier kleine Flyer (A6) auf einem A4-Blatt',
    basePath: '/Flyer/Flyer-4-fach',
  },
];

export default function FlyerDownload() {
  return (
    <div className='mt-8'>
      <h2>Flyer herunterladen</h2>
      <p>Zum Weiterleiten, Ausdrucken und Weitergeben:</p>
      <div className='grid gap-4 sm:grid-cols-2'>
        {flyers.map((flyer, index) => (
          <div key={index} className='rounded-lg p-4 flex flex-col gap-3'>
            <h3 className='font-semibold'>{flyer.title}</h3>
            <p className='text-sm'>{flyer.description}</p>
            <div className='relative min-h-80 rounded overflow-hidden'>
              <Image
                src={`${flyer.basePath}.png`}
                alt={flyer.title}
                fill
                className='object-contain object-left p-2'
                unoptimized
              />
            </div>
            <div className='flex items-center gap-3 mt-auto'>
              <a
                href={`${flyer.basePath}.svg`}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-4 py-2 rounded-full font-bold shadow transition-colors duration-300 hover:brightness-110 bg-neutral text-text  hover:scale-105 text-sm'
              >
                SVG
              </a>
              <a
                href={`${flyer.basePath}.png`}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-4 py-2 rounded-full font-bold shadow transition-colors duration-300 hover:brightness-110 bg-neutral text-text  hover:scale-105 text-sm'
              >
                PNG
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
