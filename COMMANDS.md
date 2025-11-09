# Quick Commands Reference

## Push to GitHub (First Time)

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/niroga-website.git
git branch -M main
git push -u origin main
```

## Future Updates

```bash
git add .
git commit -m "Your update message"
git push origin main
```

## Server Access

```bash
ssh ramanan@45.33.126.168
# Password: Niroga321!
```

## Check Deployment Status

1. Go to GitHub repo
2. Click "Actions" tab
3. See latest workflow run

## Server Commands

```bash
# Check if website is running
curl http://45.33.126.168

# Check Nginx
sudo systemctl status nginx
sudo nginx -t

# Check API server
pm2 list
pm2 logs niroga-api

# Restart everything
sudo systemctl restart nginx
pm2 restart niroga-api
```

## Local Development

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run server
```

## Build Locally

```bash
npm run build
```

## GitHub Secrets Needed

Add in: Repository → Settings → Secrets and variables → Actions

1. `LINODE_HOST` = `45.33.126.168`
2. `LINODE_USER` = `ramanan`
3. `LINODE_PASSWORD` = `Niroga321!`

## URLs

- **Production**: http://45.33.126.168
- **Local Frontend**: http://localhost:5175
- **Local API**: http://localhost:3001
