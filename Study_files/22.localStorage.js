//21.08.09
//localStorage : https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const hidden = "hidden" //css의 hidden 변수화
const USERNAME_KEY = "name";
const savedUserId = localStorage.getItem(USERNAME_KEY); //localStorage에 저장되어 있는 값

function submitLogin(info){
    info.preventDefault(); //기본동작 방지
    const userID = loginInput.value; //입력된 값 저장

     //localStorage : 새로고침 이후로도 값 저장
    localStorage.setItem(USERNAME_KEY, userID); //("아이템 이름(Key)", 값(Value))
    printGreeting();
}

function printGreeting(){ //userID 출력
    const userID = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `안녕하세요, ${userID} 환영합니다.`;
    greeting.classList.remove(hidden);
}

if(savedUserId === null){ //userID가 저장되있는지 확인
    loginForm.classList.remove(hidden); //loginForm 표시
    loginForm.addEventListener("submit", submitLogin); //입력 받음
}
else{
    printGreeting();
}