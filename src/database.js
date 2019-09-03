import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(
            'mongodb://app_user:password@localhost:27017/demo',
            { useNewUrlParser: true }
        );
        console.log('Successfully connection to mongodb');
    } catch (error) {
        console.log('Database connection failed');
        console.log(error);
    }
}

