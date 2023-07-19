console.log("Métodos de búsqueda");
/**
includes -> retorna un booleano dependiendo si encuentra el valor o no.
indexOf  -> retorna la posición del índice si lo encuentra, si no existe retorna -1
*/

const nombres = [
  "Sebastián",
  "Pedro",
  "Luis",
  "Rodrigo",
  "Felipe",
  "Sebastián",
];

console.log(nombres);
console.log(nombres.includes("Luis"));

//includes
let buscarNombre = (nombre) => {
  let respuesta = "";
  if (nombres.includes(nombre)) {
    respuesta = `${nombre} sí existe en la lista`;
  } else {
    respuesta = `${nombre} no existe en la lista`;
  }
  return respuesta;
};

console.log(buscarNombre("Pedro"));

//indexOf -> busca y si lo encuentra, retorna la posición
console.log(nombres.indexOf("Sebastián"));
console.log(nombres.indexOf("Sebastián", 1));

let verificarExistencia = (nombre) => {
  let respuesta = "";
  let posicion = nombres.indexOf(nombre);
  if (posicion == -1) {
    respuesta = `${nombre} no existe en la lista`;
  } else {
    respuesta = `${nombre} sí existe en la lista, y está en la posición ${posicion}`;
  }
  return respuesta;
};

console.log(nombres);
console.log(verificarExistencia("Pedro"));
