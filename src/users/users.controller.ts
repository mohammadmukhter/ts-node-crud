import { Request, Response } from "express";
import Users from "./users.model";
import { usersServices } from "./users.services";

// create a single user
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

// get all the users
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await usersServices.getAllUsers();

        res.status(200).json({
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

// get a single user
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId: unknown = req.params.userId;

        // check is user exist or not
        const isExistUser = await Users.isExistUser(userId as Number);
        if (!isExistUser) {
            res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    code: 404,
                    description: "User not found!",
                },
            });
        } else {
            const singleUser = await usersServices.getSingleUser(
                userId as Number
            );

            res.status(200).json({
                success: true,
                message: "User fetched successfully!",
                data: singleUser,
            });
        }
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

// get a single user
const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const userId: unknown = req.params.userId;

        // check is user exist or not
        const isExistUser = await Users.isExistUser(userId as Number);
        if (!isExistUser) {
            res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    code: 404,
                    description: "User not found!",
                },
            });
        } else {
            const updateUser = await usersServices.updateSingleUser(
                userId as Number,
                req.body
            );

            res.status(200).json({
                success: true,
                message: "User updated successfully!",
                data: updateUser,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "server side error",
            error: {
                code: 500,
                description: "server side error",
            },
        });
    }
};

// delete a single user
const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const userId: unknown = req.params.userId;

        // check is user exist or not
        const isExistUser = await Users.isExistUser(userId as Number);
        if (!isExistUser) {
            res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    code: 404,
                    description: "User not found!",
                },
            });
        } else {
            const deletedUser = await usersServices.deleteUser(
                userId as Number
            );

            if (deletedUser.deletedCount === 1) {
                res.status(200).json({
                    success: true,
                    message: "User deleted successfully!",
                    data: null,
                });
            }
        }
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

// get a single user
const orderProduct = async (req: Request, res: Response) => {
    try {
        const userId: unknown = req.params.userId;

        // check is user exist or not
        const isExistUser = await Users.isExistUser(userId as Number);
        if (!isExistUser) {
            res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    code: 404,
                    description: "User not found!",
                },
            });
        } else {
            const orderProduct = await usersServices.orderProductByUser(
                userId as Number,
                req.body
            );
            console.log(orderProduct);

            res.status(200).json({
                success: true,
                message: "Order created successfully!",
                data: null,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Server side error",
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
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    orderProduct,
};
