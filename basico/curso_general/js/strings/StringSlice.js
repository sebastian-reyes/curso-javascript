console.log("método Slice en Strings");
// H o l a - m u n d o <- String o cadena
// 0 1 2 3 4 5 6 7 8 9 <- Índice

//Método Slice
let saludo = "Hola mundo"
console.log(saludo.slice(5));
console.log(saludo.slice(5,8));

console.log(saludo.slice(-1));

//Caso real
let datoIngresadoPorUsuario = "S/. 50.49";
let dinero = Number(datoIngresadoPorUsuario.slice(4));
//let dinero = +(datoIngresadoPorUsuario.slice(4)); también funciona
console.log(typeof dinero);
console.log(dinero);

