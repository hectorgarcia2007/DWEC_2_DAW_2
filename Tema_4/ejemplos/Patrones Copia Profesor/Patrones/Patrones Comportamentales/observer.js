class Resumen {
  constructor() {
    this.suma = 0;
    this.max = Number.MIN_SAFE_INTEGER;
    this.min = Number.MAX_SAFE_INTEGER;
  }

  mostrarResumen() {
    console.log(
      `Importe total: ${this.suma} Importe max: ${this.max} Importe min: ${this.min}`,
    );
  }
}

class Paquete {
  constructor(id, precio, unidades) {
    this.id = id;
    this.precio = precio;
    this.unidades = unidades;
  }
}

class Paqueteria {
  constructor(suscribe) {
    this.paquetes = [];
    this.suscribe = suscribe;
  }

  addPaquete(paquete) {
    this.paquetes.push(paquete);
    this.suscribe.notify(this.paquetes);
  }

  removePaquete(paquete) {
    let searchIndex = 0;
    for (let index = 0; index < this.paquetes.length; index++) {
      if (this.paquetes[index].id === paquete.id) {
        searchIndex = index;
      }
    }
    this.paquetes.splice(searchIndex, 1);
    this.suscribe.notify(this.paquetes);
  }
}

class Subject {
  constructor(resumen, paqueteria) {
    this.observers = [];
    this.resumen = resumen;
    this.paqueteria = paqueteria;
  }
  suscribe(fn) {
    this.observers.push(fn);
  }
  notify(paqueteria) {
    /*
    const getMax = (a, b) =>
      Math.max(a.precio * a.unidades, b.precio * b.unidades);
    const getMin = (a, b) =>
      Math.min(a.precio * a.unidades, b.precio * b.unidades);
    let suma = 0;
    this.resumen.max = paqueteria.reduce(getMax);
    this.resumen.min = paqueteria.reduce(getMin);
    this.resumen.suma = paqueteria.reduce(
      (x, y) => x.precio * x.unidades + y.precio * y.unidades,
      suma,
    );
    */
    let importe = 0;
    this.resumen.suma = 0;
    this.resumen.max = Number.MIN_SAFE_INTEGER;
    this.resumen.min = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < paqueteria.length; index++) {
      importe = paqueteria[index].unidades * paqueteria[index].precio;
      this.resumen.suma += importe;
      if (this.resumen.max < importe) {
        this.resumen.max = importe;
      }
      if (this.resumen.min > importe) {
        this.resumen.min = importe;
      }
    }
  }
}

let resum = new Resumen();
let subject = new Subject(resum);
let paqueteria = new Paqueteria(subject);

paqueteria.addPaquete(new Paquete(1, 100, 50));
paqueteria.addPaquete(new Paquete(2, 300, 90));
paqueteria.addPaquete(new Paquete(3, 80, 1000));
let paqueteCuatro = new Paquete(4, 10000, 60);
paqueteria.addPaquete(paqueteCuatro);

resum.mostrarResumen();

paqueteria.removePaquete(paqueteCuatro);

resum.mostrarResumen();

//Cuando sucede un cambio notifica a otras partes.
