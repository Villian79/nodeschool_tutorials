const fs = require('fs');

//readFileSync returns a buffer. But if we specify encoding it returns a string
let text = fs.readFileSync(process.argv[2], 'utf-8');
let length = text.split('\n').length - 1;
console.log(length);
