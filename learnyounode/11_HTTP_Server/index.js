const http 		= require('http');
const fs		= require('fs');

const port 		= +process.argv[2];
const filePath 	= process.argv[3];

let server = http.createServer((req, res) => {
	let fileContent = fs.createReadStream(filePath);
	fileContent.pipe(res);
});

server.listen(port, (err, res) => {
	if(err) throw new Error;
	console.log(`Server is listening on port ${port}`);
});