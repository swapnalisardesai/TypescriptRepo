"use strict";
//*****************************function declaration:***************
//program1
function addition(x, y) {
    return x + y;
}
let c = addition(2, 3);
//program 2
function addition1(x, y) {
    return x + y;
}
let q = addition1(4, 7);
//program 3
//void->when dont need to return
function add(x, y) {
    console.log(x + y);
}
add(12, 11);
//program4
function add1(x, y, msg, avail) {
    if (avail) {
        console.log(`${msg} ${(x + y)}`);
    }
}
add1(10, 10, "Addition is ", true);
//****************************function expression******************
let addi = function (a, b) {
    return a + b;
};
let sum = addi(12, 12);
console.log(sum);
//program2
//if function does not return any value then u can use void
let newAdd = function (c, d) {
    console.log(c + d);
};
newAdd(23, 33);
//******************************optional parameter******************
//here g considered as optional so it can be undefined
function addB(e, f, g) {
    if (g == undefined) {
        console.log(e + f);
    }
    else {
        console.log(e + f + g);
    }
}
addB(11, 12);
addB(11, 11, 11);
//program 2
function greeting(name, deg) {
    if (deg == undefined) {
        console.log(`Myself ${name}.`);
    }
    else {
        console.log(`Myself ${name}. I am a ${deg}`);
    }
}
greeting("swapnali");
greeting("swapnali", 'developer');
