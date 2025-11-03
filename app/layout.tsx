import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import React from 'react';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/Footer';

const poppinsFont = localFont({
  src: [
    {
      path: '/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
});

const interFont = localFont({
  src: [
    {
      path: '/fonts/Inter/static/Inter_28pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/Inter/static/Inter_28pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/Inter/static/Inter_28pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/Inter/static/Inter_28pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--inter-poppins',
});

const robotoFont = localFont({
  src: [
    {
      path: '/fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Neue Lernkultur Jetzt - Petition für Bildungswende',
  description:
    'Wir brauchen eine Schule mit Zukunft! Bereiten Sie mit uns eine Petition für eine Neuausrichtung des Schulsystems vor. Für Schulen, in denen Kinder aufblühen können.',
  openGraph: {
    title: 'Neue Lernkultur Jetzt - Petition für Bildungswende',
    description:
      'Wir brauchen eine Schule mit Zukunft! Bereiten Sie mit uns eine Petition für eine Neuausrichtung des Schulsystems vor. Für Schulen, in denen Kinder aufblühen können.',
    type: 'website',
    url: 'https://gute-schule-jetzt.de',
    siteName: 'Neue Lernkultur Jetzt',
    images: [
      {
        url: '/images/abstract-1264071_1920.png',
        width: 1200,
        height: 630,
        alt: 'Neue Lernkultur Jetzt - Bildungswende für Baden-Württemberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neue Lernkultur Jetzt - Petition für Bildungswende',
    description:
      'Wir brauchen eine Schule mit Zukunft! Bereiten Sie mit uns eine Petition für eine Neuausrichtung des Schulsystems.',
    images: ['/images/abstract-1264071_1920.png'],
  },
  keywords: [
    'Bildung',
    'Schule',
    'Baden-Württemberg',
    'Petition',
    'Bildungswende',
    'Schulreform',
    'Kinder',
    'Lernen',
  ],
  authors: [{ name: 'Neue Lernkultur Jetzt Initiative' }],
  creator: 'Neue Lernkultur Jetzt Initiative',
  publisher: 'Neue Lernkultur Jetzt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='de'
      className={`${poppinsFont.variable} ${robotoFont.variable} ${interFont.variable}`}
    >
      <body className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
