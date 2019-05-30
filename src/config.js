/*Archivo donde se encuentran las variables globales */
module.exports={
    port: process.env.PORT || 3000,
    db: process.env.MONGO_URL || 'mongodb://localhost:27017/prueba',
    SECRET_KEY: process.env.SECRET || 'aliw8374283nqnal12fdErhf4'
}