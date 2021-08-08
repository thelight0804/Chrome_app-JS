//21.08.08
const title = document.querySelector(".Hi h1");

//클릭할때마다 색 변경
function clickTitle(){
  //지정값과 변경값을 따로 지정해두는게 더 좋은 듯
    const nowColor = title.style.color;
    let changeColor; //const는 변경이 안 되니까 let 변수 추가
    if(nowColor === "tomato"){
        changeColor = "pink";
    }
    else
        changeColor = "tomato";
    title.style.color = changeColor; //변경된 값을 저장
}
title.addEventListener("click", clickTitle);
