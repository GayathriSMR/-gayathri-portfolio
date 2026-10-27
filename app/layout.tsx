import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { profile } from '@/lib/portfolio-data'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const title = `${profile.name} — ${profile.headline}`
const description = `Portfolio of ${profile.name}, a Computer Science Engineering student and Data Analyst skilled in Python, SQL, Excel, Power BI, Tableau, Machine Learning and AI.`

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    'Gayathri S',
    'Data Analyst',
    'Data Analytics',
    'Machine Learning',
    'Artificial Intelligence',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
    'Portfolio',
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title,
    description,
    url: '/',
    siteName: `${profile.name} Portfolio`,
    images: [{ url: '/projects/supplytwin-ai.png', alt: 'SupplyTwin AI project preview' }],
  },
  twitter: { card: 'summary_large_image', title, description },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbfaff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
