//Comparacion y operador estricto

const numero1 = 20
const numero2 = "20"
/*
    == compara pero no es estricto, valida solo por valor
    === compara pero si es estricto, valida por valor y tipo
*/
if (numero1 === Number(numero2)) {
    console.log('son iguales')
} else {
    console.log('no son iguales') 
}

