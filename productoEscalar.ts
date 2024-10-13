/*Cargue dos arreglos de dimension N numeros (La cantidad es ingresada por el usuario)
Calcule el producto escalar entre los dos arreglos*/

import * as rs from "readline-sync";


function cargarArreglo(arreglo:number[]) :void{

    for (let i:number = 0; i < arreglo.length; i++){
        arreglo[i] =rs.questionInt("Ingrese un numero: ")
    }
}

function calcularProductoEscalar (arregloA:number[],arregloB:number[], longitud: number): number {


let producto: number= 0;
for( let i: number = 0; i < longitud; i++){
producto= producto + (arregloA[i]*arregloB[i])
}
return producto
}

let dimension: number= rs.questionInt("Ingrese dimension: ");

let arregloA: number[]= new Array (dimension);
let arregloB: number[]= new Array (dimension);


 cargarArreglo (arregloA);
 cargarArreglo (arregloB);   

 let productoEscalar: number;
 productoEscalar= calcularProductoEscalar (arregloA, arregloB, dimension);

 console.log(productoEscalar);
