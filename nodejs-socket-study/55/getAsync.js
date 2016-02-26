window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/getData.txt');
	xhr.onload = function() {
		// 서버에서 받은 데이터 출력
		var node = document.querySelector('p');
		node.innerHTML = xhr.response;
	}
	xhr.send();
}