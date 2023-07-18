console.log("if anidado");

let password = "01234568"

if (password.length == 8) {
    console.log("Primer if superado, la contraseña cuenta con 8 caracteres");
    if (password === "01234567") {
        console.log("Segundo if superado, contraseña correcta");
        console.log("Bienvenido");
    } else {
        console.log("Contraseña incorrecta.");
    }
} else {
    console.log("la contraseña no tiene 8 caracteres.");
}