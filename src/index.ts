import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Logger from "@commons/common/utils/logger"
import { toDate } from "@commons/common/utils";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Demo Server");
});

app.get("/is-date", (req: Request, res: Response) => {
  const date = toDate((req.query.date as string));
  res.send(`is date ? ${date ? 'yup' : 'nope'}`);
});

app.listen(port, () => {
    Logger.info(`[server]: Server is running at http://localhost:${port}`);
});
