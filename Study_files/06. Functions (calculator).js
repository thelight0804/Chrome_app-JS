//21.08.05
const calculator = {
    add: function(a, b){
        console.log(a+b);
    }, //Objects 내용은 ,로 구분한다
    minus: function(a, b){
        console.log(a-b);
    },
    mult: function(a, b){
        console.log(a*b);
    },
    division: function(a, b){
        console.log(a/b);
    },
    powerOf: function(a, b){
        console.log(a**b);
    },
    Isay: function(){
        console.log("Thank you nico! It's a perfect lesson!")
    }
}

calculator.add(10, 5);
calculator.minus(10, 5);
calculator.mult(10, 5);
calculator.division(10, 5);
calculator.powerOf(10, 5);
calculator.Isay();