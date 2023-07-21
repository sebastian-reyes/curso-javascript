const alumno = {
  nombre: "Marcos",
  apellido: "Ruiz",
  curso: "JS",
  notas: {
    ex1: 12,
    ex2: 12,
    ex3: 16,
  },
  sobrenombre: "Marco",
  mascotas: ["Perro", "Gato", "Conejo"],
  horario: "turno mañana",
};

let promedio = (alumno.notas.ex1 + alumno.notas.ex2 + alumno.notas.ex3) / 3;
console.log(promedio.toFixed(2));

console.log(alumno.mascotas[0]);

const compras = [
    {
        producto: 'Arroz x KG',
        precio: 15.30,
        cantidad: 1
    },
    {
        producto: 'Yogurt',
        precio: 7.50,
        cantidad: 1
    },
    {
        producto: 'Tableta de pastillas',
        precio: 25.30,
        cantidad: 1
    }
]

console.log(compras[2].precio);