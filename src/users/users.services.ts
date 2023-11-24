import UsersInterface from "./users.interface";
import Users from "./users.model";

const createUsersToDB = async (userData: UsersInterface) => {
    const userCreated = await Users.create(userData);
    return userCreated;
};

export const usersServices = {
    createUsersToDB,
};
