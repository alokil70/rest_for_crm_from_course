const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


module.exports.login = async function (req, res) {
    const candidate = await User.findOne({where: {email: req.body.email}})

    if (candidate != null) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                id: candidate.id
            }, process.env.JWT, {expiresIn: 60*60})
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Не верный пароль'
            })
        }

    } else {
        res.status(404).json({
            message: 'Пользователь не найден'
        })
    }
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({where: {email: req.body.email}})

    if (candidate != null) {
        res.status(409).json({
            message: 'есть такой email'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        User.create({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
            .then(res.status(201).json({
                message: 'user created'
            }))
            .catch({
                message: 'error create user'
            })
    }
}
