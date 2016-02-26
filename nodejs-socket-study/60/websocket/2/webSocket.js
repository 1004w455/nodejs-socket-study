window.onload=function(){
    //WebSocket 프로토콜로 서버에연결
    var socket=new WebSocket("ws:127.0.0.1:3000");
    console.log('url:',socket.url);

    //여기서부터 추가 작성
    //연결이 완료 되었을때 발생할 이벤트 설정
    socket.onopen=function(){
        console.log("서버 연결 완료")
        console.log('readyState:',socket.readyState);
        //서버로 메시지 전송
        socket.send("클라이언트에서 전송");
        console.log("서버로 전송")
    }

    //서버에서 보낸 메시지 인식을 위한 이벤트 설정
    socket.onmessage=function(event){
        //서버에서 받은 메시지 출력
        console.log(event.data)
    }

}