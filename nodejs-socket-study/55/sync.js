window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/getData.txt', false);
	xhr.onload = function() { }
	xhr.send();
}