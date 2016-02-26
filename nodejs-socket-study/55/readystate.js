window.onload = function() {
	var xhr = new XMLHttpRequest();
	// xhr.readyState 값 0은 onreadystatechange가 발생하지 않으므로
	// 이 위치에서 값을 출력하였다.
	console.log('readyState: ', xhr.readyState);

	xhr.onreadystatechage = function() {
		cosnole.log('readyState: ', xhr.readyState);
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log('통신 성공: ', xhr.response);
		}
	}

	xhr.open('GET', '/getData.txt');
	// onreadystatechagene가 발생한 후 onload 이벤트가 발생한다.
	xhr.onload = function() {
		console.log('onload 이벤트 발생: ', xhr.readyState);
	}
	xhr.send();
}