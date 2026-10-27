import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { skillCategories } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit built for analysis and intelligent systems."
      description="From querying and cleaning data to modelling and deploying AI-powered apps."
      className="bg-muted/50"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category, i) => {
          const Icon = category.icon
          return (
            <Reveal as="li" key={category.title} delay={i * 80}>
              <article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-brand-blue/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
