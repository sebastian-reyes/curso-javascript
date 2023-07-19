console.log("método forEach");

/*
forEach se podría traducir por cada elemento.
Por cada elemento muéstrame o tráeme el elemento y su índice
*/

const animales = ["Perro", "Gato", "León", "Muerciélago", "Ballena", "Zorro", "Pez"];

animales.forEach(valor => console.log(valor));

//forEach con valor e índice
function retornaValores(valor, indice) {
    console.log(`${indice} - ${valor}`);
}

animales.forEach(retornaValores)