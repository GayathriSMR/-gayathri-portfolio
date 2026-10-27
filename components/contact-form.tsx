'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const fieldClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-ring/20'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'opened'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('opened')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
      aria-describedby="contact-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" maxLength={100} placeholder="Your name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={150}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="Tell me about the role or project..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="contact-status" role="status" className="text-sm text-muted-foreground">
          {status === 'opened' ? 'Your email app should now be open with the message ready to send.' : ''}
        </p>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          Send Message
          <Send className="size-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
