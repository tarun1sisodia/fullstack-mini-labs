import { connectDB } from "../02-static-api/db/db.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

connectDB();
console.log(
  `\n\n\t\t\t****************~~~~~~~~~~Starting Server~~~~~~~~~~**********\n\n\n`
);
app.listen(
  `\n\n\t\t\t****************~~~~~~~~~~Running the Server~~~~~~~~~~**********\n\n\n`,
  process.env.PORT
);


// export { app };
