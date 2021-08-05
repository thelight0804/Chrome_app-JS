//21.08.05 Conditionals (조건문)
//prompt (입력)
const age = prompt("나이를 입력해 주세요."); //팝업을 이용하며 string형식 으로 인식 (구식)
console.log(typeof age + age)
//parseInt : string -> int
console.log (typeof parseInt(age) + parseInt(age));//단지 return하는 함수 (값 자체 변경 X)

const ages = parseInt(prompt("나이를 입력해 주세요. (parseInt)")); //string -> (parseInt) -> number
//number가 아니면 NaN으로 인식
console.log(typeof ages + ages)