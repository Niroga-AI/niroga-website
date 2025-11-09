#!/bin/bash
# Paste this entire script into your SSH session

set -e

echo "🚀 Setting up Niroga website server..."

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
   echo "Please run as regular user (ramanan), not root"
   exit 1
fi

# Update system
echo "1/9 Updating system..."
sudo apt update -y && sudo apt upgrade -y

# Install Node.js
echo "2/9 Installing Node.js..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi
echo "✓ Node.js: $(node --version)"

# Install Nginx
echo "3/9 Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    sudo apt install -y nginx
fi
echo "✓ Nginx installed"

# Install PM2
echo "4/9 Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
fi
echo "✓ PM2 installed"

# Create directory
echo "5/9 Creating website directory..."
sudo mkdir -p /var/www/niroga-website
sudo chown -R ramanan:ramanan /var/www/niroga-website
echo "✓ Directory: /var/www/niroga-website"

# Configure Nginx
echo "6/9 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/niroga > /dev/null <<'NGINX'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    root /var/www/niroga-website;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
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
NGINX

# Enable site
echo "7/9 Enabling site..."
sudo ln -sf /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
echo "✓ Nginx configured"

# Firewall
echo "8/9 Configuring firewall..."
sudo ufw allow 'Nginx Full' 2>/dev/null || true
sudo ufw allow OpenSSH 2>/dev/null || true
echo "y" | sudo ufw enable 2>/dev/null || true
echo "✓ Firewall configured"

# Environment file
echo "9/9 Creating environment file..."
mkdir -p /var/www/niroga-website
cat > /var/www/niroga-website/.env <<'ENV'
RESEND_API_KEY=re_iGoAkmsf_8CBHPDCHXeS1PTK4bTqrQsBY
PORT=3001
ENV
echo "✓ Environment file created"

echo ""
echo "=========================================="
echo "✅ SERVER SETUP COMPLETE!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Configure GitHub secrets (see instructions)"
echo "2. Push to GitHub main branch"
echo "3. GitHub Actions will deploy automatically"
echo ""
echo "After first deployment, run:"
echo "  cd /var/www/niroga-website"
echo "  npm install"
echo "  pm2 start server.ts --name niroga-api --interpreter tsx"
echo "  pm2 save && pm2 startup"
echo ""
echo "Website will be at: http://45.33.126.168"
echo ""
