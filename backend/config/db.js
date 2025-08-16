import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo DB connected Successfully');
    } catch (error) {
        console.log(error);
    }
}
/////PORT=4000
MONGO_URI=mongodb+srv://beni:beni@cluster0.905lh85.mongodb.net/CareConnect?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=tosasitoremitaotisasitoreutitisautasayikaimitautitasitore
CLOUDINARY_NAME=dut4xgvn6
CLOUDINARY_API_KEY=294253488785778
CLOUDINARY_SECRET_KEY=N5fOZ2kigidwnznadkzYABJ-x

NODE_ENV=development

ADMIN_EMAIL=ngobokaben@gmail.com
ADMIN_PASSWORD=ngobokaben@gmail