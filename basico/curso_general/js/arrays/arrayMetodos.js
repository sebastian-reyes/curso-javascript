console.log("Métodos con array");

/*
MÉTODOS PARA AGREGAR O QUITAR ELEMENTOS DE UN ARRAY
---------------------------------------------------
push    -> agrega al final
pop     -> elimina desde el final
unshift -> agrega al principio de un array
shift   -> elimina desde el principio
*/

//push
let frutas = ["Pera", "Banana"];
console.log(frutas);

let total = frutas.push("Manzana", "Sandía"); // retorna la cantidad de elementos
console.log(frutas);
console.log(total);

//pop
let respuestaPop = frutas.pop();
frutas.pop(); // Manzana
console.log(frutas);
console.log(respuestaPop);

//unshift
let respuestaUnshift = frutas.unshift('Melocotón','Naranja')
console.log(frutas);
console.log(respuestaUnshift);

//shift
let respuestaShift = frutas.shift();
console.log(respuestaShift);
frutas.shift(); // Naranja
frutas.shift(); // Pera
console.log(frutas);
