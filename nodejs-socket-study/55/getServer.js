var app = require('express')();
var url = require('url');

app.get('/', function(req, res) {
	console.log('get: getAsync.html');
	res.sendFile('getAsync.html', {root : __dirname});
});

app.use(function(req, res) {
	// '/asyncGet.js'에서 '/'를 삭제하여 파일 이름을구한다.
	var fileName = url.parse(req.url).pathname.replace('/', '');
	res.sendFile(fileName, {root : __dirname});
	console.log('use: ', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');