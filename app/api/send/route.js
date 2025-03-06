// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {body} = await req.json();
  const {email,subject,message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['sarthakdongare8@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for reaching out to me. I will get back to you as soon as possible.</p>
          <p>{message}</p>
          <p>Regards,</p>
          <p>Sarthak Dongare</p>
        </>
      )
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}