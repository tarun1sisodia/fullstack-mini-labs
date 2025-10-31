import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    console.log(`Starting Server`);
    app.listen(process.env.PORT || 8000, (req, res) => {
      console.log(`Localhost: http://127.0.0.1:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error TO Connect Database: ${error}`);
  });
