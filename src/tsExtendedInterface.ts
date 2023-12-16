//program1
interface EmpInfo{
    firstName:string,
    lastName:string
}

//-------to access interface in another interface use "extends" kyeword
//extended interface
interface Emp1 extends EmpInfo{
    EmpId:number,
    Role:string
}

let e1:Emp1={
    firstName:"swapnali",
    lastName:"sardesai",
    EmpId:11,
    Role:"Developer"
}
console.log(e1)

//program2:

interface worldBank1{
    save():number;
    loan():number;
}
//----------to access interface in class use "implements" keyword
class BOI implements worldBank1{
    save(){
        return 200
    }
    loan(){
        return 111
    }
    branchName(){
        return "Pune"
        //console.log("pune")
    }
}

class PNB implements worldBank1{
    save(){
        return 8000
    }
    loan(){
        return 4000
    }
    branchName(){
       return "mumbai"
    }
}
let objBOI=new BOI;
let objPNB=new PNB

console.log(objBOI.save())
console.log(objBOI.branchName())
console.log(objPNB.branchName())//method overrides


