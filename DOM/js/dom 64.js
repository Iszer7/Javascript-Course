const $linkDOM = document.querySelector(".link-dom");

//Acceder a estilos
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));

//Acceder a 1 propiedad
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//Otra forma de acceder, con window
console.log(window.getComputedStyle($linkDOM));