console.log("método replace");
// H o l a - m u n d o <- String o cadena
// 0 1 2 3 4 5 6 7 8 9 <- Índice

//Método replace
let saludo = "Hola mundo"
console.log(saludo.replace("mundo", "amigos"));
console.log(saludo);

let saludoModificado = saludo.replace("Hola", "Adiós");
console.log(saludoModificado);

//solo cambia la primera coincidencia
let cadena = "HOLA HOLA HOLA HOLA";
console.log(cadena.replace("HOLA","MODIFICADO123%%%"));