import { ArrowRight, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { HeroBackground } from '@/components/hero-background'
import { HeroVisual } from '@/components/hero-visual'
import { primaryLinkClass, secondaryLinkClass } from '@/components/section'
import { heroStats, profile } from '@/lib/portfolio-data'

export function Hero() {
  const [firstName, ...rest] = profile.name.split(' ')

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <HeroBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1.5 text-xs font-medium text-accent-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to internships & entry-level roles
          </p>

          <h1
            id="hero-heading"
            className="text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
          >
            {firstName} <span className="text-gradient">{rest.join(' ')}</span>
          </h1>

          <p className="mt-5 font-mono text-sm font-medium text-foreground/80 md:text-base">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={primaryLinkClass}>
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} download className={secondaryLinkClass}>
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className={secondaryLinkClass}>
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <dl className="flex gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <GithubIcon className="size-4" />
                <span className="sr-only">GitHub profile</span>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
                <span className="sr-only">LinkedIn profile</span>
              </a>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
