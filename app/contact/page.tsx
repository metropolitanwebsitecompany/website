'use client'

import { useState, useRef } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <>
        <p className="font-mono text-[0.72rem] text-[#666] tracking-[0.1em] uppercase mb-[18px]">
          Toledo, Ohio
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4">
          Message sent.
        </h1>
        <p className="text-[1.05rem] text-[#333] max-w-[520px] mb-8">
          We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[0.875rem] text-[#666] hover:text-[#0f0f0f] transition-colors"
        >
          Send another message →
        </button>
      </>
    )
  }

  return (
    <>
      <p className="font-mono text-[0.72rem] text-[#666] tracking-[0.1em] uppercase mb-[18px]">
        Toledo, Ohio
      </p>

      <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4">
        Let&apos;s talk about your project.
      </h1>
      <p className="text-[1.05rem] text-[#333] max-w-[520px] mb-12">
        Free consultation. Tell us what you&apos;re building and we&apos;ll get back within one business day.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
        {/* Honeypot — hidden from real users, bots fill it in */}
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        />

        <div className="grid gap-[6px]">
          <label
            htmlFor="name"
            className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            disabled={status === 'submitting'}
            className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors disabled:opacity-50"
          />
        </div>

        <div className="grid gap-[6px]">
          <label
            htmlFor="email"
            className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            disabled={status === 'submitting'}
            className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors disabled:opacity-50"
          />
        </div>

        <div className="grid gap-[6px]">
          <label
            htmlFor="message"
            className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase"
          >
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What are you building? Any timeline or budget in mind?"
            disabled={status === 'submitting'}
            className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors min-h-[140px] resize-y disabled:opacity-50"
          />
        </div>

        {status === 'error' && (
          <p className="font-mono text-[0.8rem] text-red-600 -mt-1">{errorMsg}</p>
        )}

        <div className="flex items-center gap-6 mt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-[22px] py-[11px] bg-[#0f0f0f] text-white border-0 rounded-[6px] text-[0.9rem] font-medium cursor-pointer hover:bg-[#2a2a2a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
          <a
            href="mailto:hello@metropolitanwebsitecompany.com"
            className="text-[0.875rem] text-[#666] no-underline hover:text-[#0f0f0f] transition-colors"
          >
            hello@metropolitanwebsitecompany.com
          </a>
        </div>
      </form>
    </>
  )
}
