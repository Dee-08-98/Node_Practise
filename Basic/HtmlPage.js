
const express = require('express')
const path = require('path')
const file = path.join(__dirname , "Public")
const app = express()
app.use(express.static(file))

app.get('/', (req, res) => {
    res.send('hlo users')
})

const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})