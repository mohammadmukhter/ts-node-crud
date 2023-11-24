import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

// parser || global middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("app running");
});

export default app;
