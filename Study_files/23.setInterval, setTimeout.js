//21.08.10
//h2의 clock id 불러오기
const clock = document.querySelector("h2#clock"); //h2 #clock (X)
//clock.innerText = "호롤로"; 잘 불러왔는지 확인

function Interval(){
    console.log("setInterval");
}
function Timeout(){
    console.log("setTimeout");
}

setInterval(Interval, 2000); //2000ms마다 Interval 함수 호출
setTimeout(Timeout, 2000); //2000ms이후 Timeout 함수 호출