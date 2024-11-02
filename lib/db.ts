import mongoose from 'mongoose';


const db = process.env.DB_URI;
console.log(db);
if(!db){
    throw new Error ("db not found");
}

export const connectDb = async() => {
    try{
        await mongoose.connect(db);

    }catch{
        console.log("connect panna mudiyala");
    }
}

