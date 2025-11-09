# GitHub & Deployment Setup - Step by Step

## ✅ Current Status

Your code has been committed locally. Now follow these steps to deploy:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `niroga-website`
3. **Visibility**: Private (recommended) or Public
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/niroga-website.git

# Push code
git branch -M main
git push -u origin main
```

**Example** (if your GitHub username is "nirogaai"):
```bash
git remote add origin https://github.com/nirogaai/niroga-website.git
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Secrets

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In left sidebar: **Secrets and variables** → **Actions**
4. Click **"New repository secret"**

Add these 3 secrets:

### Secret 1: LINODE_HOST
- Name: `LINODE_HOST`
- Value: `45.33.126.168`
- Click "Add secret"

### Secret 2: LINODE_USER
- Name: `LINODE_USER`
- Value: `ramanan`
- Click "Add secret"

### Secret 3: LINODE_PASSWORD
- Name: `LINODE_PASSWORD`
- Value: `Niroga321!`
- Click "Add secret"

## Step 4: Set Up Linode Server

### Option A: Automated Setup (Recommended)

```bash
# SSH into server
ssh ramanan@45.33.126.168
# Password: Niroga321!

# Download setup script from your GitHub repo (after pushing)
curl -O https://raw.githubusercontent.com/YOUR_USERNAME/niroga-website/main/setup-server.sh
curl -O https://raw.githubusercontent.com/YOUR_USERNAME/niroga-website/main/nginx.conf

# Make executable and run
chmod +x setup-server.sh
./setup-server.sh
```

### Option B: Manual Setup

```bash
# SSH into server
ssh ramanan@45.33.126.168

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2
sudo npm install -g pm2

# Create website directory
sudo mkdir -p /var/www/niroga-website
sudo chown -R ramanan:ramanan /var/www/niroga-website

# Configure Nginx
sudo nano /etc/nginx/sites-available/niroga
```

Paste this Nginx configuration:
```nginx
server {
    listen 80;
    server_name _;

    root /var/www/niroga-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Continue setup:
```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and restart Nginx
sudo nginx -t
sudo systemctl restart nginx

# Configure firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable
```

## Step 5: Deploy!

Once GitHub secrets are configured, simply push to trigger deployment:

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Actions will:
1. ✅ Build your project
2. ✅ Deploy to Linode
3. ✅ Reload Nginx

Watch progress: Go to your GitHub repo → **Actions** tab

## Step 6: Set Up API Server (Contact Form)

```bash
# SSH into server
ssh ramanan@45.33.126.168

# Go to website directory
cd /var/www/niroga-website

# Install dependencies
npm install

# Create .env file
cat > .env << 'EOF'
RESEND_API_KEY=re_iGoAkmsf_8CBHPDCHXeS1PTK4bTqrQsBY
PORT=3001
EOF

# Start API server with PM2
pm2 start server.ts --name niroga-api --interpreter tsx
pm2 save
pm2 startup
# Follow the command PM2 outputs to enable startup on boot
```

## Step 7: Verify Deployment

1. **Check website**: http://45.33.126.168
2. **Test contact form**: Go to /contact page and submit

## Troubleshooting Commands

```bash
# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/error.log

# Check PM2 processes
pm2 list
pm2 logs niroga-api

# Restart services
sudo systemctl restart nginx
pm2 restart niroga-api
```

## Future Updates

Every time you want to update the website:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically deploy!

## Optional: Setup Domain Name

If you have a domain (e.g., niroga.ai):

1. **Update DNS:**
   - A Record: `@` → `45.33.126.168`
   - A Record: `www` → `45.33.126.168`

2. **Update Nginx:**
```bash
ssh ramanan@45.33.126.168
sudo nano /etc/nginx/sites-available/niroga
```

Change:
```nginx
server_name _;
```
To:
```nginx
server_name niroga.ai www.niroga.ai;
```

3. **Add SSL (HTTPS):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d niroga.ai -d www.niroga.ai
```

## 🎉 Done!

Your website is now:
- ✅ Hosted on GitHub
- ✅ Deployed to Linode
- ✅ Auto-deploys on every push
- ✅ Running with CI/CD

Access at: **http://45.33.126.168**
