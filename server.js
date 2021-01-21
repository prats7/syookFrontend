const express = require('express');
const mongoose = require('mongoose');


const app = express();

//Bodyparser Middleware
app.use(express.json());

//Connect to db
const db = require('./config/mongoose');


//Express server
const PORT = 9050 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
