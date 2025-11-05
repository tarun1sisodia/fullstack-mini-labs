import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose
      .connect(`${process.env.MONGODB_URI}${DB_NAME}`)
      .then(() => console.log("✅ Connected to MongoDB"))
      .catch((err) => console.log("❌ MongoDB connection error:", err));
    console.log(`Connection Instance :${connectionInstance.connection.name}`);
    console.log(`Connection Instance :${connectionInstance.connection.host}`);

    console.log(`Database Successfully Intiated`);
  } catch (error) {
    console.error(`Error:${process.env.PORT || process.env.MONGODB_URI}`);
  }
};

export { connectDB };
