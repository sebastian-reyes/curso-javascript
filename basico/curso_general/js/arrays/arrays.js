let cadena = "Hola";
let cadena2 = new String("Hola mundo");

let miarray = ["Hola", 2, 3, null, true, 0.25];
let miSegundoArray = new Array(1, 2, true, false);

console.log(miarray);
console.log(miSegundoArray);

console.log(miarray[3]);
console.log(miSegundoArray[5]);

//Modificación de arrays

let diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
console.log(diaSemana);

diaSemana[1] = "Sábado"
console.log(diaSemana);
console.log(diaSemana.length);

/*
FORMA INCORRECTA DE AGREGAR UN ARRAY SIN SABER CUANTOS ELEMENTOS TIENE
diaSemana[10] = "Martes"
*/

//Agregando elemento siempre al último con length
diaSemana[diaSemana.length] = "Domingo"
console.log(diaSemana);

//Obtener el último elemento del array
console.log(diaSemana[diaSemana.length-1]);

/*
IMPORTANTE
----------
Pese a que estas formas de agregar elementos al array funcionen,
debemos tener en cuenta que al poner entre [] la posición haría
que se elimine por completo el valor que se tenía anteriormente,
por eso no es tan recomendable utilizar estas formas de manejar
los arrays, es mejor utilizar métodos...
*/