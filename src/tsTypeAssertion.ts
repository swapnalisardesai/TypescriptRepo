let variableA:any="Hello world";
let varALength:number=(variableA as string).length;

//program 2
let variableB:any="hello Javascript";
let varBLen:number=(<string>variableB).length

//program3
 type Human={
    nameA:string,
    age:number
 }
 let varC:any={
    nameA:"ovi",
    age:25  
 }

 let varD:Human=varC as Human
 let varE:Human=varC as {nameA:string,age:number}

 //program4:
 let arrP:any[]=["swapnali","sardesai",25,9900887768]
 let lNa=(arrP[1] as string).toUpperCase.length;

 //program5:
 type EmpS={id:number,nameS:string,salary:number}
 let dataS:any={id:1,names:"sss",salary:50000}
 let varS:EmpS=dataS as EmpS