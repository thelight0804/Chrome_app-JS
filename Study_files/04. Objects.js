//21.08.04
const vivy = { //Objects
    name: "diva", //vivy.name
    color: "blue",
    mission: "song",
    year: 2059,
};
console.log(vivy);
console.log(vivy.mission); //vivy의 mission
console.log(vivy["name"]); //=vivy.name

//vivy에 AI 추가
vivy.AI = true;
console.log(vivy);

//값 계산
vivy.year += 1;
console.log(vivy.year);