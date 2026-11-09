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
  introducirExtra(nombreExtra, extra) {
    nombreExtra.push(extra);
    this.pedido.extras.push(nombreExtra);
    return this;
  }

  build() {
    return this.pizza;
  }
}
export { PedidoBuilder };
