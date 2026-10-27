import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row md:px-8">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
            <LinkedinIcon className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
