class Escenario {
  constructor(cuadrilla, tileMap, contexto, altoDeLaFicha, anchoDeLaFicha) {
    this.cuadrilla = cuadrilla;
    this.tileMap = tileMap;
    this.contexto = contexto;
    this.altoDeLaFicha = altoDeLaFicha;
    this.anchoDeLaFicha = anchoDeLaFicha;
  }

  dibujar() {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 15; x++) {
        let tile = this.cuadrilla[y][x];

        this.contexto.drawImage(
          this.tileMap,
          tile * 32,
          0,
          32,
          32,
          this.anchoDeLaFicha * x,
          this.altoDeLaFicha * y,
          this.anchoDeLaFicha,
          this.altoDeLaFicha
        );
      }
    }
  }
}

export default Escenario;
