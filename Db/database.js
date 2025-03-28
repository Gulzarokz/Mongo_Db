import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.Mongo_URL)
        console.log(" Database Connected successfully")

    }catch(error){
        console.log(error)
    }
}

export default connectDb;