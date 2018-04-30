const fs = require('fs');
const path = require('path');

// let folder = process.argv[2];
// let ext = process.argv[3];

module.exports = (folder, ext, callback) => {
  let result = [];
  fs.readdir(folder, (err, data) => {
    if(err) return callback(err);
    data.forEach((el) => {
      if(path.extname(el) === '.' + ext){
        result.push(el);
      } 
    });
    callback(null, result);
  });
}