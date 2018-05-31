const http = require('http');
const map  = require('through2-map');
const fs   = require('fs');

const port = process.argv[2];

let server = http.createServer((req, res) => {
	if(req.method !== 'POST') return res.end('Send me a POST\n');
	req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port, (err, res) => {
	if(err) throw new Error;
	console.log(`Server is listening on port: ${port}`);
});