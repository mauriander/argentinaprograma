const readlineSync = require("readline-sync");

const edad= readlineSync.question("Ingrese la edad ");

if(edad >17){
    console.log("Eres mayor Edad");
}else{
   console.log("Eres menor de Edad");
}

// if(edad>0){
//     console.log("El numero es positivo");
// }  else if(edad<0){
//     console.log("El numero es negativo");
//         }
//         else{console.log("El numero es cero");}





//edad>17 ?  console.log("es mayor") : console.log("es menor");

