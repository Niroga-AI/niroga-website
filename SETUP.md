# Niroga Website - Setup Guide

## Overview
This is a professional React website for Niroga.ai with integrated contact form functionality using Resend email service.

## Tech Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Email**: Resend API
- **Backend**: Express.js (for API endpoint)

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

You need to run **TWO** servers simultaneously:

### 1. API Server (Port 3001)
The API server handles contact form submissions via Resend.

```bash
npm run server
```

This starts the Express server on `http://localhost:3001`

### 2. Frontend Development Server (Port 5175)
The Vite development server for the React app.

```bash
npm run dev
```

This starts the Vite server on `http://localhost:5175`

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run server` - Start API server for contact form
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contact Form Integration

### Email Configuration
- **API Key**: Configured in `server.ts`
- **Recipient**: yasantha@niroga.ai
- **From Address**: onboarding@resend.dev (default Resend testing address)

### Production Setup
For production, you'll need to:

1. **Verify your domain** with Resend
2. **Update the `from` address** in `server.ts` to use your verified domain:
   ```typescript
   from: 'Niroga Contact Form <contact@niroga.ai>'
   ```
3. **Secure the API key** using environment variables:
   - Create a `.env` file
   - Add: `RESEND_API_KEY=your_api_key_here`
   - Update server.ts to use: `process.env.RESEND_API_KEY`
4. **Deploy the API server** separately (consider Vercel, Railway, or AWS Lambda)
5. **Update the API URL** in `Contact.tsx` to point to your production API

### Testing the Contact Form

1. Make sure both servers are running
2. Navigate to `http://localhost:5175/contact`
3. Fill out the form and submit
4. Check yasantha@niroga.ai for the email

## Project Structure

```
niroga-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with logo
│   │   └── Footer.tsx       # Footer with links
│   ├── pages/
│   │   ├── Home.tsx         # Homepage with hero, features, devices
│   │   ├── About.tsx        # About page
│   │   ├── Technology.tsx   # Technology details
│   │   ├── Devices.tsx      # Product showcase
│   │   ├── Solutions.tsx    # Healthcare solutions
│   │   └── Contact.tsx      # Contact form (Resend integration)
│   ├── assets/
│   │   ├── NirogaRectangularLogo.png
│   │   ├── Product.png
│   │   └── images/
│   │       └── Eldercare_patient.png
│   ├── App.tsx              # React Router setup
│   ├── main.tsx             # App entry point
│   └── index.css            # Tailwind CSS imports
├── server.ts                # Express API server for contact form
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## Key Features

### Pages
1. **Home** - Hero with eldercare patient image, AI technology features, devices overview, healthcare domains
2. **About** - Company mission, vision, and values
3. **Technology** - AI-driven audio cardiography technology details
4. **Devices** - Chest Band and Electronic Stethoscope products
5. **Solutions** - PTSD/Military, Fetal/Maternal, Family Care, Pet Health solutions
6. **Contact** - Contact form with Resend email integration

### Design Features
- Premium gradient designs throughout
- Responsive mobile-first layout
- Professional healthcare color palette (Blue/Purple/Teal)
- Smooth transitions and hover effects
- Optimized images with overlays

## Important Notes

⚠️ **Security**: The Resend API key is currently hardcoded in `server.ts` for development. For production, always use environment variables.

⚠️ **CORS**: The API server has CORS enabled for localhost. Update CORS settings for production.

⚠️ **Email Domain**: Currently using `onboarding@resend.dev` for testing. Verify a domain with Resend for production use.

## Troubleshooting

### Port Already in Use
If you see "Port 5173 is in use", Vite will automatically try the next available port (5174, 5175, etc.).

### API Server Not Responding
Make sure the API server is running on port 3001:
```bash
npm run server
```

### Contact Form Not Working
1. Check that both servers are running
2. Open browser console for error messages
3. Verify the API URL in Contact.tsx matches your server
4. Check server.ts console for any Resend API errors

### Resend Email Not Arriving
1. Check spam/junk folders
2. Verify the Resend API key is valid
3. Check server.ts console for error messages
4. For production, ensure your domain is verified with Resend

## Production Deployment

### Frontend (Vercel/Netlify)
1. Build the app: `npm run build`
2. Deploy the `dist` folder
3. Update environment variables

### Backend (Vercel/Railway/AWS)
1. Deploy `server.ts` as a serverless function or container
2. Set environment variable: `RESEND_API_KEY`
3. Update CORS settings to allow your frontend domain
4. Update Contact.tsx with production API URL

## Support

For issues or questions about the Niroga website, contact:
- Technical: info@niroga.ai
- Clinical: clinical@niroga.ai
