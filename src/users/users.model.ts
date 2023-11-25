import { Schema, model } from "mongoose";
import { UsersInterface, usersModel } from "./users.interface";

const usersSchema = new Schema<UsersInterface, usersModel>({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    hobbies: [
        {
            type: String,
            required: false,
        },
    ],
    address: {
        street: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
    },
    orders: [
        {
            productName: {
                type: String,
                required: false,
            },
            price: {
                type: Number,
                required: false,
            },
            quantity: {
                type: Number,
                required: false,
            },
        },
    ],
});

usersSchema.statics.isExistUser = async function (userId) {
    const existingUser = await Users.findOne({ userId });
    if (existingUser) {
        return true;
    } else {
        return false;
    }
};

const Users = model<UsersInterface, usersModel>("User", usersSchema);
export default Users;
