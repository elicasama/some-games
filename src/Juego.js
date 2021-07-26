import configuracion from "./configuracion";
import Escenario from "./Escenario";
import nivel from "./nivel";
import Canvas from "./Canvas";
import Antorcha from "./Antorcha";
import Enemigo from "./Enemigo";
// import Jugador from "./Jugador";

// const escenario = new Escenario(
//   nivel.cuadrilla,
//   nivel.tileMap,
//   this.contexto,
//   configuracion.altoF,
//   configuracion.anchoF
// );

class Juego {
  constructor(canvas, contexto, jugador) {
    this.canvas = canvas;
    this.contexto = contexto;
    this.enemigos = [];
    this.antorchas = [];
    this.jugador = jugador;
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

  // crearAntorcha() {
  //   const antorcha1 = new Antorcha(0, 0, this.contexto);
  //   return antorcha1;
  // }
  
  agregarAntorchas(){
    this.antorchas.push(new Antorcha(0, 0, this.contexto));
    this.antorchas.push(new Antorcha(2, 0, this.contexto));
    this.antorchas.push(new Antorcha(9, 7, this.contexto));
    this.antorchas.push(new Antorcha(11, 7, this.contexto));

    return this.antorchas
  }

  dibujarAntorchas(){
    for (let a = 0; a < this.enemigos.length; a++) {
      this.antorchas[a].dibujar();
    }
  }


  crearAreaDeJuego() {
    const areaDeJuego = new Canvas(this.canvas);
    return areaDeJuego;
  }

  // crearJugador() {
  //   const jugador = new Jugador(this.contexto);
  //   return jugador;
  // }

  agregarEnemigos() {
    this.enemigos.push(new Enemigo(11, 2, this.contexto));
    this.enemigos.push(new Enemigo(6, 2, this.contexto));
    this.enemigos.push(new Enemigo(2, 8, this.contexto));
    return this.enemigos;
  }

  // crearEnemigo(){
  //   const enemigo1 = new Enemigo(8,2, this.contexto);
  //   return enemigo1;
  // }

  dibujarEnemigos(enemigos) {
    for (let c = 0; c < this.enemigos.length; c++) {
      this.enemigos[c].moverse();
      this.enemigos[c].dibujar();
    }
  }

  correr() {
    this.crearAreaDeJuego().borrar();
    this.crearEsenario().dibujar();
    // escenario.dibujar();
    // this.crearAntorcha().dibujar();
    // this.crearEnemigo().dibujar();
    this.agregarEnemigos();
    this.dibujarEnemigos(this.enemigos);
    this.agregarAntorchas();
    this.dibujarAntorchas();
    this.jugador.dibujar();
  }
}
export default Juego;
