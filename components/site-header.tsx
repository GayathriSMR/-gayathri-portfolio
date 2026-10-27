'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border/70 bg-background/75 shadow-sm shadow-primary/5 backdrop-blur-xl">
        <nav aria-label="Main" className="flex h-14 items-center justify-between px-4 md:px-5">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-brand-blue font-mono text-sm text-primary-foreground"
            >
              GS
            </span>
            <span>{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            download
            className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-9 items-center justify-center rounded-lg text-foreground hover:bg-accent md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </nav>

        <div
          id="mobile-nav"
          className={cn(
            'grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden',
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <ul className="min-h-0 space-y-1 px-3" inert={!open}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pb-3 pt-1">
              <a
                href={profile.resumeUrl}
                download
                className="flex h-10 items-center justify-center rounded-lg bg-foreground text-sm font-medium text-background"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
