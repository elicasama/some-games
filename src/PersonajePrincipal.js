import configuracion from "./configuracion";
import contexto from "./contexto";
import constantes from "./constantes";

class PersonajePrincipal {
  constructor(contexto) {
    this.x = 1;
    this.y = 1;
    this.contexto = contexto;
    this.tieneLaLlave = false;
  }

  dibujar() {
    this.contexto.drawImage(
      configuracion.nivel.tileMap,
      32,
      32,
      32,
      32,
      this.x * configuracion.anchoDeLaFicha,
      this.y * configuracion.altoDeLaFicha,
      configuracion.anchoDeLaFicha,
      configuracion.altoDeLaFicha
    );
  }

  colisionEnemigo(x, y) {
    if (this.x === x && this.y === y) this.muerte();
  }

  margenes(x, y) {
    return configuracion.nivel.cuadrilla[y][x] === constantes.pared;
  }

  mover(dx, dy) {
    if (!this.margenes(this.x + dx, this.y + dy)) {
      this.x += dx;
      this.y += dy;
      this.encontroUnObjeto();
    }
  }

  victoria() {
    this.x = 1;
    this.y = 1;
    this.tieneLaLlave = false;
    configuracion.nivel.cuadrilla[8][3] = constantes.llave;
    console.log("victoria");
  }

  muerte() {
    this.x = 1;
    this.y = 1;
    this.tieneLaLlave = false;
    configuracion.nivel.cuadrilla[8][3] = 3; // ponemos la llave en su sitio
    console.log("Perdiste");
  }

  encontroUnObjeto() {
    let objeto = configuracion.nivel.cuadrilla[this.y][this.x];

    if (objeto === constantes.llave) {
      this.tieneLaLlave = true;
      configuracion.nivel.cuadrilla[this.y][this.x] = constantes.camino;
      console.log("encontraste la llave!!");
    }

    if (objeto === constantes.puerta) {
      if (this.tieneLaLlave) {
        this.victoria();
        console.log("Ganaste!!");
      } else {
        console.log("no podés pasar");
      }
    }
  }
}

export default new PersonajePrincipal(contexto);
