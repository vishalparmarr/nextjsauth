import mongoose from "mongoose";

export async function connect() {

    try {
        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.once('connected', () => {
            console.log("Connected to the database");
        })

        connection.on('error', (err) => {
            console.log("Error while connecting to the database " + err);
            process.exit();
        })
    }
    catch (error) {
        console.log("Error while connecting to the database " + error);
    }
}