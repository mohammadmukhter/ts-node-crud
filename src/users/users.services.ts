import UsersInterface from "./users.interface";
import Users from "./users.model";

const createUsersToDB = async (userData: UsersInterface) => {
    const userCreated = await Users.create(userData);
    return userCreated;
};

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

export const usersServices = {
    createUsersToDB,
    getAllUsers,
};
