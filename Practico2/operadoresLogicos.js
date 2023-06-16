const readlineSync = require("readline-sync");

let num = readlineSync.question("Ingrese el numero que desea ");
let espar = "y par.";
let esimpar = "e impar";

if (num > 0) {
  console.log("El numero es positivo " + (num % 2 == 0 ? espar : esimpar));
} else if (num < 0) {
  console.log("El numero es negativo " + (num % 2 == 0 ? espar : esimpar));
} else {
  console.log("El numero es cero");
}
