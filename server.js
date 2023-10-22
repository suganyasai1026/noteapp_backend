const express = require('express')
const app = express()
const { connection } = require("./db")
require("dotenv").config()

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const hostname = 'localhost';
const port = process.env.PORT;
const cors=require('cors');



// mongoose.connect('mongodb://localhost:27017/Notes').then(() => console.log('db connected'));;

app.get("/",(req,res)=>{
    res.send({
        message:"api is working now"
    })
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/user',require("./routes/user"))
app.use('/note',require("./routes/Note"))


app.listen(port, hostname,async() => {
    try{
        await connection
        console.log("database is connected");
    }catch(error){
        console.log(error)
    }
    console.log(`Server running at http://${hostname}:${port}/`);
  });