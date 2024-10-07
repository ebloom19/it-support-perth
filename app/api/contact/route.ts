import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data and return a success response
  console.log('Form submission:', { name, email, subject, message });

  // Simulate an API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json({ message: 'Form submitted successfully' });
}