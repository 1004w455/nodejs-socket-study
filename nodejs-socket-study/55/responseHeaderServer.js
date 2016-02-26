var app = require('express')();
var url = require('url');
var ROOT_DIR = {
	root : __dirname
};

app.get('/', function(req, res) {
	console.log('get: responseHeader.html');
	res.sendFile('responseHeader.html', ROOT_DIR);
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	res.sendFile(fileName, ROOT_DIR);
	if(fileName === 'jsonData.txt'){
		res.set('Content-Type', 'application/json;chareset=UTF-8');
	}
	console.log('use: ', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');