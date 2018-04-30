const http = require('http');

let link = process.argv[2];

http.get(link, (res) => {
  res.setEncoding('utf-8');
  res.on('data', console.log);
  res.on('error', console.error);
}).on('error', console.error);
