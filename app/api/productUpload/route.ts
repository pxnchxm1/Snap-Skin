import { connectDb } from "@/lib/db";
import UserModel from "@/models/user_model";
import { NextResponse } from "next/server";

export const PUT = async (req : Request) => {
    const {id,productData} = await req.json();
    if (!id || !productData){
        return new Response(JSON.stringify({error: "Missing required fields"}), {status: 400 });
        }
    try{
        
    
        await connectDb();
        const updatedUser = await UserModel.findByIdAndUpdate(id,
            {$push : {pastHistory: {$each : productData} }},
            {new : true},
        )
        if (!updatedUser){
            return NextResponse.json({error: 'User Not Found'},{status:400});
        }
        return NextResponse.json(updatedUser,{status:200});

        }catch(e: any){
            console.error(e);
            return NextResponse.json({error: 'Failed to update user'}, {status:500});
        }
}