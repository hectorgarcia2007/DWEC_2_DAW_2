let nuevoObjeto = {
  nombre: "rafa",
  apellido: null,
  sumar: (a, b) => a + b,
  hijos: ["Paco", "Luis", "Pepe"],
};

console.log(nuevoObjeto.nombre);
nuevoObjeto.nombre = "Pepe";
console.log(nuevoObjeto.nombre);

console.log(nuevoObjeto.sumar(1, 2));
nuevoObjeto.sumar = () => "Jaja ya no funciona";
console.log(nuevoObjeto.sumar(1, 2));

let nuevoObjetoNew = new Object();
nuevoObjetoNew.Nombre = "rafa";

//Clonacion de objeto
let otroObjeto = JSON.parse(JSON.stringify(nuevoObjeto));
nuevoObjeto.nombre = "paco";
console.log(otroObjeto.nombre);
