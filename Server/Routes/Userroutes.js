const express = require('express')
const route = express.Router()

const create = require('../Controllers/CreateControllers')
const getUser = require('../Controllers/GetControllers')
const FindUser = require('../Controllers/FindByIdControllers')
const DeleteUser = require('../Controllers/DeleteControllers')
const UpdateUser = require('../Controllers/UpdateControllers')


route.post('/createCrud',create)
route.get('/getCrud',getUser)
route.get('/getById/:id',FindUser)
route.get('/deleteCrud/:id',DeleteUser)
route.post('/updateCrud/:id',UpdateUser)





module.exports = route