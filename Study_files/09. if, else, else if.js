///21.08.05
const age = parseInt(prompt("나이를 입력해 주세요."));
///isNaN : NaN이면 true, 아니면 false
console.log(age, isNaN(age));

if(isNaN(age) || age<=0 )  {console.log("정확한 숫자를 적어주세요"); }
else if(age < 19) { console.log("19세 미만은 술을 마실 수 없습니다"); }
else if (age === 100) { console.log("즐거운 백세인생!"); } //=== : JS에만 존재하며 값과 유형까지 비교한다.
else if(age >= 19 && age >= 50) { console.log("50세 이상은 술을 적게 마시는것이 좋습니다"); }
else {console.log("즐거운 음주생활 보내세요"); }