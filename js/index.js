// eslint-disable-next-line import/extensions
import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");
const spanContador = document.querySelector(".contador");
let contador = 0;

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;
  const valorDato = senyorElemento.querySelector(".senyor-profesion");
  valorDato.textContent = profesion;
  const senyorEstado = senyorElemento.querySelector(".senyor-estado");
  senyorEstado.textContent = estado;
  const senyorTwitter = senyorElemento.querySelector(".senyor-twitter");
  senyorTwitter.textContent = twitter;

  const inicial = senyorElemento.querySelector(".inicial");

  const nombreArray = nombre.split(" ");
  if (nombreArray[0].length > 3) {
    inicial.textContent = nombreArray[0].charAt(0);
  } else {
    inicial.textContent = nombreArray[1].charAt(0);
  }

  if (marcado) {
    const icono = senyorElemento.querySelector(".icono");
    imagen.classList.add("marcado-avatar");
    icono.classList.add("marcado-icono");
    contador += 1;
    spanContador.textContent = `${contador}`;
  }

  principal.append(senyorElemento);
}
