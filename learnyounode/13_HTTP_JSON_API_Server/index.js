const http 	= require('http');
const url	= require('url');

let objTime	= {}
const port = +process.argv[2];

let server = http.createServer((req, res) => {
	let objUrl = url.parse(req.url, true);
	let date = new Date(objUrl.query.iso);
	
	let patt = /parsetime/;
	let pattUnix = /unixtime/;
	if(patt.test(objUrl.pathname)){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({
			hour: 	date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}
	else if(pattUnix.test(objUrl.pathname)){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({unixtime: date.getTime()}));
	}
	else{
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Page was not found...');
	}
});

server.listen(port, err => {
	if(err) throw new Error;
	console.log(`Server is listening on port: ${port}`);
});