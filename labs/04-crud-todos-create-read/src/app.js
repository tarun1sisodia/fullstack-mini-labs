import express from "express";
import cookieParse from "cookie-parser";
import cors from "cors";

const app = express();

// It Sending on Server in log that which type request  and where is tagged
const logger = (req, res, next) => {
  console.log(`${req.method}${req.url}`);
  next();
};

app.use(logger);

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

app.get("/", (req, res) => res.send("\nHello World\n "));

export { app };
