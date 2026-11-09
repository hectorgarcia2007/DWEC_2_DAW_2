class Dispostivo {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Portatil extends Dispostivo {
  constructor(nombre, precio, ram) {
    super(nombre, precio);
    this.categoria = "Portatil";
    this.ram = ram;
  }
}

class Monitor extends Dispostivo {
  constructor(nombre, precio, pulgadas) {
    super(nombre, precio);
    this.categoria = "Monitor";
    this.pulgadas = pulgadas;
  }
}

class Periferico extends Dispostivo {
  constructor(nombre, precio, tipoConexion) {
    super(nombre, precio);
    this.categoria = "Monitor";
    this.tipoConexion = tipoConexion;
  }
}

// Vehicle factory that creates vehicles based on type
class DispositivoFactory {
  static createDispositivo(nombre, precio, tipo, extra) {
    switch (tipo) {
      case "Portatil":
        return new Portatil(nombre, precio, extra);
      case "Monitor":
        return new Monitor(nombre, precio, extra);
      case "Periferico":
        return new Periferico(nombre, precio, extra);
      default:
        throw new Error("Ese dispositivo no existe.");
    }
  }
}

export { DispositivoFactory };
