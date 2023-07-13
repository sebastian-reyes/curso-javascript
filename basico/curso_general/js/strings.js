let nombre,
    apellido,
    nombreCompleto,
    espacio;

nombre = "Juan";
apellido = "Pérez";
espacio = " ";

nombreCompleto = nombre + espacio + apellido;

console.log(nombreCompleto);
console.log(nombre, espacio, apellido);
console.log(nombre, " ", apellido);

console.log("Texto con 'comillas simples'");
console.log('Texto con "comillas dobles"');

console.log(`Su apellido es ${apellido} y su nombre es ${nombre}`);