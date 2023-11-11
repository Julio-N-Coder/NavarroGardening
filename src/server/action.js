'use server'

import nodemailer from 'nodemailer'
import validator from 'validator'
import { redirect } from 'next/navigation'

export default async function sendEmail(formData) {
  const honeypot = formData.get('honeypot');
  if (honeypot) throw new Error('Spam detected');
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

  } catch (err) {
    error = err;
    return { message: `Something went wrong with the server Message: ${err.message}` }
  }
  if (!error) redirect(`/sent`);
  return { message: `Message Sent` }
}
