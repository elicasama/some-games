import configuracion from "./configuracion";
import Juego from "./Juego";
import nivel from "./Nivel";
import personajePrincipal from "./PersonajePrincipal";

window.inicializar = function () {
  nivel.armarNivel();
  const juego = new Juego(personajePrincipal);

  document.addEventListener("keydown", function (tecla) {
    const funcion = personajePrincipal.direcciones[tecla.keyCode];
    if (funcion != null) funcion();
  });

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);
};
