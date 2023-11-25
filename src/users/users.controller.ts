import { Request, Response } from "express";
import { usersServices } from "./users.services";

const createUser = async (req: Request, res: Response) => {
    try {
        const createdUser = await usersServices.createUsersToDB(req.body);

        res.status(201).json({
            success: true,
            message: "User created successfully!",
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

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await usersServices.getAllUsers();

        res.status(201).json({
            success: true,
            message: "Users fetched successfully!",
            data: allUsers,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Failed to get all users",
            error: {
                code: 500,
                description: "server side error",
            },
        });
    }
};

export const usersController = {
    createUser,
    getAllUsers,
};
