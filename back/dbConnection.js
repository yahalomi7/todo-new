import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.DBURI)
        console.log(`db connected`,
            conn.connection.host);
    } catch (err) {
        console.log('error by connecting db',err);
    }
}