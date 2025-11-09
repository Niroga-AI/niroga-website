#!/bin/bash

# Deployment script for Linode server
# This script sets up the initial server configuration

echo "🚀 Setting up Niroga website on Linode..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js (v18.x)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt install -y nginx

# Install PM2 for process management
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Create website directory
echo "📁 Creating website directory..."
sudo mkdir -p /var/www/niroga-website
sudo chown -R $USER:$USER /var/www/niroga-website

# Copy nginx configuration
echo "⚙️  Configuring Nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/niroga
sudo ln -sf /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Setup firewall
echo "🔥 Configuring firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

# Create .env file for API server
echo "📝 Creating environment file..."
cat > /var/www/niroga-website/.env << EOF
RESEND_API_KEY=re_iGoAkmsf_8CBHPDCHXeS1PTK4bTqrQsBY
PORT=3001
EOF

echo "✅ Server setup complete!"
echo "📍 Next steps:"
echo "   1. Push your code to GitHub"
echo "   2. Set up GitHub secrets (LINODE_HOST, LINODE_USER, LINODE_PASSWORD)"
echo "   3. Push to main branch to trigger deployment"
echo ""
echo "🌐 Your website will be available at: http://45.33.126.168"
