/*Almacene en unarreglo de dimensión N números (la cantidad es ingresada por el usuario)

Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay*/

import * as rs from "readline-sync";

let longitud: number = rs.questionInt("Ingrese longitud para el arreglo: ");
let arregloNumeros: number [] = new Array (longitud);
let positivos: number= 0;
let negativos: number= 0;
let ceros: number= 0;

for (let i:number = 0; i < longitud; i++) {
    arregloNumeros [i] = rs.questionInt("Ingrese numero para el arreglo: ");

if (arregloNumeros[i]>0) {
    positivos++
}else if(arregloNumeros[i]<0){
negativos++
}else{
    ceros++
}

}

console.log ('Hay ${positivos} positivos, ${negativos} negativos, ${ceros} ceros. ');







