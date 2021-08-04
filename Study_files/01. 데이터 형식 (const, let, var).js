//21.08.04
const a = 7; //const 상수 (재선언 X, 재할당 X)
let food = "ichigo"; //let (재선언 X, 재할당 O)
var fish = "고등어"; //var (재선언 O, 재할당 O) / 사용하지 않는 게 좋음
//사용빈도 : const > let >>> var

console.log(13.567); //콘솔창에 log 출력
console.log(5*2.5);
console.log("출력하라 콘솔!"); //''나 "" 둘 다 사용 가능
console.log("내가 좋아하는 음식은 " + food +"입니다");

food = "딸기"; //food가 const였다면 변경 불가능
console.log("내가 좋아하는 새 음식은 " + food +"입니다");