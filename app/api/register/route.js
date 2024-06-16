
import { NextResponse } from "next/server";
import RegisterUser from "@/models/registerUser";
import bcrypt from 'bcryptjs';
import connectMongoDBUsers from "@/libs/mongodbusers";

export async function POST(req){
    try{
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10); 
        await connectMongoDBUsers();
        await RegisterUser.create({name, email, password: hashedPassword});

        return NextResponse.json({message: "User Registered"}, {status: 201});
        
    }catch(err){
        console.log(err);
        return NextResponse.json({message: "Error occured, check console"}, {status: 500});
    }
}