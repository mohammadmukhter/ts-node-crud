import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
    res.send("hello");
};

export const usersController = {
    getAllUsers,
};
