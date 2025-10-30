import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
//Syntax to create a app method or api

/*app.METHOD(PATH, HANDLER)
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
 */

app.get("/", (req, res) => res.send("Check 200"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentails: true,
  })
);

export { app };
