# Manual Server Setup Instructions

## Connect to Your Server

```bash
ssh ramanan@45.33.126.168
```
Password: `Niroga321!`

## Run These Commands One by One

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install Node.js 18
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Should show v18.x
```

### 3. Install Nginx
```bash
sudo apt install -y nginx
```

### 4. Install PM2
```bash
sudo npm install -g pm2
```

### 5. Create Website Directory
```bash
sudo mkdir -p /var/www/niroga-website
sudo chown -R ramanan:ramanan /var/www/niroga-website
```

### 6. Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/niroga
```

**Paste this configuration:**
```nginx
server {
    listen 80;
    server_name _;

    root /var/www/niroga-website;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

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
```

Press `Ctrl+X`, then `Y`, then `Enter` to save.

### 7. Enable the Site
```bash
sudo ln -s /etc/nginx/sites-available/niroga /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 8. Configure Firewall
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

### 9. Create Environment File
```bash
cat > /var/www/niroga-website/.env << 'EOF'
RESEND_API_KEY=re_iGoAkmsf_8CBHPDCHXeS1PTK4bTqrQsBY
PORT=3001
EOF
```

## ✅ Server Setup Complete!

Now you're ready for deployment. Continue with the next steps below.
