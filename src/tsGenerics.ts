/*generics used to create reusable functions,classes
 that can be used with variety of datatypes.*/

//program1:generics with function
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<number>(100))
console.log(identity<string>('swapnali'));
console.log(identity<boolean>(true));

//program2:generics with class

class Box<T>{
    private content: T
    constructor(x: T) {
        this.content = x;
    }
    getcontent(): T {
        return this.content
    }
}
let numberBox = new Box<number>(12345)
let stringBox = new Box<string>("hello")

console.log(numberBox.getcontent())
console.log(stringBox.getcontent())

//program3:generic function with two arguments
function MixBox<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2]
}
let z1 = (MixBox<string, number>("hello", 123))
console.log(z1)//output-hello,123
console.log(typeof (z1))

//program4:Addition of number
function AdditionG<T>(arg1:T,arg2:T){
    if(typeof(arg1)=="number"&&typeof(arg2)=="number")
    {
        return arg1+arg2
    }
    else if(typeof(arg1)=="string"&&typeof(arg2)=="string"){
        return arg1+arg2
    } 
}
console.log(`Addition is ${AdditionG<number>(20,20)}`)

//substraction of two numbers

function substraction<T extends number>(num1:T,num2:T):T{
    return Number(num1)-Number(num2) as T
}
console.log(`substraction is ${substraction<number>(40,5)}`)

//concat string and  add numbers
function AddConcat<T extends number|string>(s1:T,s2:T):T{
    return Number(s1)+Number(s2) as T
}


console.log(AddConcat<number>(12,12))
console.log(AddConcat<string>('Its','swapnali'))

//program4:generics with class of two args

class mixBoxClass<T, U>{
    public content1: T
    private content2: U
    constructor(x: T, y: U) {
        this.content1 = x;
        this.content2 = y
    }
    getfirst(): T {
        return this.content1
    }
    getsecond(): U {
        return this.content2
    }
}

let a1 = new mixBoxClass<number,string>(234, "hello")
let a2 = new mixBoxClass<number, number>(234, 567)
let a3 = new mixBoxClass<string, string>('hello', 'ts')
console.log(a1.getfirst())
console.log(a1)
