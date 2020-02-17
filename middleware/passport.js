const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
require('dotenv').config()


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, function (payload, done) {
                User.findOne({where: {id: payload.id}})
                    .then(user => {
                        return done(null, user)
                    })
                    .catch(() => {
                        return done(null, false);
                    })
            }

        ))
}
/*
module.exports = passport => {
    passport.use(
        new JwtStrategy(options, function (payload, done) {
            const user = User.findOne({ where: {id: payload.id} })
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    )
}*/
