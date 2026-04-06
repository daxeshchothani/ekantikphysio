# Complete Website Setup and Handover Guide

This file is the full runbook for a new developer/owner who will maintain Ekantik Physio website.

## 1) Access You Must Have

Before starting, ensure access to:

- Git repository
- Hosting platform (recommended: Vercel)
- Domain registrar/DNS provider
- Resend account
- Clinic email inbox (for notification verification)

## 2) Local Development Setup

1. Clone repository
2. Install dependencies:

```bash
npm install
```

3. Create local env file from example:

```bash
cp .env.example .env.local
```

4. Fill `.env.local`:

```env
RESEND_API_KEY=re_your_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CLINIC_EMAIL=info@ekantikphysio.co.uk
TEST_EMAIL=info@ekantikphysio.co.uk
FROM_EMAIL=onboarding@resend.dev
FROM_NAME=Ekantik Physio
```

5. Run app:

```bash
npm run dev
```

6. Build check:

```bash
npm run build
```

## 3) Project Structure (Important Areas)

- `app/`: Pages and API routes
- `components/`: UI sections and shared components
- `emails/`: React Email templates
- `lib/email.ts`: Email send orchestration
- `lib/resend.ts`: Resend client getter
- `scripts/test-email.ts`: Email E2E check

## 4) Email System Setup and Validation

1. Verify env values
2. Preview templates in browser (`/api/preview-email?...`)
3. Run email tests:

```bash
npm run test:email
```

4. Submit forms manually:

- `/appointment`
- `/contact`
- Homepage newsletter section

5. Check Resend dashboard logs

## 5) Production Deployment (Vercel)

1. Connect repository to Vercel
2. Add environment variables in Vercel project settings
3. Set production URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Verify domain in Resend
5. Use domain-based sender:

```env
FROM_EMAIL=noreply@your-domain.com
```

6. Deploy and run post-deploy checks

## 6) Post-Deploy Checks

After every deployment:

1. Open key routes:
- `/`
- `/services`
- `/appointment`
- `/contact`

2. Submit all 3 form flows
3. Confirm success states in UI
4. Confirm email delivery in inbox and Resend logs
5. Check browser console for runtime issues

## 7) Incident Response (If Something Breaks)

### Form failing with 500

- Check server logs
- Check env vars
- Validate Resend API key status

### No emails delivered

- Check Resend dashboard status
- Confirm sender domain verification
- Confirm destination inbox and spam

### Build failure

- Run `npm run build` locally
- Fix TypeScript/lint errors
- Redeploy

## 8) Maintenance Tasks

Weekly:

- Review form submission flow manually
- Check Resend delivery health and failures

Monthly:

- Rotate secrets if needed
- Review dependency updates
- Validate key page content and CTA links

Quarterly:

- Update Node/Next dependencies in controlled upgrade
- Validate all email templates in major mail clients

## 9) Security Checklist

- Never commit `.env.local`
- Keep API keys only in secure env stores
- Restrict platform account access to required team members
- Rotate credentials when team ownership changes

## 10) Handover Checklist (Use This During Transfer)

- New owner can run app locally
- New owner can run `npm run build`
- New owner can run `npm run test:email`
- New owner has all platform access
- Sender domain is verified and active
- Live form submissions confirmed
- Backup contact person documented

When all items above are done, handover is complete.
