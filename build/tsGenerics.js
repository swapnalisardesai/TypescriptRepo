"use strict";
/*generics used to create reusable functions,classes
 that can be used with variety of datatypes.*/
//program1:generics with function
function identity(arg) {
    return arg;
}
console.log(identity(100));
console.log(identity('swapnali'));
console.log(identity(true));
//program2:generics with class
class Box {
    constructor(x) {
        this.content = x;
    }
    getcontent() {
        return this.content;
    }
}
let numberBox = new Box(12345);
let stringBox = new Box("hello");
console.log(numberBox.getcontent());
console.log(stringBox.getcontent());
//program3:generic function with two arguments
function MixBox(arg1, arg2) {
    return [arg1, arg2];
}
let z1 = (MixBox("hello", 123));
console.log(z1); //output-hello,123
console.log(typeof (z1));
//program4:Addition of number
function AdditionG(arg1, arg2) {
    if (typeof (arg1) == "number" && typeof (arg2) == "number") {
        return arg1 + arg2;
    }
    else if (typeof (arg1) == "string" && typeof (arg2) == "string") {
        return arg1 + arg2;
    }
}
console.log(`Addition is ${AdditionG(20, 20)}`);
//substraction of two numbers
function substraction(num1, num2) {
    return Number(num1) - Number(num2);
}
console.log(`substraction is ${substraction(40, 5)}`);
//concat string and  add numbers
function AddConcat(s1, s2) {
    return Number(s1) + Number(s2);
}
console.log(AddConcat(12, 12));
console.log(AddConcat('Its', 'swapnali'));
//program4:generics with class of two args
class mixBoxClass {
    constructor(x, y) {
        this.content1 = x;
        this.content2 = y;
    }
    getfirst() {
        return this.content1;
    }
    getsecond() {
        return this.content2;
    }
}
let a1 = new mixBoxClass(234, "hello");
let a2 = new mixBoxClass(234, 567);
let a3 = new mixBoxClass('hello', 'ts');
console.log(a1.getfirst());
console.log(a1);
