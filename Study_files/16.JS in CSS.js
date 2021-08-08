//21.08.08
const title = document.querySelector(".Hi h1");

//클릭할때마다 색 변경
function clickTitle(){
 //   title.className = "click"; //css의 active 클래스와 연결
 const clickedClass = "click" //JS에서 사용하기 편하게(자동완성 등) 변수에 저장
    if(title.className === clickedClass){
        title.className = ""; //className을 지운다
    }
    else{
    title.className = clickedClass;
    }
}
title.addEventListener("click", clickTitle);
