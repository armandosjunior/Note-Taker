const fs = require('fs');
const router = require('express').Router();
const path = require('path');
const allNotes = require('./db/db.json');
const uuid = require('../helpers/uuid');



router.get('/notes', (req, res) => {
    res.json(allNotes)
});

router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        let allNotes = JSON.parse(data);
        const { title, text } = req.body;
        if ( title, text ) {
            const addedNotes = {
                title,
                text,
                id: uuid(),
            };
            allNotes.push(addedNotes)

            fs.writeFile('./db/db.json', JSON.stringify(allNotes), 'utf8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(allNotes);
                }
            })
        }
    })
})

module.exports = router;