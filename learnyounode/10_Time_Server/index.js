const net = require('net');
const port = +process.argv[2];

const server = net.createServer((socket) => {
	//connection listener
	let date = new Date();
	let year = date.getFullYear().toString();
	let month = (date.getMonth() + 1).toString();
	month.length < 2 ? month = '0' + month : month;
	
	let day = date.getDate().toString();
	day.length < 2 ? day = '0' + day : day;
	
	let hour = date.getHours().toString();
	hour.length < 2 ? hour = '0' + hour : hour;
	
	let minutes = date.getMinutes().toString();
	minutes.length < 2 ? minutes = '0' + minutes : minutes;
	
	let data = `${year}-${month}-${day} ${hour}:${minutes}\n`;
	socket.write(data);
	socket.end();
	
});

server.on('error', err => {
	throw err
});

server.listen(port, () => console.log(`Server is bound to port ${port}`));