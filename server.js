const express=require("express")
const app=express();
const dotenv=require("dotenv")
dotenv.config();
const sequelize=require("./utils/db")
const userModel=require("./models/user")
const SequelizeLib=require("sequelize")
const PORT=8000;



// convert sequelize to actual sql tables


sequelize.sync().then((result)=>{
    console.log("result",result)
}).catch((err)=>{
    console.log("this is an error",err)
})



app.listen(PORT,()=>{

    console.log("server started on "+PORT)
})

