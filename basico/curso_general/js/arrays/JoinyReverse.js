console.log("join y reverse");
/*
reverse -> inverte el sentido del array original cada vez que se aplica
join    -> me regresa el contenido del array como un string
*/

let numeros = [1, 2, 3, 4, 5];

console.log(numeros.reverse());
/*
Al aplicar el reverse, así sea en un console.log la lista pasará a
estar invertida
*/
console.log(numeros);

console.log(numeros.reverse());
console.log(numeros);

//join
let array = ["Sebastián", 1, true];
console.log(array.join());
console.log(array.join(""));
console.log(array.join("/"));
console.log(array.join(" "));
console.log(array.join(" + "));
