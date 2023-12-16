"use strict";
let e1 = {
    firstName: "swapnali",
    lastName: "sardesai",
    EmpId: 11,
    Role: "Developer"
};
console.log(e1);
//----------to access interface in class use "implements" keyword
class BOI {
    save() {
        return 200;
    }
    loan() {
        return 111;
    }
    branchName() {
        return "Pune";
        //console.log("pune")
    }
}
class PNB {
    save() {
        return 8000;
    }
    loan() {
        return 4000;
    }
    branchName() {
        return "mumbai";
    }
}
let objBOI = new BOI;
let objPNB = new PNB;
console.log(objBOI.save());
console.log(objBOI.branchName());
console.log(objPNB.branchName()); //method overrides
