'use client'

import Link from "next/link"
import {ButtonHTMLAttributes} from "react";

type ButtonProps = {
    text: string
    href?: string
    bgColor?: string
    textColor?: string
    newTab?: boolean
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;


export default function Button({
                                   text,
                                   href,
                                   newTab = false,
                                   bgColor = 'bg-[color:var(--color-neutral)]',
                                   textColor = 'text-[color:var(--color-text)]',
                                   className = '',
                                   ...rest
                               }: ButtonProps) {

    const classNameInternal = `${className} text-xs sm:text-sm md:text-base inline-block px-6 py-3 rounded-full  font-bold shadow transition-colors duration-300 hover:brightness-110 ${bgColor} ${textColor} transition-transform duration-300 hover:scale-105`;

    if (href) {
        return (
            <Link
                href={href}
                target={newTab ? "_blank" : undefined}
                className={classNameInternal}>
                {text}
            </Link>
        );
    }


    return (
        <button className={classNameInternal} {...rest}>
            {text}
        </button>
    );
}

