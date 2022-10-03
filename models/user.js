const SequelizeLib=require("sequelize")
const sequelize=require("../utils/db")

const User=sequelize.define("user",{
    id:{
        type:SequelizeLib.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:SequelizeLib.STRING,
        autoIncrement:false,
        allowNull:false,
        primaryKey:false
    },
    age:{
        type:SequelizeLib.INTEGER,
        allowNull:true
    }

})

module.exports=User;