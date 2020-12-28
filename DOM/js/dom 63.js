//OBTENER VALORES
//No son lo mismo
console.log(document.documentElement.lang);

//getAttibute es mas verboso, pero es la forma correcta
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));



//SETEAR VALORES
document.documentElement.lang = "es"
console.log(document.documentElement.getAttribute("lang") + " - se cambio el idioma a español");

//Otra forma
document.documentElement.setAttribute("lang", "fr");
console.log(document.documentElement.getAttribute("lang") + " - se cambio el idioma a frances");

//Guardar en variables elementos del DOM, se puede usar const o let
//Una buena practica es usar $ para las variables, asi se sabe que manipulas el dom
const $linkDOM = document.querySelector(".link-dom");

//Al apretar DOM, abre una nueva pestaña, "google" y rel noopener setea que no haya una dependencia entre la nueva ventana y la de origen
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.com");

//Fijarse si un elemento del dom tiene un atributo
console.log($linkDOM.hasAttribute("rel"));



//Remover un atributo
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));



//DATA- ATRRIBUTES DE HTML5
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); //Es un mapa con todos los data-
console.log($linkDOM.dataset.description); //Obtine una propiedad de data-
$linkDOM.setAttribute("data-description", "Modelo de Objetos del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Ve a buscar algo a google"
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));