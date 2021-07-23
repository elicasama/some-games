import configuracion from "./configuracion";
import Escenario from "./Escenario";
import nivel from "./nivel";
import Canvas from "./Canvas";
import Antorcha from "./Antorchas";

class Juego {
  constructor(canvas, contexto) {
    this.canvas = canvas;
    this.contexto = contexto;
  }

  crearEsenario() {
    const escenario = new Escenario(
      nivel.cuadrilla,
      nivel.tileMap,
      this.contexto,
      configuracion.altoF,
      configuracion.anchoF
    );
    return escenario;
  }

  crearAntorcha() {
    const antorcha1 = new Antorcha(0, 0, this.contexto);
    return antorcha1;
  }

  crearAreaDeJuego() {
    const areaDeJuego = new Canvas(this.canvas);
    return areaDeJuego;
  }

  correr() {
    this.crearAreaDeJuego().borrar();
    this.crearEsenario().dibujar();
    this.crearAntorcha().dibujar();
  }
}
export default Juego;
