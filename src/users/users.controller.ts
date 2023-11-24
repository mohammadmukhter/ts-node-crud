import { Request, Response } from "express";
import { usersServices } from "./users.services";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const createdUser = await usersServices.createUsersToDB(req.body);

        res.status(201).json({
            success: true,
            message: "user created successfully",
            data: createdUser,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: {
                code: 500,
                description: "server side error",
            },
        });
    }
};

export const usersController = {
    getAllUsers,
};
