const Sequelize = require('sequelize')
const db = require('../config/database')

const Position = db.define('positions', {

    positionName: {
        type: Sequelize.STRING,
        required: true
    },
    description: {
        type: Sequelize.STRING
    },
    cost: {
        type: Sequelize.DOUBLE,
        required: true
    },
    category: {
        ref: 'categories',
        type: Schema.Types.id
    },
    user: {
        ref: 'users',
        type: Schema.Types.id
    }
})

Position.sync()

module.exports = Position
