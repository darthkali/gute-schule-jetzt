import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#2e3e50] text-white py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-evenly flex-wrap gap-6 px-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo/edunite-logo.svg"
                        alt="EduUnite Logo"
                        width={40}
                        height={40}
                    />
                </div>

                {/* Links */}
                <div className="flex gap-6 flex-wrap text-sm font-medium justify-center">
                    <a href="/kontakt" className="hover:underline">Kontakt</a>
                    <a href="/impressum" className="hover:underline">Impressum</a>
                    <a href="/datenschutz" className="hover:underline">Datenschutz</a>
                    <span className="text-sm  break-words">Gemeinnützige Webseite</span>
                </div>
            </div>
        </footer>
    )
}
