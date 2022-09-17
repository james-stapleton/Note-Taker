//https://www.npmjs.com/package/uuid install AND REQUIRE this package (utils, fs, uuid)

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
console.log(uuidv4()); //random ID

//this package will help with generating unique ids in the db.json file

//create variables for readfileasync and writefile async

const writeFileAsync = util.promisify(fs.writefile);


const readFileAsync = util.promisify(fs.readfile);
