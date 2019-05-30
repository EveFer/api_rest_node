const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken (user) {
    const payload = {
        sub: user._id, //id del usuario
        iat: moment().unix(), //fecha de creacion del token
        exp: moment().add(1, 'minute').unix() //fecha de expiracion del token
        
    }

    return jwt.encode(payload, config.SECRET_KEY)
}

function verificateToken(token) {
    const decoded = new Promise((resolve, reject) =>{
        try {
            //console.log(token)
            const payloads = jwt.decode(token, config.SECRET_KEY, true)
            console.log(jwt.decode(token, config.SECRET_KEY, true))
            if(payloads.exp < moment().unix()){
                reject({
                    status: 500,
                    mensaje: 'EL token ha expirado D:'
                })
            }

            resolve(payloads.sub)

        } catch (error) {
            reject({
                status: 500,
                mensaje: 'Token invalido'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    verificateToken
}