console.log("Objeto String y métodos");

let cadena = "esto es una cadena string, común y corriente.";
console.log(typeof cadena);

//Objeto String
let cadena2 = new String("cadena String(objeto)")
console.log(typeof cadena2);

console.log(cadena.charAt(2));
console.log(cadena.toLowerCase());
console.log(cadena2.toUpperCase());

let textoMayusculas = cadena.toUpperCase();

//Para javascript sí importan las mayúsculas en los String
console.log("texto" == "TexTO");
console.log("texto" == "texto");

console.log(cadena);
console.log(cadena2);
console.log(textoMayusculas);