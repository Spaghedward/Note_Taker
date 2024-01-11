const notes = require('express').Router();
const fs = require('fs');



notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const list = JSON.parse(data);
        res.json(list);
    

})});

notes.post('/', (req, res) => {
    fs.readFileSync('./db/db.json', 'utf8', (err) => {
        if (err) throw err;
    });

    const newNote = req.body;
    fs.appendFile('./db/db.json', newNote, (err) => {
        if (err) {
            console.log(err);
        } else {
            fs.readFileSync('./db/db.json', 'utf8', (data) => {
                const updatedList = JSON.parse(data);
                res.json(updatedList);
            });
        }
        
        
    });

    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     const list = JSON.parse(data);
    //     res.json(list);
    // });

});

module.exports = notes;