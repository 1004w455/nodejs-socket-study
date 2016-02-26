window.onload = function() {
	var seq = 0, xhr = new XMLHttpRequest();
	var types = [ 'abort', 'error', 'load', 'loadstart', 'loadend', 'progress',
			'timeout' ];
	types.forEach(function(type) {
		xhr.addEventListener(type, eventHandler, false);
	}, this);

	xhr.open('GET', '/getData.txt');
	xhr.send();

	// 이벤트 발생progress부터 서버 데이터가 설정되지만
	// 데이터 수신을 성공했을 때 load 이벤트가 발생하므로
	// load 이벤트 핸들러에서 데이터를 처리한다.
	function eventHandler(event) {
		var $ul = $('ul');
		$ul.append('<li>' + event.type + ' ' + (++seq) + '</li>');
		$ul.append('<li>서버 데이터</li>');
		$ul.append('<li>' + xhr.response + '</li>');
		$ul.append('<li></li>');
	}
}