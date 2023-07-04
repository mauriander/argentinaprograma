const readlineSync = require("readline-sync");
function obtenerJugadaUsuario() {
  let jugada = readlineSync.question(
    "Ingrese una jugada PIEDRA, PAPEL O TIJERA\n"
  );
  jugada = jugada.toLowerCase();
  ajugada = ["piedra", "papel", "tijera"];
  let indice = ajugada.indexOf(jugada);

  while (indice == -1) {
    jugada = readlineSync.question(
      "Ingrese una jugada PIEDRA, PAPEL O TIJERA\n"
    );
    jugada = jugada.toLowerCase();
    indice = ajugada.indexOf(jugada);
  }

  console.log("Usted eligio: " + jugada);
  return jugada;
}

function obtenerJugadaComputadora() {
  //Bibliografia de random https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  ajugada = ["piedra", "papel", "tijera"];
  console.log("La computadora eligio: " + ajugada[i]);
  return ajugada[i];
}

function determinarGanador(turnoJugador, turnoCompu) {
  if (turnoCompu == turnoJugador) {
    return "Empataron";
  } else if (    (turnoJugador == "piedra" && turnoCompu == "tijera") ||    (turnoJugador == "papel" && turnoCompu == "piedra") ||    (turnoJugador == "tijera" && turnoCompu == "papel")  ) {
    return "Usted Gana";
  } else {
    return "Tu pierdes, vuelve a intentarlo";
  }
}

let num = readlineSync.question(
  "Ingrese la cantidad  al mejor de 1,2,3 \n1:Una jugada: gana el ganador de esa unica jugada.\n2: Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de queel usuario gane una jugada y la computadora la otra.\n3:Mejor de 3: quien gane 3 o 2 jugadas sera el ganador\n"
);
while (num < 1 || num > 3) {
  num = readlineSync.question("Ingrese un valor valido entre 1 y 3 ");
}
let contadorj;
let contadorc;
let resultado;
switch (num) {
  case "1":
    console.log("Escogio una partida unica.");
    let a = obtenerJugadaUsuario();
    let b = obtenerJugadaComputadora();
    console.log(determinarGanador(a, b));
    break;
  case "2":
    console.log("Escogio al mejor de 2 partidas.");

    contadorj = 0;
    contadorc = 0;
    for (let i = 0; i < 2; i++) {
      console.log(        "El score en estos momentos es de " +          contadorj +          " para usted y de " +          contadorc +          " para la computadora"      );
      console.log("Esta es la partida numero " + (i + 1) + " de 2");
      let a = obtenerJugadaUsuario();
      let b = obtenerJugadaComputadora();
      resultado = determinarGanador(a, b);
      if (resultado == "Usted Gana") {
        contadorj++;
      } else if (resultado == "Empataron") {
      } else {
        contadorc++;
      }

      console.log(determinarGanador(a, b));
      console.log("\n");
    }
    if (contadorj == contadorc) {
      console.log("El resultado final fue un Empate");
    } else {
      contadorj > contadorc        ? console.log("El ganador global fue usted")        : console.log("El ganador global fue la computadora");
    }

    break;
  case "3":
    console.log("Escogio al mejor de 3 partidas.");
    contadorj = 0;
    contadorc = 0;

    for (let i = 0; i < 2; i++) {
      console.log("El score en estos momentos es de " +          contadorj +          " para usted y de " +          contadorc +          " para la computadora"      );
      console.log("Esta es la partida numero " + (i + 1) + " de 3");
      let a = obtenerJugadaUsuario();
      let b = obtenerJugadaComputadora();
      resultado = determinarGanador(a, b);
      if (resultado == "Usted Gana") {
        contadorj++;
      } else if (resultado == "Empataron") {
      } else {
        contadorc++;
      }

      console.log(determinarGanador(a, b));
      console.log("\n");
      if (contadorc > 1 || contadorj > 1) {
        break;
      }
    }

    if (contadorj == contadorc) {
      console.log("El resultado final fue un Empate");
    } else {
      contadorj > contadorc        ? console.log("El ganador global fue usted")        : console.log("El ganador global fue la computadora");
    }

    break;

  default:
    console.log("Numero invalido");
    break;
}
