const SequelizeLib=require("sequelize")

const sequelize=new SequelizeLib(process.env.DB_NAME,process.env.DB_USER_NAME,process.env.DB_PWD,{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;
