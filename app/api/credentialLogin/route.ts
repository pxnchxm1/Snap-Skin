import { signIn } from "@/auth";
import { connectDb } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const {email,password} = await req.json();
    try{
        await connectDb();
        await signIn("credentials",{
            redirect : false,
            callback : '/home',
            email,
            password
        });
        return NextResponse.json({message : "Logged in successfully"});

    }catch(err){
        console.log(err);
        return NextResponse.json({message : "Failed to login"});
    }
}