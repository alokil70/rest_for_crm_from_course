'use strict'
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {}
    )
    User.associate = function(models) {
        User.hasMany(models.Post, {
            onDelete: 'cascade'
        })
        User.hasOne(models.Profile, {
            onDelete: 'cascade'
        })
    }
    return User
}
