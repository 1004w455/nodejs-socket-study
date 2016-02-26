window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', './');
	xhr.onload = function() {
		// 서버에서 받은 데이터 출력
		var node = document.querySelector('p');
		node.innerHTML = xhr.response;
	}
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	var data = JSON.stringify({
		sports : '농구',
		player : 11
	});
	xhr.send(data);
}