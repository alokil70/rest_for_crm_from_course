const Sequelize = require('sequelize')
const db = require('../config/database')

const User = db.define('users', {

    email: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        required: true
    }
});

User.sync({ force: false })/*.then(() => {
    return User.create({
        email: 'asd@mail.com',
        password: 'qwer'
    });
});*/

module.exports = User;
