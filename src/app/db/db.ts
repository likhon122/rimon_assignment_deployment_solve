import mongoose from "mongoose";



const connectMongoDB = async(MONGODB_URI: string)=>{
    try {
  
      await mongoose.connect( MONGODB_URI)
  
      console.log("Database connected successfully.");
      
    } catch (error) {
      console.log(error);
    }
  }
  

export default connectMongoDB