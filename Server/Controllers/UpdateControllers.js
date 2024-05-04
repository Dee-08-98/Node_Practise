

const userModel = require("../Models/CrudModels")
const bcrypt = require('bcryptjs')

const UpdateUser = async (req, res) => {
    const paramId = req.params.id

    try {
        if (paramId) {
            const result = await userModel.findByIdAndUpdate(paramId , req.body , {new : true})


            res.status(200).json({ "message": "Data Updated Sucessfully ", "result": result })
        }


    } catch (error) {

        res.status(500).json({ "message": "Server Error", error })

    }
}

module.exports = UpdateUser
