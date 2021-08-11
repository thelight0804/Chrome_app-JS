//21.08.11
//to-do list
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input"); //HTML.todo-form.input

function toDoSubmit(event){ //toDo 입력시
    event.preventDefault();
    const newToDo = toDoInput.value; //입력한 toDoInput 저장
    toDoInput.value = ""; //값을 입력하면 빈칸으로 만든다
    paintTodo(newToDo);
}

function paintTodo(newTodo){
    //<li> : 목록의 내용(ul, ol에서 사용)
    const li = document.createElement("li"); //HTML element(li)를 추가
    //<span> : 문장 단위의 공간
    const span = document.createElement("span"); //HTML element(span)를 추가
    span.innerText = newTodo; //span에 새로 입력한 todo 삽입
    //<button> : 클릭하는 버튼
    const button = document.createElement("button");

    li.appendChild(span); //li안에 span 삽입
    toDoList.appendChild(li); //li를 todo-list에 적용!

    button.innerText = "❌"; //button에 ❌삽입
    li.appendChild(button); //li안에 button 삽입
    button.addEventListener("click", deleteTodo); //버튼 클릭시 deleteTodo 호출
}

function deleteTodo(event){ //Todo 삭제
    const li = event.target.parentElement; //어떤 버튼인지 알아야한다
    /* event : 정보
        target : 클릭한 정보 (X 버튼)
        parentElement : 클릭된 element (target의 내용)
    */
   li.remove(); //remove() : 제거한다
}

toDoForm.addEventListener("submit", toDoSubmit);