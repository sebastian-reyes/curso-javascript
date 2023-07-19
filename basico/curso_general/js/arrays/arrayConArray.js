console.log("Array dentro de Array");

let miarray = ['gato', 'perro', 'conejo', 'liebre'];
let miColeccion = [1, true, 'Hola mundo', undefined, 45.2, miarray];

console.log(miColeccion);
console.log(miColeccion[5]);
console.log(miColeccion[5][0]);

// g a t o
// 0 1 2 3
console.log(miColeccion[5][0][0]);
console.log(miColeccion[5][0][1]);
console.log(miColeccion[5][0][2]);
console.log(miColeccion[5][0][3]);