//Creamos una tarjeta de manera dinamica

//Tomamos todo lo necesario
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards =  document.querySelector(".cards"),
    $figure2 =document.createElement("figure");

//Agregamos a un hijo
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals 2");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Otra forma de crear la figura
$figure2.innerHTML=`
<img src= "https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);


//Creando nodos dinamicamente
const estaciones =["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

//Se podria usar innerHTML tambien
estaciones.forEach(elem => {
    const $li =document.createElement("li");
    $li.textContent = elem;
    $ul.appendChild($li);
});


//Otra forma de nodos dinamicos - Esto hace muchas incersiones al dom y alenta la app
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = ""; //Es necesario inicializarla, aunque el navegador lo arregle esta mal..
continentes.forEach(el => $ul2.innerHTML +=`<li>${el}</li>`);


//Otra forma, estilo fragmento. Carga todo de una y no hace incersiones por separado
const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);