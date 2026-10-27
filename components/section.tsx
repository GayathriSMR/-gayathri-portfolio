import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export const primaryLinkClass =
  'inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40'

export const secondaryLinkClass =
  'inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-6 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40'
