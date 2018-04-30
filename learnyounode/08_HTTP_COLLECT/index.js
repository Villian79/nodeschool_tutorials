const http = require('http');

//Solution 1. Using core node module HTTP. 
//Uncomment to run this block of code


// let result = '';
// http.get(process.argv[2], response => {
//   let body = '';
//   response.on('data', data => body += data);
//   response.on('end', () => {
//     console.log(body.length);
//     console.log(body);
//   });
// });

// Solution 2. Using 'concat-stream' npm module
const concat = require('concat-stream');
let result = concat(function(data){});
http.get(process.argv[2], res => {
  res.setEncoding('utf-8');
  res.on('data', (data) => result.write(data));
  res.on('end', () => {
    let text = result.body.join('');
    console.log(text.length);
    console.log(text);
  });
});
