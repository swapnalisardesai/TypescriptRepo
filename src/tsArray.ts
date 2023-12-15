//array of numbers
let numbers:number[]=[11,12,13,14,15]
numbers.push(111)
//numbers.push('sss')=>this will show error bcoz we cant add string in array of number
console.log(numbers)

//array of string
let names:string[]=['swapnali','sameer','vidhi','ovi','patankar']
//names.push(111)=>error
names.pop()
console.log(names)


//array of both number and string
let info:[string,number,number]=['swapnali',9900997865,404]
console.log(info)
info.push('swapnali')
//info.push(true)=>error
info.unshift(111)
console.log(info)

//array of string number and boolean values
let information:[number,string,boolean]=[111,'sss',true]
console.log(information)
information.push(111,'swapnali',false)
console.log(information)

//array of any..here we can store any type of array elements
let ArrOfAny:any[]=["swapnali",11,"sardesai",true]
console.log(ArrOfAny)

//************************************ */

let ArrOfAny1:[any]=[11]

//let A1:[any]=[11,"str"]//throw error bcoz inside [any] array we can pass only one element



