var app = require('express')();
var url = require('url');

app.get('/', function(req, res) {
	console.log('get: timeout.html');
	res.sendFile('timeout.html', {root : __dirname});
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	// xhr.open('GET', 'getData.txt')이면 timeout을 의도적으로 실행
	// timeout.js에서 xhr.timeout = 2000;으로 성정했으므로
	// ontimeout 이벤트가 발생하게 된다.
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