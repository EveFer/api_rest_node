const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken (user) {
    const payload = {
        sub: user._id, //id del usuario
        fecha_creacion: moment.unix(), //fecha de creacion del token
        exp: moment.add(1, "minute"). unix() //fecha de expiracion del token
    }

    return jwt.encode(payload, config.SECRET_KEY)
}

module.exports = {
    createToken
}