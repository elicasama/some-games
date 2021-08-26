import configuracion from "./configuracion";
import Juego from "./Juego";
import nivel from "./Nivel";
import personajePrincipal from "./PersonajePrincipal";

window.inicializar = function () {
  nivel.armarNivel();
  const juego = new Juego(personajePrincipal);

  document.addEventListener("keydown", function (tecla) {
    const direccion = personajePrincipal.direcciones[tecla.keyCode];
    if (direccion != null) {
      const [dx, dy] = direccion;
      personajePrincipal.mover(dx, dy);
    }
  });

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);
};
