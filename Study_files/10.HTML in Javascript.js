//21.08.06
const title = document.getElementById("title"); //HTML에서 지정한 ID(title)를 연결
//=const title = document.querySelector("#title") / #=id
//getElementById("title") : HTML의 id를 통해 Element(요소)를 찾아준다

title.innerText = "Got you!"; //HTML의 innerText 변경
console.dir(title); //title의 HTML 호출
console.log(title.id); //title의 id 호출
console.log(title.innerText);
console.log(title.className);