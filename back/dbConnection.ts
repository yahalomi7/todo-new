import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.DBURI;
    if (!uri) {
      throw new Error('DBURI is not defined in the environment variables');
    }

    const conn = await mongoose.connect(uri);
    console.log('✅ MongoDB connected:', conn.connection.host);
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1); // Optional: exit process on DB failure
  }
};
