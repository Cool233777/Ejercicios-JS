//Ternarios

const autenticado = false

autenticado ? console.log('usuario atenticado') : console.log('usuario no atenticado')

//doble ternario
const saldo = 600
const pagar = 700
const tarjeta = false

saldo > pagar ? 
    console.log('puedes pagar') : 
        tarjeta ? 
            console.log('puedes pagar con tarjeta') :
                console.log('no puedes pagar')