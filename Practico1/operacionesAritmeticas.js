let n1=3;
let n2=1;
let n3=20;
let n4=9;

let suma2=n1+n2;//4
let resta4=n3-n4;//11
let resultadoFinal=suma2*resta4;
// console.log(suma2);
// console.log(resta4);
// console.log(resultadoFinal);
let esPar;
 if((resultadoFinal %2) === 0){
     esPar = true;
}
 else {
     esPar=false;
 }

console.log("Mis variables iniciales fueron: "+n1+", "+n2+", "+n3+" y "+n4 +". La respuesta a verificar si el resultado final es par es: "+esPar);