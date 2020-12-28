//Son viejos metodos
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

//Estos son los nuevos metodos, es mas lento que los demas
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a")); //Trae el primer selector encontrado en el elemento
console.log(document.querySelectorAll("a")); //Trae todos, y es mejor que ByTagName, ByClassName, ByName
console.log(document.querySelector("a").length); //Comparte las propiedades de un arreglo
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));