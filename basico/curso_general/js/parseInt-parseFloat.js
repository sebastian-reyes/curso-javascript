console.log("parseInt y parseFloat");

let cadena1 = "25"
let cadena2 = "23.45"
let cadena3 = "21 de mayo"
let cadena4 = "24*4"
let cadena5 = "Marcos tiene 50"
let cadena6 = "S/. 50.30"

//ENTERO
let resultado1 = parseInt(cadena1);
console.log(resultado1);
console.log(typeof resultado1);

//FLOTANTE O DECIMALES
let resultado2 = parseFloat(cadena1);
console.log(resultado2);
console.log(typeof resultado2);

//Caso real
let resultado3 = parseFloat(cadena6.slice(4));
console.log(resultado3.toFixed(2));
console.log(typeof resultado3);