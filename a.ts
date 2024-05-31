class doIt{
    
    addition(a: number, b: number): string{
let result = a + b;
if(result != 50){
    throw new Error("Am sorry Boss, there is a problem");
}
return `The result is: ${result}`;
}

add = (a: number, b: number): number => (a + b);
}

const inst = new doIt();
try{
    console.log(inst.addition(5, 45));
    console.log(`The result is: ${inst.add(1,1)}`);
}
catch(error: any){
    console.error("There is an error:", error);
}

