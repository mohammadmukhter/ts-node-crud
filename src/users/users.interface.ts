interface UsersInterface {
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

export default UsersInterface;
