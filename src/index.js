const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

//conectar a la BD
//const urldb = 'mongodb+srv://mariachiio:HolaMariachi2019@backend-bot-uxmt3.mongodb.net/api?retryWrites=true'

mongoose.connect(config.db, { useNewUrlParser: true } ,(err, res)=>{
    if(err) return console.log(`Error al conectar a la db: ${err}`)

    console.log('Conexion exitosa a la BD :D')

    //iniciar servidor
    app.listen(config.port, ()=>{
        console.log(`API REST escuchando en el puerto:${config.port}`) 
    })
})










