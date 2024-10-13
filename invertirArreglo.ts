/*Almacene en un arreglo detamaño N losnúmeros ingresados por el usuario
La dimensión N también es ingresada por el usuario
Muestre los números del arreglo pero del último al primero*/

import * as rs from "readline-sync";

let longitud: number= rs.questionInt("Ingrese la dimension del arreglo: ");

let arreglo: number[]= new Array(longitud);

for (let i:number = 0; i < longitud; i++) {
    arreglo[i] = rs.questionInt("Ingrese numero para el arreglo: ")  
}
for (let i: number = longitud - 1; i>=0; i--) {
    
 console.log (arreglo[i] );
}