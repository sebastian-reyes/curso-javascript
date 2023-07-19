console.log("Splice");
/*
splice -> se suele utilizar para trabajar con datos que están en medio de un array, podemos:
quitarlos o removerlos, reemplazarlos o incluso agregar nuevos elementos

splice(index, borrar, agregar);
*/

const colores = ["Rojo", "Azul", "Amarillo", "Morado", "Verde", "Blanco"];
const numeros = [1, 2, 3, 4, 5];
console.log(colores.splice(1, 2, "Naranja", "AMARILLO")); // retorna lo que está borrando
console.log(colores);

console.log(colores.splice(0, 1, numeros));
console.log(colores);
