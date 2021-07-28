import nivel from "./Nivel";
const areaDeJuego = nivel.crearAreaDeJuego();
const escenario = nivel.crearEscenario();

class Juego {
  constructor(jugador) {
    this.jugador = jugador;
  }

  correr() {
    areaDeJuego.borrar();
    escenario.dibujar();
    this.jugador.dibujar();
    nivel.dibujarEnemigos(this.jugador);
    nivel.dibujarAntorchas();
  }
}
export default Juego;
