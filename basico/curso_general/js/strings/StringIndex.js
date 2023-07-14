console.log("strings");

/*

Diferencia explicada entre Indice y Length:

CADENA = |H|O|L|A| |M|U|N|D|O  <- String
INDICE = |0|1|2|3|4|5|6|7|8|9  <- Índice
LENGTH = |1|2|3|4|5|6|7|8|9|10 <- Largo

*/

let cadena = "Hola mundo";
console.log(typeof cadena);
console.log(cadena.length);

//cadena[] = índice
console.log(cadena[5]);
cadena[4] = "X"

console.log(cadena[cadena.length - 1]); //cadena[9]