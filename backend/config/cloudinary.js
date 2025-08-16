import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv';

dotenv.config();

const connectCloudinary = async () => {
    try {
        // Check if environment variables are available
        if (process.env.CLOUDINARY_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_SECRET_KEY) {
            // Test the credentials by trying a simple API call
            cloudinary.config({
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_SECRET_KEY
            });
            
            // Test the credentials
            try {
                await cloudinary.api.ping();
                console.log('✅ Cloudinary configured successfully with valid credentials');
                return true;
            } catch (testError) {
                console.warn('⚠️ Cloudinary credentials are invalid');
                console.warn('Image uploads will use placeholder images');
                return false;
            }
        } else {
            console.warn('⚠️ Cloudinary credentials not found in environment variables');
            console.warn('Image uploads will use placeholder images');
            console.warn('To enable Cloudinary, create a .env file with your credentials');
            return false;
        }
    } catch (error) {
        console.error('❌ Cloudinary configuration error:', error.message);
        return false;
    }
}

export default connectCloudinary