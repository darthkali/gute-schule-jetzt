'use client'
import Image from "next/image";
import { useState } from "react";
import Button from "@/app/components/Button";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Gesendet:", formData);
        // Hier könnte z.B. ein API-Call erfolgen
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

            <div className="p-10 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-6">Kontaktiere uns</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Nachricht</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <Button
                        text="Nachricht senden"
                        bgColor="bg-[color:var(--color-accent)]"
                        textColor="text-[color:var(--color-neutral)]"
                        type="submit"
                    />
                </form>
            </div>

            <div className="relative h-64 md:h-auto">
                <Image
                    src="/images/hoch/solidarity-649713_1920.jpg"
                    alt="Solidarität"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-xl"
                />
            </div>

        </div>
    );
}
