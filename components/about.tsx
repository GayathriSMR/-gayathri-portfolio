import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { about } from '@/lib/portfolio-data'

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Curious about data, driven by real-world impact.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">At a glance</h3>
            </div>
            <dl className="divide-y divide-border">
              {about.highlights.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="text-sm text-muted-foreground">{item.label}</dt>
                  <dd className="text-right text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
