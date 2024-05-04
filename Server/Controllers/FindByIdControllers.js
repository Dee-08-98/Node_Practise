const userModel = require("../Models/CrudModels")
const bcrypt = require('bcryptjs')

const FindUser = async (req, res) => {
    const paramId = req.params.id

    if (paramId) {
        try {

            const result = await userModel.findById(paramId)

            if (result) {
    
    
                res.status(200).json({ "message": "Data fetch Sucessfully of that person", "result": result })
            }
    
    
        } catch (error) {
    
            res.status(500).json({ "message": "Server Error", error })
    
        }
    }


 
}

module.exports = FindUser
