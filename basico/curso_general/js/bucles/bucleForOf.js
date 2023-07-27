console.log("forOf");

let cadena = "Hola mundo";
let array = ["gato", "perro", "conejo", "loro"];
const miArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const elemento of array) {
  console.log(elemento);
}

for (const i of cadena) {
  console.log(i);
}

for (const fila of miArray) {
  suma = 0;
  for (let numero of fila) {
    suma += numero;
  }
  console.log(suma);
}
