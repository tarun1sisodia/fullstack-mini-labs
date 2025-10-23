import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  try {
    console.log(
      `\n\n\t\t\t****************~~~~~~~~~~Loading the Database URL~~~~~~~~~~**********\n\n\n`,
      process.env.DATABASE_URL
    );
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    // console.log("DB Connected", connectionInstance);
    console.log(
      `\n\n\t\t\t****************~~~~~~~~~~Connected the Database URL~~~~~~~~~~**********\n\n\n`
    );
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

export default connectDB;
