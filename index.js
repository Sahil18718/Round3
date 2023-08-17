// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {connection} = require("./database")
const { travelRouter } = require("./Routes/travel.routes")

require("dotenv").config()
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).send("Travel App is running Fine on Backend")
})
app.use("/travel",travelRouter)


// Checking that the server is running Fine or not
app.listen(process.env.PORT, async(req,res)=>{
    
    try {
        await connection
        console.log("Connected to Database running fine in index.js")
    } catch (error) {
        console.log("App not connected to database check database.js",{"msg":error.message})
    }
    console.log("App running fine in  index.js ")
});
