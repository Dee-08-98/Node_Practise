const express = require('express')
const app = express()
app.use(express.json())

const cookieParser = require('cookie-parser')
app.use(cookieParser())

const {authToken , generateToken} = require('./TokenMiddlewareFile.js')


app.post('/login' ,  (req,res)=>{
    const Signupdata = req.body
    const token = generateToken(Signupdata)
    res.cookie('AppCookie', token)
    res.status(200).json({message:"Login suceessfull" , token : token})
})


app.get('/home' ,authToken, (req,res)=>{
    const homeData = req.user
    console.log(req.cookies.AppCookie);
    res.status(200).json({message:"Cookie found" , token : homeData})
})




const port = 4545

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
})