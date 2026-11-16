const expedicionesIniciales = [
  {
    id: 1,
    destino: "Bilbao",
    capacidadMaxima: 20,
    consumoBase: 8,
    paquetes: [
      { codigo: "P01", peso: 6, urgente: true },
      { codigo: "P02", peso: 9, urgente: false },
    ],
    estado: "preparando",
  },
  {
    id: 2,
    destino: "Zaragoza",
    capacidadMaxima: 30,
    consumoBase: 11,
    paquetes: [],
    estado: "preparando",
  },
  {
    id: 3,
    destino: "Madrid",
    capacidadMaxima: 25,
    consumoBase: 10,
    paquetes: [
      { codigo: "P03", peso: 4, urgente: false },
      { codigo: "P04", peso: 7, urgente: true },
    ],
    estado: "en ruta",
  },
];

/*
 IMPORTANTE:
 - Conserva los nombres, parámetros y retornos de las seis funciones.
 - Los tests ejecutarán estas funciones directamente.
 - Puedes crear funciones auxiliares.
 - Estas seis funciones no deben acceder al DOM ni a localStorage.
*/
function calcularPesoTotal(paquetes) {
  // TODO
  let pesoTotal = 0;
  if (paquetes === null) {
    return pesoTotal;
  }

  paquetes.forEach((objetoPaquete) => {
    pesoTotal += objetoPaquete.peso;
  });
  return pesoTotal;
}

function crearExpedicion(expediciones, destino, capacidadMaxima, consumoBase) {
  // TODO
  let expedicionInformacionDevolver = {
    creada: false,
    mensaje: "",
    expedicion: null,
  };

  if (destino.trim() === "" || destino === NULL) {
    expedicionInformacionDevolver.mensaje = "El destino es obligatorio";
  } else if (capacidadMaxima <= 0) {
    expedicionInformacionDevolver.mensaje =
      "La capacidad debe ser mayor que cero";
  } else if (consumoBase <= 0) {
    expedicionInformacionDevolver.mensaje =
      "El consumo debe ser mayor que cero";
  } else {
    expedicionInformacionDevolver.creada = true;
    expedicionInformacionDevolver.mensaje = "Expedicion creada correctamente";
    let expedicionDentro = {
      id: expediciones[expediciones.length - 1].id + 1,
      destino: destino,
      capacidadMaxima: capacidadMaxima,
      consumoBase: consumoBase,
      paquetes: null,
      estado: "preparando",
    };
    expedicionInformacionDevolver.expedicion = expedicionDentro;
  }
  return expedicionInformacionDevolver;
}

function validarPaquete(expedicion, nuevoPaquete) {
  // TODO
  let informacionPaquete = {
    valido: false,
    mensaje: "",
  };
  if (expedicion.estado !== "preparado") {
    informacionPaquete.mensaje =
      "Solo se pueden añadir paquetes a una expedición en preparación";
  } else if (
    nuevoPaquete.codigo.trim() === "" ||
    nuevoPaquete.codigo === NULL
  ) {
    informacionPaquete.mensaje = "El código es obligatorio";
  } else if (nuevoPaquete.peso <= 0) {
    informacionPaquete.mensaje = "El peso debe ser mayor que cero";
  } else if (codigoExiste(expedicion, nuevoPaquete)) {
    informacionPaquete.mensaje = "El código ya existe";
  } else if (seSuperaLaCapacidad(expedicion, paquete)) {
    informacionPaquete.mensaje = "Se supera la capacidad máxima";
  } else {
    informacionPaquete.valido = true;
    informacionPaquete.mensaje = "Paquete válido";
  }
}

function codigoExiste(expedicion, paquete) {
  expedicion.paquetes.forEach((paqueteComprobar) => {
    if (paqueteComprobar.codigo === paquete.codgigo) {
      return true;
    }
  });
  return false;
}

function seSuperaLaCapacidad(expedicion, paquete) {
  let total = paquete.peso;
  expedicion.paquetes.forEach((paqueteComprobar) => {
    total += paqueteComprobar.peso;
  });
  if (expedicion.capacidadMaxima < total) {
    return true;
  } else {
    return false;
  }
}

function calcularCoste(expedicion) {
  // TODO
  let costeBase = expedicion.consumoBase * 2;
  let costeKilogramo = expedicion.peso * 0.5;
  let paqueteUrgente = 3 * sacarUrgente(expedicion);
  let subTotal =
    expedicion.pesoTotal > expedicion.capacidadMaxima * 0.8 ? true : false;
  let total = costeBase + costeKilogramo + paqueteUrgente;
  if (subTotal) {
    total += total * 0.15;
  }
  return total;
}

function sacarUrgente(expedicion) {
  let numUrgente = 0;
  expedicion.paquetes.forEach((paquete) => {
    if (paquete.urgente) {
      numUrgente++;
    }
  });
  return numUrgente;
}

function obtenerSiguienteEstado(expedicion) {
  // TODO
  const ESTADOS = new Array("preparado", "en ruta", "entregada");
  let informacionEstado = {
    cambiado: false,
    nuevoEstado: "",
    mensaje: "",
  };

  let estadoActual = ESTADOS.indexOf(expedicion.estado);

  if (estadoActual === 0 && expedicion.paquetes !== null) {
    informacionEstado.cambiado = true;
    informacionEstado.nuevoEstado = "en ruta";
    informacionEstado.mensaje = "La expedición está en ruta";
  } else if (estadoActual === 0 && expedicion.paquetes === null) {
    informacionEstado.nuevoEstado = "preparando";
    informacionEstado.mensaje = "No se puede iniciar una expedición vacía";
  } else if (estadoActual === 1) {
    informacionEstado.cambiado = true;
    informacionEstado.nuevoEstado = "entregada";
    informacionEstado.mensaje = "La expedición ha sido entregada";
  } else {
    informacionEstado.nuevoEstado = "entregada";
    informacionEstado.mensaje = "La expedición ya está entregada";
  }
  return informacionEstado;
}

function generarResumen(expedicion) {
  // TODO
  let resumen = {
    totalPaquetes: 0,
    pesoTotal: 0,
    paquetesUrgentes: 0,
    paqueteMasPesado: "",
    porcentajeOcupacion: 0,
  };

  resumen.totalPaquetes = expedicion.paquetes.length - 1;
  resumen.pesoTotal = capacidadTotal(expedicion);
  resumen.paquetesUrgentes = sacarUrgente(expedicion);
  resumen.paqueteMasPesado = sacarPaqueteMasPesado(expedicion);
  resumen.porcentajeOcupacion =
    (resumen.pesoTotal / expedicion.capacidadMaxima) * 100;
  return resumen;
}

function capacidadTotal(expedicion) {
  let total = paquete.peso;
  expedicion.paquetes.forEach((paqueteComprobar) => {
    total += paqueteComprobar.peso;
  });
  return total;
}

function sacarPaqueteMasPesado(expedicion) {
  let codMasPesado = "";
  let masPesado = -1;
  expedicion.paquetes.forEach((paqueteComprobar) => {
    if (masPesado < paqueteComprobar.peso) {
      masPesado = paqueteComprobar.peso;
      codMasPesado = paqueteComprobar.codigo;
    }
  });
  return codMasPesado;
}

let expediciones = [];

document.addEventListener("DOMContentLoaded", () => {
  // TODO: recuperar localStorage o copiar expedicionesIniciales.
  // TODO: registrar los eventos click y actualizar la interfaz.
  let arrayIntroducir = JSON.parse(sessionStorage.getItem("arrayExpediciones"));
  if (arrayIntroducir === null) {
    expediciones = expedicionesIniciales;
  } else {
    expediciones = arrayIntroducir;
  }
  sessionStorage.setItem("arrayExpediciones", JSON.stringify(expediciones));
  actualizarSelect();
});

function anadirExpedicion() {
  const destino = document.getElementById("destinoExpedicion").value;
  const capacidadMaxima = document.getElementById("capacidadExpedicion").value;
  const consumoBase = document.getElementById("consumoExpedicion").value;

  let resumenExpedicion = crearExpedicion(
    expediciones,
    destino,
    capacidadMaxima,
    consumoBase,
  );
  if (resumenExpedicion.creada) {
    expediciones.push(resumenExpedicion.expedicion);
  } else {
    console.log(resumenExpedicion.mensaje);
  }

  actualizarSelect();
}

function actualizarSelect() {
  try {
    const select = document.getElementById("expedicionSelect");
    const nuevoOption = document.createElement("option");
    expediciones.forEach((expedicion) => {
      nuevoOption.innerHTML = `${expedicion.destino}`;
      select.appendChild(nuevoOption);
    });
  } catch (error) {
    console.log(error);
  }
}
