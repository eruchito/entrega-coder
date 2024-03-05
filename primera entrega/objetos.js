function prendas(nombre,codigo,talle,precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.talle	= talle;
    this.precio = precio;
}
const prenda1 = new prendas("Horrorgame costume brown", "#01" , "S", "5000");
const prenda2 = new prendas("Horrorgame costume basic", "#02", "XS", "4300");
const prenda3 = new prendas("Horrogame costume blue", "#03", "L", "5450");
const prenda4 = new prendas("Horrogame costume all white", "#04", "XXS", "5900");
const prenda5 = new prendas("Horrogame costume white dress and jacket", "#05", "XL", "6200");
const prenda6 = new prendas("Horrogame costume vampire style", "#06", "L", "6660");
const prenda7 = new prendas("Horrogame costume drees and necklace", "#07", "XXS", "8300");
const prenda8 = new prendas("Horrogame costume cute style", "#08", "S", "5900");
const prenda9 = new prendas("Horrogame costume goth", "#09", "XL", "9500");
const prenda10 = new prendas("Horrogame costume red and black", "#10", "XXL", "7500")

console.log(prenda1["nombre"])
console.log(prenda1["codigo"])
console.log(prenda1["talle"])
console.log(prenda1["precio"])
console.log(prenda2["nombre"])
console.log(prenda2["codigo"])
console.log(prenda2["talle"])
console.log(prenda2["precio"])
console.log(prenda3["nombre"])
console.log(prenda3["codigo"])
console.log(prenda3["talle"])
console.log(prenda3["precio"])
console.log(prenda4["nombre"])
console.log(prenda4["codigo"])
console.log(prenda4["talle"])
console.log(prenda4["precio"])
console.log(prenda5["nombre"])
console.log(prenda5["codigo"])
console.log(prenda5["talle"])
console.log(prenda5["precio"])
console.log(prenda6["nombre"])
console.log(prenda6["codigo"])
console.log(prenda6["talle"])
console.log(prenda6["precio"])
console.log(prenda7["nombre"])
console.log(prenda7["codigo"])
console.log(prenda7["talle"])
console.log(prenda7["precio"])
console.log(prenda8["nombre"])
console.log(prenda8["codigo"])
console.log(prenda8["talle"])
console.log(prenda8["precio"])
console.log(prenda9["nombre"])
console.log(prenda9["codigo"])
console.log(prenda9["talle"])
console.log(prenda9["precio"])
console.log(prenda10["nombre"])
console.log(prenda10["codigo"])
console.log(prenda10["talle"])
console.log(prenda10["precio"])

function Cliente(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
  
  function prendas(id, nombre, precio,talle, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
    this.imagen = imagen;
  }
  
  function Pedido() {
    this.cliente = undefined;
    this.items = [];
    this.total = 0;
    var fecha = new Date();
    fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    this.fecha = fecha;
  }