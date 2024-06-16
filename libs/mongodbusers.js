import mongoose from "mongoose";

const connectMongoDBUsers = async () => {
    try{
        mongoose.connect(process.env.MONGOREG_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
}

export default connectMongoDBUsers;