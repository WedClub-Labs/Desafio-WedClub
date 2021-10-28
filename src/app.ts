import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { router } from "./routes";

const { PORT = 3000 } = process.env;

type ErrorObj = {
  statusCode: number;
  message: string;
};

const app = express();

app.use(express.json());

app.use(router);

app.use((err: ErrorObj, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  const { statusCode = 500, message } = err;

  return res.status(statusCode).json({ message });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
