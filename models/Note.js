const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Note = mongoose.model('note', NoteSchema);