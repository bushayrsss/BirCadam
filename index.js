document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', (e) => {
        console.log('clicked');
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
    const close = document.querySelector('.close');
    close.addEventListener('click', (e) => {
        console.log('close');
        menu.classList.toggle('active');
    })
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            menu.classList.toggle('active');
        })
    })
})