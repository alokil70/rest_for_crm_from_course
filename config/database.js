const Sequelize = require('sequelize');
module.exports = new Sequelize('testrest', 'postgres', '1111', {
    host: '192.168.0.10',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
