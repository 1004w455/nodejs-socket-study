var app = require('express')();
var url = require('url');

// npm install body-parser --save
// send()로 전송한 JSON 데이터를 파싱
// body-parser==> http://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// req.Request 오브젝트, res: Response 오브젝트
app.get('/', function(req, res) {
	console.log('get:postAsync.html');
	res.sendFile('postAsync.html', {root : __dirname});

});

// post 메소드로 Request 하였을때 실행
app.post('/', function(req, res) {
	console.log(req.body.sports, ',', req.body.player);
	// send()클라이 언트로 문자열 전송
	res.send(req.body.sports + ',' + req.body.player);
});

app.use(function(req, res) {
	var fileName = url.parse(req.url).pathname.replace("/", "");
	res.sendFile(fileName, {root : __dirname});
	console.log('use:', fileName);
});

app.listen(3000);
console.log('http://127.0.0.1:3000');