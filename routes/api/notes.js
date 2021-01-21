const express = require('express');
const router = express.Router();

//Note model
const Note = require('../../models/Note');

//Get all notes
//GET Public
router.get('/', (req, res) => {
    Note.find()
        .sort({ date: -1 })
        .then(notes => res.json(notes))
});

//Create a Note
//POST Public
router.post('/', (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        description: req.body.description
    });

    newNote.save().then(note => res.json(note));
});

// Delete a Note
//DELETE Public
router.delete('/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => note.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;