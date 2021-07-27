import configuracion from "./configuracion";
import contexto from "./contexto";
import Escenario from "./Escenario";
import Canvas from "./Canvas";
import Antorcha from "./Antorcha";
import Enemigo from "./Enemigo";

class Nivel {
  constructor() {
    this.areaDeJuego = configuracion.areaDeJuego;
    this.contexto = contexto;
    this.enemigos = [];
    this.antorchas = [];
  }

  crearEsenario() {
    const escenario = new Escenario(
      configuracion.nivel.cuadrilla,
      configuracion.nivel.tileMap,
      this.contexto,
      configuracion.altoF,
      configuracion.anchoF
    );
    return escenario;
  }

  agregarAntorchas() {
    this.antorchas.push(new Antorcha(0, 0, this.contexto));
    this.antorchas.push(new Antorcha(2, 0, this.contexto));
    this.antorchas.push(new Antorcha(9, 7, this.contexto));
    this.antorchas.push(new Antorcha(11, 7, this.contexto));

    return this.antorchas;
  }

  dibujarAntorchas() {
    for (let a = 0; a < this.enemigos.length; a++) {
      this.antorchas[a].dibujar();
    }
  }

  crearAreaDeJuego() {
    const areaDeJuego = new Canvas(this.areaDeJuego);
    return areaDeJuego;
  }

  agregarEnemigos() {
    this.enemigos.push(new Enemigo(11, 2, this.contexto));
    this.enemigos.push(new Enemigo(6, 2, this.contexto));
    this.enemigos.push(new Enemigo(2, 8, this.contexto));
    return this.enemigos;
  }

  dibujarEnemigos(jugador) {
    for (let c = 0; c < this.enemigos.length; c++) {
      this.enemigos[c].moverse(jugador);
      this.enemigos[c].dibujar();
    }
  }
}

export default new Nivel();
