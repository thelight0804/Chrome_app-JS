//21.08.05
function sayHello(name, age){
    console.log("Hello my name is " + name + ". My age is " + age);
}
function plus (a, b){
    const c = a+b;
    console.log(c);
}

sayHello("PSH", 23);
sayHello("PDK", 50);
sayHello("PJH", 20, -123); //매개변수가 많아도 상관없다

plus(); //NaN : Not a Number (숫자가 아니다)
plus(1,2);