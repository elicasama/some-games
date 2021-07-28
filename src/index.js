import configuracion from "./configuracion";
import contexto from "./contexto";
import Juego from "./Juego";
import Jugador from "./Jugador";
import nivel from "./Nivel";
// const contexto = configuracion.areaDeJuego.getContext("2d");

window.inicializar = function () {
  nivel.armarNivel();
  const jugador = new Jugador(contexto);
  const juego = new Juego(jugador);
  
  document.addEventListener("keydown", function (tecla) {
    const funcion = jugador.direcciones[tecla.keyCode];
    if (funcion != null) funcion();
  });

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);
};
