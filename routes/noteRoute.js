const express = require('express');
const { createNotes, fetchNotes, fetchNotesById, updateContent, deleteNoteById } = require('../controller/note.js');
const { validateContnet, validateTitle } = require('../middleware/validateNote.js');


const router = express.Router();

router
    .get('/',  fetchNotes)
    .get('/:id', fetchNotesById)
    .post('/create/',validateContnet, validateTitle, createNotes)
    .patch('/update/:id', validateContnet, updateContent)
    .delete('/delete/:id', deleteNoteById);

exports.router = router;