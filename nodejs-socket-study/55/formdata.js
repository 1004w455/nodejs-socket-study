window.onload = function() {
	var btn = document.querySelector('button');
	btn.addEventListener('click', function(event) {
		// <form> 으로 forrmData 오브젝트 생성
		var obj = new FormData(event.target.form);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/');
		// 업무에선 필요없는 루트
		xhr.onload = function() {
			console.log('서버 Response 데이터');
			var data = JSON.parse(xhr.response);
			console.log(data);
		};
		xhr.send(obj);
	});
}