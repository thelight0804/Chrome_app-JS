//21.08.08
const title = document.querySelector(".clickMouse h1");
const title2 = document.querySelector(".toggle h1");

function clickTitle(){
 const clickedClass = "click"
 //classList : 여러 class의 목록 / contains : 포함, 함유
 //classname - 덮어 씌우는 느낌, classList - 추가하는 느낌
    if(title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass); //clickedClass 제거
    }
    else{
        title.classList.add(clickedClass); //clickedClass 추가
    }
}
function clickTitle2(){
    //const clickedClass = "click" / click을 반복사용하지 않으므로 변수선언 안 해도 됌
    title2.classList.toggle("click"); //toggle : class가 있는지 확인 후 스위치처럼 추가하고 제거한다
   }
//clickTitle와 clickTitle2은 동일한 기능
title.addEventListener("click", clickTitle);
title2.addEventListener("click", clickTitle2);