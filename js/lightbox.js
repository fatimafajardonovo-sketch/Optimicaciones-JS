'use strict'


/* ¿Que quiero? 
 Que cuando haga click a una imagen se abra 

 Quiero que se añada la clase isActive para que aparezca la imagen en grande
 Que cuando haga click en la flecha, se cierre y volvamos al grid inicial

const imgList = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const close = document.querySelector('.close');

imgList.forEach((eachImg) => {
    eachImg.addEventListener('click', () => {
        grande.src = eachImg.src;
        lightbox.classList.add('isActive');
    });
});

close.addEventListener('click', () => {
    lightbox.classList.remove('isActive');
});
*/

// Aqui usaria Event Delegation Funciones nombradas Desestructuración de parámetros
const grid = document.querySelector('.grid');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const close = document.querySelector('.close');

const openLightbox = (e) => {
    const img = e.target.closest('img');

    grande.src = img.src;
    lightbox.classList.add('isActive');
};

const closeLightbox = () => {
    lightbox.classList.remove('isActive');
};

grid.addEventListener('click', openLightbox);
close.addEventListener('click', closeLightbox);