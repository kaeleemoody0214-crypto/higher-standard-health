# Higher Standard Health

Premium, mobile-first fitness coaching funnel built with Next.js 14, Tailwind CSS, and a multi-step quiz flow designed for paid traffic.

## Stack

- Next.js 14 App Router
- Tailwind CSS
- Framer Motion
- Resend email delivery
- Zod validation

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add your Resend key and sender email to `.env.local`.

4. Start the dev server:

```bash
npm run dev
```

## Email Setup

Lead submissions are sent through `src/app/api/leads/route.ts`.

- Primary delivery service: Resend
- Recipients:
  - `cadenwesleythompson@gmail.com`
  - `kaeleemoody0214@gmail.com`
- Required env var:
  - `RESEND_API_KEY`
- Optional env var:
  - `LEADS_FROM_EMAIL`

Default sender uses Resend's onboarding domain. For production, replace it with a verified domain sender.

## Where To Edit Content

- Funnel questions and answer choices:
  - `src/config/funnel.ts`
- Hero copy, CTA copy, and A/B testing variants:
  - `src/config/funnel.ts`
- Quiz experience:
  - `src/components/quiz-flow.tsx`
- Supporting conversion sections:
  - `src/components/sections/social-proof.tsx`
  - `src/components/sections/benefits.tsx`
  - `src/components/sections/about-coach.tsx`
- Validation rules:
  - `src/lib/validation.ts`

## A/B Testing

Basic A/B-ready content config lives in `src/config/funnel.ts` under `abVariants`.

To test a different variant:

1. Add another variant in the config.
2. Update the `variant` selection inside `src/components/quiz-flow.tsx`.
3. Swap headlines, kicker text, or supporting proof copy without touching layout code.

## Vercel Deploy

1. Push the project to a Git provider.
2. Import it into Vercel.
3. Add:
   - `RESEND_API_KEY`
   - `LEADS_FROM_EMAIL`
4. Deploy.

## Notes

- The funnel captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`.
- A hidden honeypot field is included for basic spam prevention.
- The final conversion screen opens Calendly in a new tab and embeds the scheduler below.
