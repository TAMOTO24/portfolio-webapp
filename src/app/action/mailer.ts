"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendMail(formData: FormData) {
  const email = formData.get("email");
  const mobile = formData.get("mobile");
  const message = formData.get("message");

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_USER as string,
    subject: `New message from ${name}`,
    text: `
Email: ${email}
Mobile: ${mobile}

Message:
${message}
    `,
  });

  if (error) {
    console.error("RESEND ERROR:", error);
    throw new Error(error.message);
  }

  console.log("EMAIL SENT:", data);

  return data;
}
