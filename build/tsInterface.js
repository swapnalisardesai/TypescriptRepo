"use strict";
let firstKid = {
    KidName: "vidhi",
    KidAge: 4,
    KidWeight: 14
};
let kidSecond = {
    KidName: "ovi",
    KidAge: 4,
    KidWeight: 15
};
let volvo = {
    brand: "volvo",
    model: "a1"
};
console.log(volvo.brand);
console.log(volvo.year); //undefined
let point1 = {
    s: 11,
    t: 13
};
let calculation = {
    add: (a, b) => {
        return a + b;
    },
    sub: (a, b) => {
        return a - b;
    }
};
console.log(calculation.add(11, 40));
let SBI = {
    save1(rate1) {
        return 80;
    },
    loan1(rate1) {
        return 40;
    }
};
let AddA = (x1, y1) => x1 + y1;
