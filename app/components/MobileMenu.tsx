'use client'

import {useState} from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="sticky top-0 z-50  min-h-15 bg-[color:var(--color-primary)]">
                {/* Mobile Menu */}
                {open && (
                    <div
                        className="sticky inset-0 text-white shadow-lg flex flex-col items-center gap-4 py-4 z-40 " >
                        <Link href="/" className="hover:underline" onClick={() => setOpen(false)}><h2>Home</h2></Link>
                        <Link href="/ueber-uns" className="hover:underline" onClick={() => setOpen(false)}><h2>Über
                            Uns</h2></Link>
                        <Link href="/kontakt" className="hover:underline" onClick={() => setOpen(false)}>
                            <h2>Kontakt</h2></Link>
                        <Link href="/petition" onClick={() => setOpen(false)}>
                            <button
                                className="bg-[#f59e0b] text-black px-4 py-2 rounded-md hover:bg-[#facc15] transition">
                                Petition unterzeichnen
                            </button>
                        </Link>
                    </div>
                )}

            {/* Toggle Button */}
            <button
                className="fixed top-0 right-0 text-white p-5 z-50"
                onClick={() => setOpen(!open)}
                aria-label="Menü öffnen"
            >
                <FontAwesomeIcon icon={open ? faXmark : faBars} size="xl"/>
            </button>
        </div>


    )
}
