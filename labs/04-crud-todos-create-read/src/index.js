import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./services/db.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running server on Local PORT`);
    });
    app.on("error", (error) => {
      console.log(`Error inside in app.on`);
    });
  })

  .catch((err) => {
    console.error(`MONGODB: ${err}`);
  });
