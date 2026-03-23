# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**Metropolitan Website Company** — web design services for Toledo, Ohio businesses.
Live site: `metropolitanwebsitecompany.com`

## Stack & Infrastructure

| Layer | Current | Target |
|---|---|---|
| Frontend | Plain HTML/CSS | Next.js (App Router) |
| Hosting | GitHub Pages | Vercel |
| Domain | Porkbun → `metropolitanwebsitecompany.com` | same |
| Repo | GitHub (`main` branch) | same |
| Forms | none | Next.js API route (Route Handler) |
| Payments | Stripe page (stripe.html) | Stripe Checkout via API route |

## Current File Structure

- `index.html` — homepage (inline CSS, no JS, no build step)
- `contact.html` — contact form (static, not yet wired up)
- `stripe.html` — payment page
- `CNAME` — legacy GitHub Pages domain config (will be removed when migrating to Vercel)

## Migration Plan: GitHub Pages → Vercel + Next.js

When migrating, explain the DevOps decisions, not just the code changes. Key points to cover:

- **Why Vercel over GitHub Pages**: Vercel supports server-side logic (API routes, edge functions); GitHub Pages is static-only. Required for contact form backend and Stripe webhooks.
- **CNAME handling**: Porkbun DNS will need A/CNAME records updated to point to Vercel's servers instead of GitHub Pages IPs. The `CNAME` file in the repo is GitHub Pages-specific and won't be needed.
- **Environment variables**: Stripe keys and any form service credentials go in Vercel's environment variable UI (never committed to the repo). Use `.env.local` locally and add `.env*.local` to `.gitignore`.
- **Deployment**: Vercel auto-deploys `main` on push, same as GitHub Pages. Preview deployments are created for every PR/branch.

## Planned Features

### Contact Form
- Next.js Route Handler at `app/api/contact/route.ts`
- Send email via a transactional provider (e.g. Resend or Postmark)
- Client-side: minimal fetch call, no heavy form library needed

### Stripe Checkout
- Route Handler at `app/api/checkout/route.ts` creates a Stripe Checkout Session
- Redirect client to hosted Checkout page (simplest integration, no card data touches our server)
- Add a webhook handler at `app/api/webhooks/stripe/route.ts` for `checkout.session.completed`
- Use `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` env vars

## Code Style

- Prefer the App Router (`app/` directory), not the Pages Router
- Keep components small and co-located with the route that uses them
- **Tailwind CSS** + **shadcn/ui** for all styling — no inline styles, no CSS Modules
- shadcn/ui components are the default for any interactive or structural UI elements
- No unnecessary dependencies; prefer native fetch over axios, etc.
- TypeScript for any new `.ts`/`.tsx` files

## Design Aesthetic

**Professional web dev with strong taste.** The site is the portfolio/storefront of a developer who writes clean code — the design should reflect that.

- Minimal, typographically tight layouts. Let whitespace and hierarchy do the work.
- Restrained color palette: near-black, white, one accent at most. No gradients unless deliberate.
- No rounded-everything, no pastel cards, no hero illustrations. Sharp, confident, considered.
- Motion only if it adds clarity — not decoration. Prefer zero motion over gratuitous animation.
- Components should feel custom-built, not off-the-shelf, even when they use shadcn primitives.
- Copy and layout together: if the copy is weak or generic, flag it.

## Working with This Developer

- Uses **Claude Code** (CLI) as the primary dev tool, not chat
- Wants DevOps decisions explained — when infra or config changes, describe *why*, not just *what*
- Prefers understanding the reasoning behind architectural choices
