import { Document, model, Model, models, Schema, Types } from "mongoose";

export interface IUser extends Document{
    name: string,
    email: string,
    image: string,
    provider: string,
    providerId: string,
    password: string,
    _id: Types.ObjectId,
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
    }
}, {
    timestamps: true
})

const UserModel : Model<IUser> = models.User || model<IUser>('User', UserSchema)

export default UserModel