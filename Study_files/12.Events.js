//21.08.06

const title = document.querySelector(".Hi h1"); //'.'=HTML
title.style.color = "blue"; //title(h1)->style->color
console.dir(title); //HTML의 요소중 on~은 모두 이벤트

function clickTitle(){
    title.style.color = "Red";
    alert("boo ya!");
}

//addEventListener : event를 감지한다
title.addEventListener("click", clickTitle); //click을 감지하면 clickTitle함수 실행
/* click하면 clickTitle함수 호출을 JS에게 요청함
clickTitle()로 하면 JS가 돌아가면서 무조건 함수를 실행시킴 */