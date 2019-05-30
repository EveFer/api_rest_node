const express = require('express')
const ruta = express.Router()
const UserController = require('../controllers/user')
const isAuthenticate = require('../middlewares/auth')

ruta.get('/hola/:name', (req, res)=>{
        let name= req.params.name
        return res.status(200).send({mensaje: `Hola ${name}`})
})


ruta.post('/users', isAuthenticate ,UserController.create)
ruta.get('/users', UserController.getAll)
ruta.get('/users/:id', UserController.getUser)
ruta.put('/users/:id', UserController.updateUser)
ruta.delete('/users/:id', UserController.deleteUser)
ruta.post('/login', UserController.login)


module.exports = ruta