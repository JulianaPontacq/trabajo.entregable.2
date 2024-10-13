/*Sumar los elementosde cada una de lasposiciones de dos arreglos y guarda relresultado en otro arreglo
El arreglo tiene dimensión 6 y losnúmeros de los dos vectores los carga  el usuario*/

import * as rs from "readline-sync";
let longitud: number= 6;
let arr1:number []= new Array (longitud);
let arr2: number []= new Array (longitud);
let sumaArr: number []= new Array (longitud);

for (let i: number = 0; 1 < longitud; i++) {
    arr1 [i] = rs.questionInt ("Ingrese un numero para el arreglo 1: ");
    
}

for (let i: number = 0; 1 < longitud; i++) {
    arr2 [i] = rs.questionInt ("Ingrese un numero para el arreglo 2: ");
    
}

for (let i: number = 0; 1 < longitud; i++) {
    sumaArr [i] = arr1 [i] + arr2[i]
    
}
 console.log(sumaArr);