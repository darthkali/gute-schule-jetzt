import Button from "@/app/components/Button";
import React from "react";
import YouTubePreview from "@/app/components/ YouTubePreview";
import Image from "next/image";

type CardProps = {
    title: string;
    text?: React.ReactNode;
    buttonTitle?: string;
    buttonHref: string;
    imageSrc?: string;
};

function extractYouTubeId(url: string): string | null {
    const regex =
        /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

export default function MediaCard({
                                      title,
                                      text,
                                      buttonTitle,
                                      buttonHref,
                                      imageSrc = "",
                                  }: CardProps) {
    const youtubeId = extractYouTubeId(buttonHref);

    return (
        <div className="bg-white rounded-xl p-4  flex flex-col justify-between shadow">
            <p className="font-bold mb-2">{title}</p>
            <div className="mb-4">{text}</div>

            {youtubeId ? (

                <div className="aspect-video w-full mt-4">
                    <YouTubePreview videoId={youtubeId}/>

                </div>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src={imageSrc}
                        alt={"imageAlt"}
                        width={1000}
                        height={1000}
                        className="w-30 h-auto block mx-auto"
                    />
                    <Button
                        text={buttonTitle ?? ""}
                        href={buttonHref}
                        bgColor="bg-[color:var(--color-accent)]"
                        newTab={true}
                    />
                </div>

            )}
        </div>
    );
}
