import Link from 'next/link';
import { ReactNode } from 'react';

export enum Style {
  Button,
  InlineText,
}

type TextLinksProps = {
  href?: string;
  bgColor?: string;
  newTab?: boolean;
  textColor?: string;
  className?: string;
  children: ReactNode;
  style?: Style;
};

export default function TextLinks({
  children,
  href,
  newTab = true,
  bgColor = 'bg-[color:var(--color-accent)]',
  textColor = 'text-[color:var(--color-text)]',
  className = '',
  style = Style.InlineText,
}: TextLinksProps) {
  let internalClassName;
  switch (style) {
    case Style.Button:
      internalClassName = `${className} text-xs sm:text-sm md:text-base px-3 py-1 rounded-xl font-bold shadow transition-colors duration-300 hover:brightness-110 ${bgColor} ${textColor} transition-transform duration-300 hover:scale-105`;
      break;
    case Style.InlineText:
    default:
      internalClassName = `${className} underline text-blue-500`;
      break;
  }

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? '_blank' : undefined}
        className={internalClassName}
      >
        {children}
      </Link>
    );
  }
}
