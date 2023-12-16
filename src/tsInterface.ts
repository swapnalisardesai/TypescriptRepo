//interface=>to set properties and values on object
//program1
interface Kids{
    KidName:string,
    KidAge:number,
    KidWeight:number
}

let firstKid:Kids={
    KidName:"vidhi",
    KidAge:4,
    KidWeight:14
}

let kidSecond:Kids={
    KidName:"ovi",
    KidAge:4,
    KidWeight:15
}

//program2
interface cars{
    brand:string,
    model:string,
    year?:number
}
let volvo:cars={
    brand:"volvo",
    model:"a1"
}
console.log(volvo.brand)
console.log(volvo.year)//undefined

//program3
interface points{
     readonly s:number,
     readonly t:number
}
let point1:points={
    s:11,
    t:13
}
//point1.s=12//here we cannot reassign value bcoz it is readonly property

//program4:
interface calculator{
     add(a:number,b:number):number;//------------->method//only signature
     sub(a:number,b:number):number;//------------->method//only signature

    }
let calculation:calculator={
    add:(a,b)=>{//-------------method body
        return a+b
    },
    sub:(a,b)=>{//------------method body
        return a-b
    }
}
console.log(calculation.add(11,40))

//program 5
interface worldBank{
    save1(rate1:number):number;
    loan1(rate1:number):number;
}
let SBI:worldBank={
    save1(rate1){
        return 80
    },
    loan1(rate1){
        return 40
    }
}
//program6
//interface for function type
interface Addition{
    (x1:number,y1:number):number
}
let AddA:Addition=(x1,y1)=>x1+y1