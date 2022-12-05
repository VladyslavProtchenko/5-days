const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');

fs.readFile('./app.js',(err,data)=>{
    if(err) {
        console.log(err);
    return;
    }
})

console.log(__filename);
console.log(__dirname);