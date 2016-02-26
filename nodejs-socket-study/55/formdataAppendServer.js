var app = require('express')();
var url = require('url');
var multer = require('multer');
var upload = multer();
var ROOT_DIR = {
	root : __dirname
};

app.get('/', function(req, res) {
	console.log('get: formdataAppend.html');
	res.sendFile('formdataAppend.html', ROOT_DIR);
});

app.post('/', upload.single(), function(req, res, next) {
	console.log('body: ', req.body);
	res.send(req.body);
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	res.sendFile(fileName, ROOT_DIR);
	console.log('use : ', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');
