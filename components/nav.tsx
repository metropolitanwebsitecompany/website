'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/contact', label: 'Contact' },
  { href: '/stripe', label: 'Stripe' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center pb-5 border-b border-[#e0e0e0] mb-20">
      <Link
        href="/"
        className="text-[0.8rem] font-bold tracking-[0.14em] uppercase no-underline text-[#0f0f0f]"
      >
        Metropolitan
      </Link>
      <div>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            className={[
              'text-[0.85rem] no-underline ml-6 transition-colors',
              pathname === href
                ? 'text-[#0f0f0f]'
                : 'text-[#666] hover:text-[#0f0f0f]',
            ].join(' ')}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
