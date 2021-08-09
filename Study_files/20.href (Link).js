//21.08.09
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const goLink = document.querySelector("a"); //html <a> 저장

function submitLogin(info){
    info.preventDefault();
    alert(loginInput.value + " 인식 완료");
    console.log(loginInput.value);
}

function mouseLink(event){
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", submitLogin); //왜 이게 있어야 링크가 열릴까?
goLink.addEventListener("click", mouseLink);