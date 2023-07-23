console.log("while");

/*
(mietras true) {}
*/

for (let i = 0; i<= 5; i++){
    console.log(i);
}

const numeroSecreto = Math.floor(Math.random()*10);
console.log(numeroSecreto);

let numMaquina = Math.floor(Math.random()*10);

while(numeroSecreto !== numMaquina){
    console.log(`${numeroSecreto} vs ${numMaquina}`);
    numMaquina = Math.floor(Math.random()*10);
}
console.log(`${numeroSecreto} vs ${numMaquina}`);
console.log('Lo encontramos');