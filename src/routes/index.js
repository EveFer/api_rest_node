const express = require('express')
const ruta = express.Router()

ruta.get('/hola/:name', (req, res)=>{
        let name= req.params.name
        return res.status(200).send({mensaje: `Hola ${name}`})
})

module.exports = ruta