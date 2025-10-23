import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./db/db";

dotenv.config();
const app = express();
// const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public/pc_19")));
connectDB();

export { app };
