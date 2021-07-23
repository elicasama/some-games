import configuracion from "./configuracion";
import Escenario from "./Escenario";
import nivel from "./nivel";
import tileMapImage from "./assets/img/tilemap.png";
import Canvas from "./Canvas";

class Juego {
  constructor(canvas, contexto) {
    this.canvas = canvas;
    this.contexto = contexto;
  }

  imagenDelNivel() {
    const tileMap = new Image();
    tileMap.src = tileMapImage;
    return tileMap;
  }

  crearEsenario() {
    const escenario = new Escenario(
      nivel,
      this.imagenDelNivel(),
      this.contexto,
      configuracion.altoF,
      configuracion.anchoF
    );
    return escenario;
  }

  crearAreaDeJuego() {
    const areaDeJuego = new Canvas(this.canvas);
    return areaDeJuego;
  }

  correr() {
    this.crearAreaDeJuego().borrar();
    this.crearEsenario().dibujar();
  }
}
export default Juego;
