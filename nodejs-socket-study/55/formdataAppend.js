window.onload = function() {

	var formData = new FormData();
	formData.append('sports', '스포스');
	formData.append('music', '음악');
	formData.append('name', 'ksg');

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/');

	xhr.onload = function() {
		console.log('status: ', xhr.status);
		console.log('statusText: ', xhr.statusText);
		if (xhr.status === 200) {
			console.log('수신 성공: ', xhr.response);
			var data = JSON.parse(xhr.response);
			console.log(data);
		} else {
			console.log('수신 실패: ', xhr.statusText);
		}
	};
	xhr.send(formData);

};