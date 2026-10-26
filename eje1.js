import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese la cantidad de departamentos: ", function(entradaDepartamentos) {

    const departamentos = parseInt(entradaDepartamentos);

    rl.question("Ingrese la cantidad de empleados por departamento: ", function(entradaEmpleados) {

        const empleados = parseInt(entradaEmpleados);

        if (isNaN(departamentos) || departamentos <= 0 ||
            isNaN(empleados) || empleados <= 0) {

            console.log("Error: ingrese cantidades enteras mayores a cero.");

        } else {

            console.log("\n===== MATRIZ DE ASISTENCIA =====");

            for (let departamento = 1; departamento <= departamentos; departamento++) {

                let turno;

                if (departamento % 2 !== 0) {
                    turno = "Mañana";
                } else {
                    turno = "Tarde";
                }

                console.log("\nDepartamento " + departamento);

                for (let empleado = 1; empleado <= empleados; empleado++) {
                    console.log("Empleado " + empleado + " - Turno: " + turno);
                }
            }
        }

        rl.close();
    });
});