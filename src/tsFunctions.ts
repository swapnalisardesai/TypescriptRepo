
//*****************************function declaration:***************
//program1
function addition(x:number,y:number){
    return x+y;
}
let c=addition(2,3);

//program 2
function addition1(x:number,y:number):number{
    return x+y;
}
let q=addition1(4,7);

//program 3
//void->when dont need to return
function add(x:number,y:number):void{
    console.log(x+y)
}
add(12,11);

//program4
function add1(x:number,y:number,msg:string,avail:boolean){
    if(avail)
    {
        console.log(`${msg} ${(x+y)}`)
    }
}
add1(10,10,"Addition is ",true)

//****************************function expression******************
let addi=function(a:number,b:number){
    return a+b
}
let sum=addi(12,12)
console.log(sum)

//program2
//if function does not return any value then u can use void
let newAdd=function(c:number,d:number):void{
console.log(c+d)
}
newAdd(23,33)


//******************************optional parameter******************
//here g considered as optional so it can be undefined
function addB(e:number,f:number,g?:number){
    if(g==undefined){
    console.log(e+f)
    }
    else{
        console.log(e+f+g)
    }
}
addB(11,12)
addB(11,11,11)

//program 2
function greeting(name:string,deg?:string){
    if(deg==undefined){
        console.log(`Myself ${name}.`)
    }
    else{
        console.log(`Myself ${name}. I am a ${deg}`)
    }
}
greeting("swapnali")
greeting("swapnali",'developer')