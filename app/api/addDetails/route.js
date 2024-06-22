import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req){
    await connectMongoDB();
    const properties = await User.find();
    return NextResponse.json({properties});
}


export async function POST(req){
    const {title, description, image, place, contact} = await req.json();
    await connectMongoDB();
    await User.create({title, description, image, place, contact});
    return NextResponse.json({messgae: "Details added to database"}, {status: 200});
}


export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "Deleted successfully"}, {status: 200});
}