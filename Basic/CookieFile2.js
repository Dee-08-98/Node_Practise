const express = require('express')
const app = express()
app.use(express.json())

const cookieParser = require('cookie-parser')
app.use(cookieParser())


app.post('/SetCookie', (req, res) => {
    res.cookie('checkCook', req.body)
    res.status(200).json({ 'Message': "Cookie generated" })
})

app.get('/GetCookie', (req, res) => {
    console.log('Cookie found are :', req.cookies);
    res.status(200).json({ 'Message': "Cookie Found",cookie : req.cookies.checkCook.name })
})


// app.get('/ClearCookie', (req, res) => {
//     console.log('Cookie found are :', req.);
//     res.status(200).json({ 'Message': "Cookie Found",cookie : req.cookies.checkCook.name })
// })

const port = 1224

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
})