import Image from "next/image";
import React, {ReactNode} from "react";

type ImageTextSectionProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    imagePosition?: "left" | "right";
    caption?: string;
    children: ReactNode;
};

export default function ImageTextFloatingSection({
                                                     imageSrc,
                                                     imageAlt,
                                                     imageWidth = 600,
                                                     imageHeight = 400,
                                                     imagePosition = "left",
                                                     caption,
                                                     children,
                                                 }: ImageTextSectionProps) {
    const floatClass = imagePosition === "right" ? "lg:float-right lg:ml-4" : "lg:float-left lg:mr-4";

    return (

        <div className="my-10">
            <h2>{caption}</h2>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className={`${floatClass} mb-2 mx-auto w-auto h-auto rounded shadow`}
            />
            <div className="clearfix">
                {children}
            </div>
        </div>
    );
}
