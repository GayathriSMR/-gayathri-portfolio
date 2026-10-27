import { Download, Eye, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile, resume } from '@/lib/portfolio-data'

export function ResumeCta() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-12 text-background md:px-14 md:py-16">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40" />
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 size-80 rounded-full bg-primary/50 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 left-10 size-72 rounded-full bg-brand-blue/40 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex max-w-xl items-start gap-5">
                <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-background/10 ring-1 ring-background/20 sm:flex">
                  <FileText className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 id="resume-heading" className="text-balance text-3xl font-semibold tracking-tight">
                    {resume.title}
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed text-background/70">{resume.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-background px-6 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download My Resume
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-background/25 px-6 text-sm font-medium transition-colors hover:bg-background/10"
                >
                  <Eye className="size-4" aria-hidden="true" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
