class doIt{
    
     addition = function addition(a: number, b: number){
let cond: number = a + b;
// return result != 50 ? "It is not 50" : "It is 50";
let result: string = cond != 50 ? "Not 50" : "It is 50";
return result;
}

add = (a: number, b: number): number => (a + b);
}

const inst = new doIt();
let dAddition = inst.addition(5, 45);
try{
    console.log(`The first Addition is: ${dAddition}`);
    console.log(`The second Addition is: ${inst.add(1,2)}`);
}
catch(error: any){
    console.error("There is an error:", error);
}
