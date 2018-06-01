const http 	= require('http');
const url	= require('url');

let objTime	= {}
const port = process.argv[2];

let server = http.createServer((req, res) => {
	console.log(url.parse(req.url, true));
	
	let stringISO = url.parse(req.url, true).query.iso;
	
	let date = new Date(stringISO);
	
	let dateUnix = Date.now(date);
		
	objTime.hour = date.getHours();
	objTime.minute = date.getMinutes();
	objTime.second = date.getSeconds();
	
	//res.writeHead(200, {'Content-Type': 'application/json'});
	//res.end(JSON.stringify(objTime));


});

server.listen(port, err => {
	if(err) throw new Error;
	console.log(`Server is listening on port: ${port}`);
});