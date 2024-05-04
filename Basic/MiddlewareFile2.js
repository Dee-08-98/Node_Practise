
const express = require('express')
const path = require('path')
const file = path.join(__dirname , "Public")
const app = express()
app.use(express.json())


const middle = (req, res, next) => {
    if (req.params.id >= 18) {
        res.sendFile(`${file}/Home.html`)
    }
    else {
        res.send('Acess Denied ! Please check carefully')
    }
    next()
}


app.get('/', (req, res) => {
    res.send('hlo users')
})

app.get('/home/:id', middle, (req, res) => {

    console.log(req.params.id);
    console.log('hiiiiiiiiiiiiiiiiiiiiiiii');

})

const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})