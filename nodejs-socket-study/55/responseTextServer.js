var app = require('express')();
var url = require('url');
var ROOT_DIR = {
	root : __dirname
};

app.get('/', function(req, res) {
	console.log('get: responseText.html');
	res.sendFile('responseText.html', ROOT_DIR);
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');

	// 에러 발생을 위해 의도적으로 없는 파일로 변경. 404 에러 발생
	if (fileName === 'getData.txt') {
		fileName = 'ErrorTemp.txt';
	}

	res.sendFile(fileName, ROOT_DIR);
	console.log('use: ', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');