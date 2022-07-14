//Tipos de datos

//undefined
// let cliente
// console.log(cliente)
// console.log(typeof cliente)

//boolean
// const descuento = true
// console.log(descuento)
// console.log(typeof descuento)

//number
// const n1 = 20.20
// const n2 = 30
// const n3 = -100

// console.log(typeof n1)
// console.log(typeof n2)
// console.log(typeof n3)

//string
// const alumno = "Cris"
// let producto = 'monitor 20 pulgas'
// console.log(typeof alumno)

//BigInt
// const numeroGrande = BigInt(1239817329801723489123470911231)
// console.log(typeof numeroGrande)
// const numero1 = 10
// const numero2 = 20
// console.log(numero1 + Number(numeroGrande))//usamos la cohesion, es como el convert.to de C#

//symbol, son unicos
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
// console.log(primerSymbol === segundoSymbol)// retorna false porque no hay simbolos iguales
// console.log(primerSymbol.valueOf())

//Null, son objetos
const descuento = null
console.log(descuento)