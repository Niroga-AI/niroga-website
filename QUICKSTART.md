# Quick Start Guide

## Run Both Servers

Open **two terminal windows**:

### Terminal 1 - API Server
```bash
npm run server
```
✅ Server running on: http://localhost:3001

### Terminal 2 - Website
```bash
npm run dev
```
✅ Website running on: http://localhost:5175

## Test Contact Form

1. Visit: http://localhost:5175/contact
2. Fill out the form
3. Submit
4. Check email at: yasantha@niroga.ai

## Current Status

✅ API Server: Running on port 3001
✅ Dev Server: Running on port 5175
✅ Contact Form: Integrated with Resend
✅ Email Recipient: yasantha@niroga.ai
✅ All Pages: Complete with real Niroga content

## Pages Available

- `/` - Home (Hero, Features, Devices, Solutions)
- `/about` - About Niroga
- `/technology` - AI Technology Details
- `/devices` - Products (Chest Band & Stethoscope)
- `/solutions` - Healthcare Solutions
- `/contact` - Contact Form (with Resend email)

## External Links

- **Order Now**: https://orders.niroga.ai (in header and various CTAs)

## Next Steps for Production

1. ✅ Set up environment variables for API key
2. ✅ Verify domain with Resend
3. ✅ Deploy API server (Vercel/Railway/AWS)
4. ✅ Deploy frontend (Vercel/Netlify)
5. ✅ Update API URL in Contact.tsx to production endpoint

See `SETUP.md` for detailed instructions.
