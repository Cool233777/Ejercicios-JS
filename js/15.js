//Arrow functions y array methods

 const tecnologias = ['HTML', 'CSS', 'C#', 'JavaScript', 'Node.js']
// const nuevoArreglo = tecnologias.map( tech => {
//     if (tech === 'HTML'){
//        return 'GraphQL'
//     }
//     else{
//        return tech
//     }
// })

const nuevoArreglo2 = tecnologias.filter(tech => tech !== 'HTML')

//console.log(nuevoArreglo)
console.log(nuevoArreglo2)
