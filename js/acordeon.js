/* Seleccionamos los elementos 
¿Que queremos hacer?; Que cuándo hagamos clic en h2 se despliegue la respuesta de la pregunta
Lo hacemos añadiendo y quitando una clase, en función de lo que haga el usuario:
Si hace clic, se añade la clase activo en todos los elementos <p> y se despliega
Si hace clic en otro elemento, se borra clase activo en el anterior y se añade en el nuevo

const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')
h2.forEach( ( cadaH2, i) => {
    h2[i].addEventListener ('click', ()=>{
        bloque.forEach ((cadaBloque , i) =>{
            bloque[i].classList.remove('activo')
        })
        bloque [i].classList.add('activo')
    })
}) */

// Usaria Event Delegation y desestructuración de parámetros

const acordeon = document.querySelector('.acordeon');
const bloques = document.querySelectorAll('.bloque');

acordeon.addEventListener('click', ({target}) => {
    if (!target.classList.contains('h2')) return;
    bloques.forEach((bloque) => {
        bloque.classList.remove('activo');
    });

    target.parentElement.classList.add('activo');
});
