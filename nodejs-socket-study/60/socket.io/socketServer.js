var app = require('express')();
var url = require('url');
var server = require('http').createServer(app);
var socket = require('socket.io').listen(server);

app.get('/', function(req, res) {
	console.log('get: socket.html');
	res.sendFile('socket.html', {
		root : __dirname
	});
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	res.sendFile(fileName, {
		root : __dirname
	});
	console.log('timeout: ', fileName);
});

socket.sockets.on('connection', function(client) {
	// 클라이언트에서 buttonClick 이벤트를 발생시키면 실행된다.
	// socket.emit('buttonClick', event.target.value);
	// 두 번째 파라미터 값이 핸들러의 value 속성에 설정된다.
	client.on('buttonClick', function(value) {
		console.log(value);
		socket.sockets.emit('fromServer', value);
	});
});

server.listen(3000);
console.log('http://127.0.0.1:3000');