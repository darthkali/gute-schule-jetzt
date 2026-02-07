'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { mainNavLinks, secondaryNavLinks, NavLink } from './navigationConfig';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const collectedLinks: NavLink[] = [...mainNavLinks, ...secondaryNavLinks];

  return (
    <div className='sticky top-0 z-50  min-h-15 bg-primary'>
      {/* Logo */}
      <div
        className='flex  items-center gap-4 py-4 z-50'
        style={{ minHeight: '15vh' }}
      >
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

        {/* Petition Button */}
        {/*<Button*/}
        {/*  text='Petition unterzeichnen'*/}
        {/*  href='https://petitionen.landtag-bw.de/Petitionen/Details/46215aff-a7ad-4de3-8b6f-0cc2bce51e0c'*/}
        {/*  bgColor='bg-[color:var(--color-accent)]'*/}
        {/*  icon={faFileSignature}*/}
        {/*/>*/}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='sticky inset-0 text-white shadow-lg flex flex-col items-center gap-4 py-4 z-40 '>
          {/* Main Navigation Links */}

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

      {/* Toggle Button */}
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
