const userModel = require("../Models/CrudModels")
const bcrypt = require('bcryptjs')

const DeleteUser = async (req, res) => {
    const paramId = req.params.id

    try {
        if (paramId) {
            const result = await userModel.findByIdAndDelete(paramId)


            res.status(200).json({ "message": "Data Deleted Sucessfully ", "result": result })
        }


    } catch (error) {

        res.status(500).json({ "message": "Server Error", error })

    }
}

module.exports = DeleteUser
