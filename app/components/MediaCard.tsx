import Button from "@/app/components/Button";
import React from "react";
import YouTubePreview from "@/app/components/ YouTubePreview";

type CardProps = {
    title: string;
    text?: React.ReactNode;
    buttonTitle?: string;
    buttonHref: string;
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
}: CardProps) {
  const youtubeId = extractYouTubeId(buttonHref);

    return (
    <div className="bg-white rounded-xl p-4 h-full flex flex-col justify-between shadow">
      <p className="font-bold mb-2">{title}</p>
      <div className="mb-4">{text}</div>

      {youtubeId ? (

        <div className="aspect-video w-full mt-4">
            <YouTubePreview videoId={youtubeId} />

        </div>
      ) : (
            <Button
                text={buttonTitle ?? ""}
                href={buttonHref}
                bgColor="bg-[color:var(--color-accent)]"
                textColor="text-[color:var(--color-neutral)]"
                newTab={true}
          className="mt-auto self-center"
            />
      )}
        </div>
    );
}
