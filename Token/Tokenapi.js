
const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const app = express() 
app.use(express.json())
app.use(cookieParser())
const secretkey = 'asfasdfsgfgkgnksvlklsvaskvlkasvklcka'

app.get('/', (req, res) => {
    res.send('hlo users its cookie file')
})

const getTokn = (req, res, next) => {
    const head = req.headers.authorization
    if (!head) {
        res.status(400).json({ msg: " Token not found", sucess: 'false' })
    }
    const token = head.split(' ')[1]
    if (!token) {
        res.status(400).json({ msg: "Unauthorised token", sucess: 'false' })
    }
    try {
        if (token) {
            const verToken = jwt.verify(token, secretkey)
            req.user = verToken
            next()
        }
    } catch (error) {
         res.status(400).json({ error: "Invalid token" })
    }
}


app.get('/getToken', getTokn , (req, res) => {
    res.status(200).json({ msg: "Acess granted", token : req.user })
    // res.send(req.user)

    // console.log(req.user);
})

app.post('/setToken', (req, res) => {
    const data = req.body
    const token = jwt.sign(data, secretkey)
    res.status(200).json({ msg: "Token generated sucessfull", token: token })
})


const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})