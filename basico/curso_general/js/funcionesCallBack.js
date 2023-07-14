console.log("funciones CallBack");

//No importa dónde se llame la función
comprar(1, 5, verTotal);

//Función que recibe por parámetro otra función :)
function comprar(articulo1, articulo2, funcion) {
    let gastado = articulo1 + articulo2;
    funcion(gastado);
}

function verTotal(mensaje) {
    console.log(`Compras realizadas, gastamos en total: S/. ${mensaje}`);
}

comprar(70, 45, verTotal);
comprar(5, 5, verTotal);