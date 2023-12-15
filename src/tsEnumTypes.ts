//numeric enum
enum direct{
    up=5,
    down,
    left,
    right
}
let mydirect:direct=direct.up
console.log(mydirect);//5
console.log(direct.down);//6

//string enum
enum colour{
    red="RED",
    green="GREEN",
    blue="BLUE",
    pink="PINK"
}
let mycolour:colour=colour.pink
console.log(mycolour)//PINK
console.log(colour.green)//GREEN

//Hetrogeneous enum
enum status1{
    notFound=202,
    success="SUCCESS",
    error="ERROR"
}
console.log(status1.notFound)
console.log(status1.error)

//enum with function
enum logLevel{
    info="INFO",
    warning=1,
    error
}

function myLog(msg:string,a:logLevel)
{
    console.log(`${msg} ${a}`)
}

myLog("This is a",logLevel.info)
myLog("I am",logLevel.error)