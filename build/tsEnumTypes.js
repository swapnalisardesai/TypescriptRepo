"use strict";
//numeric enum
var direct;
(function (direct) {
    direct[direct["up"] = 5] = "up";
    direct[direct["down"] = 6] = "down";
    direct[direct["left"] = 7] = "left";
    direct[direct["right"] = 8] = "right";
})(direct || (direct = {}));
let mydirect = direct.up;
console.log(mydirect); //5
console.log(direct.down); //6
//string enum
var colour;
(function (colour) {
    colour["red"] = "RED";
    colour["green"] = "GREEN";
    colour["blue"] = "BLUE";
    colour["pink"] = "PINK";
})(colour || (colour = {}));
let mycolour = colour.pink;
console.log(mycolour); //PINK
console.log(colour.green); //GREEN
//Hetrogeneous enum
var status1;
(function (status1) {
    status1[status1["notFound"] = 202] = "notFound";
    status1["success"] = "SUCCESS";
    status1["error"] = "ERROR";
})(status1 || (status1 = {}));
console.log(status1.notFound);
console.log(status1.error);
//enum with function
var logLevel;
(function (logLevel) {
    logLevel["info"] = "INFO";
    logLevel[logLevel["warning"] = 1] = "warning";
    logLevel[logLevel["error"] = 2] = "error";
})(logLevel || (logLevel = {}));
function myLog(msg, a) {
    console.log(`${msg} ${a}`);
}
myLog("This is a", logLevel.info);
myLog("I am", logLevel.error);
