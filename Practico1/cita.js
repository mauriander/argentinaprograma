let cita;
let substring;
cita = "Tres tristes tigres comen trigo en un trigal";
substring = "tigres comen trigo";

let tamañoDeCita=cita.length;
console.log("El tamaño de la cita es: "+tamañoDeCita);
console.log('El tamaño de la cita es: ${tamañoDeCita}');

let indice=cita.indexOf(substring);          
console.log("El indice del substring es: "+indice);


let aux= cita.split(" ")
//let aux2=cita.replace()
let citaRevisada=aux[0]+ " "+aux[1]+" "+substring;
console.log(citaRevisada);
