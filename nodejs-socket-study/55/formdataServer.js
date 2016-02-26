var app = require('express')();
var url = require('url');
var multer = require('multer');
var upload = multer();
var ROOT_DIR = {
	root : __dirname
};

app.get('/', function(req, res) {
	console.log('get: formdata.html');
	res.sendFile('formdata.html', ROOT_DIR);
});

// form의 name 속성과 값을
// {name:value} 형태로 req.body 에 설정하게 된다.
app.post('/', upload.single(), function(req, res, next) {
	console.log(typeof req.body);
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