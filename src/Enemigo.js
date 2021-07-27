import configuracion from "./configuracion";

class Enemigo {
  constructor(posicionX, posicionY, contexto) {
    this.x = posicionX;
    this.y = posicionY;
    this.contexto = contexto;
    this.retraso = 10;
    this.contador = 0;
  }

  dibujar() {
    this.contexto.drawImage(
      configuracion.nivel.tileMap,
      0,
      32,
      32,
      32,
      configuracion.anchoF * this.x,
      configuracion.altoF * this.y,
      configuracion.anchoF,
      configuracion.altoF
    );
  }

  colisiona(x, y) {
    let colisiona = false;
    if (configuracion.nivel.cuadrilla[y][x] === 0) colisiona = true;

    return colisiona;
  }

  elegirDestino() {
    return Math.floor(Math.random() * 4);
  }

  moverse(jugador) {
    jugador.colisionEnemigo(this.x, this.y); // Le envía al protagonista su ubicación para ver si lo mató

    if (this.contador < this.retraso) {
      this.contador++;
    } else {
      this.contador = 0;

      // verificamos que no se ponga en las paredes o zonas en las cuales no se podría pasar

      // ARRIBA (0 es una de las opciones de resultado del Math.floor(Math.random() * 4) y lo tomamos como arriba)
      if (this.direccion === 0) {
        if (!this.colisiona(this.x, this.y - 1)) {
          this.y--;
        } else {
          this.elegirDestino();
        }
      }

      //ABAJO
      if (this.direccion === 1) {
        if (!this.colisiona(this.x, this.y + 1)) {
          this.y++;
        } else {
          this.elegirDestino();
        }
      }

      //Izquierda
      if (this.direccion === 2) {
        if (!this.colisiona(this.x - 1, this.y)) {
          this.x--;
        } else {
          this.elegirDestino();
        }
      }
      //Derecha
      if (this.direccion === 3) {
        if (!this.colisiona(this.x + 1, this.y)) {
          this.x++;
        } else {
          this.elegirDestino();
        }
      }
    }
  }
}

export default Enemigo;
