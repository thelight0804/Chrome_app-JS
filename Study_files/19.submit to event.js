//21.08.08
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function submitLogin(info){
    info.preventDefault(); //브라우저가 수행하는 기본동작을 막는다
    alert(loginInput.value + " 인식 완료");
    console.log(loginInput.value);
}
loginForm.addEventListener("submit", submitLogin) //submit : 입력 (클릭이 아닌 입력으로 반응한다)