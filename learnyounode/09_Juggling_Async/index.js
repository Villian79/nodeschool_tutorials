const http = require('http');

let arg1  = process.argv[2];
let arg2  = process.argv[3];
let arg3  = process.argv[4];

let result = async(arg1, arg2, arg3) => {
  await getData(arg1);
  await getData(arg2);
  await getData(arg3);
}

function getData(arg){
      http.get(arg, response => {
        let body = '';
        response.setEncoding('utf-8');
        response.on('data', (data) => body += data);
        response.on('end', () => console.log(body));
      });
}
result(arg1, arg2, arg3);
