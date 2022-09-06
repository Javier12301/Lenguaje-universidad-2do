export type Operation = 'Multiply' | 'Add' | 'Divide' | 'Substract'; 
//Si usas export podes usar en otro lado el modulo//

const calculator = (a: number, b: number, op: Operation)=>{
    if(!operations.includes(op)){ //Esto sirve para revisar si la operación se encuentra en la variable//
        console.log("This operations is not defined");
    }

    if(op == "Add") return a + b;
    
    if(op == "Substract") return a - b;
    
    if(op == "Multiply") return a * b;

    if(op == "Divide"){
        if(b == 0 ) return "Can't divide by 0";
        return a / b;
    }


}

console.log(calculator(4, 0, "Add"));