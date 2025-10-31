import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  try {
    console.log(
      `\n\n\t\t\t****************~~~~~~~~~~Loading the Database URL~~~~~~~~~~**********\n\n\n`,
      process.env.MONGODB_URI
    );
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log("DB Connected", connectionInstance);
    console.log(
      `\n\n\t\t\t****************~~~~~~~~~~Connected the Database URL~~~~~~~~~~**********\n\n\n`
    );
    console.log(`Database: ${connectionInstance.connection.name}`);
    console.log(`HOST(DEV/PROD/TEST): ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Connection Failed To MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
