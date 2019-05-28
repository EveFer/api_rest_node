const express = require('express')
const ruta = express.Router()
const UserController = require('../controllers/user')

ruta.get('/hola/:name', (req, res)=>{
        let name= req.params.name
        return res.status(200).send({mensaje: `Hola ${name}`})
})


ruta.post('/users', UserController.create)
ruta.get('/users', UserController.getAll)




module.exports = ruta