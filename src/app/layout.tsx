import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
   title: 'Evan Greenstein | Portfolio',
}

export const jbMono = JetBrains_Mono({
   subsets: ['latin'],
   display: 'swap',
})

export default function RootLayout({
   // Layouts must accept a children prop.
   // This will be populated with nested layouts or pages
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" className={jbMono.className}>
         <body>{children}</body>
      </html>
   )
}
