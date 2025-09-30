# 🚀 Smart Canteen - Unified Single URL Deployment Guide

This guide will help you deploy your Smart Canteen application on Render with **ONE SINGLE URL** that serves everything - Backend API, Frontend, and Admin Panel.

## 🌐 **Single URL Architecture**

After deployment, you'll have **ONE URL** that serves:
- **Main URL**: `https://your-app.onrender.com` → Customer Frontend
- **Main URL/admin**: `https://your-app.onrender.com/admin` → Admin Panel  
- **Main URL/api**: `https://your-app.onrender.com/api` → Backend API

## ✅ **How Single URL Works in Detail:**

### **Development (localhost):**
- Frontend: `http://localhost:5173` calls API at `http://localhost:4000`
- Admin: `http://localhost:5174` calls API at `http://localhost:4000`
- Backend: `http://localhost:4000` serves API endpoints

### **Production (single URL):**
- Customer Frontend: `https://your-app.onrender.com/` 
  - Calls API at `https://your-app.onrender.com/api/` (same domain)
- Admin Panel: `https://your-app.onrender.com/admin/`
  - Calls API at `https://your-app.onrender.com/api/` (same domain)
- Backend: Serves API + static files from same server

### **Automatic URL Detection:**
- Code automatically detects environment (dev vs production)
- In development: Uses `localhost:4000` for API calls
- In production: Uses relative URLs (same domain) for API calls

## 🔧 **Technical Implementation:**

1. **Frontend/Admin builds** are copied to `backend/public/`
2. **Backend serves static files** from `public/` directory
3. **API routes** remain at `/api/*` path
4. **Everything runs on same port** (10000 on Render)

## 🔧 Pre-Deployment Setup

### 1. Prepare Your Repository
Make sure your code is pushed to GitHub:
```bash
git add .
git commit -m "Add unified deployment configuration"
git push origin main
```

### 2. Get Your Stripe Keys
- Go to [Stripe Dashboard](https://dashboard.stripe.com/)
- Get your **live** secret key (starts with `sk_live_`)
- For testing, you can use test keys (starts with `sk_test_`)

## 🌐 Deployment Steps

### Method 1: Auto-Deploy with render.yaml (Recommended)

1. **Connect Repository to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

2. **Configure Environment Variables**
   Add these environment variables to your service:
   ```
   MONGODB_URL=your_actual_mongodb_connection_string
   JWT_SECRET=your_actual_jwt_secret_key
   STRIPE_SECRET_KEY=your_actual_stripe_secret_key
   NODE_ENV=production
   ```

3. **Deploy**
   - Click "Apply" to deploy the unified service
   - Wait for the service to build and deploy

### Method 2: Manual Deployment

1. **Create Web Service**
   - Go to Render Dashboard
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `smart-canteen-app`
     - **Environment**: `Node`
     - **Build Command**: 
       ```bash
       npm run install-all && npm run build-all && mkdir -p backend/public && cp -r frontend/dist/* backend/public/ && mkdir -p backend/public/admin && cp -r admin/dist/* backend/public/admin/
       ```
     - **Start Command**: `cd backend && node server.js`

2. **Add Environment Variables**
   ```
   MONGODB_URL=your_actual_mongodb_connection_string
   JWT_SECRET=your_actual_jwt_secret_key
   STRIPE_SECRET_KEY=your_actual_stripe_secret_key
   NODE_ENV=production
   PORT=10000
   ```

## 📱 Your Deployed Application

After successful deployment, you'll have **ONE URL**:
- **Main App**: `https://smart-canteen-app.onrender.com`

### 🔗 URL Structure:
- **Customer App**: `https://smart-canteen-app.onrender.com/`
- **Admin Panel**: `https://smart-canteen-app.onrender.com/admin`
- **API Endpoints**: `https://smart-canteen-app.onrender.com/api/*`
- **Images**: `https://smart-canteen-app.onrender.com/images/*`

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are in `package.json`
   - Ensure build commands are correct
   - Check Render build logs for specific errors

2. **Static File Issues**
   - Verify frontend/admin builds are successful
   - Check if files are copied to `backend/public/`
   - Ensure paths in frontend/admin point to correct API URLs

3. **Database Connection**
   - Verify MongoDB Atlas allows connections from all IPs (0.0.0.0/0)
   - Check MongoDB connection string is correct

4. **Admin Panel Not Loading**
   - Check if admin files are in `backend/public/admin/`
   - Verify admin routes are configured correctly

### Environment Variables Checklist

**Required Environment Variables:**
- ✅ MONGODB_URL
- ✅ JWT_SECRET  
- ✅ STRIPE_SECRET_KEY
- ✅ NODE_ENV=production

## 🎯 Post-Deployment

1. **Test Your Application**
   - Visit your main URL for customer app
   - Visit `your-url/admin` for admin panel
   - Test user registration/login
   - Test adding items via admin panel
   - Test placing orders

2. **Update Frontend/Admin API URLs**
   - In production, your frontend and admin should call APIs relative to the same domain
   - Update any hardcoded `localhost:4000` URLs to relative paths like `/api/...`

## 💡 Benefits of Single URL Deployment

- ✅ **Single SSL Certificate**: One URL, one certificate
- ✅ **Easier Management**: One service to monitor
- ✅ **Cost Effective**: Only one service on free tier
- ✅ **No CORS Issues**: Everything on same domain
- ✅ **Simplified URLs**: Easy to remember and share

## 🔧 Local Development vs Production

### Development (Multiple URLs):
- Backend: `http://localhost:4000`
- Frontend: `http://localhost:5173`
- Admin: `http://localhost:5174`

### Production (Single URL):
- Everything: `https://your-app.onrender.com`
- Admin: `https://your-app.onrender.com/admin`

## 🆘 Getting Help

If you encounter issues:
1. Check Render service logs
2. Verify all environment variables
3. Test API endpoints directly
4. Check file structure in deployed service

Your Smart Canteen is now ready for production with a single, unified URL! 🎉