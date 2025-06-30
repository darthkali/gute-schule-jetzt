'use client'
import Image from "next/image";
import { useState } from "react";
import Button from "@/app/components/Button";
import Toast from "@/app/components/Toast";


export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: ""});
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setToast({ message: "Nachricht erfolgreich gesendet!", type: "success" });
            setFormData({ name: "", email: "", message: "", honeypot: ""});
        } else {
            const error = await res.json();
            setToast({ message: error?.error || "Fehler beim Senden.", type: "error" });
        }
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

                    <input
                        type="text"
                        name="honeypot"
                        value=""
                        onChange={() => {}}
                        className="hidden aria-hidden tabIndex={-1}"
                        autoComplete="off"
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
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=="
                />
            </div>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>

    );
}
