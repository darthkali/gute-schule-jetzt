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
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=="
                />
            </div>
        </div>
    );
}
