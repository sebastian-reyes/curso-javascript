
//Array
//índice y valor
const cliente01 = [
    'Marcos',
    'Suarez',
    50,
    215465.75,
    'Lima, Perú'
];

//Objeto
//key y valor
const cliente02 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 35,
    saldo: 15026.30,
    ubicación: 'Arequipa, Perú',
    12: 'doce',
    'hola mundo': 'saludo',
    '45 domicilio': 'domicilio 45'
}

console.log(cliente02.nombre);
console.log(cliente02[12]);
console.log(cliente02["hola mundo"]);
console.log(cliente02["45 domicilio"]);
console.log(cliente02["hola " + "mundo"]);