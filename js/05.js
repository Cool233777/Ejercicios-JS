//Objetos - Manipulacion

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true  
}

//Object.freeze(producto)//no puedo agregar, editar o eliminar
//Object.seal(producto)//solo permite editar 

//Reescribir un valor
producto.nombre = "monitor curvo"

//Si no existe, lo inserta
producto.imagen = "imagen.jpg"

//eliminar propiedades
delete producto.disponible

console.log(producto)