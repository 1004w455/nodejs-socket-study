window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/getData.txt');
	xhr.onload = function() {
		console.log('status: ', xhr.status);
		console.log('statusText: ', xhr.statusText);
		if (xhr.status === 200) {
			console.log('수신 성공: ', xhr.response);
		} else {
			console.log('수신 실패: ', xhr.statusText);
		}
	}
	xhr.send();
}