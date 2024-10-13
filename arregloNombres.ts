/*2- Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está en el arreglo. Imprimir el arreglo y si está o no en él*/

import * as rs from "readline-sync";
const nombres: string[]= ["Pablo", "Susana", "Rogelio", "Alba", "Luana"];

const nombresBuscar: string= rs.question("Ingrese el nombre a buscar: ");
let resultado: string= "No encontrado";
for (let i = 0; i < nombres.length; i++){
    if (nombres [i].toLowerCase() === nombresBuscar.toLowerCase()) {
        resultado = "Encontrado";
}
}
console.log (resultado);
