const jwt = require('jsonwebtoken')
const secretkey = 'sadhfuhrwbfcxsknbsdfjwesdgfhgfogf'
const authToken = (req,res,next)=>{
    const head = req.headers.authorization
    if(!head){
        res.status(400).json({message:"Token not found"})
    }
    const token = head.split(' ')[1]
    if(!token){
        res.status(400).json({message:"Unauthorised Token "})
    }
    try {
        getTverify = jwt.verify(token,secretkey)
        req.user = getTverify
        next()
        
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
}


const generateToken = (data)=>{
    return jwt.sign(data,secretkey)
}

module.exports = {authToken , generateToken}