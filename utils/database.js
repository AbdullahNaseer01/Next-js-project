import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connecttoDB = async ()=>{
  mongoose.set('strictQuery', true)  

if(isConnected){
    console.log('Mongodb is connected already');
    return;
}
try {
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName:'share_prompt',
        useNewUrlParser: true,
        useUnifiedTopology:ture,
    })
    isConnected = ture

    console.log('MongoDB connecte')

} catch (error) {
    console.log(error)
}
}