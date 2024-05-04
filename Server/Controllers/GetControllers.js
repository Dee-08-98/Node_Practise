const userModel = require("../Models/CrudModels")
const bcrypt = require('bcryptjs')

const getUser = async (req, res) => {
    const result = await userModel.find()

    try {
        if (result) {
            res.status(200).json({ "message": "Data fetch Sucessfully", "result": result })
        }
      

    } catch (error) {

        res.status(500).json({"message":"Server Error", error})

    }
}

module.exports = getUser
