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

    return (
        <nav className=" sticky top-0 z-50 bg-[color:var(--color-primary)] text-white">
            <div className=" sticky top-0 z-50 bg-red-500 text-white text-center">
                Preview - Seite ist noch in Arbeit.
            </div>
            {/* Mobile Burger Menu */}
            <div className="sm:hidden">
                <MobileMenu/>
            </div>

            <div className={"hidden innerBox items-center sm:flex"}>
                {/* Logo  */}
                <div className="pr-4 items-center flex gap-2">
                    <Image
                        src="/logo/edunite-logo.svg"
                        alt="EduUnite Logo"
                        width={32}
                        height={32}
                    />
                </div>

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
                        textColor="text-[color:var(--color-neutral)]"
                    />
                </div>
            </div>
        </nav>
    )
}
