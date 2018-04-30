const fs = require('fs');
const path = require('path');

const mymodule = require('./mymodule');

let folder = process.argv[2];
let ext = process.argv[3];

mymodule(folder, ext, (err, data) => {
  if(err) return console.error('There was an error', err);
  data.forEach(el => {
    console.log(el);
  });
});
