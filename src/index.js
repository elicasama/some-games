import configuracion from "./configuracion";
import Juego from "./Juego";
import Jugador from "./Jugador";
const contexto = configuracion.areaDeJuego.getContext("2d");

window.inicializar = function () {
  const jugador = new Jugador(contexto);
  const juego = new Juego(jugador);

  document.addEventListener("keydown", function (tecla) {
    jugador.direccionesJugador[tecla.keyCode]();
  });

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);
};
