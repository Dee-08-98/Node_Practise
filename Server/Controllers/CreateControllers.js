const userModel = require("../Models/CrudModels")
const bcrypt = require('bcryptjs')

const create = async(req,res)=>{
    const {name , email ,password} = req.body
    if(!name || !email || !password){
        res.status(400).json({"message":"All Fields are required dear user"})
    }
    else{
        try {

            const data = new userModel({
                name,
                email,
                password : await bcrypt.hash(password , 12)
            })
            const result = await data.save()
            res.status(200).json({"message":"All Fields are completed" , "createdData":result})

        } catch (error) {

        res.status(500).json({"message":"Server Error", error})
            
        }
    }
}


module.exports = create
