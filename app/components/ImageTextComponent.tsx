import Image from "next/image";
import React, {ReactNode} from "react";

type ImageTextSectionProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    imagePosition?: "left" | "right";
    children: ReactNode;
};

export default function ImageTextSection({
                                             imageSrc,
                                             imageAlt,
                                             imageWidth = 600,
                                             imageHeight = 400,
                                             imagePosition = "left",
                                             children,
                                         }: ImageTextSectionProps) {
    const isImageRight = imagePosition === "right";

    return (

        <div className={`flex flex-col ${
            isImageRight ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-6 my-10 order-1 lg:order-none`}>
            <div className="lg:w-2/3 w-full">
                {children}
            </div>

            <div className="lg:w-1/3 w-full order-2 lg:order-none">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className="w-full h-auto rounded shadow"
                />
            </div>
        </div>
    );
}
