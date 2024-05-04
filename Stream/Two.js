const express = require('express')
const app = express()
app.use(express.json())

const fs = require('fs')
const path = require('path')
const file = path.join(__dirname)
const filePath = file + '/' + 'abc.txt'
// console.log(filePath);

const zlib = require('zlib')

const {Readable , Writable} = require('stream')


app.get('/' ,  (req,res)=>{
    
    const readData = new Readable({
        read(s){
            console.log(s);
        }
    })

    readData.on('data',(chunk)=>{
        console.log(chunk.toString());
        res.send(chunk.toString())
    })

    readData.push('sachin ramesh tendulkar')
   

})


app.get('/write' ,  (req,res)=>{
    
    const readData = new Readable({
        read(s){
            console.log(s);
        }
    })

    const writeData = new Writable({
        write(s){
            // console.log('write data are ', s);

            console.log('write data are ', s.toString());

        }
    })

    readData.on('data',(chunk)=>{
    //   writeData.write(chunk)
    writeData.write(chunk)

    })

    readData.push('sachin ramesh tendulkar')
   

})



app.get('/extra' ,  (req,res)=>{
    
    const readData = new Readable({
        objectMode : true,
        read(){
           
        }
    })


    readData.on('data',(chunk)=>{
        console.log(chunk);
    })

    
    readData.push({name : 'sachin ramesh tendulkar' , passon : "crickter"})
   

})


const port = 4545

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
})