'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faFileSignature,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/button/Button';
import {
  mainNavLinks,
  secondaryNavLinks,
  NavLink,
  petitionButton,
} from './navigationConfig';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const collectedLinks: NavLink[] = [...mainNavLinks, ...secondaryNavLinks];

  return (
    <div className='sticky top-0 z-50 min-h-15 bg-primary'>
      <div className='flex items-center gap-2 py-4 z-50'>
        <div className='flex justify-start p-4'>
          <Link href='/' onClick={() => setOpen(false)}>
            <Image
              src='/logo/logo-neu.svg'
              alt='EduUnite Logo'
              width={50}
              height={50}
              className='hover:scale-105 transition-transform'
            />
          </Link>
        </div>

        <Button
          text={petitionButton.textMobile}
          href={petitionButton.href}
          bgColor='bg-[color:var(--color-accent)]'
          icon={faFileSignature}
          className='text-xs! px-3! py-2!'
        />
      </div>

      {open && (
        <div className='sticky inset-0 text-white shadow-lg flex flex-col items-center gap-4 py-4 z-40'>
          {collectedLinks.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className='hover:underline'
              onClick={() => setOpen(false)}
            >
              <h2>{text}</h2>
            </Link>
          ))}
        </div>
      )}

      <button
        className='fixed top-0 right-0 text-white p-5 z-50'
        onClick={() => setOpen(!open)}
        aria-label='Menü öffnen'
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} size='xl' />
      </button>
    </div>
  );
}
