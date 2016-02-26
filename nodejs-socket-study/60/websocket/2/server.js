//WebSocket 서버 생성

var socket= new require('ws').Server({port:3000});
var app=require('express')();
var url=require('url');

app.get('/', function(req, res) {
    console.log('get: webSocket.html');
    res.sendFile('webSocket.html', {root : __dirname});
});

app.use(function(req, res) {
    var fileName = url.parse(req.url).pathname.replace('/', '');
    res.sendFile(fileName, {root : __dirname});
    console.log('use: ', fileName);
});

//클라이언트 연결을인식하기 위한 이벤트 설정

socket.on('connection', function(cws) {
    //클라이언트 보낸 메시지를 인식하기 위한 이벤트 설정
    cws.on('message',function(message){
        // 수신한 메시지에 '서버응답'을 첨부하여 다시 전송
        cws.send(message+':서버응답');
        console.log(message);
    })
});
var server=require('http').createServer(app);
server.listen(3000);
console.log('http://127.0.0.1:3000');