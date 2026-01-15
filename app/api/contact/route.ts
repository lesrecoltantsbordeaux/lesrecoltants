import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  eventDate?: string;
  guestCount?: string;
}

const subjectLabels: Record<string, string> = {
  reservation: 'Réserver une table',
  groupe: 'Groupe & Privatisation',
  ferme: 'La Ferme & Nos produits',
  autre: 'Autre demande',
};

const subjectEmojis: Record<string, string> = {
  reservation: '🍽️',
  groupe: '🎉',
  ferme: '🌱',
  autre: '💬',
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { firstName, lastName, email, phone, subject, message, eventDate, guestCount } = body;

    // Validation basique
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    const emoji = subjectEmojis[subject] || '📩';
    const subjectLabel = subjectLabels[subject] || subject;

    // Construction du contenu HTML de l'email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #4A7C59 0%, #3d6549 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                ${emoji} Nouveau message
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                ${subjectLabel}
              </p>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 30px 40px 20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <h2 style="color: #4A7C59; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                      Coordonnées
                    </h2>
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong style="color: #666;">Nom :</strong> ${firstName} ${lastName}
                    </p>
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong style="color: #666;">Email :</strong> <a href="mailto:${email}" style="color: #4A7C59; text-decoration: none;">${email}</a>
                    </p>
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong style="color: #666;">Téléphone :</strong> <a href="tel:${phone}" style="color: #4A7C59; text-decoration: none;">${phone}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${subject === 'groupe' && (eventDate || guestCount) ? `
          <!-- Event Details -->
          <tr>
            <td style="padding: 0 40px 20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fff8e6; border-radius: 8px; border-left: 4px solid #f5a623;">
                <tr>
                  <td style="padding: 20px;">
                    <h2 style="color: #4A7C59; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                      🎯 Détails de l'événement
                    </h2>
                    ${eventDate ? `
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong style="color: #666;">Date souhaitée :</strong> ${new Date(eventDate).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    ` : ''}
                    ${guestCount ? `
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong style="color: #666;">Nombre de personnes :</strong> ${guestCount} convives
                    </p>
                    ` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ''}

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <h2 style="color: #4A7C59; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Message
              </h2>
              <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px;">
                <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px;">
                    <a href="mailto:${email}" style="display: inline-block; background-color: #4A7C59; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-size: 14px; font-weight: 600;">
                      ✉️ Répondre par email
                    </a>
                  </td>
                  <td align="center" style="padding: 10px;">
                    <a href="tel:${phone}" style="display: inline-block; background-color: #333; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-size: 14px; font-weight: 600;">
                      📞 Appeler
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #333; padding: 20px 40px; text-align: center;">
              <p style="color: #999; margin: 0; font-size: 12px;">
                Message envoyé depuis le formulaire de contact de lesrecoltants.fr
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Les Récoltants <onboarding@resend.dev>',
      to: ['contact@lesrecoltants.fr'],
      replyTo: email,
      subject: `${emoji} ${subjectLabel} - ${firstName} ${lastName}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }

    // Email de confirmation au client
    await resend.emails.send({
      from: 'Les Récoltants <onboarding@resend.dev>',
      to: [email],
      subject: '✅ Message bien reçu - Les Récoltants',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #4A7C59 0%, #3d6549 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                Merci ${firstName} !
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 16px;">
                Votre message a bien été envoyé
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #333; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                Nous avons bien reçu votre demande concernant : <strong style="color: #4A7C59;">${subjectLabel}</strong>
              </p>

              <p style="color: #333; font-size: 16px; line-height: 1.7; margin: 0 0 30px 0;">
                Notre équipe vous répondra dans les <strong>24 à 48 heures</strong> ouvrées.
              </p>

              <!-- Contact Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="color: #4A7C59; margin: 0 0 15px 0; font-size: 16px;">
                      📍 En attendant, vous pouvez nous joindre :
                    </h3>
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong>Téléphone :</strong> <a href="tel:0556381647" style="color: #4A7C59; text-decoration: none;">05 56 38 16 47</a>
                    </p>
                    <p style="margin: 8px 0; color: #333; font-size: 15px;">
                      <strong>Adresse :</strong> 18 rue Sainte Colombe, 33000 Bordeaux
                    </p>
                    <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">
                      <em>Lundi-Mardi : 12h-14h | Mercredi-Samedi : 12h-14h & 19h-21h</em>
                    </p>
                  </td>
                </tr>
              </table>

              <p style="color: #333; font-size: 16px; line-height: 1.7; margin: 30px 0 0 0;">
                À très bientôt chez Les Récoltants !
              </p>

              <p style="color: #4A7C59; font-size: 16px; font-style: italic; margin: 20px 0 0 0;">
                — L'équipe des Récoltants 🌿
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #333; padding: 25px 40px; text-align: center;">
              <p style="color: #ffffff; margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">
                Les Récoltants
              </p>
              <p style="color: #999; margin: 0; font-size: 12px;">
                Restaurant en direct du champ à l'assiette à Bordeaux
              </p>
              <p style="margin: 15px 0 0 0;">
                <a href="https://lesrecoltants.fr" style="color: #4A7C59; text-decoration: none; font-size: 13px;">lesrecoltants.fr</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true, id: data?.id });

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
