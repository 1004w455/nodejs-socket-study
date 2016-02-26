window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/xmlData.xml");
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("수신성공");
			var data = xhr.responseXML;
			console.log(data);
			// root 엘리먼트에 속한 모든 <item>가 반환된다
			var nodes = data.getElementsByTagName('item');
			for (var k = 0; k < nodes.length; k++) {
				// <point>만족</point>를 구한다
				var node = nodes[k].children.item(0);
				console.log(node.nodeName, ':', node.textContent);
			}
		} else {
			console.log("수신실패:", xhr.status, xhr.statusText);
		}
	};
	xhr.send();
};