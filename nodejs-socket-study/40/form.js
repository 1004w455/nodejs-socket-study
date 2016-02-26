var server = require('express')();
var qs = require('querystring');

server.get('/', function(req, res) {
	res.sendFile('views/form.html', {root : __dirname});
});

// 클라이언트에서 POST로 <form>을 전송했을 때 실행
server.post('/', function(req, res) {
	console.log('POST');
	var formValue;
	req.setEncoding('utf8');
	req.on('data', function(data) {
		formValue = qs.parse(data);
	});
	// data를 정부 읽었을 때 이벤트 발생
	req.on('end', function() {
		console.log(formValue);
		// 클라이언트에 응답을 전송. 웹페이지가 바뀌어 표시
		res.end(JSON.stringify(formValue));
	});
});

server.listen(3000);
console.log('http:127.0.0.1:3000');