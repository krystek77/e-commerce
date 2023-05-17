import mongoose from 'mongoose';

let isConnected = false;
let connection = null;

export async function connectToDB() {
  mongoose.set('strictQuery',true);
  if(isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    connection = await mongoose.connect(process.env.MONGODB_STRING_CONNECTION, {
      dbName: process.env.MONGODB_DATABASE,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected"); 
    return connection;
  } catch (error) {
    console.log(error.message);
  } 
}

export async function disconnectFromDB(){
  try {
    if(connection) 
    await connection.disconnect();
    isConnected = false;
    console.log("MongoDB is closed")
  } catch{
    console.log(error.message);
  }
}