//Objetos - Deestructurin con 2 o mas objetos

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true  
}

const cliente = {
    nombre: "Cristian",
    premium: true
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premium} = cliente//util para integrar APIs cuando dos variables tienen el mismo nombre

console.log(nombre)
console.log(nombreCliente)