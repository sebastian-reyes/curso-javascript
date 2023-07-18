console.log("condificional if");
/**
if(true){
    ejecuta si es true
}else{
    verás esto solo si es falso
}
*/

let password = "12345"

if (password === "12345") {
    console.log("Bienvenido");
} else {
    console.log("Contraseña incorrecta.");
}

//EJERCICIO ELSE-IF

let notaIngresada = "1" + 0
console.log(notaIngresada);
console.log(typeof notaIngresada);

//parse a Integer
let nota = parseInt(notaIngresada);
console.log(nota);
console.log(typeof nota);

if (nota >= 0 && nota <= 5) {
    console.log("Reprobado");
} else if (nota >= 6 && nota <= 12) {
    console.log("Estudia más");
} else if (nota >= 13 && nota <= 17) {
    console.log("Aprobado");
} else if (nota >= 18 && nota <= 20) {
    console.log("Excelente");
} else {
    console.log("nota fuera de rango de evaluación");
}