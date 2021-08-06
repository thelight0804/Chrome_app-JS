//21.08.06

const title = document.querySelector(".Hi h1"); //'.'=HTML
console.dir(title); //HTML의 요소중 on~은 모두 이벤트

function clickTitle(){
    title.style.color = "Red";
    alert("boo ya!");
}
function enterTitle(){
    title.style.color = "Yellow";
    title.innerText = "Please click me!";
    console.log("ya ho!");
}

function leaveTitle(){
    title.style.color = "Black";
    title.innerText = "Click me!";
    console.log("Bye Bye!");
}

title.addEventListener("click", clickTitle);
title.addEventListener("mouseenter", enterTitle); //mouseenter : 마우스를 갖다대면
title.addEventListener("mouseleave", leaveTitle); //mouseleave : 마우스가 떠나면
//=title.mouseleave = leaveTitle;