let lista = [
  "Jose",
  "Maria",
  "Juan",
  "Andres",
  "Lionel",
  "Sofia",
  "Leandro",
  "Emilia",
];

let largo = lista.length;
//console.log("El largo es: " + largo);
/*
Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es igual a "Jose" o "Sofia" usando una declaración condicional:
- Si es así, concatene el elemento al arreglo de rechazados. - Si no es así, concatene el elemento al arreglo de admitidos.
*/

let rechazados = [];
let admitidos = [];

for (let i = 0; i < largo; i++) {
  // console.log(i);
  if (lista[i] == "Sofia" || lista[i] == "Jose") {
    rechazados.push(lista[i]);
  } else {
    admitidos.push(lista[i]);
  }
}
/*
● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de invitados admitidos y otra para imprimir la lista de invitados rechazados:
a. Para la lista de invitados admitidos deberás imprimir por consola un mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por tantos párrafos como tenga el arreglo admitidos conteniendo los respectivos nombres de los invitados.
b. Para la lista de invitados rechazados deberás imprimir por consola un mensaje inicial que dirá: "La lista de invitados rechazados es:”, seguido por tantos párrafos como tenga el arreglo rechazados conteniendo los respectivos nombres de los invitados.
*/
console.log("\n La lista de invitados admitidos es :");
for (let i = 0; i < admitidos.length; i++) {
  console.log(admitidos[i]);
}

console.log("\n La lista de invitados rechazados es :");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}
console.log("\n La lista de invitados admitidos ordenados es: ");
let admitidosordenada =[];
admitidosordenada=admitidos.sort();  
for(let i = 0; i<admitidosordenada.length; i++){
  console.log(admitidosordenada[i]);
  
  }    
  let rechazadosordenada =[];
  rechazadosordenada=rechazados.sort();  
  console.log("\n La lista de invitados rechazados ordenados es: ");
  for(let i = 0; i<rechazadosordenada.length; i++){
    console.log(rechazadosordenada[i]);
    
    }    