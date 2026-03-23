import Link from 'next/link'

export const metadata = {
  title: 'Metropolitan',
}

export default function Home() {
  return (
    <>
      <p className="font-mono text-[0.72rem] text-[#666] tracking-[0.1em] uppercase mb-[18px]">
        Toledo, Ohio
      </p>

      <h1 className="text-[clamp(2rem,5vw,2.9rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-7">
        We build websites for local businesses.
      </h1>

      <p className="text-[1.05rem] text-[#333] mb-[14px] max-w-[520px]">
        Fast, clean, and built properly — not assembled from a template.
        We handle the whole thing: copy, design, code, and deployment.
      </p>
      <p className="text-[1.05rem] text-[#333] mb-[14px] max-w-[520px]">
        No bloat. No hand-holding required. Just a site that works.
      </p>

      <div className="mt-11 flex items-center gap-6">
        <a
          className="inline-block px-[22px] py-[11px] bg-[#0f0f0f] text-white no-underline rounded-[6px] text-[0.9rem] font-medium hover:bg-[#2a2a2a] transition-colors"
          href="mailto:hello@metropolitanwebsitecompany.com"
        >
          Get in touch
        </a>
        <Link
          href="/stripe"
          className="text-[0.875rem] text-[#666] no-underline hover:text-[#0f0f0f] transition-colors"
        >
          Make a payment →
        </Link>
      </div>
    </>
  )
}
