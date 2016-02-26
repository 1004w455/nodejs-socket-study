window.onload = function() {
	// 인스턴스를 생성하고 getServer() 호출
	new Sales('A', 300).getServer();
};

// Sales 오브젝트
var Sales = function(grade, discount) {
	this.grade = grade;
	this.discount = discount;
}
Sales.prototype.getServer = function() {
	Http.get('/bindData.txt', this);
}

// 통신 오브젝트
var Http = {
	// 서버에서 받을 파일 이름과
	// get()을 호출한 오브젝트를 파라미터로 받음
	get : function(fileName, that) {
		var xhr = new XMLHttpRequest();
		// bind() 파라미터인 that을 success()에서 this로 참조 가
		xhr.onload = this.success.bind(that, xhr);
		xhr.onerror = this.error.bind(that, xhr);
		xhr.open('GET', fileName);
		xhr.send();
	},
	success : function(xhr) {
		// {"grade":"A", "amont":1000}
		var data = JSON.parse(xhr.response);
		// get() 파라미터로 호출한 오브젝트를 받고
		// bind()의 첫 번째 파라미터에 바인딩하면 this로 참조 가능
		if (data.grade === this.grade) {
			console.log(data.amount - this.discount);
		}
	},
	error : function(xhr) {
		console.log('XHR 통신 에러');
	}
}
