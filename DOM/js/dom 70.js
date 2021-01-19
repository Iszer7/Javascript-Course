const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true); //Clona todo el contenido

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

//Para eliminar un nodo - En este caso elimina el ultimo hijo
//$cards.removeChild($cards.lastElementChild)

//Pone los elementos clonados
//document.body.appendChild($cloneCards); 