//to assign constant values
//group of constants//unchangeble variables
enum Roles {
    //bydefault it start with 0
    admin=1,
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

enum directions{
    NORTH=5,
    SOUTH,
    WEST,
    EAST
}
if(directions.NORTH){
    console.log("delhi")
    console.log(directions.NORTH)
}
 if(directions.SOUTH)
{
    console.log("kerala")
    console.log(directions.SOUTH)
}

enum statusCode{
    notfound=404,
    success=200,
    created=201,
    timeout=505
}
console.log(statusCode.notfound)