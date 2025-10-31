import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";
dotenv.config();

const connectDB = async () => {
  try {
    console.log(
      `\n\n\t\t\t****************~~~~~~~~~~Loading the Database URL~~~~~~~~~~**********\n\n\n`
    );

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n\n\t\t\t*********~~~~~~~Connected the Database URL~~~~~~*******\n\n\n`
    );
  } catch (error) {
    console.error(`MongoDB Connect error:`, error);
    process.exit(1);
  }
};
console.log(`EXPORTED THE MONGOOSE`);

export { connectDB };
