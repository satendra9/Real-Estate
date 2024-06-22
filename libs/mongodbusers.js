import mongoose from "mongoose";

const connectMongoDBUsers = async () => {
    try{
        
            await mongoose.connect('mongodb://127.0.0.1:27017/myapp2');
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
    mongoose.set("bufferCommands", true)
    require("../models/registeruser");
};

export default connectMongoDBUsers;