
const express = require('express')
const fs = require('fs')
const path = require('path')
const file = path.join(__dirname)
const filePath = file + '/' + 'abc.txt'
const app = express()

app.get('/', (req, res) => {

    fs.writeFileSync('abc.txt', 'hiiiiiiiiiiiiiiiiiiii')

    res.send('hlo users')
})

app.get('/read', (req, res) => {

    fs.readdir(file , (err,list)=>{
        if(!err){
            list.forEach((item)=>{
                console.log(item);
            });
        }
    })
    res.send('reading directory')
})

app.get('/file',(req,res)=>{
    // fs.readFile(filePath,'utf-8',(err,item)=>{
    //     console.log(item);
    // })

    const data = fs.readFileSync(filePath , 'utf-8')
    console.log('Data are : ' , data);

})


//  append file ke last me add karega

app.get('/append',(req,res)=>{
   fs.appendFile(filePath , 'Welcome in nodejs' , (err)=>{
    if(!err){
        console.log('File updation sucessfull');
    }
   })
   res.send('updating File')

})


app.get('/rename',(req,res)=>{
    fs.rename(filePath , `${file}/abcNew.js` , (err)=>{
     if(!err){
         console.log('File updation renamed');
     }
    })
    res.send('updating File')
 
 })


 app.get('/unlink',(req,res)=>{
    fs.unlinkSync(filePath)
    res.send('updating File')
 
 })


const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
    console.log('Database connected');
})