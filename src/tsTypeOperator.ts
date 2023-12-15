type employee = { name: string, id: number, address: string }

let newEmp: employee = {
    name: "swapnali",
    id: 111,
    address: "pune"
}

type newArr = [number]
let arrVar: newArr = [12]

type student={
    id:number,
    fullName:string,
    marks:number[]
}
let stud1:student={
    id:111,
    fullName:"swapnali sardesai",
    marks:[99,98,95,94,92]
}
console.log(stud1.marks)