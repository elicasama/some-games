class Escenario {
  constructor(cuadrilla, tileMap, contexto, altoF, anchoF) {
    this.cuadrilla = cuadrilla;
    this.tileMap = tileMap;
    this.contexto = contexto;
    this.altoF = altoF;
    this.anchoF = anchoF;
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
          this.anchoF * x,
          this.altoF * y,
          this.anchoF,
          this.altoF
        );
      }
    }
  }
}

export default Escenario;
