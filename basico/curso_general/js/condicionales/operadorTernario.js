console.log("Operador ternario");
/*
condicion ? siEsVerdadero : siEsFalso;
*/

let edad = 17

edad >= 18 ? console.log("es mayor") : console.log("es menor");

let password = "admin123"
password === "12345" ? console.log("Contraseña Correcta") : console.log("Incorrecto");

let resultado = edad >= 18 ? 'es mayor' : 'es menor';
console.log(resultado);

//log escribiendo menos código, sin if, sólo operador ternario
console.log(edad >= 18 ? 'es mayor' : 'es menor');