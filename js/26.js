//Eventos del DOM - submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()//previene la accion por default que es la de enviar formulario
    //ya podemos agregar el comportamiento deseado
    //ideaal para validar el formulario

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    console.log(nombre)
    console.log(password)

    if (nombre === '' || password === '') {
        console.log('NO SE ADMITEN CAMPOS VACIOS')
    } else {
        console.log('Datos guardados')

    }

    console.log('enviaste form')
})

//me quede en el 38 sec 2