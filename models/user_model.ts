import { Document, model, Model, models, Schema, Types } from "mongoose";


const ProductSchema = new Schema({
    productName : {
        type : String,
        required : true
    },
    materialName : {
        type : String,
        required : true
        },
    modelOrSize : {
        type : String,
    },
    productColor : {
        type : String,
        required :true,
    },
    productImage : {
        type : String,
        required : true,
    }
})

export interface IUser extends Document{
    name: string,
    email: string,
    image: string,
    provider: string,
    providerId: string,
    password: string,
    _id: Types.ObjectId,
    pastHistory?:[{
        productName : string,
        materialName : string,
        modelOrSize? : string,
        productColor : string,
        productImage : string,

    }],
}

const UserSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        select: false
    },
    email:{
        type: String,
        required: true,
    },
    image:{
        type:String
    },
    provider:{
        type : String,
        default:"credentials"
    },
    providerId:{
        type: String,
    },
    pastHistory : {
        type: [ProductSchema],
        default :[],
    }
}, {
    timestamps: true
})

const UserModel : Model<IUser> = models.User || model<IUser>('User', UserSchema)

export default UserModel