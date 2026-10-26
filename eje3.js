import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese la cantidad de lineas de ensamblaje: ", function(entradaLineas) {

    const lineas = parseInt(entradaLineas);

    rl.question("Ingrese la cantidad de sensores por linea: ", function(entradaSensores) {

        const sensores = parseInt(entradaSensores);

        if (isNaN(lineas) || lineas <= 0 ||
            isNaN(sensores) || sensores <= 0) {

            console.log("Error: ingrese cantidades enteras positivas.");

        } else {

            console.log("\n===== TABLERO DE SENSORES =====");

            for (let linea = 1; linea <= lineas; linea++) {

                console.log("\nLinea de ensamblaje " + linea);

                for (let sensor = 1; sensor <= sensores; sensor++) {

                    const rendimiento = linea * sensor * 5;

                    if (rendimiento >= 50) {
                        console.log(
                            "Sensor " + sensor +
                            " | Rendimiento: " + rendimiento +
                            " | Estado: Optimo"
                        );

                    } else if (rendimiento >= 25) {
                        console.log(
                            "Sensor " + sensor +
                            " | Rendimiento: " + rendimiento +
                            " | Estado: Mantenimiento Preventivo"
                        );

                    } else {
                        console.log(
                            "Sensor " + sensor +
                            " | Rendimiento: " + rendimiento +
                            " | Estado: Falla de Lectura"
                        );
                    }
                }
            }
        }

        rl.close();
    });
});