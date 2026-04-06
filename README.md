# Ekantik Physio Website

Production-ready Next.js website for Ekantik Physio, including a complete Resend-powered email system for:

- Appointment requests
- Contact form submissions
- Newsletter welcome emails

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Resend + React Email

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create environment file (or update existing):
```bash
cp .env.example .env.local
```

3. Set required variables in `.env.local`:
```env
RESEND_API_KEY=re_your_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CLINIC_EMAIL=info@ekantikphysio.co.uk
TEST_EMAIL=info@ekantikphysio.co.uk
FROM_EMAIL=onboarding@resend.dev
FROM_NAME=Ekantik Physio
```

4. Start development server:
```bash
npm run dev
```

5. Open:
- http://localhost:3000

## Scripts

- `npm run dev`: Start local dev server
- `npm run build`: Production build + type checks
- `npm run start`: Start production server locally
- `npm run lint`: Run linting
- `npm run test:email`: Run end-to-end email flow tests

## Email System

### API Endpoints

- `POST /api/send-appointment`
- `POST /api/send-contact`
- `POST /api/send-newsletter`
- `GET /api/preview-email?template=<name>`

### Email Templates

- `emails/AppointmentConfirmation.tsx`
- `emails/AppointmentNotification.tsx`
- `emails/ContactConfirmation.tsx`
- `emails/ContactNotification.tsx`
- `emails/WelcomeNewsletter.tsx`

### Preview Templates Locally

- http://localhost:3000/api/preview-email?template=appointment-confirmation
- http://localhost:3000/api/preview-email?template=appointment-notification
- http://localhost:3000/api/preview-email?template=contact-confirmation
- http://localhost:3000/api/preview-email?template=contact-notification
- http://localhost:3000/api/preview-email?template=welcome

## Handover Documentation

Use these docs when transferring ownership to another developer:

- `RESEND_SETUP.md`: Email-specific setup, test mode behavior, production cutover steps
- `COMPLETE_SETUP.md`: Full project handover runbook (install, deploy, operations, backups, troubleshooting)

## Deployment Checklist

1. Add production environment variables in hosting platform (Vercel recommended)
2. Verify Resend domain and update `FROM_EMAIL` to your own domain address
3. Set correct production `NEXT_PUBLIC_SITE_URL`
4. Run:
```bash
npm run build
```
5. Submit test forms from production and confirm email delivery

## Important Notes

- `.env.local` is ignored by git and must never be committed
- Resend test sender (`onboarding@resend.dev`) has recipient restrictions
- For unrestricted sending, verify your domain in Resend and use a domain-based sender

## Support References

- Next.js docs: https://nextjs.org/docs
- Resend docs: https://resend.com/docs
- React Email docs: https://react.email/docs
