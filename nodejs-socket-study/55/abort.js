window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/getData.txt');

	// abort()로 인해 이벤트 발생
	xhr.onabort = function() {
		console.log('abort 발생');
	}

	// 서버에서 setTimeout()으로 5초간 타임아웃을 설정했지만
	// abort()를 실행하지 않으면 onload 이벤트가 발생한다.
	xhr.onload = function() {
		console.log('서버 데이터: ', xhr.response);
	}
	xhr.send();
	xhr.abort();
}