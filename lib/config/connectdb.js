
import mongoose from "mongoose";
 async function connectdb() { 
    try {
     await mongoose.connect(process.env.Mongo_url);
    } catch (error) {
        console.log("Something went wrong ...",error);        
    }
}

export default connectdb;
