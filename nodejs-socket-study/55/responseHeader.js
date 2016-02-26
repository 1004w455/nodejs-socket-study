window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/jsonData.txt");
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("수신성공");
			// 서버에서 'Content-Type:applicatio/json; charset=UTF-8' 설정
			// 서버에서 설정하지 않으면 'text/plain; charset=UTF-8' 출력
			var header = xhr.getResponseHeader('Content-Type');
			console.log('xhr.getResponseHeader("Content-Type"):\n', header);
			header = xhr.getAllResponseHeaders();
			console.log('xhr.getAllResponseHeaders():\n', header);
			console.log('---jsonData.txt 출력---');
			console.log(JSON.parse(xhr.response))
		} else {
			console.log("수신실패:", xhr.status, xhr.statusText);
		}
	};
	xhr.send();
};