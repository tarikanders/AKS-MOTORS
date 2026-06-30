import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Destinataire des leads + expéditeur (configurables via variables d'env Vercel).
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'contact@aksmotors.com';
// Tant que le domaine aksmotors.com n'est pas vérifié dans Resend, on utilise
// l'expéditeur de test 'onboarding@resend.dev'. Après vérification du domaine,
// définir CONTACT_FROM_EMAIL = 'AKS Motors <contact@aksmotors.com>'.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'AKS Motors <onboarding@resend.dev>';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  car?: string;
  budget?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Service d'envoi non configuré (RESEND_API_KEY manquante)." },
      { status: 500 },
    );
  }

  let data: ContactPayload;
  try {
    data = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const firstName = (data.firstName ?? '').trim();
  const lastName = (data.lastName ?? '').trim();
  const email = (data.email ?? '').trim();
  const message = (data.message ?? '').trim();

  // Validation minimale (mêmes champs requis que le formulaire).
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 });
  }

  const phone = (data.phone ?? '').trim();
  const car = (data.car ?? '').trim();
  const budget = (data.budget ?? '').trim();

  const html = `
    <h2>Nouvelle demande — AKS Motors</h2>
    <p><strong>Nom :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ''}
    ${car ? `<p><strong>Véhicule recherché :</strong> ${escapeHtml(car)}</p>` : ''}
    ${budget ? `<p><strong>Budget :</strong> ${escapeHtml(budget)}</p>` : ''}
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande — ${firstName} ${lastName}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error: "L'envoi a échoué." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur lors de l’envoi.' }, { status: 500 });
  }
}
