#!/bin/bash

# Linode Server Setup Script for Niroga Website
# Run this on your Linode server

set -e

echo "🚀 Starting Niroga Website Server Setup..."
echo "=========================================="

# Update system
echo ""
echo "📦 Step 1: Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
echo ""
echo "📦 Step 2: Installing Node.js 18..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    echo "✅ Node.js installed: $(node --version)"
else
    echo "✅ Node.js already installed: $(node --version)"
fi

# Install Nginx
echo ""
echo "📦 Step 3: Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    sudo apt install -y nginx
    echo "✅ Nginx installed"
else
    echo "✅ Nginx already installed"
fi

# Install PM2
echo ""
echo "📦 Step 4: Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
    echo "✅ PM2 installed"
else
    echo "✅ PM2 already installed"
fi

# Create website directory
echo ""
echo "📁 Step 5: Creating website directory..."
sudo mkdir -p /var/www/niroga-website
sudo chown -R $USER:$USER /var/www/niroga-website
echo "✅ Directory created: /var/www/niroga-website"

# Configure Nginx
echo ""
echo "⚙️  Step 6: Configuring Nginx..."

sudo tee /etc/nginx/sites-available/niroga > /dev/null << 'EOF'
server {
    listen 80;
    server_name _;

    root /var/www/niroga-website;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # API proxy
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo ""
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo ""
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx
echo "✅ Nginx configured and running"

# Configure firewall
echo ""
echo "🔥 Step 7: Configuring firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
echo "y" | sudo ufw enable || true
echo "✅ Firewall configured"

# Create environment file for API
echo ""
echo "📝 Step 8: Creating environment file..."
cat > /var/www/niroga-website/.env << 'ENVEOF'
RESEND_API_KEY=re_iGoAkmsf_8CBHPDCHXeS1PTK4bTqrQsBY
PORT=3001
ENVEOF
echo "✅ Environment file created"

echo ""
echo "=========================================="
echo "✅ Server Setup Complete!"
echo "=========================================="
echo ""
echo "📍 Next Steps:"
echo "   1. GitHub Actions will deploy on next push to main"
echo "   2. After first deployment, run:"
echo "      cd /var/www/niroga-website"
echo "      npm install"
echo "      pm2 start server.ts --name niroga-api --interpreter tsx"
echo "      pm2 save"
echo "      pm2 startup"
echo ""
echo "🌐 Your website will be at: http://45.33.126.168"
echo ""
