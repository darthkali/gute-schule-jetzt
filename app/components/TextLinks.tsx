'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type TextLinksProps = {
  children: ReactNode;
  href?: string;
  bgColor?: string;
  textColor?: string;
  newTab?: boolean;
  className?: string;
};

export default function TextLinks({
  children,
  href,
  newTab = true,
  className = '',
}: TextLinksProps) {
  const classNameInternal = `${className} underline text-blue-500`;

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? '_blank' : undefined}
        className={classNameInternal}
      >
        {children}
      </Link>
    );
  }
}
