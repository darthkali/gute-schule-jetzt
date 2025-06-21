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
        <div className="relative w-70 h-50 rounded-xl overflow-hidden shadow-lg">
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
                <h2 className={`${textColor} text-center`}>
                    {title}
                </h2>
            </div>
        </div>
    );
}
