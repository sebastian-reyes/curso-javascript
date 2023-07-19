console.log("Array con Concat");
/*
MÉTODO CONCAT
Permite unir arrays
*/

let numeros = [1, 2, 3, 4];
let frutas = ["Pera", "Manzana", "Sandía"];
let bebidas = ["Coca-Cola", "7up"];
let booleanos = [true, false];

//De esta forma lo une convirtiendo los arrays en strings
let sumaArrays = numeros + frutas;
console.log(sumaArrays);
console.log(typeof sumaArrays);

//Con este método podemos unir ambos arrays, devolviendo como resultado un array
let union = numeros.concat(frutas);
console.log(union);
console.log(typeof union);

console.log(numeros);
console.log(frutas);

//Se pueden concatenar varias listas a la vez
const misArrays = numeros.concat(frutas, bebidas, booleanos);
console.log(misArrays);
