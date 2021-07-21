//const Escenario = require("./Escenario");
//import {"./Escenario"}
//import defaultExport from "Escenario";
//import "Escenario";


var canvas;
var ctx;
var FPS = 50;

var anchoF = 50;
var altoF = 50;

var muro = "#5c3614"; // 0
var puerta = "#e3cf17"; // 1
var camino = "#309133"; // 2
var llave = "#e30b2c"; // 4
var electricidad = "#4053e3"; //6

var protagonista; // 5

var enemigo = [];

var imagenAntorcha1;


var tileMap;

var escenario = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0],
  [0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
  [0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0],
  [0, 2, 2, 3, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function dibujarEscenario() {
  for (y = 0; y < 10; y++) {
    for (x = 0; x < 15; x++) {
      var tile = escenario[y][x];

      ctx.drawImage(
        tileMap,
        tile * 32,
        0,
        32,
        32,
        anchoF * x,
        altoF * y,
        anchoF,
        altoF
      );
    }
  }
}

var antorcha = function(x,y) {
  this.x = x;
  this.y = y;


  
  this.retraso = 10;
  this.contador = 0;
  this.fotograma = 0; // 0-3 

  this.cambiaFotograma = function(){
    if(this.fotograma < 3) {
      this.fotograma++
    } else {
      this.fotograma = 0;
    }
  } 

  this.dibuja = function() {   
    if (this.contador < this.retraso) {
      this.contador ++;
    } 
    else{
      this.contador = 0;
      this.cambiaFotograma();
    }

    ctx.drawImage(
      tileMap,
      this.fotograma * 32,
      64,
      32,
      32,
      anchoF * x,
      altoF * y,
      anchoF,
      altoF
    );
  }
}





var jugador = function () {
  this.x = 1;
  this.y = 1;
  this.color = "#820be3";
  this.llave = false;

  this.dibuja = function () {
    // ctx.fillStyle = this.color;
    // ctx.fillRect();
    ctx.drawImage(
      tileMap,
      32,
      32,
      32,
      32,
      this.x * anchoF,
      this.y * altoF,
      anchoF,
      altoF
    );

    // ctx.drawImage(tileMap, tile * 32, 0, 32, 32, anchoF * x, altoF * y, anchoF, altoF);
  };

  this.colisionEnemigo = function (x, y) {
    if (this.x == x && this.y == y)
      // console.log("muerto");
      this.muerte();
  };

  this.margenes = function (x, y) {
    var colision = false;

    // if(escenario[y][x] == 0 || escenario[y][x] == 1)
    if (escenario[y][x] == 0) colision = true;

    return colision;
  };

  this.arriba = function () {
    if (this.margenes(this.x, this.y - 1) == false) {
      this.y--;
      this.logicaObjetos();
    }
  };

  this.abajo = function () {
    if (this.margenes(this.x, this.y + 1) == false) {
      this.y++;
      this.logicaObjetos();
    }
  };

  this.izquierda = function () {
    if (this.margenes(this.x - 1, this.y) == false) {
      this.x--;
      this.logicaObjetos();
    }
  };

  this.derecha = function () {
    if (this.margenes(this.x + 1, this.y) == false) {
      this.x++;
      this.logicaObjetos();
    }
  };

  this.victoria = function () {
    this.x = 1;
    this.y = 1;
    this.llave = false;
    escenario[8][3] = 3;
    console.log("victoria");
  };

  this.muerte = function () {
    this.x = 1;
    this.y = 1;
    this.llave = false;
    escenario[8][3] = 3; // ponemos la llave en su sitio
    console.log("Perdiste");
  };

  this.logicaObjetos = function () {
    var objeto = escenario[this.y][this.x];

    if (objeto == 3) {
      this.llave = true;
      escenario[this.y][this.x] = 2;
    }

    if (objeto == 1) {
      if (this.llave == true) {
        this.victoria();
      } else {
        console.log("no podés pasar");
      }
    }
  };
};

//Enemigo
var malo = function (x, y) {
  this.x = x;
  this.y = y;

  this.direccion = Math.floor(Math.random() * 4);

  this.retraso = 50; //fotogramas
  this.fotograma = 0; // NO TIENE SENTIDO, si después usa contador

  this.dibuja = function () {
    // ctx.fillStyle = this.color;
    // ctx.fillRect();
    ctx.drawImage(
      tileMap,
      0,
      32,
      32,
      32,
      this.x * anchoF,
      this.y * altoF,
      anchoF,
      altoF
    );

    // ctx.drawImage(tileMap, tile * 32, 0, 32, 32, anchoF * x, altoF * y, anchoF, altoF);
  };

  this.compruebaColision = function (x, y) {
    var colisiona = false;

    if (escenario[y][x] == 0) colisiona = true;

    return colisiona;
  };

  this.mueve = function () {
    protagonista.colisionEnemigo(this.x, this.y); // Le envía al protagonista su ubicación para ver si lo mató

    if (this.contador < this.retraso) {
      // El contador nunca se inicializó dentro de la función ni de manera general
      this.contador++;
    } else {
      this.contador = 0;

      // verificamos que no se ponga en las paredes o zonas en las cuales no se podría pasar

      // ARRIBA (0 es una de las opciones de resultado del Math.floor(Math.random() * 4) y lo tomamos como arriba)
      if (this.direccion == 0) {
        if (this.compruebaColision(this.x, this.y - 1) == false) {
          this.y--;
        } else {
          this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
        }
      }

      //ABAJO
      if (this.direccion == 1) {
        if (this.compruebaColision(this.x, this.y + 1) == false) {
          this.y++;
        } else {
          this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
        }
      }

      //Izquierda
      if (this.direccion == 2) {
        if (this.compruebaColision(this.x - 1, this.y) == false) {
          this.x--;
        } else {
          this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
        }
      }
      //Derecha
      if (this.direccion == 3) {
        if (this.compruebaColision(this.x + 1, this.y) == false) {
          this.x++;
        } else {
          this.direccion = Math.floor(Math.random() * 4); // que genere una dirección aleatorea
        }
      }
    }
  };
};
// FIN enemigo

function inicializar() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  tileMap = new Image();
  tileMap.src = "../wayToExit/assets/img/tilemap.png";

  // escenario = new Escenario(cuadrilla, tileMap);

  protagonista = new jugador();

  imagenAntorcha1 = new antorcha(0,0)

  enemigo.push(new malo(11, 2));
  enemigo.push(new malo(6, 2));
  enemigo.push(new malo(2, 8));

  document.addEventListener("keydown", function (tecla) {
    if (tecla.keyCode == 38) {
      protagonista.arriba();
    }

    if (tecla.keyCode == 40) {
      protagonista.abajo();
    }

    if (tecla.keyCode == 37) {
      protagonista.izquierda();
    }

    if (tecla.keyCode == 39) {
      protagonista.derecha();
    }
  });

  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

function borrarCanvas() {
  canvas.width = 750;
  canvas.height = 500;
}

function principal() {
  borrarCanvas();
  // escenario.dibujarEscenario();
  dibujarEscenario();
  imagenAntorcha1.dibuja();
  
  protagonista.dibuja();

  for (c = 0; c < enemigo.length; c++) {
    enemigo[c].mueve();
    enemigo[c].dibuja();
  }
}
