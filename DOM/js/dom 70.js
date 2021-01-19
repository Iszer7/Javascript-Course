const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

//Le agrego la clase card
$newCard.classList.add("card");

//Remplazando un nodo
//$cards.replaceChild($newCard, $cards.children[2])

//Insertarla antes de un nodo que tomemos como referencia
//$cards.insertBefore($newCard, $cards.firstElementChild);

//Para eliminar un nodo
$cards.removeChild($cards.lastElementChild)