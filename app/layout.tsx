import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, Nunito, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pixel = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

const body = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const hand = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "jamie's portfolio",
  icons: {
    icon: "/assets/ramen.png",
  },
  description:
    "A cozy pixel-art room you can explore. Click around to discover Jamie's projects, photography, books, music and little memories.",
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#241C1C',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${pixel.variable} ${body.variable} ${hand.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
