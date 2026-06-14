 /* queremos que al hacer clic en un botón aparezca una pestaña
 Al hacer clic quiero que
 Se añada la clase de activo en el li y en su bloque correspondiente
 Vamos a tener que quitarla de todos los li y los bloques y dejarla 
 solo en el que queramos
const li = document.querySelectorAll ('.li')
const bloque = document.querySelectorAll ('.bloque')
li.forEach((cadali, i)=> {  recorremos todos los li
    li[i].addEventListener ('click', ()=>{ asignamos el clic a cada li
        li.forEach (( cadaLi, i ) => {  recorremos todos los li
            li[i].classList.remove('activo') quitamos la clase activo de cada li
            bloque[i].classList.remove('activo') quitamos la clase activo de cada bloque


        })
        li[i].classList.add('activo')  en el li en el que hacemos clic, le añadimos la clase activo
        bloque[i].classList.add('activo') en el bloque en el que hacemos clic ( al li), le añadimos la clase activo


    })
})
*/
// Condicionales arrow desestructuracion event delegation Handler nombrado 
const nav = document.querySelector('.nav');
const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

const handleClick = ({ target }) => {
    const item = target.closest('.li');

    if (!item) return;

    const index = [...li].indexOf(item);

    li.forEach((el, i) => {
        el.classList.remove('activo');
        bloque[i].classList.remove('activo');
    });

    li[index].classList.add('activo');
    bloque[index].classList.add('activo');
};

nav.addEventListener('click', handleClick);


