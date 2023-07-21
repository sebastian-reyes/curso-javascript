/*
SINTAXIS:
for (inicio, condición, incremento){
    //lo que necesito que se repita
}
*/

for (let i = 0; i < 10; i++) {
  console.log(`Hola mundo ${i + 1}`);
}

//Recorrer array con bucle for
const array = ["Perro", "Gato", "Conejo", "Tiburón"];

console.log("Elementos del array: ");
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(`${i}: ${element}`);
}

const personas = [
  {
    nombre: "Pedro",
    genero: "Masculino",
    edad: 26,
  },
  {
    nombre: "Luis",
    genero: "Masculino",
    edad: 31,
  },
  {
    nombre: "Adrian",
    genero: "Masculino",
    edad: 17,
  },
];

//Iniciando atributo
let total = 0;
//Listar por atributo
for (let i = 0; i < personas.length; i++) {
    const element = personas[i];
    
    console.log(element.nombre);
    console.log(personas[i].edad);
    console.log(personas[i].genero);

    //Retornar de a pares
    console.log(`Alumno: ${element.nombre}, edad: ${element.edad}`);

    //Promediar edades
    total += element.edad;
}

console.log("Promedio de edades: "+(total/personas.length).toFixed(2));