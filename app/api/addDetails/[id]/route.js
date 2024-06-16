import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle : title, newDescription: description, newImage: image, newPlace: place, newContact: contact} = await request.json();
           await connectMongoDB();
           await User.findByIdAndUpdate(id, {title, description, image, place, contact});
           return NextResponse.json({message: "Property Updated"}, {status: 200});
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const property = await User.findOne({_id:id});
    return NextResponse.json({property}, {status: 200});
}