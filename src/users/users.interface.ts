import { Model } from "mongoose";

export interface UsersInterface {
    userId: Number;
    username: String;
    password: String;
    fullName: {
        firstName: String;
        lastName: String;
    };
    age: Number;
    email: String;
    isActive: Boolean;
    hobbies?: String[];
    address?: {
        street: String;
        city: String;
        country: String;
    };
    orders?: [
        {
            productName: String;
            price: Number;
            quantity: Number;
        }
    ];
}

export interface usersModel extends Model<UsersInterface> {
    isExistUser(userId: Number): Promise<UsersInterface | boolean | null>;
}
