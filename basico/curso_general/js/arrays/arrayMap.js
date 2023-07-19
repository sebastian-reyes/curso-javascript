console.log("método map");
/*
map se puede traducir por cada elemento
Por cada elemento traeme el valor o su índice
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const doble = numeros.map(function (valor) {
    return valor * 2;
})

console.log(doble);

const raiz = doble.map(Math.sqrt);
console.log(raiz);

const nuevo = numeros.map(function (valor, indice) {
    return `${indice} - su valor es ${valor}`
})
console.log(nuevo);