//program1
let myvariable:number|string;
myvariable=10;
myvariable="swapnali";

//program 2
function displayData(data:string|number):void{
    console.log(data)
}
displayData(12)
displayData("swapnali")

//program3
function displayData1(data:string|number|boolean):void{
    console.log(data)
}
displayData(12)
displayData("swapnali")
displayData1(true)

//program4
let infoA:{firstName:string,lastName:string,address:string|number}={
    firstName:'swapnali',
    lastName:'patankar',

    address:"pune"
}

//program 5
let infoArr:(string|number)[]=["swapnali",12,300,"sardesai"]
console.log(infoArr);



