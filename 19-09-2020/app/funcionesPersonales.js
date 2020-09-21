let menu= document.getElementById('navbar');
let botonInicio = document.getElementById('botonInicio');
let aplicarEfectos = true;
window.onscroll = function(){
  let desplazamientoActual = window.pageYOffset;
  let tamanoPantalla = screen.width;
if((tamanoPantalla >=576 &&  tamanoPantalla<= 930) ||
  (tamanoPantalla >=320 &&  tamanoPantalla<= 575)){
  aplicarEfectos=false;
}else{
  aplicarEfectos=true;
}
if(aplicarEfectos){
  if(desplazamientoActual >= 550){

    menu.classList.add('transparente');
    botonInicio.classList.add('mostrar');

  }else{
    menu.classList.remove('transparente');
    botonInicio.classList.remove('mostrar');
  }
}else{
  menu.classList.remove('transparente');
  botonInicio.classList.remove('mostrar');
}


}

// ScrollReveal , plugins que hace que las cosas carguen cuando se va desplazandose hacia abajo
// ScrollReveal().reveal('.contentAbout',{delay:300});
// ScrollReveal().reveal('.contentInformation',{delay:400});
// ScrollReveal().reveal('.contentImage',{delay:400});
// ScrollReveal().reveal('.contentTarjets',{delay:400});
