import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// routes import
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true,
  })
);

app.use(express.static("public"));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(cookieParser());
// routes declaration
app.use("/api/v1/users", userRouter);
app.get("/health", (_, res) => {
  res.send("Server is Healthy");
});
export { app };
