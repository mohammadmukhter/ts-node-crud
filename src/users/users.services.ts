import { UsersInterface } from "./users.interface";
import Users from "./users.model";

// create a single user services function
const createUsersToDB = async (userData: UsersInterface) => {
    const userCreated = await Users.create(userData);
    return userCreated;
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

export const usersServices = {
    createUsersToDB,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteUser,
};
