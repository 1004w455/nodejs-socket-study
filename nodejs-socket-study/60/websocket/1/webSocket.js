window.onload = function() {
	// WebSocket 프로토콜로 서버에 연결
	var socket = new Websocket('ws:http://1004w455.iptime.org:3000');
	console.log('url: ', socket.url);
}