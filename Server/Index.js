const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const  route  = require('./Routes/Userroutes')


const app = express()


app.use(express.json())
app.use(cors())
dotenv.config()


const port = process.env.port
const url = process.env.url

app.use('/crudApi',route)


mongoose.connect(url)
.then(()=>{
    app.listen(port,()=>{
        console.log('Server is running on Port :- ', port);
        console.log('Database connected');
    })
})
.catch((err)=>{
    console.log(err);
})