//to assign constant values
//group of constants//unchangeble variables
//program1:
enum Roles {
    //bydefault it start with 0
    admin = 1,
    customer,
    support,
    manager
}
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
enum directions {
    NORTH = 5,
    SOUTH,
    WEST,
    EAST
}
//console.log(directions[5])
if (directions.NORTH) {
    console.log("delhi")
    console.log(directions.NORTH)
}
if (directions.SOUTH) {
    console.log("kerala")
    console.log(directions.SOUTH)
}

enum statusCode {
    notfound = 404,
    success = 200,
    created = 201,
    timeout = 505
}
console.log(statusCode.notfound)

//retrive enum values by index

enum weekdays {
    sunday,
    monday,
    tue,
    wed,
    thu,
    fri,
    sat
}


//let t1: weekdays = weekdays[2]
//let t2: weekdays = weekdays[new Date().getDay()]
//console.log(t1)
//console.log(t2)
// console.log(weekdays[new Date().getDay()])
// let t2:string=weekdays[new Date().getDay()]

let getfriIdx: weekdays = weekdays.fri
//let getfri:number=weekdays.fri
//var today=weekdays[getfri]
var today = weekdays[getfriIdx]
console.log(today)

function getval(keyn: number): void {
  //  let abc: weekdays = weekdays[keyn]
   // console.log(abc)
}
getval(2)

function getvalA(keyn: weekdays): void {
    let abc: string = weekdays[keyn]
    console.log(abc)
}
getvalA(3)