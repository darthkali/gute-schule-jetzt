import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message, honeypot } = await req.json();

    if (honeypot) {
        return NextResponse.json({ error: 'Spam erkannt' }, { status: 400 });
    }

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: "Kontaktformular Edunite",
            to: process.env.EMAIL_TO,
            subject: 'Neue Nachricht von Edunite',
            text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Fehler beim Senden der Mail:', error);
        return NextResponse.json({ error: 'Fehler beim Senden der Nachricht' }, { status: 500 });
    }
}
