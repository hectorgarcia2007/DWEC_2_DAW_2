class Libro {
  constructor(nombre, paginas, prestado) {
    this.nombre = nombre;
    this.paginas = paginas;
    this.prestado = prestado;
  }

  pasarAHtml() {
    return `<div class="tarjeta">
          <h3 class="tituloTarjeta">Nombre: ${this.nombre}</h3>
          <p>Paginas: ${this.paginas}</p>
          <p>Prestado: ${this.prestado === true ? "Si" : "No"}</p>
        </div>`;
  }
}

export { Libro };
