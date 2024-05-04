const {Readable , Writable , Transform} = require('stream')


const transData = new Transform({
    transform(chunk , encoding , callback){

        const value = chunk.toString().toUpperCase()
        callback(null , value)
    }
})

module.exports = transData