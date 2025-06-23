import Image from "next/image";
import Link from "next/link";

type CardProps = {
    imageSrc: string;
    title: string;
    href: string;
    overlayColor?: string;
    textColor?: string;
}

export default function Card({
                                 imageSrc,
                                 title,
                                 href,
                                 overlayColor = 'bg-[color:var(--color-primary)]/70',
                                 textColor = 'text-[color:var(--color-neutral)]'
                             }: CardProps
) {
    return (
        <Link
            href={href}
            className="group shadow-xl relative w-full aspect-[4/3] max-w-[180px] sm:max-w-[220px]
            md:max-w-[260px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">

            <Image
                src={imageSrc}
                alt={title}
                className="object-cover "
                fill
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayColor} `}/>

            <div className="absolute inset-0 flex items-center justify-center">
                <p className={`${textColor} text-center text-lg sm:text-xl md:text-2xl font-semibold px-4`}>
                    {title}
                </p>
            </div>

        </Link>

    );
}
