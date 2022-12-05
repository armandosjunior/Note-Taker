const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');

const app = express();
const PORT = process.env.port || 3001;

const allNotes = require('./db/db.json');
const router = require('./routes/routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use(express.static('public'));


//homepage 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);
//notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

//localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
