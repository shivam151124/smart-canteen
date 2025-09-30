# 🚀 Smart Canteen - Render Deployment Guide# 🚀 Smart Canteen - Render Deployment Guide



This guide will help you deploy your Smart Canteen application on Render with three separate services: Backend API, Frontend, and Admin Panel.This guide will help you deploy your Smart Canteen application on Render with three separate services: Backend API, Frontend, and Admin Panel.



## 📋 Deployment Overview## 📋 Deployment Overview



Your Smart Canteen will be deployed as:Your Smart Canteen will be deployed as:

- **Backend API**: Node.js web service- **Backend API**: Node.js web service

- **Frontend**: Static site (customer-facing app)  - **Frontend**: Static site (customer-facing app)  

- **Admin Panel**: Static site (admin dashboard)- **Admin Panel**: Static site (admin dashboard)



## 🔧 Pre-Deployment Setup## 🔧 Pre-Deployment Setup



### 1. Prepare Your Repository### 1. Prepare Your Repository

Make sure your code is pushed to GitHub:Make sure your code is pushed to GitHub:

```bash```bash

git add .git add .

git commit -m "Prepare for Render deployment"git commit -m "Prepare for Render deployment"

git push origin maingit push origin main

``````



### 2. Get Your Stripe Keys### 2. Get Your Stripe Keys

- Go to [Stripe Dashboard](https://dashboard.stripe.com/)- Go to [Stripe Dashboard](https://dashboard.stripe.com/)

- Get your **live** secret key (starts with `sk_live_`)- Get your **live** secret key (starts with `sk_live_`)

- For testing, you can use test keys (starts with `sk_test_`)- For testing, you can use test keys (starts with `sk_test_`)



## 🌐 Deployment Steps## 🌐 Deployment Steps



### Method 1: Auto-Deploy with render.yaml (Recommended)### Method 1: Auto-Deploy with render.yaml (Recommended)



1. **Connect Repository to Render**1. **Connect Repository to Render**

   - Go to [Render Dashboard](https://dashboard.render.com/)   - Go to [Render Dashboard](https://dashboard.render.com/)

   - Click "New" → "Blueprint"   - Click "New" → "Blueprint"

   - Connect your GitHub repository   - Connect your GitHub repository

   - Render will automatically detect the `render.yaml` file   - Render will automatically detect the `render.yaml` file



2. **Configure Environment Variables**2. **Configure Environment Variables**

   For the backend service, add these environment variables:   For the backend service, add these environment variables:

   ```   ```

   MONGODB_URL=your_actual_mongodb_connection_string   MONGODB_URL=mongodb+srv://shivambehera:01112004@cluster0.e6tktn3.mongodb.net/food-del

   JWT_SECRET=your_actual_jwt_secret_key   JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random-123456789-production

   STRIPE_SECRET_KEY=your_actual_stripe_secret_key   STRIPE_SECRET_KEY=sk_live_your_actual_stripe_secret_key_here

   NODE_ENV=production   NODE_ENV=production

   FRONTEND_URL=https://your-frontend-app.onrender.com   FRONTEND_URL=https://your-frontend-app.onrender.com

   ADMIN_URL=https://your-admin-app.onrender.com   ADMIN_URL=https://your-admin-app.onrender.com

   ```   ```



3. **Deploy**3. **Deploy**

   - Click "Apply" to deploy all services   - Click "Apply" to deploy all services

   - Wait for all services to build and deploy   - Wait for all services to build and deploy



### Method 2: Manual Deployment### Method 2: Manual Deployment



#### Deploy Backend API#### Deploy Backend API



1. **Create Web Service**1. **Create Web Service**

   - Go to Render Dashboard   - Go to Render Dashboard

   - Click "New" → "Web Service"   - Click "New" → "Web Service"

   - Connect your GitHub repository   - Connect your GitHub repository

   - Configure:   - Configure:

     - **Name**: `smart-canteen-backend`     - **Name**: `smart-canteen-backend`

     - **Environment**: `Node`     - **Environment**: `Node`

     - **Build Command**: `cd backend && npm install`     - **Build Command**: `cd backend && npm install`

     - **Start Command**: `cd backend && node server.js`     - **Start Command**: `cd backend && node server.js`



2. **Add Environment Variables**2. **Add Environment Variables**

   ```   ```

   MONGODB_URL=your_actual_mongodb_connection_string   MONGODB_URL=mongodb+srv://shivambehera:01112004@cluster0.e6tktn3.mongodb.net/food-del

   JWT_SECRET=your_actual_jwt_secret_key   JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random-123456789-production

   STRIPE_SECRET_KEY=your_actual_stripe_secret_key   STRIPE_SECRET_KEY=sk_live_your_actual_stripe_secret_key_here

   NODE_ENV=production   NODE_ENV=production

   PORT=10000   PORT=10000

   ```   ```



#### Deploy Frontend#### Deploy Frontend



1. **Create Static Site**1. **Create Static Site**

   - Click "New" → "Static Site"   - Click "New" → "Static Site"

   - Connect your repository   - Connect your repository

   - Configure:   - Configure:

     - **Name**: `smart-canteen-frontend`     - **Name**: `smart-canteen-frontend`

     - **Build Command**: `cd frontend && npm install && npm run build`     - **Build Command**: `cd frontend && npm install && npm run build`

     - **Publish Directory**: `frontend/dist`     - **Publish Directory**: `frontend/dist`



2. **Update API URLs**2. **Update API URLs**

   Before deploying, update your frontend to use the backend URL:   Before deploying, update your frontend to use the backend URL:

   - In `frontend/src` files, replace `http://localhost:4000` with your backend URL   - In `frontend/src` files, replace `http://localhost:4000` with your backend URL



#### Deploy Admin Panel#### Deploy Admin Panel



1. **Create Static Site**1. **Create Static Site**

   - Click "New" → "Static Site"   - Click "New" → "Static Site"

   - Connect your repository   - Connect your repository

   - Configure:   - Configure:

     - **Name**: `smart-canteen-admin`     - **Name**: `smart-canteen-admin`

     - **Build Command**: `cd admin && npm install && npm run build`     - **Build Command**: `cd admin && npm install && npm run build`

     - **Publish Directory**: `admin/dist`     - **Publish Directory**: `admin/dist`



2. **Update API URLs**2. **Update API URLs**

   - In `admin/src` files, replace `http://localhost:4000` with your backend URL   - In `admin/src` files, replace `http://localhost:4000` with your backend URL



## 🔗 Update CORS and URLs## 🔗 Update CORS and URLs



After deployment, update your backend environment variables:After deployment, update your backend environment variables:



```bash```bash

# Update these with your actual Render URLs# Update these with your actual Render URLs

FRONTEND_URL=https://smart-canteen-frontend.onrender.comFRONTEND_URL=https://smart-canteen-frontend.onrender.com

ADMIN_URL=https://smart-canteen-admin.onrender.comADMIN_URL=https://smart-canteen-admin.onrender.com

``````



## 📱 Your Deployed URLs## 📱 Your Deployed URLs



After successful deployment, you'll have:After successful deployment, you'll have:

- **Backend API**: `https://smart-canteen-backend.onrender.com`- **Backend API**: `https://smart-canteen-backend.onrender.com`

- **Frontend App**: `https://smart-canteen-frontend.onrender.com`- **Frontend App**: `https://smart-canteen-frontend.onrender.com`

- **Admin Panel**: `https://smart-canteen-admin.onrender.com`- **Admin Panel**: `https://smart-canteen-admin.onrender.com`



## 🔍 Troubleshooting## 🔍 Troubleshooting



### Common Issues### Common Issues



1. **Build Failures**1. **Build Failures**

   - Check that all dependencies are in `package.json`   - Check that all dependencies are in `package.json`

   - Ensure build commands are correct   - Ensure build commands are correct

   - Check Render build logs for specific errors   - Check Render build logs for specific errors



2. **API Connection Issues**2. **API Connection Issues**

   - Verify environment variables are set correctly   - Verify environment variables are set correctly

   - Check CORS configuration in backend   - Check CORS configuration in backend

   - Ensure frontend/admin are using correct backend URL   - Ensure frontend/admin are using correct backend URL



3. **Database Connection**3. **Database Connection**

   - Verify MongoDB Atlas allows connections from all IPs (0.0.0.0/0)   - Verify MongoDB Atlas allows connections from all IPs (0.0.0.0/0)

   - Check MongoDB connection string is correct   - Check MongoDB connection string is correct



### Environment Variables Checklist### Environment Variables Checklist



**Backend Service:****Backend Service:**

- ✅ MONGODB_URL- ✅ MONGODB_URL

- ✅ JWT_SECRET  - ✅ JWT_SECRET  

- ✅ STRIPE_SECRET_KEY- ✅ STRIPE_SECRET_KEY

- ✅ NODE_ENV- ✅ NODE_ENV

- ✅ FRONTEND_URL- ✅ FRONTEND_URL

- ✅ ADMIN_URL- ✅ ADMIN_URL



## 🎯 Post-Deployment## 🎯 Post-Deployment



1. **Test Your Application**1. **Test Your Application**

   - Visit your frontend URL   - Visit your frontend URL

   - Test user registration/login   - Test user registration/login

   - Test adding items via admin panel   - Test adding items via admin panel

   - Test placing orders   - Test placing orders



2. **Monitor Services**2. **Monitor Services**

   - Check Render dashboard for service health   - Check Render dashboard for service health

   - Monitor logs for any errors   - Monitor logs for any errors

   - Set up notifications for service downtime   - Set up notifications for service downtime



## 💡 Tips## 💡 Tips



- **Free Tier**: Render free tier services sleep after inactivity- **Free Tier**: Render free tier services sleep after inactivity

- **Custom Domains**: You can add custom domains in Render dashboard- **Custom Domains**: You can add custom domains in Render dashboard

- **SSL**: Render provides free SSL certificates- **SSL**: Render provides free SSL certificates

- **Scaling**: Upgrade to paid plans for better performance- **Scaling**: Upgrade to paid plans for better performance



## 🆘 Getting Help## 🆘 Getting Help



If you encounter issues:If you encounter issues:

1. Check Render service logs1. Check Render service logs

2. Verify all environment variables2. Verify all environment variables

3. Test API endpoints directly3. Test API endpoints directly

4. Check MongoDB Atlas connection4. Check MongoDB Atlas connection



Your Smart Canteen is now ready for production! 🎉Your Smart Canteen is now ready for production! 🎉