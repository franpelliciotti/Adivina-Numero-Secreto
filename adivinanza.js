const generarNumeroAleatorio = () =>  {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
        console.log("Felicitaciones! Adivinaste el numero secreto.")
    } else if (numeroAdivinado > numeroSecreto) {
        console.log("El numero secreto es menor. Seguí intentando.")
    } else {
        console.log("El numero secreto es mayor. Seguí intentando.")
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};