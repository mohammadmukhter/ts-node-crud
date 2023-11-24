import "dotenv/config";
import { connect } from "mongoose";
import app from "./app";

const port = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL;

const main = async () => {
    try {
        await connect(DB_URL as string);

        app.listen(port, () => {
            console.log(`app is running in the port of : ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

main();
