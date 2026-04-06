# Resend Email Setup (Ekantik Physio)

This guide is for configuring, testing, and handing over the email system.

## 1) What Is Implemented

The website sends emails for:

- Appointment form submissions
- Contact form submissions
- Newsletter signups

Email templates are in:

- `emails/AppointmentConfirmation.tsx`
- `emails/AppointmentNotification.tsx`
- `emails/ContactConfirmation.tsx`
- `emails/ContactNotification.tsx`
- `emails/WelcomeNewsletter.tsx`

Core email logic:

- `lib/email.ts`
- `lib/resend.ts`

API routes:

- `app/api/send-appointment/route.ts`
- `app/api/send-contact/route.ts`
- `app/api/send-newsletter/route.ts`
- `app/api/preview-email/route.ts`

## 2) Environment Variables

Add these to `.env.local`:

```env
RESEND_API_KEY=re_your_real_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CLINIC_EMAIL=info@ekantikphysio.co.uk
TEST_EMAIL=info@ekantikphysio.co.uk
FROM_EMAIL=onboarding@resend.dev
FROM_NAME=Ekantik Physio
```

Meaning:

- `RESEND_API_KEY`: API key from Resend dashboard
- `NEXT_PUBLIC_SITE_URL`: Website base URL
- `CLINIC_EMAIL`: Clinic inbox (used for notification flows)
- `TEST_EMAIL`: Safe receiving inbox used in development/testing
- `FROM_EMAIL`: Sender address
- `FROM_NAME`: Sender display name

## 3) Local Setup

1. Install dependencies:
```bash
npm install
```

2. Run app:
```bash
npm run dev
```

3. Build check:
```bash
npm run build
```

## 4) Test Email Templates (No Sending)

You can inspect generated HTML in browser:

- `http://localhost:3000/api/preview-email?template=appointment-confirmation`
- `http://localhost:3000/api/preview-email?template=appointment-notification`
- `http://localhost:3000/api/preview-email?template=contact-confirmation`
- `http://localhost:3000/api/preview-email?template=contact-notification`
- `http://localhost:3000/api/preview-email?template=welcome`

## 5) Test Real Sending

Run:

```bash
npm run test:email
```

This script tests all three flows.

Expected in development:

- Contact and newsletter flows should pass
- Appointment can fail in Resend test mode if recipient/domain restrictions are hit

## 6) Important Resend Test-Mode Limitation

When using `onboarding@resend.dev` sender, Resend applies test restrictions.

You may see errors like:

- "You can only send testing emails to your own email address..."

This is expected behavior in test mode.

## 7) Production Cutover (Required)

Before handing to a live clinic operation:

1. Add and verify your domain in Resend (DNS records)
2. Change sender in env:
```env
FROM_EMAIL=noreply@yourdomain.com
```
3. Keep clinic destination correct:
```env
CLINIC_EMAIL=info@ekantikphysio.co.uk
```
4. Set website URL:
```env
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```
5. Add same env vars in your hosting platform (Vercel project settings)
6. Redeploy
7. Submit all forms in production and verify inbox delivery

## 8) Troubleshooting

### Missing API key error

If you see "RESEND_API_KEY environment variable is not set":

- Confirm `.env.local` exists
- Confirm key starts with `re_`
- Restart dev server after env changes

### API returns 500 on form submit

- Check terminal logs
- Validate all required form fields
- Verify `RESEND_API_KEY` and sender settings

### Emails not received

- Check spam folder
- Check Resend dashboard -> Emails for status
- Verify recipient address and sender domain setup

## 9) Security & Ownership Handover

For the new owner/developer:

- Rotate API key during handover
- Share env vars securely (not via git)
- Confirm access to:
  - Resend account
  - Domain DNS provider
  - Hosting/Vercel project
- Update contact email targets if staffing changes

## 10) Operational Verification Checklist

- `npm run build` passes
- `npm run test:email` runs
- Preview routes render all templates
- Appointment form submission returns reference number
- Contact form shows success state
- Newsletter signup shows success state

Once this checklist passes, email setup is complete.
