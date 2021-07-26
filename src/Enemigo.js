import configuracion from "./configuracion";
import nivel from "./nivel";

//Enemigo
class Enemigo {
  constructor(posicionX, posicionY, contexto) {
    this.x = posicionX;
    this.y = posicionY;
    this.contexto = contexto;
    this.retraso = 10;
    this.contador = 0;
    this.direccion = Math.floor(Math.random() * 4);
    this.retraso = 50; 
    this.fotograma = 0; 
  }

  dibujar() {
    this.contexto.drawImage(
      nivel.tileMap,
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

  // compruebaColision(x, y) {
  //   var colisiona = false;
  //   if (escenario.cuadrilla[y][x] == 0) colisiona = true;

  //   return colisiona;
  // }

  // moverse() {
  // //  protagonista.colisionEnemigo(this.x, this.y); // Le envía al protagonista su ubicación para ver si lo mató

  //   if (this.contador < this.retraso) {
  //     this.contador++;
  //   } else {
  //     this.contador = 0;

  //     // verificamos que no se ponga en las paredes o zonas en las cuales no se podría pasar

  //     // ARRIBA (0 es una de las opciones de resultado del Math.floor(Math.random() * 4) y lo tomamos como arriba)
  //     if (this.direccion == 0) {
  //       if (this.compruebaColision(this.x, this.y - 1) == false) {
  //         this.y--;
  //       } else {
  //         this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
  //       }
  //     }

  //     //ABAJO
  //     if (this.direccion == 1) {
  //       if (this.compruebaColision(this.x, this.y + 1) == false) {
  //         this.y++;
  //       } else {
  //         this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
  //       }
  //     }

  //     //Izquierda
  //     if (this.direccion == 2) {
  //       if (this.compruebaColision(this.x - 1, this.y) == false) {
  //         this.x--;
  //       } else {
  //         this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
  //       }
  //     }
  //     //Derecha
  //     if (this.direccion == 3) {
  //       if (this.compruebaColision(this.x + 1, this.y) == false) {
  //         this.x++;
  //       } else {
  //         this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
  //       }
  //     }
  //   }
  // }
}

export default Enemigo;

