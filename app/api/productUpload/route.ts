import { connectDb } from "@/lib/db";
import ProductModel from "@/models/product_model";
import UserModel from "@/models/user_model";
import { NextResponse } from "next/server";

export const POST = async (req : Request) => {
    const {id,productName,materialName,modelOrSize,productColor,productImage} = await req.json();
    try{
        await connectDb();
        const User = UserModel.findById(id);
        if(!User){
            return NextResponse.json({error: "User not found"}, {status: 404});
        }
        const newProduct = await ProductModel.create({
            productName : productName,
            materialName: materialName,
            modelOrSize: modelOrSize,
            productColor: productColor,
            productImage: productImage,
            user: id
        });
        
        return NextResponse.json(User,{status:200});
        }
    catch(e: any){
            console.error(e);
            return NextResponse.json({error: 'Failed to update Product'}, {status:500});
        }
}