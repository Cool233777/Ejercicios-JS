//Otros array methods utiles

const tecnologias = ['HTML', 'CSS', 'C#', 'JavaScript', 'Node.js']
const numeros = [10, 20, 30]

//filter te trae los que sean diferentes o iguales segun sea el caso
const nuevoArreglo2 = tecnologias.filter(tech => tech !== 'HTML')

//comprueba si un elemento existe en el array
//const resultado = tecnologias.includes('GraphQL')

//Some devuleve si almenos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15)

//Find - Devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find(numero => numero > 15)

//Every - Retorna true or false si todos cumplen o no la condicion
//const resultado = numeros.every(numero => numero > 5)

//reduce
//const resultado = numeros.reduce( (total, actual) => actual + total, 0)

//filter - crea un nuevo array en base a una condicion
//const resultado = numeros.filter(numero => numero !== 10)

//foreach - solo lista accede a cada elemento
tecnologias.forEach(tech => { console.log(tech) })

//map - crea un nuevo array
const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)
