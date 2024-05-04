
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const file = path.join(__dirname , "Public")
const app = express()
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('hlo users its cookie file')
})

// app.post('/setCoki', (req, res) => {
//     const data = req.body
//     res.cookie('myCookie', data)
//     res.send('hlo users its cookie file')
// })


// app.get('/getCoki', (req, res) => {
//     console.log(req.cookies);
//     res.send(req.cookies)

//     // res.send('hlo users its get cookie file')
   
// })




let Users = {
    Name :"Ducat",
    password : "Ducat@123"
}

app.post('/setuser',(req,res)=>{
    res.cookie("mycookie",req.body);
    res.send("Cookies Information added to the browser");
});

app.get('/getuser',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies.mycookie);
});



const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})