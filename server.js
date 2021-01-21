const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();

//Bodyparser Middleware
app.use(express.json());
//Connect to db
const db = require('./config/mongoose');

//Use routes
app.use('/api/notes', require('./routes/api/notes'));

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
//Express server
const PORT = process.env.PORT || 9050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
