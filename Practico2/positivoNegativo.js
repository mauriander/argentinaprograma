const readlineSync = require("readline-sync");

const e= readlineSync.question("Ingrese la edad ");

if(e>0){
    console.log("El numero es positivo");
}  else if(edad<0){
    console.log("El numero es negativo");
        }
        else{console.log("El numero es cero");}