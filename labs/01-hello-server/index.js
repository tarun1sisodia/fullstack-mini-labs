import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//First API
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Start Server
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
