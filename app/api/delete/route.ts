// import { connectDb } from "@/lib/db";
// import ProductModel from "@/models/product_model";
// import { NextResponse } from "next/server";

// export const POST = async (req:Request,res:NextResponse)=>{
//     const { id } = req.json();
//     try {
//         await connectDb();
//         const deletedProduct = await ProductModel.findOneAndDelete({ _id: id });
//         if (!deletedProduct) {
//           console.log("No product found with the given ID");
//           return;
//         }
//         console.log("Deleted product:", deletedProduct);
//       } catch (error) {
//         console.error("Error deleting product:", error);
//       }
// }