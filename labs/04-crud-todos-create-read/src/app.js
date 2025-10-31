import express from "express";
import cookieParse from "cookie-parser";
import cors from "cors";
import { User } from "./models/user.model.js";

const app = express();
/* 
// It Sending on Server in log that which type request  and where is tagged
const logger = (req, res, next) => {
  console.log(`${req.method}${req.url}`);
  next(console.log("I am 1st Next"));
};

app.use(logger);

function logger2() {
  console.log(`2nd Function called by next`);
}

app.get("/", (req, res, next) => {
  res.send("Calling another Middleware/Function");
  next(logger2());
}); */
async function createUser(req, res, next) {
  const user = User.create({
    username: "Tarun",
    password: "T@run123",
  });
  await user.save();
}

app.post("/register", createUser);

app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true,
  })
);

app.use(express.static("public"));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(cookieParse());

export { app };
