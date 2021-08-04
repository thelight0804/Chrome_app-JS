//21.08.04
const arr1 = [1, 3, 5, "배열", "AraAra"];
console.log (arr1);
console.log(arr1[4]);

//배열에 데이터 추가
arr1.push(true); //const라도 내용물 안의 요소 변경은 가능. 전체적인 수정은 불가능
//arr1=5; <- error
console.log(arr1);