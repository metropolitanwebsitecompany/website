export const metadata = {
  title: 'Stripe — Metropolitan',
}

export default function Stripe() {
  return (
    <>
      <p className="font-mono text-[0.72rem] text-[#666] tracking-[0.1em] uppercase mb-[18px]">
        Toledo, Ohio
      </p>

      <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4">
        Make a payment.
      </h1>
      <p className="text-[1.05rem] text-[#333] max-w-[520px] mb-11">
        Use the button below to submit a payment securely via Stripe.
      </p>

      <a
        href="https://buy.stripe.com/cNi00i4ergZi1Nr5L68Ra00"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-[22px] py-[11px] bg-[#0f0f0f] text-white no-underline rounded-[6px] text-[0.9rem] font-medium hover:bg-[#2a2a2a] transition-colors"
      >
        Pay now
      </a>
    </>
  )
}
