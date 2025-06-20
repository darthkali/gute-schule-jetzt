import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const poppinsFont = localFont({
    src: [
        {
            path: "/fonts/Poppins-SemiBold.ttf",
            weight: '600',
            style: 'normal',
        },
        {
            path: "/fonts/Poppins-Medium.ttf",
            weight: '500',
            style: 'normal',
        }
    ],
    variable: '--font-poppins'
})

const robotoFont = localFont({
    src: [
        {
            path: "/fonts/Roboto-Regular.ttf",
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "EdUnite",
  description: "GUTE SCHULE JETZT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${robotoFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
