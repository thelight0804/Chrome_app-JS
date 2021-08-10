//21.08.10
const clock = document.querySelector("h2#clock");
const monthDate = document.querySelector("h2#monthDate");


function getClock(){
    const date = new Date();
    //1,2,3 -> 01,02,03
    const Hours = String(date.getHours()).padStart(2, "0"); //padStart(MAX_NUM, "STRING") : MAX_NUM만큼 "STRING"으로 채운다
    const Minutes = String(date.getMinutes()).padStart(2, "0"); //getHours.padStart (X) : getHours는 number, padStart는 string 형식이다
    const Seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}
function getMonth(){
    const date = new Date();
    monthDate.innerText = `${date.getMonth()}월 ${date.getDate()}일`;
}

getClock();
getMonth();
setInterval(getClock, 1000);