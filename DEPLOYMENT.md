# Deployment Guide - Niroga Website

## Server Information
- **Host**: 45.33.126.168
- **User**: ramanan
- **Password**: Niroga321!

## Quick Deployment Steps

### Step 1: Initial Server Setup

1. **SSH into your Linode server:**
```bash
ssh ramanan@45.33.126.168
```
Password: `Niroga321!`

2. **Upload and run the setup script:**
```bash
# On your local machine, copy the setup script to server
scp setup-server.sh ramanan@45.33.126.168:~/
scp nginx.conf ramanan@45.33.126.168:~/

# SSH into server and run setup
ssh ramanan@45.33.126.168
chmod +x setup-server.sh
./setup-server.sh
```

### Step 2: Create GitHub Repository

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `niroga-website`
   - Set to Public or Private
   - Don't initialize with README (we already have files)
   - Click "Create repository"

2. **Push your code to GitHub:**
```bash
# On your local machine
cd /Users/jaiyramananvijayaalayan/niroga-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Niroga AI website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/niroga-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

   - **Name**: `LINODE_HOST`
     **Value**: `45.33.126.168`
   
   - **Name**: `LINODE_USER`
     **Value**: `ramanan`
   
   - **Name**: `LINODE_PASSWORD`
     **Value**: `Niroga321!`

### Step 4: Deploy

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your project
2. Deploy to your Linode server
3. Reload Nginx

**To deploy:**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Manual Deployment (Alternative)

If you want to deploy manually without CI/CD:

```bash
# Build locally
npm run build

# Copy to server
scp -r dist/* ramanan@45.33.126.168:/var/www/niroga-website/

# SSH and reload nginx
ssh ramanan@45.33.126.168 'sudo systemctl reload nginx'
```

## Running the API Server

The contact form needs the API server running. To start it on the Linode server:

1. **SSH into server:**
```bash
ssh ramanan@45.33.126.168
```

2. **Navigate to project directory and install dependencies:**
```bash
cd /var/www/niroga-website
npm install
```

3. **Start API server with PM2:**
```bash
pm2 start server.ts --name niroga-api --interpreter tsx
pm2 save
pm2 startup
```

4. **Update Contact.tsx to use production API URL:**

Change in `src/pages/Contact.tsx`:
```typescript
// From:
const response = await fetch('http://localhost:3001/api/contact', {

// To:
const response = await fetch('/api/contact', {
```

This will use the Nginx proxy configured in `nginx.conf`.

## Accessing Your Website

- **Website**: http://45.33.126.168
- **API**: http://45.33.126.168/api

## Setting Up Domain (Optional)

If you have a domain name (e.g., niroga.ai):

1. **Update DNS records to point to your server:**
   - A Record: `@` → `45.33.126.168`
   - A Record: `www` → `45.33.126.168`

2. **Update nginx.conf:**
```nginx
server_name niroga.ai www.niroga.ai;
```

3. **Install SSL certificate with Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d niroga.ai -d www.niroga.ai
```

## Troubleshooting

### Check Nginx status
```bash
sudo systemctl status nginx
```

### Check Nginx logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Check PM2 processes
```bash
pm2 list
pm2 logs niroga-api
```

### Restart services
```bash
sudo systemctl restart nginx
pm2 restart niroga-api
```

### Test Nginx configuration
```bash
sudo nginx -t
```

## Monitoring

Check your deployed website and API:
```bash
# Check website
curl http://45.33.126.168

# Check API health
curl http://45.33.126.168/api/health
```

## Security Recommendations

1. **Change SSH password** after initial setup
2. **Set up SSH keys** instead of password authentication
3. **Configure firewall** rules properly
4. **Keep system updated**: `sudo apt update && sudo apt upgrade`
5. **Monitor logs** regularly
6. **Set up SSL/HTTPS** with Let's Encrypt (free)

## Environment Variables

The API server uses these environment variables (set in `.env` on server):
- `RESEND_API_KEY` - Your Resend API key
- `PORT` - API server port (default: 3001)

## CI/CD Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`:

1. ✅ Checkout code
2. ✅ Setup Node.js
3. ✅ Install dependencies
4. ✅ Build project
5. ✅ Deploy to Linode via SCP
6. ✅ Reload Nginx

## Support

For issues, check:
- GitHub Actions logs (in your repo's Actions tab)
- Server logs: `/var/log/nginx/error.log`
- PM2 logs: `pm2 logs niroga-api`
