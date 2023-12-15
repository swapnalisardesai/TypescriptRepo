"use strict";
//to assign constant values
//group of constants//unchangeble variables
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
var directions;
(function (directions) {
    directions[directions["NORTH"] = 5] = "NORTH";
    directions[directions["SOUTH"] = 6] = "SOUTH";
    directions[directions["WEST"] = 7] = "WEST";
    directions[directions["EAST"] = 8] = "EAST";
})(directions || (directions = {}));
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
