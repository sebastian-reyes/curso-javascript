console.log("for anidado");

const miArray = [
  [1, 2, 3], //indice 0
  [4, 5, 6], //indice 1
  [7, 8, 9],
  ["casa", true, 10, 11], //indice 2
];

miArray[0]; //[1,2,3] Objeto

for (let i = 0; i < miArray.length; i++) {
  let obejto = miArray[i];
  console.log(obejto);
  for (let j = 0; j < obejto.length; j++) {
    const element = obejto[j];
    console.log(element);
  }
}

/*
Ejercicio: obtener la suma total y el promedio de los siguientes números mostrados en el array
*/
const numeros = [[1, 2, 3, 4], [5, 6], [7, 8, 9], [10, 11], [12]];

let suma = 0;
let total = 0;
for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  console.log(element);
  for (let j = 0; j < element.length; j++) {
    const numero = element[j];
    suma += numero;
    total++;
    console.log(numero);
  }
}

console.log(
  `Suma total: ${suma}, Cantidad de elementos: ${total}, promedio: ${
    suma / total
  }`
);
