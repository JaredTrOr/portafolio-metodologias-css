document.querySelector('.hamburger-menu').addEventListener('click', () => {

    document.querySelector('.line-1').classList.toggle('toggle');
    document.querySelector('.line-2').classList.toggle('toggle');
    document.querySelector('.line-3').classList.toggle('toggle');

    document.querySelector('.option-menu').classList.toggle('toggle');
})