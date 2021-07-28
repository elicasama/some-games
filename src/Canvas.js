import configuracion from "./configuracion";

class Canvas {
  borrar() {
    configuracion.areaDeJuego.width = 750;
    configuracion.areaDeJuego.height = 500;
  }
}
export default new Canvas();
