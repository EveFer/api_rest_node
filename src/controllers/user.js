const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const token = require('../tokens')

const create = (req, res)=>{
    //console.log(req.body)
    const user = new UserModel(req.body)

    // const user = new UserModel({
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         email: req.body.email,
    //         password: req.body.password
    // })

    user.save((err, usercreated)=>{
            if(err) return res.status(500).send({error: `${err}`})

            return res.status(201).send({usercreated})
    })
}

const getAll =  (req, res)=>{
    UserModel.find({}, (err, users)=>{
            if(err) return res.status(500).send({error:`${err}`})
            if(!users) return res.status(404). send({mensaje: `No existen usuarios` })

            return res.status(200).send(users)
    })
}

const getUser = (req, res) => {
    let idUser = req.params.id
    UserModel.findById({_id: idUser}, (err, user)=>{
        if(err) return res.status(500).send({mensaje: `${err}`})
        if(!user) return res.status(404).send({mensaje: `Usuario no encontrado`})

        return res.status(200).send(user)
    })
}

const updateUser = (req,res) =>{
    let idUser = req.params.id
    let data = req.body

    UserModel.findByIdAndUpdate(idUser, data, {new:true} ,(err, userUpdated)=>{
        if(err) return res.status(500).send({error: `${err}`})

        return res.status(200).send({user: userUpdated})

    })
}
const deleteUser = (req, res) =>{
    let idUser = req.params.id

    UserModel.findByIdAndDelete(idUser, (err, userDeleted)=>{
        if(err) return res.status(500).send({error: `${err}`})

        return res.status(200).send({mensaje: `Usuario Eliminado`})
    })
}

const login = (req, res) =>{
    let emailUser = req.body.email
    let passwordUser = req.body.password
    UserModel.findOne({email: emailUser}, (err, user)=>{
        if(err) return res.status(500).send({error: `${err}`})
        if(!user) return res.status(404).send({mensaje: `Usuario no encontrado`})
        if(!bcrypt.compareSync(passwordUser, user.password)) return res.status(500).send({mensaje: `Verifique las credenciales`})
    
        return res.status(200).send({token: token.createToken(user)})
    })
}

module.exports = {
    create,
    getAll,
    getUser,
    updateUser,
    deleteUser,
    login
}