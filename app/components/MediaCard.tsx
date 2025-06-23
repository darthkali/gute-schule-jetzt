import Button from "@/app/components/Button";
import React from "react";

type CardProps = {
    title: string;
    text?: React.ReactNode;
    buttonTitle: string;
    buttonHref: string;
}

export default function MediaCard({
                                 title,
                                 text,
                                 buttonTitle,
                                 buttonHref,
                             }: CardProps
) {
    return (
        <div className={"bg-white rounded-xl p-4 h-full flex flex-col justify-between shadow"}>
            <p className={"font-bold mb-0"}>{title}</p>
            <p>{text}</p>
            <Button
                text={buttonTitle}
                href={buttonHref}
                bgColor="bg-[color:var(--color-accent)]"
                textColor="text-[color:var(--color-neutral)]"
                newTab={true}
                className={"mt-auto self-center"}
            />
        </div>
    );
}
