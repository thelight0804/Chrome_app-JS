//21.08.06
//모든 정답은 https://developer.mozilla.org/ko/docs/Web/Events 에!!
const title = document.querySelector(".Hi h1"); //'.'=HTML

function resizeWindow(){
    document.body.style.backgroundColor = "tomato";
}

function dontCopy(){
    alert("Don't copy!!");
}

function openPrint(){
    alert("You open print");
}

window.addEventListener("resize", resizeWindow); //창의 크기가 달라진다면
window.addEventListener("copy", dontCopy); //복사가 실행되면
window.addEventListener("beforeprint", openPrint); //프린터를 열면­  (ctrl + p)