'use client'

import Link from "next/link"
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    text: string
    href?: string
    bgColor?: string
    textColor?: string
} & ButtonHTMLAttributes<HTMLButtonElement>; // Für z. B. type="submit"


export default function Button({
                                   text,
                                   href,
                                   bgColor = 'bg-orange-500',
                                   textColor = 'text-white',
                                   ...rest
                               }: ButtonProps) {

    const className = `inline-block px-6 py-3 rounded-full font-medium shadow transition-colors duration-300 hover:brightness-110 ${bgColor} ${textColor} transition-transform duration-300 hover:scale-105`;

    if (href) {
        return (
            <Link
                href={href}
                className={className}>
                {text}
            </Link>
        );
    }


    return (
        <button className={className} {...rest}>
            {text}
        </button>
    );
}

