import configuracion from "./configuracion";
import Escenario from "./Escenario";
import nivel from "./nivel";
import Canvas from "./Canvas";
import Antorcha from "./Antorcha";
import Enemigo from "./Enemigo";
import Jugador from "./Jugador";

// const escenario = new Escenario(
//   nivel.cuadrilla,
//   nivel.tileMap,
//   this.contexto,
//   configuracion.altoF,
//   configuracion.anchoF
// );

class Juego {
  constructor(canvas, contexto) {
    this.canvas = canvas;
    this.contexto = contexto;
    this.enemigos = [];
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

  crearJugador() {
    const jugador = new Jugador(this.contexto);
    return jugador;
  }

  crearEnemigos() {
    this.enemigos.push(new Enemigo(11, 2, this.contexto));
    this.enemigos.push(new Enemigo(6, 2, this.contexto));
    this.enemigos.push(new Enemigo(2, 8, this.contexto));
    return this.enemigos;
  }

  // crearEnemigo(){
  //   const enemigo1 = new Enemigo(8,2, this.contexto);
  //   return enemigo1;
  // }

  dibujar(enemigos) {
    for (let c = 0; c < this.enemigos.length; c++) {
      this.enemigos[c].moverse();
      this.enemigos[c].dibujar();
    }
  }

  correr() {
    this.crearAreaDeJuego().borrar();
    this.crearEsenario().dibujar();
    // escenario.dibujar();
    this.crearAntorcha().dibujar();
    // this.crearEnemigo().dibujar();
    this.crearEnemigos();
    this.dibujar(this.enemigos);
    this.crearJugador().dibujar();
  }
}
export default Juego;
