const $linkDOM = document.querySelector(".link-dom");

//Acceder a estilos
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));

//Acceder a 1 propiedad
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//Otra forma de acceder (COMPUTED PROPERTIES), con window - ordena las propiedades alfabeticamente y con un indice
console.log(window.getComputedStyle($linkDOM));

//Acceder a una propiedad
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Establecer valores - hay 2 formas
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
// :root tiene mas peso que html
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

//Aplicar las variables
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//Cambiar una propiedad de una variable
$html.style.setProperty("--dark-color", "#000");

//Obtener el nuevo valor cambiado
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//El body tiene que tomar el nuevo valor
$body.style.setProperty("background-color", varDarkColor);