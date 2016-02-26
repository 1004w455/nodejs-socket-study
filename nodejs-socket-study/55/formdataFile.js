window.onload = function() {
	var el = document.querySelector('button');
	el.addEventListener('click', function(event) {
		var obj = new FormData(event.target.form);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/images');

		xhr.onload = function() {
			console.log('서버 Response 데이터');
			var data = JSON.parse(xhr.response);
			console.log(data);
			for ( var name in data) {
				console.log(name, ':', data[name])
			}
			// 서버에서 보낸 이미지 파일 표시
			var el = document.createElement("img");
			el.src = data.path;
			document.getElementById('result').appendChild(el);
		};
		xhr.send(obj);
	});
};