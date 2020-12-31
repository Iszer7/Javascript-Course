//Hay 12 nodos diferentes
//Nodos de html, textos, comentarios, fragmentos, etc

//Este dom traversing es enfocado a las etiquetas html

$cards = document.querySelector(".cards");
console.log($cards);

//Referencias a sus hijos
console.log($cards.children);
console.log($cards.childNodes);

//A un hijo en particular
console.log($cards.children[2]);

//Devuelve el padre
console.log($cards.parentElement); //Vamos a trabajar con parentElement
console.log($cards.parentNode);

//Obtener el primer y ultimo element hijo
console.log($cards.firstChild); //Pone que es texto porque hay espacios en el html "los espacios son nodos tambien"
console.log($cards.firstElementChild); //Aca si muestra el primer element
console.log($cards.lastElementChild); 


//El hermano que esta antes y el hermano que esta despues
console.log($cards.previousSibling); //Pone que es texto porque hay espacios en el html "los espacios son nodos tambien"
console.log($cards.previousElementSibling); //Aca si muestra el hermano anterior element
console.log($cards.nextElementSibling);

//Es un metodo - busca el ancestros del tipo de selector que nosotros le demos
console.log($cards.closest("div")); //hacia arriba no hay ninguno que sea div
console.log($cards.closest("body")); //Devuelve el body
console.log($cards.children[3].closest("section"));