import nivel from "./Nivel";

class Juego {
  constructor(jugador) {
    this.jugador = jugador;
  }
  correr() {
    nivel.crearAreaDeJuego().borrar();
    nivel.crearEsenario().dibujar();
    nivel.agregarEnemigos();
    nivel.dibujarEnemigos(this.jugador);
    nivel.agregarAntorchas();
    nivel.dibujarAntorchas();
    this.jugador.dibujar();
  }
}
export default Juego;
