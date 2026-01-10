import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CMM - Private Growth Operating System for Contractors',
  description: 'Install a private client-acquisition system that runs in under 4 hours/month and gives you predictable job flow — permanently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  )
}
