import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        
            await mongoose.createConnection('mongodb://127.0.0.1:27017/myapp1').asPromise();
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
    require("../models/user");
}


export default connectMongoDB;

