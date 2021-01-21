const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();

//Bodyparser Middleware
app.use(express.json());
app.use(cors());
//Connect to db
const db = require('./config/mongoose');

//Use routes
app.use('/api/notes', require('./routes/api/notes'));

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

//Express server
const PORT = process.env.PORT || 9050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
