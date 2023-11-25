import cors from "cors";
import express, { Application, Request, Response } from "express";
import usersRoutes from "./users/users.routes";
const app: Application = express();

// parser || global middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("app running");
});

app.use("/api/users", usersRoutes);

export default app;
