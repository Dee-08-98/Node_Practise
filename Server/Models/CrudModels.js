const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        trim : true
    },
    password: {
        type : String,
        required : true,
        trim : true,
        minlength : 6

    },
})

const userModel = new mongoose.model('crudOperations',userSchema)

module.exports = userModel