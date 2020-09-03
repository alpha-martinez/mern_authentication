require('dotenv').config();

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const passport = require('passport');
const { deserializeUser } = require('passport');
// const User = mongoose.model('User');

const options = {}

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;


module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        deserializeUser.findById(jwt_payload.id)
        .then(user => {
            if(user) {
                return done(null, user);
            }

            return done(null, false)
        })
    }))
}

