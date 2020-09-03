require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 8000;
const passport = require('passport');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//passport middleward
app.use(passport.initialize());

require('./config/passport')(passport)

const users = require('./routes/api/users');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Smile, you are on camera '});
})

app.use('/api/users', users);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

