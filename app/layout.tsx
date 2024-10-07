import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Support Perth | Computer & Business IT Support Company Perth',
  description: 'Computer Mechanics helps Perth businesses big and small get the assistance they need to stay competitive. Enquire about a tailored package today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}