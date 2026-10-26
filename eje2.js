import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese la cantidad de lotes a revisar: ", function(entradaLotes) {

    const lotes = parseInt(entradaLotes);

    rl.question("Ingrese la cantidad de cajas por lote: ", function(entradaCajas) {

        const cajas = parseInt(entradaCajas);

        if (isNaN(lotes) || lotes <= 0 ||
            isNaN(cajas) || cajas <= 0) {

            console.log("Error: ingrese cantidades enteras mayores a cero.");

        } else {

            console.log("\n===== CONTROL DE INVENTARIO =====");

            for (let lote = 1; lote <= lotes; lote++) {

                console.log("\nLote " + lote);

                for (let caja = 1; caja <= cajas; caja++) {

                    const codigo = lote * caja * 2;

                    if (codigo % 4 === 0) {
                        console.log(
                            "Caja " + caja +
                            " | Codigo: " + codigo +
                            " | Revision Prioritaria"
                        );
                    } else {
                        console.log(
                            "Caja " + caja +
                            " | Codigo: " + codigo +
                            " | Aprobado"
                        );
                    }
                }
            }
        }

        rl.close();
    });
});