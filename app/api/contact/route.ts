import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, category, email, message, honeypot } = await req.json();

    if (honeypot) {
        return NextResponse.json({ error: 'Spam erkannt' }, { status: 400 });
    }

    if (!name || !category || !email || !message) {
        return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 });
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error('Email configuration missing. Please check environment variables.');
        return NextResponse.json({ error: 'E-Mail-Service ist nicht konfiguriert' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Kontaktformular Edunite" <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Neue Nachricht von Edunite - ${category}`,
            text: `Name: ${name}\nKategorie: ${category}\nE-Mail: ${email}\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Fehler beim Senden der Mail:', error);
        return NextResponse.json({ error: 'Fehler beim Senden der Nachricht' }, { status: 500 });
    }
}
