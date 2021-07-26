import configuracion from "./configuracion";
import Juego from "./Juego";
import Jugador from "./Jugador";



window.inicializar = function () {
  const areaDeJuego = window.document.getElementById("canvas");
  const contexto = areaDeJuego.getContext("2d");

  const jugador = new Jugador(contexto);
  const juego = new Juego(areaDeJuego, contexto, jugador);
  
  document.addEventListener("keydown", function (tecla) {
    jugador.direccionesJugador[tecla.keyCode]();
  });

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);
};
