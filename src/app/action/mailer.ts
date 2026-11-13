"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const buildHtml = (email: string, mobile: string, message: string) => `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

            <!-- Шапка -->
            <tr>
              <td style="background:#4f46e5;padding:28px 32px;">
                <h1 style="margin:0;font-size:22px;color:#ffffff;">Новое сообщение от портфолио</h1>
              </td>
            </tr>

            <!-- Контакты -->
            <tr>
              <td style="padding:28px 32px 8px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eceef2;color:#6b7280;font-size:13px;width:110px;">Email</td>
                    <td style="padding:12px 0;border-bottom:1px solid #eceef2;font-size:15px;">
                      <a href="mailto:${email}" style="color:#4f46e5;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eceef2;color:#6b7280;font-size:13px;">Телефон</td>
                    <td style="padding:12px 0;border-bottom:1px solid #eceef2;font-size:15px;">
                      <a href="tel:${mobile}" style="color:#111827;text-decoration:none;">${mobile}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Сообщение -->
            <tr>
              <td style="padding:16px 32px 32px;">
                <p style="margin:0 0 8px;color:#6b7280;font-size:13px;">Сообщение</p>
                <div style="background:#f9fafb;border-left:4px solid #4f46e5;border-radius:6px;padding:16px 20px;color:#111827;font-size:15px;line-height:1.6;">
                  ${message.replace(/\n/g, "<br />")}
                </div>
              </td>
            </tr>

            <!-- Футер -->
            <tr>
              <td style="background:#f9fafb;padding:16px 32px;text-align:center;color:#9ca3af;font-size:12px;">
                Это письмо отправлено автоматически через форму на сайте
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export default async function sendMail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const mobile = String(formData.get("mobile") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!email || !message) {
    throw new Error("Email и сообщение обязательны");
  }

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_USER as string,
    replyTo: email,
    subject: "Новое сообщение с сайта",
    html: buildHtml(
      escapeHtml(email),
      escapeHtml(mobile || "—"),
      escapeHtml(message),
    ),
    // запасной вариант для клиентов без поддержки HTML
    text: `Email: ${email}\nТелефон: ${mobile || "—"}\n\nСообщение:\n${message}`,
  });

  if (error) {
    console.error("RESEND ERROR:", error);
    throw new Error(error.message);
  }

  return data;
}
