//continue - saltar el ciclo


//Entrega los impares
for (let i = 0; i < 10; i++) {
    if(i%2 === 0) continue;
    console.log(i);
}

//Entrega los pares
for (let i = 0; i < 10; i++) {
    if(i%2 === 1) continue;
    console.log(i);
}
