class Pedido {
  constructor(nombre, dispositivo) {
    this.nombre = nombre;
    this.dispositivo = dispositivo;
    this.extras = [];
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  addExtra(extra) {
    this.extras.push(extra);
  }
}

class PedidoBuilder {
  constructor(nombre, dispositivo) {
    this.pedido = new Pedido(nombre, dispositivo);
  }
  addCantidad(numCantidad) {
    let cantidad = { numCantidad: numCantidad };
    this.pedido.addExtra(cantidad);
    return this;
  }
  addCantidad(numCantidad) {
    let cantidad = { numCantidad: numCantidad };
    this.pedido.addExtra(cantidad);
    return this;
  }
  addCantidad(numCantidad) {
    let cantidad = { numCantidad: numCantidad };
    this.pedido.addExtra(cantidad);
    return this;
  }

  build() {
    return this.pizza;
  }
}
//Pizza Builder siempre será un let, porque se modifica
let pizzaBuilder = new PizzaBuilder();
pizzaBuilder = pizzaBuilder.addCheese();
pizzaBuilder = pizzaBuilder.addPepperoni();
pizzaBuilder = pizzaBuilder.addAnchoas();
pizzaBuilder = pizzaBuilder.setNombre("Pepperoni Pipsa");

//El objeto final siempre será constante, es lo que ha decidido el usuario
const pizza = pizzaBuilder.build();
console.log(pizza);
