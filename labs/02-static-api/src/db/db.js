import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
  } catch (error) {
    console.error(`MongoDB Connect error:`, error);
    process.exit(1);
  }
};

export { connectDB };
