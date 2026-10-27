import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { projects, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

function ProjectCard({ project }: { project: Project }) {
  const external = project.liveUrl.startsWith('http')
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10',
        project.placeholder ? 'border-dashed border-primary/30' : 'border-border hover:border-primary/30',
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.placeholder ? (
          <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-accent-foreground backdrop-blur">
            Coming soon
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-balance text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-accent px-2 py-1 font-mono text-[11px] font-medium text-accent-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-2">
          <a
            href={project.liveUrl}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Project
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            <GithubIcon className="size-4" />
            GitHub
            <span className="sr-only">repository for {project.title}</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Applied analytics and machine learning projects that tackle real operational and environmental problems."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
