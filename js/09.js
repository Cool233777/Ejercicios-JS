//Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'C#', 'JavaScript', 'Node.js']

//Agregar elementos al arreglo
// tecnologias.push('GraphQL')//agrega al final del arreglo
// tecnologias.unshift('GraphQL')//agrega al inicio del arreglo

//const nuevoArreglo = [...tecnologias, 'GraphQL']// haz una copia del arreglo y ponle el valor de Graph al final
//const nuevoArreglo = ['GraphQL', ...tecnologias, ]// haz una copia del arreglo y ponle el valor de Graph al inicio

//ELIMINAR ELEMENTOS DEL ARRAY
//tecnologias.pop() // elimina el ultimo elemento
//tecnologias.shift() //elimina el primer elemnto
//tecnologias.splice(2,1) // elimina desde un indice seguido de cuantos elementos despues se quiere eliminar

// const nuevoArreglo = tecnologias.filter(function(tech) {
//     return tech !== 'HTML'
// })

//Reemplaazar en el array
//tecnologias[0] = 'GraphQL'
 const nuevoArreglo = tecnologias.map(function(tech) {
     if (tech === 'HTML'){
        return 'GraphQL'
     }
     else{
        return tech
     }
 })
 console.table(tecnologias)
 //console.table(nuevoArreglo)
 //me quede en el cap 18 sec 02 https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/29679604#overview