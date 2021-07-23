import configuracion from "./configuracion";
import Juego from "./Juego";

window.inicializar = function () {
  const areaDeJuego = window.document.getElementById("canvas");
  const contexto = areaDeJuego.getContext("2d");
  
  const juego = new Juego(areaDeJuego,contexto)

  setInterval(function () {
    juego.correr();
  }, 1000 / configuracion.FPS);

};
