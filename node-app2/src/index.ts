import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//Procesa json para manejarlo como objeto
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({ extended: true}))

//Activar Servidor
app.listen(process.env.PORT, () => {
    console.log(`Connection in Localhost:${process.env.PORT}`);
    connectToDB();
})

//BASE DE DATOS
async function connectToDB(){
    if(process.env.DB_CONNECTION_STRING){
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Connection sussesfully established");
    }else{
        console.log("Connection string is missing");
    }
}