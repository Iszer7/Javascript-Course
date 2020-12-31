const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

//Remplazar un texto por otro
//innerText respeta todas las identaciones pero pone todo tal cual, deja los tags (NO ES PARTE DEL ESTANDAR)
$whatIsDOM.innerText = text;

//textContent no pone identacion y si deja los tags
$whatIsDOM.textContent = text;

//Para que se renderize como codigo HTMl y se lea bien
$whatIsDOM.innerHTML = text;

//outerHTML - Remplaza el contenido pero tambien la etiqueta que lo contiene, en este caso <p> (elimina la p de "que-es")
$whatIsDOM.outerHTML = text;