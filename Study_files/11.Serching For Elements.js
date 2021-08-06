//21.08.06

//getElementsByClassName : HTML의 ClassName으로 접근
const Hello = document.getElementsByClassName("Hi");
console.dir(Hello); //HTML의 내부를 볼 수 있다

const title = document.getElementsByTagName("h1");
console.log(title); //array(배열)로 불러온다

//querySelector(.A b) : A인 class에서 b를 가져온다 (CSS selector)
const title2 = document.querySelector(".Hi h1"); //첫번째 element만 가져온다.
console.log(title2);

const title3 = document.querySelectorAll(".Hi h1"); //중복되는 모든 element를 가져온다.
console.log(title3);