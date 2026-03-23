import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'

export const metadata: Metadata = {
  title: 'Metropolitan',
  description: 'We build websites for local businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0f0f0f] leading-relaxed">
        <div className="max-w-[680px] mx-auto px-6 pt-14 pb-20">
          <Nav />
          {children}
          <footer className="mt-[100px] pt-5 border-t border-[#e0e0e0] font-mono text-xs text-[#bbb]">
            metropolitanwebsitecompany.com
          </footer>
        </div>
      </body>
    </html>
  )
}
