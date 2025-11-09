# Niroga AI - Official Website

AI-Powered Heart & Lung Monitoring Technology

## 🌐 Live Website

**Production**: http://45.33.126.168 (or niroga.ai once domain is configured)

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Email**: Resend API
- **Backend API**: Express.js
- **Deployment**: Linode + Nginx + GitHub Actions CI/CD

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/niroga-website.git
cd niroga-website

# Install dependencies
npm install
```

## 🛠️ Development

Run both the frontend and API server:

```bash
# Terminal 1 - Frontend dev server
npm run dev

# Terminal 2 - API server
npm run server
```

- Frontend: http://localhost:5175
- API: http://localhost:3001

## 🏗️ Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📄 Project Structure

```
niroga-website/
├── src/
│   ├── components/      # React components (Header, Footer)
│   ├── pages/          # Page components (Home, About, etc.)
│   ├── assets/         # Images and static files
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── server.ts           # Express API server
├── nginx.conf          # Nginx configuration
└── .github/
    └── workflows/
        └── deploy.yml  # CI/CD workflow
```

## 🚢 Deployment

This project uses GitHub Actions for continuous deployment. Every push to `main` triggers:

1. Build the project
2. Deploy to Linode server
3. Reload Nginx

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Environment Variables

Create a `.env` file for local development:

```env
RESEND_API_KEY=your_resend_api_key
PORT=3001
```

## 🔧 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run server` - Start API server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📚 Documentation

- [Setup Guide](./SETUP.md) - Complete setup and usage instructions
- [Deployment Guide](./DEPLOYMENT.md) - Deployment and server configuration
- [Quick Start](./QUICKSTART.md) - Quick start guide

## 🌟 Features

- ✅ Premium gradient designs
- ✅ Responsive mobile-first layout
- ✅ AI-powered contact form with Resend
- ✅ SEO-optimized
- ✅ Fast and performant (Vite + React 19)
- ✅ TypeScript for type safety
- ✅ Automated CI/CD deployment

## 📧 Contact

- **Email**: yasantha@niroga.ai
- **Website**: http://niroga.ai

## 📄 License

Copyright © 2025 Niroga AI. All rights reserved.
