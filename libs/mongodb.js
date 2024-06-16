import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database is connected");
    }catch(error){
        console.log("Error in db connection");
    }
}

export default connectMongoDB;