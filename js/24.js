//Eventos del DOM - clicks

const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    console.log('diste click en heading')
})

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlaces => {
    enlaces.addEventListener('click', () => {
        console.log('Click en un enlace')
    })
})