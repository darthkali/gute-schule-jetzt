import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type TextImageCardProps = {
  overlayText: string;
  imageSrc: string;
  overlayColor?: string;
  heading?: string;
  description: string;
  href: string;
  textColor?: string;
};

export default function TextImageCard({
  overlayText,
  imageSrc,
  overlayColor = 'bg-[color:var(--color-primary)]/70',
  textColor = 'text-[color:var(--color-neutral)]',
  heading,
  description,
  href,
}: TextImageCardProps) {
  return (
    <Link
      href={href}
      className='bg-[color:var(--color-neutral)] group w-full max-w-full flex-1 mx-auto rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'
    >
      <div className='relative h-48 w-full'>
        <Image src={imageSrc} alt={overlayText} fill className='object-cover' />

        {/* Color Overlay */}
        <div className={`absolute inset-0 ${overlayColor} `} />

        {/* Overlay Text */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <h2
            className={`${textColor} text-center text-lg sm:text-xl md:text-2xl font-semibold px-4 leading-tight`}
          >
            {overlayText}
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6 flex flex-col flex-grow'>
        <div className='flex-grow'>
          <h3 className='text-lg'> {heading}</h3>
          <p className=' text-base leading-relaxed'>{description}</p>
        </div>
        <div className='text-right text-sm text-[color:var(--color-secondary)] flex items-center justify-end gap-2'>
          <span>Mehr erfahren</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className='transition-transform duration-300 group-hover:translate-x-1'
          />
        </div>
      </div>
    </Link>
  );
}
