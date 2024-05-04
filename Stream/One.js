const express = require('express')
const app = express()
app.use(express.json())

const fs = require('fs')
const path = require('path')
const file = path.join(__dirname)
const filePath = file + '/' + 'abc.txt'
// console.log(filePath);

const zlib = require('zlib')


app.get('/' ,  (req,res)=>{
    
    // ************************ Reading file in bad way

//    const data = fs.readFileSync(filePath , 'utf-8')
  
//    res.send(data)


     // ************************ Reading file in good way

    //  const data = fs.createReadStream(filePath , 'utf-8')
  
    //  data.pipe(res)


      // ************************ writing file in good way

    //  const data = fs.createReadStream(filePath , 'utf-8')
    //  const writeData = fs.createWriteStream('new1.txt')
  
    //  data.pipe(writeData)



    // data.on('data',(chunk)=>{
    //     writeData.write(chunk)
    // })
    // data.on('error',(error)=>{
    //     console.log(error);
    // })



    // ************************** creating zip file


    //    const data = fs.createReadStream(filePath , 'utf-8')
    //  const writeData = fs.createWriteStream('new1.zip')
  
    //  data.pipe(zlib.createGzip().pipe(writeData))
  
})

const port = 4545

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
})