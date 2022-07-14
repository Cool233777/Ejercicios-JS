//Objetos - unir 2 objetos o mas

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true  
}

const cliente = {
    nombre: "Cristian",
    premium: true
}

//const nuevoObjeto = Object.assign(producto, cliente) // NO SE DEBE HACER
const nuevoObjeto2 = {
    producto: {...producto},//los 3 puntos quiere decir que tomara una copia (una copia de producto y cliente)
    cliente: {...cliente}
}

console.log(nuevoObjeto2)