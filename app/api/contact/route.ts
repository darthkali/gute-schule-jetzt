import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function sendToRocketChat(
  name: string,
  category: string,
  email: string,
  message: string
) {
  const webhookUrl = process.env.ROCKETCHAT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      'RocketChat webhook URL not configured. Skipping notification.'
    );
    return;
  }

  try {
    const payload = {
      text: `📬 Neue Kontaktanfrage\n\nName: ${name}\nKategorie: ${category}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(
        `RocketChat notification failed with status ${response.status}`
      );
    }
  } catch (error) {
    console.error('Error sending RocketChat notification:', error);
  }
}

export async function POST(req: NextRequest) {
  const { name, category, email, message, honeypot } = await req.json();

  if (honeypot) {
    return NextResponse.json({ error: 'Spam erkannt' }, { status: 400 });
  }

  if (!name || !category || !email || !message) {
    return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 });
  }

  // Check if email configuration is available
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASSWORD
  ) {
    console.error(
      'Email configuration missing. Please check environment variables.'
    );
    return NextResponse.json(
      { error: 'E-Mail-Service ist nicht konfiguriert' },
      { status: 500 }
    );
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
      from: `"Kontaktformular Neue-Lernkultur-Jetzt" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Neue Nachricht von Neue-Lernkultur-Jetzt - ${category}`,
      text: `Name: ${name}\nKategorie: ${category}\nE-Mail: ${email}\n\n${message}`,
    });

    // Send notification to RocketChat (non-blocking)
    await sendToRocketChat(name, category, email, message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fehler beim Senden der Mail:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Nachricht' },
      { status: 500 }
    );
  }
}
