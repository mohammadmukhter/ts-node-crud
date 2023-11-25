import bcrypt from "bcryptjs";
import { UsersInterface } from "./users.interface";
import Users from "./users.model";

// create a single user services function
const createUsersToDB = async (userData: UsersInterface) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(userData.password as string, salt);
    userData.password = hashedPass;

    const userCreated = await Users.create(userData);

    const { password, ...data } = userCreated.toObject();
    return data;
};

// get all users services function
const getAllUsers = async () => {
    const getAllUsers = await Users.find().select({
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
        _id: 0,
    });
    return getAllUsers;
};

// get a single user services function
const getSingleUser = async (userId: Number) => {
    const getSingleUser = await Users.findOne({ userId: userId }).select({
        password: 0,
    });
    return getSingleUser;
};

// update a single user services function
const updateSingleUser = async (userId: Number, userData: UsersInterface) => {
    const updatedUser = await Users.findOneAndUpdate(
        { userId: userId },
        userData,
        { new: true, projection: { password: 0 } }
    );
    return updatedUser;
};

// delete a single user services function
const deleteUser = async (userId: Number) => {
    const deletedUser = await Users.deleteOne({ userId: userId });
    return deletedUser;
};

// order a product
const orderProductByUser = async (userId: Number, orderData: object) => {
    const getUser: any = await Users.findOne({ userId });
    if (getUser?.orders.length > 0) {
        const orderedProduct = await Users.updateOne(
            { userId: userId },
            { $push: { orders: orderData } }
        );
        return orderedProduct;
    } else {
        const orderedProduct = await Users.updateOne(
            { userId: userId },
            {
                $setOnInsert: { orders: [] },
                $push: { orders: orderData },
            },
            { upsert: true }
        );
        return orderedProduct;
    }
};

export const usersServices = {
    createUsersToDB,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteUser,
    orderProductByUser,
};
