import { Briefcase, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've applied my skills" className="bg-muted/50">
      <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
        {experiences.map((exp) => (
          <Reveal as="li" key={`${exp.company}-${exp.role}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-6 flex size-6 items-center justify-center rounded-full border-4 border-background bg-primary md:-left-[53px]"
            />
            <article className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <Briefcase className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <p className="w-fit rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                  {exp.period}
                </p>
              </div>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5" aria-label="Tools used">
                {exp.tools.map((tool) => (
                  <li key={tool} className="rounded-md bg-accent px-2 py-1 font-mono text-[11px] font-medium text-accent-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
