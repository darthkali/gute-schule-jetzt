'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/#herausforderungen', text: 'Herausforderungen' },
    { href: '/#kinder', text: 'Kinder' },
    { href: '/#loesungen', text: 'Lösungen' },
    { href: '/#aktiv-werden', text: 'Aktiv werden' },
  ];

  const dropdownLinks = [
    { href: '/ueber-uns', text: 'Über Uns' },
    { href: '/kontakt', text: 'Kontakt' },
  ];

  const showDevBanner = process.env.NEXT_PUBLIC_SHOW_DEV_BANNER === 'true';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className=' sticky top-0 z-50 bg-[color:var(--color-primary)] text-white'>
      {showDevBanner && (
        <div className='sticky top-0 z-50 bg-red-500 text-white text-center py-1'>
          Preview - Seite ist noch in Arbeit.
        </div>
      )}
      {/*Mobile Burger Menu*/}
      <div className='sm:hidden'>
        <MobileMenu />
      </div>

      <div className={'hidden innerBox items-center sm:flex'}>
        {/* Logo  */}

        <Link href='/'>
          <Image
            src='/logo/edunite-logo_neu.svg'
            alt='EduUnite Logo'
            width={70}
            height={70}
            className={'pr-4'}
          />
        </Link>

        {/* Navigation */}
        <div className='flex gap-6 items-start font-semibold'>
          {navLinks.map(({ href, text }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`
                                    transition-all duration-300 hover:scale-105 hover:brightness-110
                                    ${isActive ? 'text-[color:var(--color-accent)] underline underline-offset-4' : ''}
                                `}
              >
                <p className='font-semibold'>{text}</p>
              </Link>
            );
          })}

          {/* Dropdown Menu */}
          <div className='relative' ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:brightness-110'
            >
              <p className='font-semibold'>Mehr erfahren</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-200 w-4 h-4 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-48 z-50'>
                {dropdownLinks.map(({ href, text }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`
                                                block px-4 py-2 text-[color:var(--color-text)] hover:bg-gray-100 transition-colors
                                                ${isActive ? 'bg-gray-100 font-semibold' : ''}
                                            `}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {text}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/*  Petition-Button */}
        <div className={'ml-auto'}>
          <Button
            text='Petition lesen/unterzeichnen'
            href='/petition'
            bgColor='bg-[color:var(--color-accent)]'
          />
        </div>
      </div>
    </nav>
  );
}
