# Backend Setup Guide

## 🚨 Current Issues Fixed

1. **Cloudinary Authentication Error**: Added proper error handling for image uploads
2. **Environment Variables**: Fixed configuration issues

## 📋 Required Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```bash
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/careconnect
# OR for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/careconnect

# Cloudinary Configuration (Required for image uploads)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Admin Configuration
ADMIN_EMAIL=admin@careconnect.com
ADMIN_PASSWORD=admin123

# Server Configuration
PORT=4000
```

## 🔧 How to Get Cloudinary Credentials

1. **Sign up** at [Cloudinary](https://cloudinary.com/)
2. **Go to Dashboard** → Account Details
3. **Copy these values**:
   - Cloud Name
   - API Key
   - API Secret

## 🚀 Quick Setup

1. **Install dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Create .env file** with your credentials

3. **Start the server**:
   ```bash
   npm start
   ```

## ✅ Verification

Your server should start without errors and show:
- "MongoDB connected Successfully"
- "Server Started on port 4000"

## 🛠️ Troubleshooting

### Cloudinary Errors
- Check your Cloudinary credentials
- Ensure all three values are correct
- Verify your Cloudinary account is active

### MongoDB Errors
- Check your MongoDB connection string
- Ensure MongoDB is running
- Verify network connectivity

### JWT Errors
- Set a strong JWT_SECRET
- Ensure it's at least 32 characters long
