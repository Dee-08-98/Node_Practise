
const express = require('express')
const path = require('path')
const file = path.join(__dirname , "Public")
const app = express()

app.get('/', (req, res) => {
    res.send('hlo users')
})
app.get('/home', (req, res) => {
    res.sendFile(`${file}/Home.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`${file}/About.html`)
})
const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})