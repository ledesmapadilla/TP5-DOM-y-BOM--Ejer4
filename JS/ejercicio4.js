/* fecha */

const fechaActual = new Date();
console.log(fechaActual);

/* estilo a la fecha */
const estilosFecha = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const fechaFormateada = fechaActual.toLocaleDateString(undefined, estilosFecha);
console.log(fechaFormateada);

/* traer fecha */
const fecha = document.querySelector(`#fecha`);
console.log(fecha);

const fechaFinal = () => {
  fecha.textContent = fechaFormateada;
};
fechaFinal();

/* hora */
const estilosHora = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

const horaFormateada = fechaActual.toLocaleTimeString(undefined, estilosHora);
console.log(horaFormateada);

const hora = document.querySelector(`#hora`);
console.log(hora);

const cambiarHora = () => {
  hora.textContent = horaFormateada;
};
cambiarHora();
