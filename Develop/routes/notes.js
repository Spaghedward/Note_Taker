const notesRouter = require('express').Router();
const fs = require('fs');
// const db = require('./db/db.json')


notesRouter.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        res.json(notes)
    

})});

notesRouter.post('/', (req, res) => {
    const newNote = req.body;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(notes));
        res.json(notes);
    });

    
});

module.exports = notesRouter;