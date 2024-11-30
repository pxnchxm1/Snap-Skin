import { Document, model, Model, models, Schema, Types } from "mongoose";

import { IUser } from './user_model';

export interface Product extends Document{
    _id: Types.ObjectId,
    productName : string,
    materialName : string,
    modelOrSize? : string,
    productColor : string,
    productImage : string,
    user : Types.ObjectId | IUser ,
}

const ProductSchema = new Schema<Product>({
    productName : {
        type: String,
        default :"",
    },
    materialName : {
        type : String,
        default :"",
    },
    modelOrSize : {
        type : String,
        default :"",
    },
    productColor : {
        type : String,
        default :"",
    },
    productImage : {
        type : String,
        default :"",
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }

    }, {
    timestamps: true
})

const ProductModel : Model<Product> = models.Product || model<Product>('Product', ProductSchema);

export default ProductModel