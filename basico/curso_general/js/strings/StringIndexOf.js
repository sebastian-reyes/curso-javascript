console.log("método IndexOf");
// H o l a - m u n d o <- String o cadena
// 0 1 2 3 4 5 6 7 8 9 <- Índice

//Método IndexOf
let saludo = "Hola mundo"

//Encontró resultado
console.log(saludo.indexOf("mundo"));

//No encontró resultado
console.log(saludo.indexOf("Mundo"));

console.log((saludo + " real").indexOf("real"));

//Le pedimos que busque otras coincidencias a partir del índice "2"
console.log(saludo.indexOf("o", 2));