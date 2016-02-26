// HTTP 모듈 추출
var http = require('http');

// 서버 생성
var server = http.createServer();

// connection 이벤트 설정
// 클라이언트에서 http:127.0.0.1:3000으로 접속하면
// connection 이벤트가 발생하며 callback 함수 실행
server.on('connection', function() {
	console.log('Connection 요청');
});

// request 이벤트
// 브라우저에서 접속하면
// request 이벤트가 발생하며 callback 함수 실행
server.on('request', function() {
	console.log('Client Request11111');
});

// 클라이언트 접속/요청 대기
server.listen(3000);
console.log('Server Start');
console.log('http:127.0.0.1:3000/에서 대기');