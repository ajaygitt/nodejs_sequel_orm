const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const sequelize = require("./utils/db")
const userModel = require("./models/user")
const SequelizeLib = require("sequelize");
const User = require("./models/user");
const PORT = 8000;



// convert sequelize to actual sql tables


sequelize.sync().then((result) => {
    console.log("result", result)
}).catch((err) => {
    console.log("this is an error", err)
})



// route for insert data to user table

app.get("/create", async (req, res) => {

    try {
        const { email, name } = req.body;

        // insert to table
        await User.create({ name: "test", age: 22 })

        res.status(200).json({ success: true })

    }
    catch (err) {
        res.status(400).json({ error: err })
    }







})

app.listen(PORT, () => {

    console.log("server started on " + PORT)
})

