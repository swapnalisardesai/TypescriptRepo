"use strict";
//to assign constant values
//group of constants//unchangeble variables
//program1:
var Roles;
(function (Roles) {
    //bydefault it start with 0
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["customer"] = 2] = "customer";
    Roles[Roles["support"] = 3] = "support";
    Roles[Roles["manager"] = 4] = "manager";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log("I am admin");
}
if (Roles.customer) {
    console.log("I am customer");
}
if (Roles.support) {
    console.log("I am support");
}
//------------------program2---------------
var directions;
(function (directions) {
    directions[directions["NORTH"] = 5] = "NORTH";
    directions[directions["SOUTH"] = 6] = "SOUTH";
    directions[directions["WEST"] = 7] = "WEST";
    directions[directions["EAST"] = 8] = "EAST";
})(directions || (directions = {}));
//console.log(directions[5])
if (directions.NORTH) {
    console.log("delhi");
    console.log(directions.NORTH);
}
if (directions.SOUTH) {
    console.log("kerala");
    console.log(directions.SOUTH);
}
var statusCode;
(function (statusCode) {
    statusCode[statusCode["notfound"] = 404] = "notfound";
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["created"] = 201] = "created";
    statusCode[statusCode["timeout"] = 505] = "timeout";
})(statusCode || (statusCode = {}));
console.log(statusCode.notfound);
//retrive enum values by index
var weekdays;
(function (weekdays) {
    weekdays[weekdays["sunday"] = 0] = "sunday";
    weekdays[weekdays["monday"] = 1] = "monday";
    weekdays[weekdays["tue"] = 2] = "tue";
    weekdays[weekdays["wed"] = 3] = "wed";
    weekdays[weekdays["thu"] = 4] = "thu";
    weekdays[weekdays["fri"] = 5] = "fri";
    weekdays[weekdays["sat"] = 6] = "sat";
})(weekdays || (weekdays = {}));
//let t1: weekdays = weekdays[2]
//let t2: weekdays = weekdays[new Date().getDay()]
//console.log(t1)
//console.log(t2)
// console.log(weekdays[new Date().getDay()])
// let t2:string=weekdays[new Date().getDay()]
let getfriIdx = weekdays.fri;
//let getfri:number=weekdays.fri
//var today=weekdays[getfri]
var today = weekdays[getfriIdx];
console.log(today);
function getval(keyn) {
    //  let abc: weekdays = weekdays[keyn]
    // console.log(abc)
}
getval(2);
function getvalA(keyn) {
    let abc = weekdays[keyn];
    console.log(abc);
}
getvalA(3);
