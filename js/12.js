//Funciones - function declaration

// function sumar(numero1, numero2) {
//     console.log( numero1 + numero2 )
// }

// sumar(10,20)

function sumar(numero1, numero2) {
    return [numero1 + numero2, 'Hola mundo' ]
}

function sumarV2(numero1, numero2) {
    return {
        resultado: numero1 + numero2,
        msg: 'Hola mundo' 
    }
}

const [resultado, holamUNDO] = sumar(20, 30)

console.log(resultado, holamUNDO)