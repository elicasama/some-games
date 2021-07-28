import configuracion from "./configuracion";
import Juego from "./Juego";
import nivel from "./Nivel";
import jugador from "./Jugador";



window.inicializar = function () {
  nivel.armarNivel();
  const juego = new Juego(jugador);

  document.addEventListener("keydown", function (tecla) {
    const funcion = jugador.direcciones[tecla.keyCode];
    if (funcion != null) funcion();
  });

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);
};
