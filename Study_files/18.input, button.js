//21.08.08
const loginForm = document.getElementById("login-form"); //Element 연결
const loginInput = loginForm.querySelector("input"); //loginForm(login-form)의 input 요소
const loginButton = loginForm.querySelector("button"); //loginForm(login-form)의 button 요소

function clickLogin(){
    //alert(loginInput.value); //loginInput.value : loginInput에서 입력받은 값
    const id = loginInput.value;
    if(id === ""){
        alert("정확히 입력해 주세요");
    }
    else if(id.length > 15 ){ //.length : string 길이
        alert("이름이 너무 길어요!" );
    }
    else{
        alert(loginInput.value + " 인식 완료");
    }
}

loginButton.addEventListener("click", clickLogin);