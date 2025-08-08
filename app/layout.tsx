import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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

const interFont = localFont({
    src: [
        {
            path: "/fonts/Inter/static/Inter_28pt-Bold.ttf",
            weight: '700',
            style: 'normal',
        },
        {
            path: "/fonts/Inter/static/Inter_28pt-SemiBold.ttf",
            weight: '600',
            style: 'normal',
        },
        {
            path: "/fonts/Inter/static/Inter_28pt-Medium.ttf",
            weight: '500',
            style: 'normal',
        },
        {
            path: "/fonts/Inter/static/Inter_28pt-Regular.ttf",
            weight: '400',
            style: 'normal',
        },

    ],
    variable: '--inter-poppins'
})

const robotoFont = localFont({
    src: [
        {
            path: "/fonts/Roboto-Regular.ttf",
            weight: '400',
            style: 'normal',
        },
        {
            path: "/fonts/Roboto-Bold.ttf",
            weight: '700',
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
        <html lang="de" className={`${poppinsFont.variable} ${robotoFont.variable} ${interFont.variable}`}>
        <body className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
        </body>

        </html>
    );
}
