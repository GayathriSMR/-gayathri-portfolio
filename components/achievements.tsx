import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { achievements, certifications } from '@/lib/portfolio-data'

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & milestones">
      <ul className="grid gap-5 md:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = item.icon
          return (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-linear-to-br from-primary/15 to-brand-blue/10 blur-2xl transition-opacity group-hover:opacity-100 md:opacity-60"
                />
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-brand-blue text-primary-foreground shadow-lg shadow-primary/25">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="relative mt-6 font-mono text-xs uppercase tracking-wider text-primary">
                  {item.tag}
                </p>
                <h3 className="relative mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                {item.credentialUrl && (
  <a
    href={item.credentialUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
  >
    View Certificate ↗
  </a>
)}
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning" className="pt-0 md:pt-0">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => {
          const Icon = cert.icon
          const content = (
            <>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.area}</p>
              </div>
            </>
          )
          const cardClass =
            'group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10'
          return (
            <Reveal as="li" key={cert.title} delay={i * 70}>
              {cert.credentialUrl ? (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {content}
                </a>
              ) : (
                <article className={cardClass}>{content}</article>
              )}
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
