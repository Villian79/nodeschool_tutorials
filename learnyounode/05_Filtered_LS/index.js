const fs    = require('fs');
const path  = require('path');

let folder  = process.argv[2];
let ext     = '.' + process.argv[3];

fs.readdir(folder, (err, data) => {
  if(err) throw err;
  data.forEach((el) => {
    if(path.extname(el) === ext){
      console.log(el);
    }
  });

});