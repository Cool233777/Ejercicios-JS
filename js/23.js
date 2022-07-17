//Manipular elementos HTML con JS

const heading = document.querySelector('.heading')

heading.textContent = 'hola mundo'

console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'un  valor por default'
//console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')
enlaces.textContent = 'nuevo enlace'