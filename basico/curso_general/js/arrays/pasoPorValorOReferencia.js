console.log("paso por valor o referencia");

//Paso por valor
let color = "naranja";
let fruta = color;

color = "amarillo";
console.log(color);
console.log(fruta);

//Paso por referencia
let miArray = [1, 2, 3];
let nuevoArray = miArray

console.log(miArray);
console.log(nuevoArray);

nuevoArray.pop()
console.log(miArray);
console.log(nuevoArray);