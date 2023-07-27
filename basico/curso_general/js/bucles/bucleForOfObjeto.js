const cliente01 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 55,
    trabajando: true
}

//traer keys
const llaves = Object.keys(cliente01); // lo convierte en un array
for (const iterator of Object.keys(cliente01)) {
    console.log(iterator);
}

//traer values
const valores = Object.values(cliente01);
for (const iterator of Object.values(cliente01)) {
    console.log(iterator);
}

//traer clave, valor
for (const elemento of Object.keys(cliente01)) {
    console.log(`${elemento} : ${cliente01[elemento]}`);
}
