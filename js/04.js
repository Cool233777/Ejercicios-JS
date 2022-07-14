//Objetos

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true  
}

console.log(producto)
console.table(producto)

//acceder a las propiedades de un objeto
console.log(producto.nombre)

//Destructuring, sacar valores y crear variables
const { nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement, hace lo opuesto, coloca variables al objeto

const autenticado = true
const usuario = "Cristian"

const nuevoObjeto = {
    autenticado: autenticado,//puedo deshacerme de la parte derecha si y solo si, se llaman igual
    usuario: usuario
}

console.table(nuevoObjeto)