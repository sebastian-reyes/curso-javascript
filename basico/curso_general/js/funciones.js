console.log("funciones");

/*
    Estructura de una función;
    function nombre (parámetros, parámetros...){
        //Código a ejecutar
        console.log("hola desde una función"); //No se toma como valor retornado.
        return algo; //Se toma como valor retornado, significa que la función retornará algo.
    }

*/

function saludar(mensaje){
    let saludo = `Hola, este es el mensaje: ${mensaje}`
    return saludo;
}

let saludo = saludar("buenas tardes");
console.log(saludo);

function sumaDe2Numeros(num1, num2){
    let resultado = num1+num2;
    return resultado;
}

console.log(sumaDe2Numeros(3,5));


//FUNCION ASIGNADA A UNA VARIABLE
let miFuncion = function (producto1, producto2){
    console.log("La compra fue exitosa");
    return `Te compré ${producto1} y ${producto2}`;
}

let funcion = miFuncion("pan", "leche")
console.log(funcion);