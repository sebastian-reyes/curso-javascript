// 8888
const cliente = {
  nombre: "Marcos",
  edad: 33,
  notas: [],
};

// cliente02 -> 8888
const cliente02 = cliente;

cliente02.edad = 50;

//Ambos apuntan a la misma referencia (cliente02 y cliente)
console.log(cliente.edad);
console.log(cliente02.edad);

const miArray = [1, 2, 3]; //8889
const miSegundoArray = [1, 2, 3]; //8890

//falso porque ocupan distintos espacios en memoria
console.log(miArray === miSegundoArray);

//true, porque hacen referencia al mismo espacio en memoria
console.log(cliente === cliente02);

//validar que array es vacío con length
console.log(cliente.notas.length === 0);