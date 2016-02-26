window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.open("GET", "/imgs/test.jpg");
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("수신성공");
			// Blob 오브젝트에서 Blob URL 생성
			var url = window.URL.createObjectURL(xhr.response);
			// img 엘리먼트 생성
			var img = document.createElement('img');
			// 이미지가 로드되면 Blob에서 URL 해제
			img.onload = function() {
				window.URL.revokeObjectURL(url);
				console.log(url)
			}
			img.src = url;
			document.getElementById('result').appendChild(img);
		} else {
			console.log("수신실패:", xhr.status, xhr.statusText);
		}
	};
	xhr.send();
};