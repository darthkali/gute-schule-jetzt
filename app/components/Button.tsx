'use client'

import Link from "next/link"

type ButtonProps = {
    text: string
    href: string
    bgColor?: string
    textColor?: string
}

export default function Button({
                                   text,
                                   href,
                                   bgColor = 'bg-orange-500',
                                   textColor = 'text-white',
                               }: ButtonProps) {
    return (
        <Link
            href={href}
            className={`inline-block px-6 py-3 rounded-full font-medium shadow transition-colors duration-300 hover:brightness-110 ${bgColor} ${textColor} transition-transform duration-300 hover:scale-105`}

        >
            {text}
        </Link>
    )
}
