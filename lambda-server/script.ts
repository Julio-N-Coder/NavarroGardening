import express from "express";
import cors from "cors";
import "dotenv/config";
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { isEmail, messageLength } from "../src/lib/schema";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// this will be hosted on lambda so will be configured to do so. nodejs is
// just to replicate how the lambda function would work and for testing
app.post("/lambda", async (req: Request, res: Response) => {
  try {
    const { email, message, honeypot } = req.body;

    if (honeypot) {
      res.status(400).send("Spam Detected");
    }

    isEmail.parse(email);
    messageLength.parse(message);

    // Creating nodmailer Transporter. auth has any for now. was getting erros until then
    const transporter = nodemailer.createTransport({
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
    console.log(info);
    return res.status(200).json({ success: true });
  } catch (error: any) {
    if ("format" in error) {
      console.log(error.format()._errors[0]);
      return res
        .status(400)
        .json({ success: false, error: error.format()._errors[0] });
    } else {
      console.log(error);
      return res.status(500).json({ success: false, error: "Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("server listening on 3001");
});
