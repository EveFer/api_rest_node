const UserModel = require('../models/user')

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

            return res.status(200).send({users})
    })
}

module.exports = {
    create,
    getAll
}