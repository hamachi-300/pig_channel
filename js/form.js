let link_bar = document.querySelector('.linkBar');
let lastScollY = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScollY) {
        link_bar.classList.add('hide');
    } else {
        link_bar.classList.remove('hide');
    }
    lastScollY = window.scrollY;
});