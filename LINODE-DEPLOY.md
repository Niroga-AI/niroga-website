# Linode Deployment Instructions

## Quick Deploy (Automated)

### Step 1: SSH to Linode
```bash
ssh ramanan@45.33.126.168
# Password: Niroga321!
```

### Step 2: Download and run deployment script
```bash
# Download the script
curl -o deploy.sh https://raw.githubusercontent.com/Niroga-AI/niroga-website/main/deploy-to-linode.sh

# Make it executable
chmod +x deploy.sh

# Run the script
./deploy.sh
```

The script will automatically:
- Install Node.js, Nginx, PM2
- Clone your repository
- Build the project
- Configure Nginx
- Start the backend API
- Enable everything to start on boot

### Step 3: Update API Key
```bash
nano /var/www/niroga-website/.env
# Update RESEND_API_KEY with your actual key
# Save: Ctrl+X, Y, Enter

# Restart API
pm2 restart niroga-api
```

### Step 4: Access Your Website
Open browser: **http://45.33.126.168**

---

## Manual Deploy (Step by Step)

If you prefer manual setup, follow these commands:

```bash
# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Install Nginx
sudo apt install -y nginx

# 4. Install PM2 and tsx
sudo npm install -g pm2 tsx

# 5. Clone repository
sudo mkdir -p /var/www
cd /var/www
sudo git clone git@github.com:Niroga-AI/niroga-website.git
cd niroga-website
sudo chown -R ramanan:ramanan /var/www/niroga-website

# 6. Install and build
npm install
npm run build

# 7. Create .env file
nano .env
# Add:
# RESEND_API_KEY=your_key_here
# PORT=3001
# NODE_ENV=production

# 8. Configure Nginx
sudo nano /etc/nginx/sites-available/niroga
# Copy the nginx config from deploy-to-linode.sh

# Enable site
sudo ln -sf /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

# 9. Start backend
pm2 start server.ts --name niroga-api --interpreter tsx
pm2 save
pm2 startup
```

---

## Useful Commands

### Check Status
```bash
pm2 status                    # Check backend API status
sudo systemctl status nginx   # Check Nginx status
pm2 logs niroga-api          # View API logs
```

### Restart Services
```bash
pm2 restart niroga-api       # Restart backend
sudo systemctl restart nginx # Restart Nginx
```

### Update Website
```bash
cd /var/www/niroga-website
git pull
npm install
npm run build
pm2 restart niroga-api
sudo systemctl reload nginx
```

---

## Troubleshooting

### Website not loading
```bash
sudo systemctl status nginx
sudo nginx -t
```

### API not working
```bash
pm2 logs niroga-api
pm2 restart niroga-api
```

### Port already in use
```bash
sudo lsof -i :3001
sudo kill -9 <PID>
pm2 restart niroga-api
```
