const router = require('express').Router();
const fs = require('fs');
const { title } = require('process');
const util = require('util');
// const {readFromFile, writeToFile, readAndAppend} = require('../../helpers/fsUtils');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
        fs.readFile(file, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
          } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
          }
        });
      };

router.get('/notes',(req,res) => {
    readFromFile('db/db.json')
    .then((data) => {
        res.json(JSON.parse(data));
    })
} );

router.post('/notes', (req,res) => {
    const {title, text} = req.body;
    const note = {
        title: title,
        text: text
    }
    readAndAppend(note, 'db/db.json');
    res.json(`New note added`);
});

module.exports = router;