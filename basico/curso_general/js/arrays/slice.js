console.log("método slice");
/*
slice -> Crea un nuevo array tomando una porción del array que usamos o pasamos
debemos indicar índice donde comenzar e indice donde terminar +1
*/

//                  0       1         2         3        4          5
const colores = ["Rojo", "Azul", "Amarillo", "Verde", "Naranja", "Morado"];

const primarios = colores.slice(0, 3);
console.log(primarios);

const combinaciones = colores.slice(3, 6);
console.log(combinaciones);

const array = colores.slice(-2);
console.log(array);

//No modifica la lista
console.log(colores);
