import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

const font = Barlow({
  weight: ['200', '400','500','600', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Agência Jussi',
  description: 'Teste Desenvolvedor Jussi',
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  )
}
