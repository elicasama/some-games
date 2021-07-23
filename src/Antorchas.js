import configuracion from "./configuracion";
import nivel from "./nivel";

class Antorcha {
  constructor(posicionX, posicionY, contexto) {
  this.x = posicionX
  this.y = posicionY
  this.contexto = contexto;
  this.retraso = 10;
  this.contador = 0;
  this.fotograma = 0; // 0-3
  }

  cambiaFotograma() {
    if (this.fotograma < 3) {
      this.fotograma++;
    } else {
      this.fotograma = 0;
    }
  };

  dibujar() {
    if (this.contador < this.retraso) {
      this.contador++;
    } else {
      this.contador = 0;
      this.cambiaFotograma();
    }

    this.contexto.drawImage(
      nivel.tileMap,
      this.fotograma * 32,
      64,
      32,
      32,
      configuracion.anchoF * this.x,
      configuracion.altoF * this.y,
      configuracion.anchoF,
      configuracion.altoF
    );
  };
};

export default Antorcha;