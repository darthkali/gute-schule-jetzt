import Image from "next/image";

type CardProps = {
    imageSrc: string;
    title: string;
    overlayColor?: string;
    textColor?: string;
}

export default function Card({
                                 imageSrc,
                                 title,
                                 overlayColor = 'bg-black/70',
                                 textColor = 'text-[color:var(--color-neutral)]'
                             }: CardProps
) {
    return (
        <div className="relative w-full aspect-[4/3] max-w-[180px] sm:max-w-[220px] md:max-w-[260px] rounded-xl overflow-hidden shadow-lg">


        {/* Hintergrundbild */}

            <Image
                src={imageSrc}
                alt="Card Image"
                className="object-cover"
                fill
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayColor}`}/>

            {/* Zentrierter Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <p className={`${textColor} text-center text-lg sm:text-xl md:text-2xl font-semibold px-4`}>
                {title}
                </p>
            </div>
        </div>
    );
}
