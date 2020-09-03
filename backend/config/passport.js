require('dotenv').config();

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const { deserializeUser } = require('passport');
// const User = mongoose.model('User');

const options = {}
//jwtFromRequest (required) function that accepts a request as the only parameter
//and returns either the .JWT as a string or null

//fromAuthHeaderAsBearerToken() creates an extractor that looks
//for the JWT in the auth header
options.jwtFromRequest = RxtractJwt.fromAuthHeaderAsBearerToken();
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