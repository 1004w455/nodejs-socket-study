window.onload = function() {
	var xhr = new XMLHttpRequest();
	// timeout을 2초로 설정한다
	// 2초 동안 getData.txt를 수신하지 못하면 ontimeout 이벤트 발생
	xhr.timeout = 2000;
	xhr.open('GET', '/getData.txt');

	// timeout이 발생하면 실행된다.
	xhr.ontimeout = function() {
		console.log('서버 데이터: ', xhr.response);
	}
	xhr.send();
}