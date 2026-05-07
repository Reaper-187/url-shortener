import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const FRONTEND_URL = process.env.FRONTEND_URL;
export const app = express();

app.set("trust proxy", 1);
app.use(
  cors({
    origin: FRONTEND_URL ? [FRONTEND_URL] : true,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Backend running");
});
