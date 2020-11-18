// nuestras variables pueden ser de dos tipos  global y local

/* variable local: example:
son aquellas que han sido creadas dentro de una funcion o funcion anidada(funcion dentro de otra funcion)*/

/*function saludo(){
    var texto = 'hola mundo';
    document.write (texto);    
}
saludo();

/* variable local: example:
funcion anidada(funcion dentro de otra funcion)*/

function saludo(){
    var texto = 'hola juan';
   function mensaje (){
       console.log(texto);
   }   
   mensaje(); 
}
saludo();
// "regla de oro puedo acceder a mi variable de adentro hacia afuera, pero nunca de afuera hacia a dentro"

// variables globales example:
// son todas aquellas que estan por fuera de una funcion y pueden ser accedidas desde cualquier parte del
// codigo incluyendo cualquier funcion. 

var texto = 'hola nelly'
function saludo(){
    console.log(texto);
    
}
saludo();

//  IMPORTANTE: las variables declaradasd dentro de una funcion se llaman locales pero existe una 
//exepcion las varibales que no tengan si atributo "var" se consideran globales ojo.

function saludo2(){
    mensaje = 'hola amor'
}
saludo2();
console.log (mensaje);

// nota para proteger funciones o nuestro codigo de terceros podemos poner nuestro codigo
// dentro de una funcion auto invocada asi:
(function(){}())
