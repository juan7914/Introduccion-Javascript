//Accediendo al DOM: example:

var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');

var primeracaja = document.getElementById('primeracaja');

primeracaja.textContent = 'Hola Mundo';

//cajas[0].textContent = 'Hola Mundo';
//cajas[0].innerHTML = '<h1>Hola</h1>';

//creando Nodos cinco pasos
var caja = document.createElement('div');  // 1-creo el nodo de la caja con div
var contenido = document.createTextNode('Hola Mundo 2'); //2- creando el nodo contenido que es texto
caja.appendChild(contenido);// 3-uniendo nodo de caja con nodo texto o contenido
//caja.setAttribute('class','caja naranja');// 4- dandole atributos a mi caja o nodo

/*var contenedor = document.getElementById('contenedor'); //accedo o llamo  al nodo section con el id
contenedor.appendChild(caja); // 5- ahora uniendo mi nodo section-contenedor con la caja que yo cree*/

//4- otra forma de cambiar el id o la clase de mi caja 
caja.id = 'primera';
caja.className = 'caja naranja';

//como saber el contenedor padre?
var padre = cajas[0].parentNode; // se observa dentro de la consola

//
// 5- otra forma de unir mi caja en la posicion que yo quiero 
// (ahora uniendo mi nodo section-contenedor con la caja que yo cree)

 /*padre.insertBefore(caja , primeracaja);*/

 //remplazar una caja o elemento hijo
 padre.replaceChild(caja , cajas[2]);

 //eliminar una caja o elemento hijo
 padre.removeChild(cajas[3]);


