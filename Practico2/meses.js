const readlineSync = require("readline-sync");

let num = readlineSync.question("Ingrese el numero de mes ");

while (num < 1 || num > 12) {
  num = readlineSync.question("Ingrese un valor valido entre 1 y 12 ");
}

switch (num) {
  case "1":
    console.log("La cantidad de dias del mes enero es 31 dias");
    break;
  case "2":
    console.log("La cantidad de dias del mes febrero es 28 dias");
    break;
  case "3":
    console.log("La cantidad de dias del mes de Marzo es 31 dias");
    break;
  case "4":
    console.log("La cantidad de dias del mes  de Abril es 30 dias");
    break;
  case "5":
    console.log("La cantidad de dias del mes de Mayo es 31 dias");
    break;
  case "6":
    console.log("La cantidad de dias del mes de Junio es 30 dias");
    break;
  case "7":
    console.log("La cantidad de dias del mes de Julio es 31 dias");
    break;
  case "8":
    console.log("La cantidad de dias del mes de Agosto es 31 dias");
    break;
  case "9":
    console.log("La cantidad de dias del mes de Septiembre es 30 dias");
    break;
  case "10":
    console.log("La cantidad de dias del mes de Octubre es 31 dias");
    break;
  case "11":
    console.log("La cantidad de dias del mes de Noviembre es 30 dias");
    break;
  case "12":
    console.log("La cantidad de dias del mes de Diciembre es 31 dias");
    break;
}
