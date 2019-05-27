//configuracion de express
const express = require('express') 
const bodyParser = require('body-parser')
const morgan= require('morgan')
const rutas = require('./routes')
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ruta
app.use('/api/v1', rutas)




module.exports = app