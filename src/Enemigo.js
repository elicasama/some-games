import configuracion from "./configuracion";

class Enemigo {
  constructor(posicionX, posicionY, contexto) {
    this.x = posicionX;
    this.y = posicionY;
    this.contexto = contexto;
    this.retraso = 30;
    this.contador = 0;
    // this.direcciones = {
    //   0: () => this.arriba(),
    //   1: () => this.abajo(),
    //   2: () => this.izquierda(),
    //   3: () => this.derecha(),
    // };
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
      configuracion.altoF,
      (this.direccion = this.elegirDestino())
    );
  }

  colisiona(x, y) {
    return configuracion.nivel.cuadrilla[y][x] === 0;
    
    let colisiona = false;
    if (configuracion.nivel.cuadrilla[y][x] === 0) colisiona = true;

    return colisiona;
  }

  elegirDestino() {
    return Math.floor(Math.random() * 4);
  }

  moverse(personajePrincipal) {
    this.elegirDestino();

    personajePrincipal.colisionEnemigo(this.x, this.y);

    if (this.contador < this.retraso) {
      this.contador++;
    } else {
      this.contador = 0;

      // verificamos que no se ponga en las paredes o zonas en las cuales no se podría pasar

      if (this.direccion === 0) {
        if (!this.colisiona(this.x, this.y - 1)) {
          this.y--;
        } else {
          this.elegirDestino();
        }
      }

      //abajo

      if (this.direccion === 1) {
        if (!this.colisiona(this.x, this.y + 1)) {
          this.y++;
        } else {
          this.elegirDestino();
        }
      }

      if (this.direccion === 2) {
        if (!this.colisiona(this.x - 1, this.y)) {
          this.x--;
        } else {
          this.elegirDestino();
        }
      }

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
