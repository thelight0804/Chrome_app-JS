//21.08.09
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const hidden = "hidden" //CSS의 .hidden 변수화

function submitLogin(info){
    info.preventDefault();
    const userID = loginInput.value;
    loginForm.classList.add(hidden); //입력창 숨기기
    greeting.innerText = "안녕하세요, " + userID; //innerText : HTML의 element의 trxt를 가져온다
    greeting.innerText = `안녕하세요, ${userID} 환영합니다.`; //="안녕하세요, " + userID (`=숫자 1 옆에 있는 키)
    greeting.classList.remove(hidden); //기본적으로 지정되었던 hidden을 제거(보이게 함)
}

loginForm.addEventListener("submit", submitLogin);