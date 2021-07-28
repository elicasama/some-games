import nivel from "./Nivel";
import canvas from "./Canvas";

const escenario = nivel.crearEscenario();

class Juego {
  constructor(jugador) {
    this.jugador = jugador;
  }

  correr() {
    canvas.borrar();
    escenario.dibujar();
    this.jugador.dibujar();
    nivel.dibujarEnemigos(this.jugador);
    nivel.dibujarAntorchas();
  }
}
export default Juego;
