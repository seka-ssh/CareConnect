import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async (retries = 3) => {
    // Configure Cloudinary
    cloudinary.config({
        cloud_name: "dtykgrx02",
        api_key: "746374242875765",
        api_secret: "uuKHYA1doWLAcax3ZHySc5FbFdc"
    });

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await cloudinary.api.ping();
            console.log('✅ Cloudinary configured successfully with valid credentials');
            return true;
        } catch (err) {
            console.warn(`⚠️ Attempt ${attempt} failed:`, err.code || err.message);
            if (attempt === retries) {
                console.error('❌ Could not connect to Cloudinary after multiple attempts');
                return false;
            }
            // Wait a bit before retrying
            await new Promise(res => setTimeout(res, 1000));
        }
    }
};

export default connectCloudinary;
