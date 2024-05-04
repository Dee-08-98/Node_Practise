
const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())


const middle = (req,res,next)=>{
    if(req.query.age >= 18){
        res.send('Welcome user you are on the Home page')
    }
    else{
        res.send('Acess Denied ! Please check carefully')
    }
    next()
}
app.use(middle)


app.get('/', (req, res) => {
    res.send('hlo users')
})
app.get('/home', (req, res) => {
    res.send('hlo users its home page')
})
const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})