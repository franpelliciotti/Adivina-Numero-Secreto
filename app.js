const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumerousuario = () => {
    return readlineSync.question("Ingresa un numero: ");
};


const seguirJugando = () => {
    return readlineSync.question("Introduci 1 para seguir, y 0 para salir: ");
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log("Bienvenido a Adivina el numero secreto!");
    console.log("Intenta adivinar el numero del 1 al 100");

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumerousuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
        
        if (numeroAdivinado == numeroSecreto) {
            break;
        };
    };
};

juegoAdivinanza();