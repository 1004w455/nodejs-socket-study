// HTTP 모듈 추출
var http = require('http');
// 서버 생성
var server = http.createServer();
// File System
var fs = require('fs');

server.on('request', function(req, res) {
	// index.html 파일을 클라이언트에 전송
	// 파일 읽기가 완료되면 콜백 함수 실행
	fs.readFile('views/index.html', function(error, data) {
		// 통신 헤더 작성, 200 성고
		res.writeHead(200, { 'Content-type' : 'text/html' });
		// data에 설정된 index.html이 브라우저로 전송됨
		res.end(data);
		console.log('클라이언트로 파일 전송');
	});
});

// 클라이언트 접속/요청 대기
server.listen(3000);
console.log('Server Start');
console.log('http:127.0.0.1:3000/에서 대기');