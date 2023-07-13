console.log("Operadores aritméticos");
let a = 5,
    b = 2,
    resultado = 0;

resultado = a + b;
console.log(resultado);

resultado = a - b;
console.log(resultado);

resultado = a * b;
console.log(resultado);

resultado = a / b;
console.log(resultado);

//Módulo
resultado = a % b;
console.log(resultado);

//Potencia (a = base y b = expoonente)
resultado = a ** b;
console.log(resultado);

//-------------------------------------------
//Orden de procedencia (Operaciones combinadas)
resultado = 2 + 2 * 5;
console.log(resultado);

resultado = (2 + 2) * 5
console.log(resultado);

//--------------------------------------------
c = 10;
c += 5; //15
c -= 5;
console.log(c);
