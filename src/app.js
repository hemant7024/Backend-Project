import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.MONGODB_URI,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
