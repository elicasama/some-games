class Canvas {
  constructor(areaDeJuego) {
    this.areaDeJuego = areaDeJuego;
  }

  borrar() {
    this.areaDeJuego.width = 750;
    this.areaDeJuego.height = 500;
  }
}
export default Canvas;
