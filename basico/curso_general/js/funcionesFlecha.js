console.log("funciones tipo flecha");

let funcionFlecha = () => {
    //Codigo a ejecutar
    console.log("Esto es una función flecha");
    return "Flecha";
}

funcionFlecha();

let recuperandoDato = funcionFlecha();
console.log(recuperandoDato);

console.log(funcionFlecha());

//CONSTANTE: no se puede modificar
const funcionConstante = () => {
    console.log("Esto es una función flecha constante :v");
}

//Reducir el código cuando la función en el cuerpo solo usa una línea
const funcionSimple = () => console.log("esto es una función simple");
funcionSimple();

const funcionSimpleParametros = texto => console.log(texto);
funcionSimpleParametros("argumento texto");

const funcionSuma = (dato1, dato2) => dato1 + dato2;
console.log(funcionSuma(3, 5));

const funcionRetornaValor = () => "esto es posible porque está solo en una línea de código";
console.log(funcionRetornaValor());

const regresarObjeto = () => ({ nombre: "Sebastián", edad: 21 });
console.log(regresarObjeto());