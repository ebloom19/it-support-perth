import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  service?: string;
  subject?: string;
  captchaToken: string;
}

interface HCaptchaVerificationResponse {
  success: boolean;
  'error-codes'?: string[];
}

const HCAPTCHA_VERIFY_URL = 'https://hcaptcha.com/siteverify';

const getClientIp = (req: Request): string | null => {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || null;
  }

  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return null;
};

const verifyHCaptcha = async (token: string, req: Request): Promise<{ success: boolean; status: number; error?: string }> => {
  if (!process.env.HCAPTCHA_SECRET_KEY) {
    console.error('hCaptcha verification skipped: HCAPTCHA_SECRET_KEY is not configured');
    return {
      success: false,
      status: 500,
      error: 'Captcha service is not configured. Please contact support.',
    };
  }

  const params = new URLSearchParams();
  params.append('secret', process.env.HCAPTCHA_SECRET_KEY);
  params.append('response', token);

  const clientIp = getClientIp(req);
  if (clientIp) {
    params.append('remoteip', clientIp);
  }

  try {
    const verificationResponse = await fetch(HCAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!verificationResponse.ok) {
      console.error(`hCaptcha verification HTTP error: ${verificationResponse.status}`);
      return {
        success: false,
        status: 503,
        error: 'Captcha verification is temporarily unavailable. Please try again.',
      };
    }

    const verificationData = await verificationResponse.json() as HCaptchaVerificationResponse;

    if (!verificationData.success) {
      console.error('hCaptcha verification failed', {
        errorCodes: verificationData['error-codes'] || [],
      });
      return {
        success: false,
        status: 400,
        error: 'Captcha verification failed. Please try again.',
      };
    }

    return { success: true, status: 200 };
  } catch (error) {
    console.error('hCaptcha verification request failed', error);
    return {
      success: false,
      status: 503,
      error: 'Captcha verification is temporarily unavailable. Please try again.',
    };
  }
};

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Resend API key not configured' },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const payload: ContactFormData = body;

    if (!payload.captchaToken) {
      return NextResponse.json(
        { error: 'Captcha verification failed. Please complete the captcha and try again.' },
        { status: 400 }
      );
    }

    const captchaVerification = await verifyHCaptcha(payload.captchaToken, req);
    if (!captchaVerification.success) {
      return NextResponse.json(
        { error: captchaVerification.error || 'Captcha verification failed. Please try again.' },
        { status: captchaVerification.status }
      );
    }

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { error: 'Missing required contact fields' },
        { status: 400 }
      );
    }

    const subject = payload.subject || payload.service || 'General Inquiry';

    const { data: emailData, error } = await resend.emails.send({
      from: 'IT Support Perth <info@itsupportperth.net.au>',
      to: ['info@itsupportperth.net'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${payload.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${payload.service || 'Not specified'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message}</p>
      `,
      replyTo: payload.email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      id: emailData?.id 
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
