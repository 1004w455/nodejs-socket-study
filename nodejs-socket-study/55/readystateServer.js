var app = require('express')();
var url = require('url');

app.get('/', function(req, res) {
	console.log('get: readystate.hrml');
	res.sendFile('readystate.html', {root:__dirname});
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	res.sendFile(fileName, {root : __dirname});
	console.log('use: ', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');