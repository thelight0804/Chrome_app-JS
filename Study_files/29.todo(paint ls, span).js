//21.08.11
//to-do list
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input"); //HTML.todo-form.input

// function toDoSubmit(event){ //toDo 입력시
//     event.preventDefault();
//     const newToDo = toDoInput.value; //입력한 toDoInput 저장
//     toDoInput.value = ""; //값을 입력하면 빈칸으로 만든다
//     paintTodo(newToDo);
// }

function paintTodo(newTodo){
    //<li> : 목록의 내용(ul, ol에서 사용)
    const li = document.createElement("li"); //HTML element(li)를 추가
    //<span> : 문장 단위의 공간
    const span = document.createElement("span"); //HTML element(span)를 추가
    li.appendChild(span); //li안에 span 삽입
    span.innerText = newTodo; //span에 새로 입력한 todo 삽입
    toDoList.appendChild(li); //li를 todo-list에 적용!
}

toDoForm.addEventListener("submit", toDoSubmit);