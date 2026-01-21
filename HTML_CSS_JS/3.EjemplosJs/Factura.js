/* crear objetos con clases*/
class Factura {
  constructor(cliente, fecha, valor) {
    this.cliente = cliente;
    this.fecha = fecha;
    this.valor = valor;
  }

  imprimir() {
    console.log(this.cliente, this.fecha, this.valor);
  }
}

export default Factura;
