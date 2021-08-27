import configuracion from "./configuracion";

class Antorcha {
  constructor(posicionX, posicionY, contexto) {
    this.x = posicionX;
    this.y = posicionY;
    this.contexto = contexto;
    this.retraso = 10;
    this.contador = 0;
    this.fotograma = 0; // 0-3
  }

  cambiarFotograma() {
    if (this.fotograma < 3) {
      this.fotograma++;
    } else {
      this.fotograma = 0;
    }
  }

  dibujar() {
    if (this.contador < this.retraso) {
      this.contador++;
    } else {
      this.contador = 0;
      this.cambiarFotograma();
    }

    this.contexto.drawImage(
      configuracion.nivel.tileMap,
      this.fotograma * 32,
      64,
      32,
      32,
      configuracion.anchoDeLaFicha * this.x,
      configuracion.altoDeLaFicha * this.y,
      configuracion.anchoDeLaFicha,
      configuracion.altoDeLaFicha
    );
  }
}

export default Antorcha;
