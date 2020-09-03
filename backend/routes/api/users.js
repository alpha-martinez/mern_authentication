require ('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWS_SECRET = process.env.JWT_SECRET;

//load user model
const User = require('../../models/User');

//GET api/users/
router.get('/test', (req, res) => {
    res.json({ msg: 'User endpoint ok' });
});

module.exports = router;