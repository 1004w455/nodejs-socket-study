var app = require('express')();
var url = require('url');
var multer = require('multer');
var upload = multer({
	dest : './images/'
});
var ROOT_DIR = {
	root : __dirname
};

app.get('/', function(req, res) {
	console.log('get: formdataFile.html');
	res.sendFile('formdataFile.html', ROOT_DIR);
});

// name 속성이 imageFIle인 파일 정보가 req.file에 설정된다
app.post('/images', upload.single('imageFile'), function(req, res, next) {
	console.log('Post: ', req.file.originalname);
	res.send(req.file);
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace('/', '');
	res.sendFile(fileName, ROOT_DIR);
	console.log('use : ', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');
