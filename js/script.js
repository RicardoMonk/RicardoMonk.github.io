/*Efecto para menu*/
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})

/*Efecto de textos animados*/
let animux = document.querySelectorAll(".animux");

function mostrarscroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i< animux.length; i++ ) {
        let alturaanimux = animux[i].offsetTop;
        if (alturaanimux - 400 < scrollTop) {
            animux[i].style.opacity =1;
            animux[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarscroll);