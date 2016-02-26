var app = require('express')();
var url = require('url');

app.get('/', function(req, res) {
	console.log('get: abort.html');
	res.sendFile('abort.html', {root : __dirname});
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	// abort() 실행을 위해 의도적으로 setTimeout()을 사
	if (fileName == 'getData.txt') {
		setTimeout(function() {
			res.sendFile(fileName, {root : __dirname});
			console.log('timeout: ', fileName);
		}, 5000);
	} else {
		res.sendFile(fileName, {root : __dirname});
		console.log('use: ', fileName);
	}
});

app.listen(3000);
console.log('http://127.0.0.1:3000');