'use server'

import nodemailer from 'nodemailer'
import validator from 'validator'
import { redirect } from 'next/navigation'

export default async function sendEmail(formData) {
  const email = formData.get('email');
  if (!validator.isEmail(email)) throw new Error('Incorrect Email')
  const message = validator.escape(formData.get('message'));
  let error;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.MY_SERVER_EMAIL,
      pass: process.env.MY_MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  })

  try {
    // sending mail
    const info = await transporter.sendMail({
      from: process.env.MY_SERVER_EMAIL,
      to: process.env.MY_EMAIL,
      subject: 'Navarro Gardening Service',
      html: `
      <h1>Email: ${email}</h1>
      <p>Message: ${message}</p>
      `
    })
    console.log(info);
    console.log('email successfully sent!')

  } catch (err) {
    console.log(err);
    error = err;
  }
  if (!error) redirect(`/sent`);
}
