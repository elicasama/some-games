import configuracion from "./configuracion";
import nivel from "./nivel";

class Jugador {
  constructor(contexto) {
    this.x = 1;
    this.y = 1;
    this.contexto = contexto;
    this.llave = false;
    this.direccionesJugador = {
      38: () => this.arriba(),
      40: () => this.abajo(),
      37: () => this.izquierda(),
      39: () => this.derecha(),
    };
  }

  dibujar() {
    this.contexto.drawImage(
      nivel.tileMap,
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

  // this.colisionEnemigo = function (x, y) {
  //   if (this.x == x && this.y == y)
  //     // console.log("muerto");
  //     this.muerte();
  // };

  margenes(x, y) {
    var colision = false;

    if (nivel.cuadrilla[y][x] === 0) colision = true;

    return colision;
  }

  arriba() {
    if (!this.margenes(this.x, this.y - 1)) {
      this.y--;
      this.encontroUnObjeto();
    }
  }

  abajo() {
    if (!this.margenes(this.x, this.y + 1)) {
      this.y++;
      this.encontroUnObjeto();
    }
  }

  izquierda() {
    if (!this.margenes(this.x - 1, this.y)) {
      this.x--;
      this.encontroUnObjeto();
    }
  }

  derecha() {
    if (!this.margenes(this.x + 1, this.y)) {
      this.x++;
      this.encontroUnObjeto();
    }
  }

  // this.victoria = function () {
  //   this.x = 1;
  //   this.y = 1;
  //   this.llave = false;
  //   // escenario[8][3] = 3;
  //   escenario.cuadrilla[8][3] = 3;
  //   console.log("victoria");
  // };

  // this.muerte = function () {
  //   this.x = 1;
  //   this.y = 1;
  //   this.llave = false;
  //   // escenario[8][3] = 3; // ponemos la llave en su sitio
  //   escenario.cuadrilla[8][3] = 3; // ponemos la llave en su sitio
  //   console.log("Perdiste");
  // };

  encontroUnObjeto() {
    let objeto = nivel.cuadrilla[this.y][this.x];

    if (objeto === 3) {
      this.llave = true;
      nivel.cuadrilla[this.y][this.x] = 2;
      console.log("encontraste la llave!!");
    }

    if (objeto === 1) {
      if (this.llave) {
        // this.victoria();
        console.log("Ganaste!!");
      } else {
        console.log("no podés pasar");
      }
    }
  }
}

export default Jugador;
