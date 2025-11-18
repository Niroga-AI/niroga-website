# Environment Variables Setup for Production

## Web3Forms Access Key Configuration

The Web3Forms access key has been configured for production use.

### Key Added:
- **Access Key**: `9396fda5-9014-4a3c-a96f-9e77df2f653c`
- **Email Recipient**: `yasantha@niroga.ai`

---

## Files Updated

### 1. `.env` (Local Development - Already Configured)
```bash
VITE_WEB3FORMS_ACCESS_KEY=9396fda5-9014-4a3c-a96f-9e77df2f653c
```

### 2. `.env.example` (Template)
```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 3. `.gitignore`
Added to prevent committing sensitive keys:
```
.env
.env.local
.env.production
```

### 4. `src/pages/Contact.tsx`
Updated to use environment variable:
```typescript
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
```

---

## Deployment Setup

### For Netlify:

1. Go to your site settings
2. Navigate to **Site configuration** → **Environment variables**
3. Add new variable:
   - **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: `9396fda5-9014-4a3c-a96f-9e77df2f653c`
4. Redeploy your site

### For Vercel:

1. Go to your project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: `9396fda5-9014-4a3c-a96f-9e77df2f653c`
   - **Environments**: Production, Preview, Development
4. Redeploy

### For Linode/VPS:

1. SSH into your server
2. Navigate to your project directory
3. Create `.env` file:
   ```bash
   nano .env
   ```
4. Add the environment variable:
   ```bash
   VITE_WEB3FORMS_ACCESS_KEY=9396fda5-9014-4a3c-a96f-9e77df2f653c
   ```
5. Rebuild your application:
   ```bash
   npm run build
   ```

### For Docker:

Add to your `docker-compose.yml` or Dockerfile:
```yaml
environment:
  - VITE_WEB3FORMS_ACCESS_KEY=9396fda5-9014-4a3c-a96f-9e77df2f653c
```

---

## Testing

### Local Testing:
```bash
# Make sure .env file exists with the key
npm run dev

# Test the contact form
# Go to http://localhost:5173/contact
# Fill out and submit the form
# Check email at yasantha@niroga.ai
```

### Production Testing:
1. Deploy to production with environment variable set
2. Visit your production site
3. Navigate to Contact page
4. Submit a test form
5. Verify email received at `yasantha@niroga.ai`

---

## Web3Forms Configuration

### Current Settings:
- **Email**: yasantha@niroga.ai
- **Access Key**: 9396fda5-9014-4a3c-a96f-9e77df2f653c
- **Free Tier Limit**: 250 submissions/month
- **Form Name**: Niroga.ai Contact Form

### Dashboard Access:
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Log in with the email: yasantha@niroga.ai
3. View submissions and statistics

---

## Troubleshooting

### Form Not Submitting?
1. Check browser console for errors
2. Verify environment variable is set: `console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)`
3. Ensure `.env` file exists in root directory (for local dev)
4. For production, verify environment variable in hosting platform

### Not Receiving Emails?
1. Check spam folder
2. Verify email in Web3Forms dashboard
3. Check Web3Forms dashboard for submission logs
4. Ensure access key is correct

### Mailto Fallback Triggered?
- This means the environment variable is not set
- Check your `.env` file exists
- For production, verify platform environment variables
- Restart dev server after adding `.env` file

---

## Security Notes

✅ **DO:**
- Keep `.env` file in `.gitignore`
- Use environment variables in production
- Rotate keys if compromised
- Monitor Web3Forms dashboard for abuse

❌ **DON'T:**
- Commit `.env` file to Git
- Share access key publicly
- Hardcode the key in source code
- Use same key for dev and prod (optional security practice)

---

## Contact Form Features

With this setup, your contact form now:
- ✅ Sends emails to yasantha@niroga.ai automatically
- ✅ No backend server required
- ✅ Works in production and development
- ✅ Includes spam protection
- ✅ Shows success/error messages to users
- ✅ Falls back to mailto if not configured

---

**Last Updated**: November 18, 2025
**Status**: ✅ Configured and Ready for Production
