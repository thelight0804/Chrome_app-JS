//21.08.10
//DATE : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
const clock = document.querySelector("h2#clock"); //시간
const monthDate = document.querySelector("h2#monthDate"); //날짜

function getClock(){
    const date = new Date(); //날짜(Data) 변수
    if(date.getSeconds()<10){ //1,2,3 -> 01,02,03
        clock.innerText = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
    }
    else{
        clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}
function getMonth(){
    const date = new Date(); //함수 호출될때마다 date의 값을 받아와야 한다
    monthDate.innerText = `${date.getMonth()}월 ${date.getDate()}일`;
}

getClock(); //실행시 시간 표시
getMonth();
setInterval(getClock, 1000);