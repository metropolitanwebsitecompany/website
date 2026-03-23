import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { name, email, message, website } = body as Record<string, unknown>

  // Honeypot — bots fill hidden fields, humans don't
  if (typeof website === 'string' && website.length > 0) {
    // Silently succeed so bots don't know they were caught
    return NextResponse.json({ ok: true })
  }

  // Server-side validation
  const errors: string[] = []

  if (typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.')
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.push('A valid email address is required.')
  }
  if (typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.')
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0] }, { status: 422 })
  }

  const cleanName = (name as string).trim()
  const cleanEmail = (email as string).trim()
  const cleanMessage = (message as string).trim()

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Metropolitan Contact Form <contact@metropolitanwebsitecompany.com>',
      to: process.env.CONTACT_EMAIL ?? 'hello@metropolitanwebsitecompany.com',
      replyTo: cleanEmail,
      subject: `New inquiry from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      html: `
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
        <br />
        <p>${cleanMessage.replace(/\n/g, '<br />')}</p>
      `,
    })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send. Please email us directly.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
