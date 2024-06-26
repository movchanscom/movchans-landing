import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: `Сообщение с сайта <${process.env.GMAIL_EMAIL}>`,
    to: process.env.RECEIVER_EMAILS,
    subject: body.subject,
    text: body.text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email', error },
      { status: 500 }
    );
  }
}
