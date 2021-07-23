import configuracion from "./configuracion";
import Escenario from "./Escenario";
import FlujoPrincipal from "./FlujoPrincipal";
import nivel from "./nivel";
import tileMapImage from "./assets/img/tilemap.png";
import AreaDeJuego from "./Canvas";
import Juego from "./Juego";

window.inicializar = function () {
  const areaDeJuego = window.document.getElementById("canvas");
  const contexto = areaDeJuego.getContext("2d");
  
  const juego = new Juego(areaDeJuego,contexto)

  setInterval(function () {
    juego.correr();
    // flujoPrincipal.borrarCanvas();
    // flujoPrincipal.dibujarEsenario();
  }, 1000 / configuracion.FPS);

};
