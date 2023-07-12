import mongoose from "mongoose";

let isConnected = false

export const dbConnect = async () => {
    mongoose.set('strictQuery', true);
    
    if (isConnected) {
        console.log('you already connected to db');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

        isConnected = true;

        console.log('your mongoDB is Connected');

    } catch (err) {
        console.log(err);
    }
}