import { connectDb } from "@/lib/db";
import ProductModel from "@/models/product_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST= async (req:Request,res:NextResponse)=>{
    const { id } = await req.json();
    try {
        await connectDb();
        const objectID = mongoose.Types.ObjectId.createFromHexString(id);
        const deletedProduct = await ProductModel.findOneAndDelete({ _id: objectID });
        if (!deletedProduct) {
          console.log("No product found with the given ID");
          return;
        }
        console.log("Deleted product:", deletedProduct);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
}