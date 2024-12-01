import { connectDb } from "@/lib/db";
import UserModel from "@/models/user_model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export const POST = async(req:Request)=>{
    const {email,password} = await req.json();
    console.log(email,password);
    try{
        await connectDb();
        const  hashedPassword = await bcrypt.hash(password,5);
        const user = await UserModel.create(
            {
                email:email,
                password:hashedPassword
            });
            return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
    }catch(err){
        console.log(err);
        return NextResponse.json({ message: 'Error creating user', error: err }, { status: 500 });
    }

}