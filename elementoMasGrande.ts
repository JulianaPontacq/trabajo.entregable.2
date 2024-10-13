/*Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
-Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar*/

import * as rs from "readline-sync";

let numeros= [4,7,9,3,1,45,67,23,29,78,11,16];
let max: number= 0; 
for(let i=0; i < numeros.length;i++){
    if(numeros[i] > max){
        max = numeros [i];
}
}
console.log(max);

