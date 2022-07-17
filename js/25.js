//Eventos del dom - Inputs

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function(e){
    console.log('escribiendo en input')
    console.log(e.target.value)
})
// inputNombre.addEventListener('keyup', function(){
//     console.log('escribiendo en input')
// })
//inputNombre.type = 'password'
//inputNombre.placeholder = ' primer nombre aa'
    
const inputPassword = document.querySelector('.nombre')
inputPassword.addEventListener('input', functionPass)

function functionPass(e) {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000);
}