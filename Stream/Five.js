const {Transform} = require('stream')


const transData2 = new Transform({
    transform(chunk , encoding , callback){

        transData2.emit('error',new Error('Something is fishy in your stream'))

        const value = chunk.toString().replaceAll(/ipsum/gi , 'very good')
        callback(null , value)
    }
})

module.exports = transData2