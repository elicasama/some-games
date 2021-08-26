import configuracion from "./configuracion";
import contexto from "./contexto";

class PersonajePrincipal {
  constructor(contexto) {
    this.x = 1;
    this.y = 1;
    this.contexto = contexto;
    this.llave = false;
    this.direcciones = {
      38: [0, -1],
      40: [0, 1],
      37: [-1, 0],
      39: [1, 0],
    };
  }

  dibujar() {
    this.contexto.drawImage(
      configuracion.nivel.tileMap,
      32,
      32,
      32,
      32,
      this.x * configuracion.anchoF,
      this.y * configuracion.altoF,
      configuracion.anchoF,
      configuracion.altoF
    );
  }

  colisionEnemigo(x, y) {
    if (this.x === x && this.y === y) this.muerte();
  }

  margenes(x, y) {
    var colision = false;

    if (configuracion.nivel.cuadrilla[y][x] === 0) colision = true;

    return colision;
  }

  mover(dx, dy) {
    if (!this.margenes(this.x + dx, this.y + dy)) {
      this.x += dx;
      this.y += dy;
      this.encontroUnObjeto();
    }
  }

  // arriba() {
  //   if (!this.margenes(this.x, this.y - 1)) {
  //     this.y--;
  //     this.encontroUnObjeto();
  //   }
  // }

  // abajo() {
  //   if (!this.margenes(this.x, this.y + 1)) {
  //     this.y++;
  //     this.encontroUnObjeto();
  //   }
  // }

  // izquierda() {
  //   if (!this.margenes(this.x - 1, this.y)) {
  //     this.x--;
  //     this.encontroUnObjeto();
  //   }
  // }

  // derecha() {
  //   if (!this.margenes(this.x + 1, this.y)) {
  //     this.x++;
  //     this.encontroUnObjeto();
  //   }
  // }

  victoria() {
    this.x = 1;
    this.y = 1;
    this.llave = false;
    configuracion.nivel.cuadrilla[8][3] = 3;
    console.log("victoria");
  }

  muerte() {
    this.x = 1;
    this.y = 1;
    this.llave = false;
    configuracion.nivel.cuadrilla[8][3] = 3; // ponemos la llave en su sitio
    console.log("Perdiste");
  }

  encontroUnObjeto() {
    let objeto = configuracion.nivel.cuadrilla[this.y][this.x];

    if (objeto === 3) {
      this.llave = true;
      configuracion.nivel.cuadrilla[this.y][this.x] = 2;
      console.log("encontraste la llave!!");
    }

    if (objeto === 1) {
      if (this.llave) {
        this.victoria();
        console.log("Ganaste!!");
      } else {
        console.log("no podés pasar");
      }
    }
  }
}

export default new PersonajePrincipal(contexto);
