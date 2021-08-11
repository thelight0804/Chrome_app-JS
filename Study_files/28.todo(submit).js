//21.08.11
//to-do list
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input"); //HTML.todo-form.input

function toDoSubmit(event){ //toDo 입력시
    event.preventDefault();
    const newToDo = toDoInput.value; //입력한 toDoInput 저장
    toDoInput.value = ""; //값을 입력하면 빈칸으로 만든다
    console.log(newToDo);
}

toDoForm.addEventListener("submit", toDoSubmit);