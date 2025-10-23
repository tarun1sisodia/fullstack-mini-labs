import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../db/db.js";

dotenv.config();
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

connectDB();

export { app };
