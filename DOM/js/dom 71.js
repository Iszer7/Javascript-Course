/*
.insertAdjacent...
    .insertAdjacentElement(position, el) //Agrega un elemento (como appenChilde)
    .insertAdjacentHTML(position, html) //Es como un innerHTML
    .insertAdjacentText(position, text) //Es como un innerText

Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

//Le agrego la clase card
$newCard.classList.add("card");

//Nueva forma de agregar un elemento HTML
$newCard.insertAdjacentHTML("beforeend", $contenCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

/*************************/

//Se inserta entre el enlace DOM y las CARDS
//$cards.insertAdjacentElement("beforebegin", $newCard)

//Se inserta dentro de la section como primer hijo
$cards.insertAdjacentElement("afterbegin", $newCard)

//Se inserta dentro de la section como ultimo hijo
//$cards.insertAdjacentElement("beforeend", $newCard)

//Se inserta despues de CARDS como ultimo hermano
//$cards.insertAdjacentElement("beforebegin", $newCard)

/*************************/
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);