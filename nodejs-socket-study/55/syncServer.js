var app = require('express')();
var url = require('url');
var ROOT_DIR = {
	root : __dirname
};

app.get('/', function(req, res) {
	console.log('get: sync.html');
	res.sendFile('sync.html', ROOT_DIR);
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');

	// 5초간 타임아웃
	if (fileName == 'getData.txt') {
		setTimeout(function() {
			res.sendFile(fileName, ROOT_DIR);
			console.log('timeout: ', fileName);
		}, 5000);
	} else {
		res.sendFile(fileName, ROOT_DIR);
		console.log('use: ', fileName);
	}
});

app.listen(3000);
console.log('http://127.0.0.1:3000');
