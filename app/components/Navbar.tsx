import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Button from "@/app/components/Button";

export default function Navbar() {
    return (
        <nav className=" sticky top-0 z-50 bg-[color:var(--color-primary)] text-white">
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
                <div className="flex gap-6 items-start">
                    <Link href="/" className="hover:underline"><h3>Home</h3></Link>
                    <Link href="/ueber-uns" className="hover:underline"><h3>Über Uns</h3></Link>
                    <Link href="/kontakt" className="hover:underline"><h3>Kontakt</h3></Link>
                    <Link href="/testpage" className="hover:underline"><h3>testpage</h3></Link>
                </div>

                {/*  Petition-Button */}
                <div className={"ml-auto"}>
                    <Button
                        text="Petition unterzeichnen"
                        href="/kontakt"
                        bgColor="bg-[color:var(--color-accent)]"
                        textColor="text-[color:var(--color-neutral)]"
                    />
                </div>
            </div>


        </nav>
    )
}
