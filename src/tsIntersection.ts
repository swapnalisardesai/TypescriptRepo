type person = {
    fName: string,
    lName: string,
    age: number
}
type emp = {
    Id: number,
    position: string
}
type empPerson = person & emp;
let infoE: empPerson = {
    fName: "swapnali",
    lName: "patankar",
    age: 25,
    Id: 101,
    position: "Developer"
}

console.log(infoE)

type struct = { prp1: string, prp2: number }
let examp: struct = {
    prp1: "sss",
    prp2: 11
}

type arr1 = [number, string]
let var2: arr1
var2 = [11, 'str']
console.log(var2)