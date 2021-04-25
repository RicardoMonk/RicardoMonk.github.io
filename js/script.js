/*Efecto para menu*/
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})

/*Efecto contador de click*/
function incrementButton(){
    var element = document.getElementById('incrementText');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value;

}

/*Aparicion del Efecto contador de click

document.getElementById("btn1").addEventListener("click",function(){
    var box1=document.getElementById("incrementText");
    if(box1.style.display=="none"){
        box1.style.display="block";
    }
})
No se logró que al ingresar a la web el objeto estilado estubiera con display none posterior a este codigo display block(luego lo revisamos)*/

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