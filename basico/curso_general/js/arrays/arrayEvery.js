console.log("método every");

const edades = [1, 15, 16, 17, 13]; //todos son menores a 18
const sonMenoresEdad = (edad) => edad <= 18;

/**
Cada valor del array cumple con la función flecha
Si hay 1 dato que no cumple la condición retornará false
*/
let resultado = edades.every(sonMenoresEdad);

console.log(resultado);

//Son mayores a 18?
let a = [20, 30, 40, 50].every(valor => valor >= 18); //true, todos los valores son mayores a 18
console.log(a);

let b = [20, 30, 40, 15].every(valor => valor >= 18); // false,hay un valor menor a 18
console.log(b);