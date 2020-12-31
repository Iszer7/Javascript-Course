const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);

//Evaluar si un elemento tiene una clase en particular
console.log($card.classList.contains("rotate-45")); //false

//Añadir una propiedad
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); //true
console.log($card.classList);

//Remove
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); //false

//Metodo interruptor, si tiene una clase no la agrega sino si se la agrega (TOGGLE)
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); //true

//Remplaza una clase por otra
$card.classList.replace("rotate-45", "rotate-135");

//Se puede agregar mas de una clase a la vez
$card.classList.add("opacity-80", "sepia");