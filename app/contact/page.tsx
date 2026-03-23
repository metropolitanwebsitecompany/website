export const metadata = {
  title: 'Contact — Metropolitan',
}

export default function Contact() {
  return (
    <>
      <p className="font-mono text-[0.72rem] text-[#666] tracking-[0.1em] uppercase mb-[18px]">
        Toledo, Ohio
      </p>

      <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4">
        Let&apos;s talk about your project.
      </h1>
      <p className="text-[1.05rem] text-[#333] max-w-[520px] mb-12">
        Free consultation. Tell us what you&apos;re building and we&apos;ll get back within one business day.
      </p>

      <form
        action="mailto:hello@metropolitanwebsitecompany.com"
        method="post"
        encType="text/plain"
        noValidate
        className="grid gap-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-[6px]">
            <label htmlFor="name" className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase">
              Name
            </label>
            <input
              id="name"
              name="Name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors"
            />
          </div>
          <div className="grid gap-[6px]">
            <label htmlFor="company" className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase">
              Company
            </label>
            <input
              id="company"
              name="Company"
              type="text"
              placeholder="Optional"
              className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-[6px]">
            <label htmlFor="email" className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase">
              Email
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors"
            />
          </div>
          <div className="grid gap-[6px]">
            <label htmlFor="phone" className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase">
              Phone
            </label>
            <input
              id="phone"
              name="Phone"
              type="text"
              placeholder="Optional"
              className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors"
            />
          </div>
        </div>

        <div className="grid gap-[6px]">
          <label htmlFor="message" className="font-mono text-[0.72rem] text-[#666] tracking-[0.08em] uppercase">
            Project details
          </label>
          <textarea
            id="message"
            name="Message"
            required
            placeholder="What are you building? Any timeline or budget in mind?"
            className="w-full px-3 py-[10px] border border-[#e0e0e0] rounded-[4px] bg-white text-[0.95rem] text-[#0f0f0f] outline-none focus:border-[#0f0f0f] transition-colors min-h-[140px] resize-y"
          />
        </div>

        <div className="flex items-center gap-6 mt-2">
          <button
            type="submit"
            className="px-[22px] py-[11px] bg-[#0f0f0f] text-white border-0 rounded-[6px] text-[0.9rem] font-medium cursor-pointer hover:bg-[#2a2a2a] transition-colors"
          >
            Send message
          </button>
          <a
            href="mailto:hello@metropolitanwebsitecompany.com"
            className="text-[0.875rem] text-[#666] no-underline hover:text-[#0f0f0f] transition-colors"
          >
            hello@metropolitanwebsitecompany.com
          </a>
        </div>
      </form>
    </>
  )
}
