console.log("*********ELEMENTOS DEL DOCUMENTO**********");
console.log(document.head);
console.log(document.body);             //para body
console.log(document.documentElement);   //Para HTML
console.log(document.doctype);          //Solo el DOCTYPE
console.log(document.charset);          //utf
console.log(document.title);            //titulo
console.log(document.links);            //No hay enlaces, es una coleccion de enlaces (array)
console.log(document.images);           //Imagenes, es un array con todos
console.log(document.forms);            //Formularios, es un array con todos
console.log(document.styleSheets);      //Podes entrar a las hojas de estilos, las lista todas
console.log(document.scripts);          //Los scripts de programacion, cuenta la cantidad de scripts que hay contando el que cierra
console.log(document.getSelection().toString());     //Lo que seleccionas con el mouse lo hace string en la consola
document.write("<h2>Hola mundo del dom</h2>");  //Escribe en el html, a bajo de todo lo deja