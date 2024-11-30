import { connectDb } from "@/lib/db";
import ProductModel from "@/models/product_model";
import { NextResponse } from "next/server";


export const GET = async(req : Request ) => {
    try{
        await connectDb();
        const products = await ProductModel.find();

        if (products.length === 0) {
            return NextResponse.json({ error: "No products found" }, { status: 404 });
        }
        return NextResponse.json({ products }, { status: 200 });

    }
    catch(err){
        console.log(err);
    }
}