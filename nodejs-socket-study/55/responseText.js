window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/jsonData.txt');
	xhr.onload = function() {
		console.log('status: ', xhr.status);
		console.log('statusText: ', xhr.statusText);

		if (xhr.status === 200) {
			console.log('수신 성공: ', xhr.response);
			// Request에 대한 최종 Response URL
			console.log('responseURL: ', xhr.responseURL);
			// JSON 형태 데이터를 파싱하여 '이름:값' 형태로 출력
			console.log(JSON.parse(xhr.responseText));
		} else {
			console.log('수신 실패: ', xhr.statusText);
		}
	}
	xhr.send();
}