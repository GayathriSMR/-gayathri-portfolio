import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { profile } from '@/lib/portfolio-data'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  {
    label: 'LinkedIn',
    value: profile.links.linkedin.replace('https://www.', ''),
    href: profile.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: profile.links.github.replace('https://', ''),
    href: profile.links.github,
    icon: GithubIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work with data together."
      description="Open to Data Analyst internships, entry-level roles, and hackathon collaborations. I usually reply within a couple of days."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="space-y-3">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="block truncate font-medium">{channel.value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
