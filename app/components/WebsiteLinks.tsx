'use client';

import Link from 'next/link';

type WebsiteLinksProps = {
  text: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  newTab?: boolean;
  className?: string;
};

export default function WebsiteLinks({
  text,
  href,
  newTab = true,
  bgColor = 'bg-[color:var(--color-accent)]',
  textColor = 'text-[color:var(--color-text)]',
  className = '',
}: WebsiteLinksProps) {
  const classNameInternal = `${className} text-xs sm:text-sm md:text-base  px-3 py-1 rounded-xl  font-bold shadow transition-colors duration-300 hover:brightness-110 ${bgColor} ${textColor} transition-transform duration-300 hover:scale-105`;

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? '_blank' : undefined}
        className={classNameInternal}
      >
        {text}
      </Link>
    );
  }
}
