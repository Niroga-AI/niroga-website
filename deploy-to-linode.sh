#!/bin/bash

# Niroga Website Deployment Script for Linode
# Run this script on the Linode server (ramanan@45.33.126.168)

set -e  # Exit on error

echo "🚀 Starting Niroga Website Deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
echo "📦 Installing Node.js..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ NPM version: $(npm -v)"

# Install Nginx
echo "📦 Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    sudo apt install -y nginx
fi

# Install PM2 globally
echo "📦 Installing PM2 and tsx..."
sudo npm install -g pm2 tsx

# Create web directory
echo "📁 Setting up directories..."
sudo mkdir -p /var/www
cd /var/www

# Remove old directory if exists
if [ -d "niroga-website" ]; then
    echo "🗑️  Removing old installation..."
    sudo rm -rf niroga-website
fi

# Clone repository
echo "📥 Cloning repository from GitHub..."
sudo git clone git@github.com:Niroga-AI/niroga-website.git
cd niroga-website

# Set permissions
sudo chown -R ramanan:ramanan /var/www/niroga-website

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build project
echo "🔨 Building production files..."
npm run build

# Create .env file for backend
echo "⚙️  Creating environment file..."
cat > .env << EOL
RESEND_API_KEY=your_resend_api_key_here
PORT=3001
NODE_ENV=production
EOL

echo "⚠️  Don't forget to update RESEND_API_KEY in /var/www/niroga-website/.env"

# Configure Nginx
echo "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/niroga > /dev/null << 'EOL'
server {
    listen 80;
    server_name 45.33.126.168;

    root /var/www/niroga-website/dist;
    index index.html;

    # Serve static files
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to Node.js backend
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOL

# Enable site
sudo ln -sf /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Start backend API with PM2
echo "🚀 Starting backend API..."
cd /var/www/niroga-website
pm2 delete niroga-api 2>/dev/null || true
pm2 start server.ts --name niroga-api --interpreter tsx

# Save PM2 process list
pm2 save

# Set up PM2 to start on boot
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ramanan --hp /home/ramanan
pm2 save

# Check status
echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 Status:"
echo "-------------------"
pm2 status
echo ""
sudo systemctl status nginx --no-pager
echo ""
echo "🌐 Your website is now live at: http://45.33.126.168"
echo ""
echo "⚠️  Remember to:"
echo "   1. Update RESEND_API_KEY in /var/www/niroga-website/.env"
echo "   2. Restart the API: pm2 restart niroga-api"
echo ""
