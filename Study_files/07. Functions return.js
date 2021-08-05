//21.08.05
const calculator = {
    add: function(a, b){
        return a+b; //한 번 return하면 function의 기능은 끝난다
    },
    minus: function(a, b){
        return a-b;
    },
    mult: function(a, b){
        return a*b;
    },
    division: function(a, b){
        return a / b;
    },
    powerOf: function(a, b){
        return a**b;
    }
}

const addNum = calculator.add(10, 5); //15
const minusNum = calculator.minus(addNum, 5); //10
const multNum = calculator.mult(10, minusNum); //100
const divisionNum = calculator.division(multNum, 5); //20
console.log(calculator.powerOf(divisionNum, 2)); //400