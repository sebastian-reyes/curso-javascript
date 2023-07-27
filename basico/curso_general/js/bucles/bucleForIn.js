/*
    forIn:
    Está pensado para recorrer objetos, no arrays
*/

const ticket = {
  sal: 33,
  fosforos: 15,
  yerba: 1,
  azucar: 55,
  pan: 3,
};

for (const key in ticket) {
    if (Object.hasOwnProperty.call(ticket, key)) {
        const element = ticket[key];
        console.log(element);
    }
}