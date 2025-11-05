import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`Database: ${connectionInstance.connection.name}`);
    console.log(`Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Connection err:${error}`);
    process.exit(1); // this disconnect whole server or file
  }
};

export { connectDB };
