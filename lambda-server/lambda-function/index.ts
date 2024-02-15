import { createTransport } from "nodemailer";
import { z } from "zod";
import "dotenv/config"; // reomve when bundling

// delete bottom function if transpilling or testing

const isEmail = z
  .string()
  .min(4, { message: "Email is to small" })
  .max(100, { message: "Email is to big" })
  .email("Email is not valid.");
const messageLength = z
  .string()
  .min(10, { message: "Message is to small" })
  .max(1000, { message: "Message is to big" });

export async function handler(event: { body: string }) {
  try {
    const parsedBody = JSON.parse(event.body);
    const { email, message, honeypot } = parsedBody;

    if (honeypot) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "https://www.navarrogardening.com",
          "Access-Control-Allow-Methods": "POST",
        } as const,
        body: JSON.stringify("Spam Detected"),
      };
    }

    isEmail.parse(email);
    messageLength.parse(message);

    // Creating nodemailer Transporter. auth has any for now. was getting erros until then
    const transporter = createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.MY_SERVER_EMAIL,
        pass: process.env.MY_MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      } as any,
    });

    // sending mail
    const info = await transporter.sendMail({
      from: process.env.MY_SERVER_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Navarro Gardening Service",
      html: `
        <h1>Email: ${email}</h1>
        <p>Message: ${message}</p>
        `,
    });
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "https://www.navarrogardening.com",
        "Access-Control-Allow-Methods": "POST",
      } as const,
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    if ("format" in error) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "https://www.navarrogardening.com",
          "Access-Control-Allow-Methods": "POST",
        } as const,
        body: JSON.stringify({
          success: false,
          error: error.format()._errors[0],
        }),
      };
    } else {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "https://www.navarrogardening.com",
          "Access-Control-Allow-Methods": "POST",
        } as const,
        body: JSON.stringify({ success: false, error: "Server Error" }),
      };
    }
  }
}
// delete if transpilling
handler({
  body: JSON.stringify({
    email: "test@gmail.com",
    message:
      "this is a random message that I am typing out just so it's long enough to send",
    honeypot: false,
  }),
});
