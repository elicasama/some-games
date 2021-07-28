import nivel from "./Nivel";
import canvas from "./Canvas";

const escenario = nivel.crearEscenario();

class Juego {
  constructor(personajePrincipal) {
    this.personajePrincipal = personajePrincipal;
  }

  correr() {
    canvas.borrar();
    escenario.dibujar();
    this.personajePrincipal.dibujar();
    nivel.dibujarEnemigos(this.personajePrincipal);
    nivel.dibujarAntorchas();
  }
}
export default Juego;
