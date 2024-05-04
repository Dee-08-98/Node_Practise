const express = require('express')
const app = express()
app.use(express.json())

const fs = require('fs')
const path = require('path')
const file = path.join(__dirname)
const filePath = file + '/' + 'abc.txt'
// console.log(filePath);

const zlib = require('zlib')

const transData = require('./Three')
const transData2 = require('./Five')
const { pipeline } = require('stream')


app.get('/', (req, res) => {


    // ************************ writing file in good way

    const data = fs.createReadStream(filePath, 'utf-8')
    const writeData = fs.createWriteStream('new2.txt')

    //  data.pipe(transData).pipe(writeData)

    data.pipe(transData2).pipe(transData).pipe(writeData)


})



app.get('/pipeline', (req, res) => {


    // ************************ writing file in good way

    const data = fs.createReadStream(filePath, 'utf-8')
    const writeData = fs.createWriteStream('new3.txt')

    pipeline(data, transData2, transData, writeData, (err) => {
        console.log(err);
    })


    data.pipe(transData2).pipe(transData).pipe(writeData)


})



app.get('/pipelineError', (req, res) => {


    // ************************ writing file in good way

    const data = fs.createReadStream(filePath, 'utf-8')
    const writeData = fs.createWriteStream('new3.txt')

    pipeline(data, transData2, transData, writeData, (err) => {

        if (err) {
            console.log(err);
        }
        
    })


    data.pipe(transData2).pipe(transData).pipe(writeData)


})





const port = 4545

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
})