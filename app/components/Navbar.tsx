'use client'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Button from "@/app/components/Button";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/ueber-uns", text: "Über Uns" },
        { href: "/kontakt", text: "Kontakt" }
    ];
    const showDevBanner = process.env.NEXT_PUBLIC_SHOW_DEV_BANNER === 'true';

    return (
        <nav className=" sticky top-0 z-50 bg-[color:var(--color-primary)] text-white">
            {showDevBanner && (
                <div className="sticky top-0 z-50 bg-red-500 text-white text-center py-1">
                    Preview - Seite ist noch in Arbeit.
                </div>
            )}
             {/*Mobile Burger Menu*/}
            <div className="sm:hidden">
                <MobileMenu/>
            </div>

            <div className={"hidden innerBox items-center sm:flex"}>
                {/* Logo  */}

                    <Image
                        src="/logo/edunite-logo_neu.svg"
                        alt="EduUnite Logo"
                        width={70}
                        height={70}
                        className={"pr-4"}
                    />


                {/* Navigation */}
                <div className="flex gap-6 items-start font-semibold">
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
                                <p className="font-semibold">{text}</p>
                            </Link>
                        );
                    })}
                </div>

                {/*  Petition-Button */}
                <div className={"ml-auto"}>
                    <Button
                        text="Petition an den Landtag unterzeichnen"
                        href="/kontakt"
                        bgColor="bg-[color:var(--color-accent)]"
                    />
                </div>
            </div>
        </nav>
    )
}
