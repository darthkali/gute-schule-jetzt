import React from "react";

type CardProps = {
    text: React.ReactNode;
}

export default function InfoCard({
                                 text,
                             }: CardProps
) {
    return (
        <div className={"bg-[color:var(--color-neutral)] rounded-xl p-4 h-full shadow mb-4 break-inside-avoid"}>
            <p className={""}>{text}</p>
        </div>
    );
}
