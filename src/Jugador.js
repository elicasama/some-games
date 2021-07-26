import configuracion from "./configuracion";
import nivel from "./nivel";

class Jugador {
  constructor(contexto) {
    this.x = 1;
    this.y = 1;
    this.contexto = contexto;
    // this.color = "#820be3";
    this.llave = false;
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

  // this.margenes = function (x, y) {
  //   var colision = false;

  //   // if(escenario[y][x] == 0 || escenario[y][x] == 1)
  //   if (escenario.cuadrilla[y][x] == 0) colision = true;

  //   return colision;
  // };

  // this.arriba = function () {
  //   if (this.margenes(this.x, this.y - 1) == false) {
  //     this.y--;
  //     this.logicaObjetos();
  //   }
  // };

  // this.abajo = function () {
  //   if (this.margenes(this.x, this.y + 1) == false) {
  //     this.y++;
  //     this.logicaObjetos();
  //   }
  // };

  // this.izquierda = function () {
  //   if (this.margenes(this.x - 1, this.y) == false) {
  //     this.x--;
  //     this.logicaObjetos();
  //   }
  // };

  // this.derecha = function () {
  //   if (this.margenes(this.x + 1, this.y) == false) {
  //     this.x++;
  //     this.logicaObjetos();
  //   }
  // };

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

  // this.logicaObjetos = function () {
  //   // var objeto = escenario[this.y][this.x];
  //   var objeto = escenario.cuadrilla[this.y][this.x];

  //   if (objeto == 3) {
  //     this.llave = true;
  //     escenario[this.y][this.x] = 2;
  //     // escenario.cuadrilla[this.y][this.x] = 2;
  //   }

  //   if (objeto == 1) {
  //     if (this.llave == true) {
  //       this.victoria();
  //     } else {
  //       console.log("no podés pasar");
  //     }
  //   }
  // };
}

export default Jugador;
